// Content engine: gives every draft article without an illustration one SVG drawn by Claude in the
// Field Notes style (engine/prompts/illustration.md), saved in public/illustrations. The article
// page labels it as made with AI. A draft that can't be illustrated simply goes without.
//   ANTHROPIC_API_KEY=... node scripts/engine/illustrate.mjs content/articles/x.md ... (or --all)
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";
import { svgProblems } from "../lib/svg.mjs";

const MODEL = "claude-opus-5-5";
const root = process.cwd();
const COLOUR = { understand: "mint #B8F2D0", use: "periwinkle #CFD8FF", "live-with-it": "pink #FFB3C7", "whats-new": "sun #FFD23F", "super-intelligence": "lilac #E3D0FF" };

if (!process.env.ANTHROPIC_API_KEY) {
  console.log("::notice::ANTHROPIC_API_KEY is not set, so no illustrations were drawn.");
  process.exit(0);
}
const client = new Anthropic();
const system = fs.readFileSync(path.join(root, "engine/prompts/illustration.md"), "utf8");
const Out = z.object({ svg: z.string(), alt: z.string() });

const dir = path.join(root, "content/articles");
const args = process.argv.slice(2);
const files = args.includes("--all")
  ? fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => path.join(dir, f))
  : args.map((f) => path.resolve(f));

async function draw(data, feedback) {
  const res = await client.beta.messages.parse({
    model: MODEL,
    max_tokens: 16000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "medium", format: betaZodOutputFormat(Out) },
    system,
    messages: [{
      role: "user",
      content: `Section colour: ${COLOUR[data.pillar] ?? COLOUR["whats-new"]}\n\nHeadline: ${data.title}\nDek: ${data.dek}\nShort answer: ${data.shortAnswer}${feedback ? `\n\nYour previous SVG broke these rules, fix them: ${feedback}` : ""}`,
    }],
  });
  if (res.stop_reason === "refusal" || !res.parsed_output) throw new Error(`no illustration: ${res.stop_reason}`);
  return res.parsed_output;
}

for (const file of files) {
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  if (data.status !== "draft" || data.image) continue;
  const slug = path.basename(file, ".md");
  try {
    let out = await draw(data);
    let problems = svgProblems(out.svg);
    if (problems.length) {
      out = await draw(data, problems.join("; "));
      problems = svgProblems(out.svg);
    }
    if (problems.length) throw new Error(problems.join("; "));
    fs.writeFileSync(path.join(root, "public/illustrations", `${slug}.svg`), `${out.svg.trim()}\n`);
    data.image = `/illustrations/${slug}.svg`;
    data.imageAlt = out.alt.trim();
    fs.writeFileSync(file, matter.stringify(content, data));
    console.log(`::notice::Illustrated ${slug}: ${data.imageAlt}`);
  } catch (e) {
    console.log(`::warning::Could not illustrate ${slug}: ${e.message}`);
  }
}

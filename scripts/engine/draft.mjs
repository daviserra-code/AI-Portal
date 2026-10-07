// Content engine, step 2: picks at most --picks stories a day and drafts them as `status: draft`
// articles for the editor. Never approves anything. Usage:
//   ANTHROPIC_API_KEY=... node scripts/engine/draft.mjs [--hours 48] [--picks 2] [--out engine-drafts.md]
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";
import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";
import { collect, readSeen, reportHealth, healthTable, storyLine, userAgent } from "./collect.mjs";

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const hours = Number(arg("hours", 48));
const picks = Math.min(Number(arg("picks", 2)), 2); // hard cap: see engine/README.md
const out = arg("out", "engine-drafts.md");
// Triage total (four scores out of 5) a story needs to be drafted. --test drafts the top story
// whatever its score, to prove the prompts and API calls work on engine pull requests.
const test = process.argv.includes("--test");
const MIN_TOTAL = test ? 0 : 12;

const TRIAGE_MODEL = "claude-haiku-5-5";
const DRAFT_MODEL = "claude-opus-5-5";
const AUTHOR = "davide-serra";
const PILLARS = ["whats-new", "understand", "use", "live-with-it", "super-intelligence"];
const FORMATS = ["News explainer", "How-to", "Explainer"];

const root = process.cwd();
const prompt = (name) => fs.readFileSync(path.join(root, "engine/prompts", `${name}.md`), "utf8");
const summary = (text) => {
  fs.writeFileSync(out, text);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, text);
};

if (!process.env.ANTHROPIC_API_KEY) {
  console.log("::notice::ANTHROPIC_API_KEY is not set, so nothing was drafted. Run the dry run instead.");
  process.exit(0);
}
const client = new Anthropic();

// What the site already has, so the model can link to it and avoid duplicates.
const site = () => {
  const dir = (d) => (fs.existsSync(path.join(root, "content", d)) ? fs.readdirSync(path.join(root, "content", d)).filter((f) => f.endsWith(".md")) : []);
  const articles = dir("articles").map((f) => {
    const { data } = matter(fs.readFileSync(path.join(root, "content/articles", f), "utf8"));
    return { url: `/${data.pillar}/${f.replace(/\.md$/, "")}`, title: data.title };
  });
  const glossary = dir("glossary").map((f) => {
    const { data } = matter(fs.readFileSync(path.join(root, "content/glossary", f), "utf8"));
    return { url: `/glossary/${f.replace(/\.md$/, "")}`, term: data.term };
  });
  return { articles, glossary };
};

// Readable text of a source page, so the draft rests on the article and not only the feed summary.
async function sourceText(url) {
  try {
    const res = await fetch(url, { headers: { "user-agent": userAgent }, signal: AbortSignal.timeout(20000), redirect: "follow" });
    if (!res.ok) return "";
    const html = await res.text();
    const main = html.match(/<article[\s\S]*?<\/article>/i)?.[0] ?? html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
    return main
      .replace(/<(script|style|noscript|svg|nav|footer|header|aside|form)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<\/(p|h[1-6]|li|blockquote)>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&rsquo;|&lsquo;/g, "'")
      .replace(/[ \t]+/g, " ").replace(/\n\s+/g, "\n").trim()
      .slice(0, 15000);
  } catch {
    return "";
  }
}

const Triage = z.object({
  stories: z.array(z.object({
    id: z.number().int(),
    reader_impact: z.number().int(),
    lasting: z.number().int(),
    we_can_add: z.number().int(),
    si_relevance: z.number().int(),
    // Plain strings: the structured-output schema can't enforce an enum, so these are checked below.
    pillar: z.string().describe(`One of: ${PILLARS.join(", ")}`),
    format: z.string().describe(`One of: ${FORMATS.join(", ")}`),
    existing: z.string(),
    reason: z.string(),
  })),
});

const Draft = z.object({
  title: z.string(),
  dek: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  shortAnswer: z.string(),
  slug: z.string(),
  sources: z.array(z.object({ title: z.string(), url: z.string() })),
  body: z.string(),
  editorNotes: z.array(z.string()),
});

async function triage(candidates, existing) {
  const list = candidates.map((s, id) =>
    `### Story ${id}\n${s.items.map((i) => `- ${i.source}${i.official ? " (the company's own announcement)" : ""}: ${i.title}${i.summary ? `\n  ${i.summary.slice(0, 300)}` : ""}`).join("\n")}`).join("\n\n");
  const res = await client.messages.parse({
    model: TRIAGE_MODEL,
    max_tokens: 8000,
    output_config: { effort: "low", format: zodOutputFormat(Triage) },
    system: prompt("triage"),
    messages: [{
      role: "user",
      content: `Existing pages on the site:\n${existing.articles.map((a) => `- ${a.url}: ${a.title}`).join("\n") || "- none yet"}\n\nCandidate stories:\n\n${list}\n\nScore every story.`,
    }],
  });
  if (res.stop_reason === "refusal" || !res.parsed_output) throw new Error(`triage failed: ${res.stop_reason}`);
  const clamp = (n) => Math.max(0, Math.min(5, n));
  return res.parsed_output.stories
    .filter((t) => candidates[t.id])
    .map((t) => ({
      ...t,
      pillar: PILLARS.includes(t.pillar) ? t.pillar : "whats-new",
      format: FORMATS.includes(t.format) ? t.format : "News explainer",
      story: candidates[t.id],
      total: clamp(t.reader_impact) + clamp(t.lasting) + clamp(t.we_can_add) + clamp(t.si_relevance),
    }));
}

async function draft(pick, existing, feedback = "") {
  const sources = await Promise.all(pick.story.items.map(async (i) => ({ ...i, text: await sourceText(i.link) })));
  const sourceBlock = sources.map((s, n) =>
    `<source n="${n + 1}" outlet="${s.source}"${s.official ? ' kind="company announcement"' : ""} url="${s.link}">\nHeadline: ${s.title}\n${s.text || `(Full text unavailable. Feed summary:) ${s.summary}`}\n</source>`).join("\n\n");
  const res = await client.beta.messages.parse({
    model: DRAFT_MODEL,
    max_tokens: 16000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "high", format: betaZodOutputFormat(Draft) },
    system: prompt("draft"),
    messages: [{
      role: "user",
      content: `Write a ${pick.format} for the "${pick.pillar}" section.\n\nWhy the editor's triage picked it: ${pick.reason}\n\nGlossary terms you can link:\n${existing.glossary.map((g) => `- ${g.term}: ${g.url}`).join("\n")}\n\nExisting site pages:\n${existing.articles.map((a) => `- ${a.title}: ${a.url}`).join("\n") || "- none yet"}\n\nSources (the only facts you may use):\n\n${sourceBlock}${feedback ? `\n\nYour previous draft failed the site's content check:\n${feedback}\nFix these problems.` : ""}`,
    }],
  });
  if (res.stop_reason === "refusal" || !res.parsed_output) throw new Error(`draft failed: ${res.stop_reason}`);
  return { draft: res.parsed_output, model: res.model, sources };
}

const romeDate = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Rome" }).format(new Date());

function write(pick, { draft: d, sources }) {
  const allowed = new Set(sources.map((s) => s.link));
  const used = d.sources.filter((s) => allowed.has(s.url));
  const slugBase = d.slug.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 70) || "draft";
  let slug = slugBase;
  for (let n = 2; fs.existsSync(path.join(root, "content/articles", `${slug}.md`)); n++) slug = `${slugBase}-${n}`;
  const notes = [
    `Drafted by the content engine on ${romeDate()} from ${sources.length} sources. Triage: ${pick.reason} Check every fact against the sources, then delete all EDITOR notes before approving.`,
    ...d.editorNotes,
  ].map((n) => `[EDITOR: ${n.replace(/\]/g, ")")}]`).join("\n\n");
  const data = {
    title: d.title,
    dek: d.dek,
    pillar: pick.pillar,
    format: pick.format,
    author: AUTHOR,
    datePublished: romeDate(),
    status: "draft",
    madeWith: "ai-assisted",
    metaTitle: d.metaTitle,
    metaDescription: d.metaDescription,
    shortAnswer: d.shortAnswer,
    sources: used.length ? used : sources.filter((s) => !s.official).map((s) => ({ title: `${s.source}: ${s.title}`, url: s.link })),
  };
  const file = path.join(root, "content/articles", `${slug}.md`);
  fs.writeFileSync(file, matter.stringify(`${notes}\n\n${d.body.replace(/^#\s.*\n+/, "").trim()}\n`, data));
  return { file, slug, data };
}

// The same gate CI runs. Returns this file's errors, if any.
function check(file) {
  try {
    execFileSync("node", ["scripts/check-content.mjs"], { stdio: "pipe" });
    return [];
  } catch (e) {
    const rel = `articles/${path.basename(file)}`;
    return String(e.stderr).split("\n").filter((l) => l.includes(rel));
  }
}

const { feeds, items, health, stories } = await collect({ hours, fixtures: arg("fixtures", "") });
reportHealth(health);
const candidates = stories.filter((s) => s.eligible).slice(0, 12);
const existing = site();
const results = [];
let scored = [];

if (candidates.length) {
  scored = (await triage(candidates, existing)).sort((a, b) => b.total - a.total);
  for (const t of scored.slice(0, 6)) console.log(`::notice::Triage ${t.total}/20: ${t.story.headline} (${t.existing ? `update ${t.existing}` : t.reason})`);
  for (const pick of scored.filter((t) => t.total >= MIN_TOTAL && !t.existing).slice(0, picks)) {
    try {
      let made = await draft(pick, existing);
      let written = write(pick, made);
      let errors = check(written.file);
      if (errors.length) {
        fs.rmSync(written.file);
        made = await draft(pick, existing, errors.join("\n"));
        written = write(pick, made);
        errors = check(written.file);
      }
      if (errors.length) {
        fs.rmSync(written.file);
        results.push({ pick, error: `failed the content check twice: ${errors.join("; ")}` });
        continue;
      }
      results.push({ pick, ...written, model: made.model });
      console.log(`::notice::Drafted ${written.slug} (${pick.pillar}, triage ${pick.total}/20): ${written.data.title}. Short answer: ${written.data.shortAnswer}`);
    } catch (e) {
      results.push({ pick, error: e.message });
      console.log(`::warning::Could not draft "${pick.story.headline}": ${e.message}`);
    }
  }
}

// Drafted stories never come back; the editor rejects one by deleting its file.
const drafted = results.filter((r) => r.file);
if (drafted.length) {
  const seen = readSeen();
  seen.links = [...new Set([...seen.links, ...drafted.flatMap((r) => r.pick.story.items.map((i) => i.link))])];
  fs.writeFileSync(path.join(root, "engine/seen.json"), `${JSON.stringify(seen, null, 2)}\n`);
}

const triageRows = scored.map((t) =>
  `| ${t.story.headline.replace(/\|/g, "/")} | ${t.total} | ${t.pillar} | ${t.existing ? `update ${t.existing}` : t.reason.replace(/\|/g, "/")} |`).join("\n");

summary(`# Drafts for ${romeDate()}

${drafted.length
  ? `${drafted.length} draft${drafted.length > 1 ? "s" : ""} for the editor. Nothing is published until you approve it.`
  : "No drafts today. Nothing met the bar, which is fine."}

${drafted.map((r) => `## ${r.data.title}

\`${path.relative(root, r.file)}\`, ${r.data.pillar}, ${r.data.format}, triage ${r.pick.total}/20

> ${r.data.shortAnswer}

- [ ] Every fact matches a listed source
- [ ] Every \`[EDITOR: ...]\` note is resolved and deleted
- [ ] Reads like us: plain, calm, useful to a non-expert
- [ ] Set \`status: approved\` and \`approvedBy: Davide Serra\`, or delete the file to reject the story
`).join("\n")}
${results.filter((r) => r.error).map((r) => `- Could not draft "${r.pick.story.headline}": ${r.error}`).join("\n")}

## How today's stories were judged

Read ${feeds.length} feeds and ${items.length} recent items, grouped into ${stories.length} stories; ${candidates.length} had 2+ independent outlets and went to triage (a draft needs ${MIN_TOTAL}/20).

| Story | Score | Section | Why |
| --- | --- | --- | --- |
${triageRows || "| none | | | |"}

<details><summary>Feed health</summary>

${healthTable(health)}

</details>

<details><summary>Single-source stories (weekly roundup candidates)</summary>

${stories.filter((s) => !s.eligible).slice(0, 10).map(storyLine).join("\n")}

</details>
`);
console.log(`::notice::${drafted.length} draft(s) from ${candidates.length} candidate(s)`);
console.log(`Wrote ${out}: ${drafted.length} draft(s).`);

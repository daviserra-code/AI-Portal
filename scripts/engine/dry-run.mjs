// Content engine dry run: reads every feed and reports which stories the engine would pick today.
// It writes nothing to content/. Usage:
//   node scripts/engine/dry-run.mjs [--hours 48] [--picks 2] [--fixtures dir] [--out engine-report.md]
import fs from "node:fs";
import path from "node:path";
import { parseFeed, isAboutAI, isNoise, words, names, cluster, rank } from "./lib.mjs";

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const hours = Number(arg("hours", 48));
const picks = Number(arg("picks", 2));
const fixtures = arg("fixtures", "");
const out = arg("out", "engine-report.md");

const root = process.cwd();
const { feeds } = JSON.parse(fs.readFileSync(path.join(root, "engine/feeds.json"), "utf8"));
const seen = new Set(JSON.parse(fs.readFileSync(path.join(root, "engine/seen.json"), "utf8")).links);
const since = Date.now() - hours * 3600e3;

async function get(url) {
  try {
    const res = await fetch(url, {
      headers: { "user-agent": "AI-Portal feed reader (+https://ai-portal.si/editorial-policy)" },
      signal: AbortSignal.timeout(20000),
      redirect: "follow",
    });
    return { status: String(res.status), xml: res.ok ? await res.text() : "" };
  } catch (e) {
    return { status: e.name === "TimeoutError" ? "timeout" : "error", xml: "" };
  }
}

// Tries the main URL, then each `alt` URL, and reports which one worked.
async function load(feed) {
  if (fixtures) {
    const file = path.join(fixtures, `${feed.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.xml`);
    return fs.existsSync(file) ? { status: "fixture", xml: fs.readFileSync(file, "utf8"), url: file } : { status: "no fixture", xml: "", url: file };
  }
  const tried = [];
  for (const url of [feed.url, ...(feed.alt ?? [])]) {
    const r = await get(url);
    tried.push(r.status);
    if (parseFeed(r.xml).length) return { ...r, url, status: tried.join(" → ") };
  }
  return { status: tried.join(" → "), xml: "", url: feed.url };
}

const health = [];
const items = [];
await Promise.all(feeds.map(async (feed) => {
  const { status, xml, url } = await load(feed);
  const parsed = parseFeed(xml);
  let kept = 0;
  for (const it of parsed) {
    if (seen.has(it.link)) continue;
    if (it.published && it.published.getTime() < since) continue;
    if (isNoise(it)) continue;
    // Specialist AI feeds are on topic by definition; general newsrooms must mention AI.
    if (feed.general && !isAboutAI(it)) continue;
    items.push({ ...it, source: feed.name, tier: feed.tier, section: feed.section, official: !!feed.official, words: words(it.title), names: names(it.title) });
    kept++;
  }
  health.push({ name: feed.name, status, parsed: parsed.length, kept, alt: url !== feed.url && !fixtures ? url : "" });
}));

const stories = cluster(items).map(rank).sort((a, b) => b.score - a.score);
const eligible = stories.filter((s) => s.eligible);
const picked = eligible.slice(0, picks);
const roundup = stories.filter((s) => !picked.includes(s)).slice(0, 7);

const line = (s) =>
  `- **${s.headline}** (score ${s.score}, ${s.independent} independent outlets, sections: ${s.sections.join(", ")})\n` +
  s.items.map((i) => `    - ${i.source}${i.official ? " (official)" : ""}: [${i.title}](${i.link})`).join("\n");

const today = new Date().toISOString().slice(0, 10);
const report = `# Content engine dry run, ${today}

Read ${feeds.length} feeds, kept ${items.length} items from the last ${hours} hours, grouped into ${stories.length} stories. ${eligible.length} have at least 2 independent outlets.

## Would draft today (max ${picks})

${picked.length ? picked.map(line).join("\n") : "Nothing qualifies today. A quiet day is fine."}

## Candidates for the weekly roundup

${roundup.map(line).join("\n") || "None."}

## Feed health

| Feed | HTTP | Items in feed | Kept | Working fallback URL |
| --- | --- | --- | --- | --- |
${health.sort((a, b) => a.name.localeCompare(b.name)).map((h) => `| ${h.name} | ${h.status} | ${h.parsed} | ${h.kept} | ${h.alt} |`).join("\n")}

Nothing was written to the site. Step 2 adds the reader-impact check and the drafts.
`;

fs.writeFileSync(out, report);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, report);
const broken = health.filter((h) => h.parsed === 0);
for (const b of broken) console.log(`::warning::Feed "${b.name}" has no items (HTTP ${b.status})`);
for (const h of health.filter((h) => h.alt)) console.log(`::notice::Feed "${h.name}" works only on its fallback ${h.alt}`);
console.log(`Wrote ${out}: ${picked.length} picks, ${stories.length} stories, ${broken.length} feed problem(s).`);

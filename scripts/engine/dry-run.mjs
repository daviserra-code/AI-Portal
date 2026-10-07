// Content engine dry run: reads every feed and reports which stories the engine would pick today.
// It writes nothing to content/. Usage:
//   node scripts/engine/dry-run.mjs [--hours 48] [--picks 2] [--fixtures dir] [--out engine-report.md]
import fs from "node:fs";
import { collect, reportHealth, healthTable, storyLine } from "./collect.mjs";

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const hours = Number(arg("hours", 48));
const picks = Number(arg("picks", 2));
const out = arg("out", "engine-report.md");

const { feeds, items, health, stories } = await collect({ hours, fixtures: arg("fixtures", "") });
const eligible = stories.filter((s) => s.eligible);
const picked = eligible.slice(0, picks);
const roundup = stories.filter((s) => !picked.includes(s)).slice(0, 7);

const today = new Date().toISOString().slice(0, 10);
const report = `# Content engine dry run, ${today}

Read ${feeds.length} feeds, kept ${items.length} items from the last ${hours} hours, grouped into ${stories.length} stories. ${eligible.length} have at least 2 independent outlets.

## Would draft today (max ${picks})

${picked.length ? picked.map(storyLine).join("\n") : "Nothing qualifies today. A quiet day is fine."}

## Candidates for the weekly roundup

${roundup.map(storyLine).join("\n") || "None."}

## Feed health

${healthTable(health)}

Nothing was written to the site.
`;

fs.writeFileSync(out, report);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, report);
reportHealth(health);
// Picks as annotations too, so they show on the run page without opening the report.
console.log(`::notice::${picked.length} pick(s) from ${stories.length} stories (${eligible.length} with 2+ independent outlets)`);
for (const s of picked) console.log(`::notice::Pick: ${s.headline} (${s.items.map((i) => i.source).join(", ")})`);
for (const s of roundup) console.log(`::notice::Roundup candidate: ${s.headline} (${s.items.map((i) => i.source).join(", ")})`);
console.log(`Wrote ${out}: ${picked.length} picks, ${stories.length} stories.`);

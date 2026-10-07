// Reads every feed in engine/feeds.json and returns ranked stories. Shared by the dry run and drafting.
import fs from "node:fs";
import path from "node:path";
import { parseFeed, isAboutAI, isNoise, words, names, cluster, rank } from "./lib.mjs";

const root = process.cwd();
export const userAgent = "AI-Portal feed reader (+https://ai-portal.si/editorial-policy)";

export async function get(url) {
  try {
    const res = await fetch(url, { headers: { "user-agent": userAgent }, signal: AbortSignal.timeout(20000), redirect: "follow" });
    return { status: String(res.status), xml: res.ok ? await res.text() : "" };
  } catch (e) {
    return { status: e.name === "TimeoutError" ? "timeout" : "error", xml: "" };
  }
}

// Tries the main URL, then each `alt` URL, and reports which one worked.
async function load(feed, fixtures) {
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

export const readSeen = () => JSON.parse(fs.readFileSync(path.join(root, "engine/seen.json"), "utf8"));

export async function collect({ hours = 48, fixtures = "" } = {}) {
  const { feeds } = JSON.parse(fs.readFileSync(path.join(root, "engine/feeds.json"), "utf8"));
  const seen = new Set(readSeen().links);
  const since = Date.now() - hours * 3600e3;
  const health = [];
  const items = [];
  await Promise.all(feeds.map(async (feed) => {
    const { status, xml, url } = await load(feed, fixtures);
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
  health.sort((a, b) => a.name.localeCompare(b.name));
  const stories = cluster(items).map(rank).sort((a, b) => b.score - a.score);
  return { feeds, items, health, stories };
}

export function reportHealth(health) {
  for (const b of health.filter((h) => h.parsed === 0)) console.log(`::warning::Feed "${b.name}" has no items (HTTP ${b.status})`);
  for (const h of health.filter((h) => h.alt)) console.log(`::notice::Feed "${h.name}" works only on its fallback ${h.alt}`);
}

export const healthTable = (health) => `| Feed | HTTP | Items in feed | Kept | Working fallback URL |
| --- | --- | --- | --- | --- |
${health.map((h) => `| ${h.name} | ${h.status} | ${h.parsed} | ${h.kept} | ${h.alt} |`).join("\n")}`;

export const storyLine = (s) =>
  `- **${s.headline}** (score ${s.score}, ${s.independent} independent outlets, sections: ${s.sections.join(", ")})\n` +
  s.items.map((i) => `    - ${i.source}${i.official ? " (official)" : ""}: [${i.title}](${i.link})`).join("\n");

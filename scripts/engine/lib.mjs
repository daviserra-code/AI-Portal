// Content engine, step 1: fetch feeds, keep AI items, group items about the same story,
// and rank stories. Nothing here writes articles; see engine/README.md.

const decode = (s) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&(amp|lt|gt|quot|apos|nbsp|#39);/g, (m) =>
      ({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'", "&nbsp;": " ", "&#39;": "'" })[m])
    .replace(/\s+/g, " ")
    .trim();

const tag = (block, name) => {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, "i"));
  return m ? m[1] : "";
};

// Minimal RSS 2.0 / Atom reader: enough for news feeds, no dependency.
export function parseFeed(xml) {
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>|<entry[\s>][\s\S]*?<\/entry>/gi) ?? [];
  return blocks.map((b) => {
    let link = decode(tag(b, "link"));
    if (!link) {
      const alt = b.match(/<link[^>]*rel=["']alternate["'][^>]*>/i) ?? b.match(/<link[^>]*>/i);
      link = alt?.[0].match(/href=["']([^"']+)["']/i)?.[1] ?? "";
    }
    const date = decode(tag(b, "pubDate") || tag(b, "published") || tag(b, "updated") || tag(b, "dc:date"));
    return {
      title: decode(tag(b, "title")),
      link: link.trim(),
      summary: decode(tag(b, "description") || tag(b, "summary") || tag(b, "content")).slice(0, 600),
      published: date ? new Date(date) : null,
    };
  }).filter((i) => i.title && i.link);
}

// Whole-word matching: AI-Radar's substring check let "ai" match "said" and "chat" match anything.
const AI_TERMS = [
  "ai", "a\\.i\\.", "artificial intelligence", "machine learning", "deep learning", "neural network",
  "chatbots?", "chatgpt", "openai", "anthropic", "claude", "gemini", "copilot", "deepmind", "llms?",
  "large language models?", "language models?", "generative", "gen ?ai", "agi", "superintelligence",
  "super intelligence", "ai act", "deepfakes?", "algorithms?", "automation", "nvidia", "frontier models?",
  "ai safety", "alignment", "hugging face", "mistral", "llama", "grok", "xai", "perplexity",
];
const AI_RE = new RegExp(`\\b(${AI_TERMS.join("|")})\\b`, "i");
export const isAboutAI = (item) => AI_RE.test(`${item.title} ${item.summary}`);

// Shopping, deals and gaming noise that general tech feeds mix in.
const NOISE_RE = /\b(deals?|discount|coupon|% off|black friday|prime day|best .* to buy|gift guide|review:)\b/i;
export const isNoise = (item) => NOISE_RE.test(item.title);

const STOP = new Set(("a an the and or but of to in on for with at by from as is are was were be been it its this that these those " +
  "how why what who when will can could would should new says said after over about into than more most just up out " +
  "you your we our they their his her he she i ai").split(" "));

export const words = (title) =>
  new Set(title.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/(^|\s)-+|-+(\s|$)/g, " ").split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)));

// Proper names are strong evidence two headlines share a story: mixed-case or numbered tokens
// anywhere (OpenAI, GPT-6), and capitalised words except the headline's first word.
export const names = (title) =>
  new Set(
    title.split(/[^\w-]+/).filter((w, i) => /[A-Z].*[A-Z0-9]|\d/.test(w.slice(1)) && /^[A-Z]/.test(w) || (i > 0 && /^[A-Z][a-z]+$/.test(w)))
      .map((w) => w.toLowerCase()).filter((w) => !STOP.has(w)),
  );

const jaccard = (a, b) => {
  let n = 0;
  for (const x of a) if (b.has(x)) n++;
  return n / (a.size + b.size - n || 1);
};

export function sameStory(a, b) {
  const shared = [...a.names].filter((n) => b.names.has(n)).length;
  const overlap = jaccard(a.words, b.words);
  return overlap >= 0.34 || (shared >= 2 && overlap >= 0.15) || (shared >= 1 && overlap >= 0.25);
}

// Union-find over all pairs; feeds give at most a few hundred items, so O(n^2) is fine.
export function cluster(items) {
  const parent = items.map((_, i) => i);
  const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  for (let i = 0; i < items.length; i++)
    for (let j = i + 1; j < items.length; j++)
      if (sameStory(items[i], items[j])) parent[find(i)] = find(j);
  const groups = new Map();
  items.forEach((it, i) => {
    const r = find(i);
    groups.set(r, [...(groups.get(r) ?? []), it]);
  });
  return [...groups.values()];
}

// Step 1 ranks without a model: how many independent outlets carry the story, and how trusted
// they are. Step 2 adds the model's reader-impact triage on top of this.
export function rank(story) {
  const outlets = new Set(story.filter((i) => !i.official).map((i) => i.source));
  const sources = new Set(story.map((i) => i.source));
  const best = Math.max(...story.map((i) => i.tier));
  const sections = [...new Set(story.map((i) => i.section))];
  return {
    items: story,
    // Prefer an independent outlet's headline over the company's own announcement.
    headline: [...story].sort((a, b) => Number(a.official) - Number(b.official) || b.tier - a.tier)[0].title,
    independent: outlets.size,
    sources: sources.size,
    score: outlets.size * 3 + sources.size + best,
    eligible: outlets.size >= 2,
    sections,
  };
}

// Content gate: enforces the editorial handbook before anything can ship.
// Fails the build when an article is missing required fields, has no sources,
// uses a banned AI phrase, or is marked approved without a named approver.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { svgProblems } from "./lib/svg.mjs";

const root = path.join(process.cwd(), "content");
const pillars = ["understand", "use", "live-with-it", "whats-new", "super-intelligence"];
const banned = [
  "delve", "in today's fast-paced world", "it's important to note", "navigate the landscape",
  "unlock the potential", "in the realm of", "a testament to", "game-changer", "game changer",
  "seamless", "robust", "embark on a journey", "in conclusion",
];
const bannedOpeners = /^(moreover|furthermore),/im;

const errors = [];
const warnings = [];
const read = (dir) =>
  fs.existsSync(path.join(root, dir))
    ? fs.readdirSync(path.join(root, dir)).filter((f) => f.endsWith(".md")).map((f) => {
        const { data, content } = matter(fs.readFileSync(path.join(root, dir, f), "utf8"));
        return { file: `${dir}/${f}`, data, content };
      })
    : [];

const authors = new Set(read("authors").map((a) => a.file.replace(/^authors\/|\.md$/g, "")));

for (const { file, data, content } of read("articles")) {
  const need = ["title", "dek", "pillar", "format", "author", "datePublished", "status", "madeWith", "shortAnswer"];
  for (const k of need) if (!data[k]) errors.push(`${file}: missing "${k}"`);
  if (data.pillar && !pillars.includes(data.pillar)) errors.push(`${file}: unknown pillar "${data.pillar}"`);
  if (data.author && !authors.has(data.author)) errors.push(`${file}: author "${data.author}" has no file in content/authors`);
  if (!["draft", "approved"].includes(data.status)) errors.push(`${file}: status must be draft or approved`);
  if (!Array.isArray(data.sources) || data.sources.length === 0) errors.push(`${file}: needs at least one source`);
  if (data.metaTitle && data.metaTitle.length > 60) warnings.push(`${file}: metaTitle over 60 characters`);
  if (data.metaDescription && data.metaDescription.length > 155) warnings.push(`${file}: metaDescription over 155 characters`);

  const text = `${data.title ?? ""}\n${data.dek ?? ""}\n${data.shortAnswer ?? ""}\n${content}`.toLowerCase();
  for (const phrase of banned) if (text.includes(phrase)) errors.push(`${file}: banned phrase "${phrase}"`);
  if (bannedOpeners.test(content)) errors.push(`${file}: paragraph opens with "Moreover," or "Furthermore,"`);

  if (data.image) {
    const img = path.join(process.cwd(), "public", String(data.image));
    if (!/^\/illustrations\/[a-z0-9-]+\.svg$/.test(data.image)) errors.push(`${file}: image must be /illustrations/<name>.svg`);
    else if (!fs.existsSync(img)) errors.push(`${file}: image ${data.image} not found in public/`);
    else for (const p of svgProblems(fs.readFileSync(img, "utf8"))) errors.push(`${file}: illustration ${p}`);
    if (!data.imageAlt) errors.push(`${file}: image needs "imageAlt"`);
  }

  if (data.status === "approved") {
    if (!data.approvedBy) errors.push(`${file}: approved articles need "approvedBy" (the editor's name)`);
    if (/\[EDITOR:/.test(content)) errors.push(`${file}: approved but still contains [EDITOR: ...] notes`);
    if (/\[(Editor name|editorial email|legal owner)/.test(content)) errors.push(`${file}: approved but has placeholders`);
  }
}

for (const { file, data } of read("glossary")) {
  for (const k of ["term", "definition", "status"]) if (!data[k]) errors.push(`${file}: missing "${k}"`);
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
if (errors.length) {
  console.error(`\n${errors.length} content problem(s). See the editorial handbook.`);
  process.exit(1);
}
console.log(`Content check passed (${read("articles").length} articles, ${read("glossary").length} glossary entries).`);

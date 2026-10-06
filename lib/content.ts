import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { showDrafts, type PillarSlug } from "./site";

const root = path.join(process.cwd(), "content");

export type Status = "draft" | "approved";

export type Source = { title: string; url: string };

export type Article = {
  slug: string;
  title: string;
  dek: string;
  pillar: PillarSlug;
  format: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  status: Status;
  approvedBy?: string;
  shortAnswer: string;
  madeWith: "ai-assisted" | "human";
  metaTitle?: string;
  metaDescription?: string;
  sources: Source[];
  html: string;
};

export type Term = {
  slug: string;
  term: string;
  definition: string;
  related: string[];
  status: Status;
  html: string;
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  sameAs: string[];
  html: string;
};

export type Page = { slug: string; title: string; description: string; html: string };

function readDir<T>(dir: string, map: (slug: string, data: Record<string, unknown>, html: string) => T): T[] {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(full, file), "utf8");
      const { data, content } = matter(raw);
      const html = marked.parse(content, { async: false });
      return map(file.replace(/\.md$/, ""), data, html);
    });
}

const visible = (s: Status) => s === "approved" || showDrafts;

export function getArticles(): Article[] {
  return readDir("articles", (slug, d, html) => ({ slug, ...(d as Omit<Article, "slug" | "html">), html }))
    .filter((a) => visible(a.status))
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
}

export function getArticle(pillar: string, slug: string) {
  return getArticles().find((a) => a.pillar === pillar && a.slug === slug);
}

export function getTerms(): Term[] {
  return readDir("glossary", (slug, d, html) => ({ slug, ...(d as Omit<Term, "slug" | "html">), related: (d.related as string[] | undefined) ?? [], html }))
    .filter((t) => visible(t.status))
    .sort((a, b) => a.term.localeCompare(b.term));
}

export function getAuthors(): Author[] {
  return readDir("authors", (slug, d, html) => ({ slug, ...(d as Omit<Author, "slug" | "html">), sameAs: (d.sameAs as string[] | undefined) ?? [], html }));
}

export function getAuthor(slug: string) {
  return getAuthors().find((a) => a.slug === slug);
}

export function getPage(slug: string): Page {
  const page = readDir("pages", (s, d, html) => ({ slug: s, ...(d as Omit<Page, "slug" | "html">), html })).find(
    (p) => p.slug === slug,
  );
  if (!page) throw new Error(`Missing content/pages/${slug}.md`);
  return page;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function readMinutes(html: string) {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

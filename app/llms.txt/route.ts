import { getArticles, getTerms } from "@/lib/content";
import { pillars, site } from "@/lib/site";

// A plain-text map of the site for AI assistants and agents. Google Search ignores llms.txt.
export const dynamic = "force-static";

export function GET() {
  const articles = getArticles().filter((a) => a.status === "approved");
  const terms = getTerms().filter((t) => t.status === "approved");
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Sections",
    ...pillars.map((p) => `- [${p.name}](${site.url}/${p.slug}): ${p.blurb}`),
    "",
    "## Policies",
    `- [Editorial policy](${site.url}/editorial-policy)`,
    `- [How we use AI](${site.url}/ai-policy)`,
    `- [Corrections](${site.url}/corrections)`,
    ...(articles.length
      ? ["", "## Articles", ...articles.map((a) => `- [${a.title}](${site.url}/${a.pillar}/${a.slug}): ${a.dek}`)]
      : []),
    "",
    "## Super intelligence observatory",
    `- [Observatory](${site.url}/super-intelligence/observatory): a dated, sourced timeline of how governments and companies use the term "super intelligence".`,
    ...(terms.length
      ? ["", "## Glossary", ...terms.map((t) => `- [${t.term}](${site.url}/glossary/${t.slug}): ${t.definition}`)]
      : []),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

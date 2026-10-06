import { getArticles } from "@/lib/content";
import { pillars, site } from "@/lib/site";

// Optional: Google Search ignores llms.txt, but browser agents and Lighthouse look for it.
export const dynamic = "force-static";

export function GET() {
  const articles = getArticles().filter((a) => a.status === "approved");
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
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

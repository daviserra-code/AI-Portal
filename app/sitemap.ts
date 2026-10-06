import type { MetadataRoute } from "next";
import { getArticles, getTerms } from "@/lib/content";
import { pillars, site } from "@/lib/site";

// Only approved, indexable pages belong in the sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticles().filter((a) => a.status === "approved");
  const terms = getTerms().filter((t) => t.status === "approved");
  const livePillars = pillars.filter((p) => articles.some((a) => a.pillar === p.slug));
  return [
    { url: site.url },
    ...["about", "editorial-policy", "ai-policy", "corrections"].map((s) => ({ url: `${site.url}/${s}` })),
    ...livePillars.map((p) => ({ url: `${site.url}/${p.slug}` })),
    ...articles.map((a) => ({ url: `${site.url}/${a.pillar}/${a.slug}`, lastModified: a.dateModified ?? a.datePublished })),
    ...(terms.length ? [{ url: `${site.url}/glossary` }] : []),
    ...terms.map((t) => ({ url: `${site.url}/glossary/${t.slug}` })),
  ];
}

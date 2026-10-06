import type { Metadata } from "next";
import { getPage } from "@/lib/content";

export function policyMetadata(slug: string): Metadata {
  const p = getPage(slug);
  return { title: p.title, description: p.description, alternates: { canonical: `/${slug}` } };
}

export function PolicyPage({ slug }: { slug: string }) {
  const p = getPage(slug);
  return (
    <article className="article">
      <h1>{p.title}</h1>
      <p className="dek">{p.description}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />
    </article>
  );
}

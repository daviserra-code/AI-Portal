import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getTerms } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return getTerms().map((t) => ({ term: t.slug }));
}

type Props = { params: Promise<{ term: string }> };
const find = (slug: string) => getTerms().find((t) => t.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = find((await params).term);
  if (!t) return {};
  return {
    title: `What is ${t.term}?`,
    description: t.definition,
    alternates: { canonical: `/glossary/${t.slug}` },
    robots: t.status === "draft" ? { index: false, follow: false } : undefined,
  };
}

export default async function TermPage({ params }: Props) {
  const t = find((await params).term);
  if (!t) notFound();
  const all = getTerms();
  const related = t.related.map((slug) => all.find((x) => x.slug === slug)).filter((x) => x !== undefined);
  const ld = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
    url: `${site.url}/glossary/${t.slug}`,
    inDefinedTermSet: { "@type": "DefinedTermSet", name: `${site.name} glossary`, url: `${site.url}/glossary` },
  };
  return (
    <article className="article">
      {t.status === "draft" && <p className="draft-banner">Draft: not yet approved by the editor.</p>}
      <div className="kicker"><Link className="tag" data-pillar="glossary" href="/glossary">Glossary</Link></div>
      <h1>{t.term}</h1>
      <div className="answer">
        <span className="label">In one line</span>
        <p>{t.definition}</p>
      </div>
      <div className="prose" dangerouslySetInnerHTML={{ __html: t.html }} />
      {related.length > 0 && (
        <p>
          Related:{" "}
          {related.map((r, i) => (
            <span key={r.slug}>
              {i > 0 && ", "}
              <Link href={`/glossary/${r.slug}`}>{r.term}</Link>
            </span>
          ))}
        </p>
      )}
      <JsonLd data={ld} />
    </article>
  );
}

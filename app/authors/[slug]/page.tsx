import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { getArticles, getAuthor, getAuthors } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return getAuthors().map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getAuthor((await params).slug);
  if (!a) return {};
  return { title: a.name, description: a.bio, alternates: { canonical: `/authors/${a.slug}` } };
}

export default async function AuthorPage({ params }: Props) {
  const a = getAuthor((await params).slug);
  if (!a) notFound();
  const articles = getArticles().filter((x) => x.author === a.slug);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: a.name,
    jobTitle: a.role,
    description: a.bio,
    url: `${site.url}/authors/${a.slug}`,
    sameAs: a.sameAs,
    worksFor: { "@id": `${site.url}/#org` },
  };
  return (
    <>
      <header className="page-head">
        <span className="label">{a.role}</span>
        <h1>{a.name}</h1>
        <p>{a.bio}</p>
      </header>
      <div className="prose article" dangerouslySetInnerHTML={{ __html: a.html }} />
      {articles.length > 0 && (
        <section className="section">
          <h2>Articles</h2>
          <div className="grid">{articles.map((x) => <ArticleCard key={x.slug} article={x} />)}</div>
        </section>
      )}
      <JsonLd data={ld} />
    </>
  );
}

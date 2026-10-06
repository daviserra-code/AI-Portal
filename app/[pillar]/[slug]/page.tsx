import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { formatDate, getArticle, getArticles, getAuthor, readMinutes } from "@/lib/content";
import { pillarBySlug, site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return getArticles().map((a) => ({ pillar: a.pillar, slug: a.slug }));
}

type Props = { params: Promise<{ pillar: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar, slug } = await params;
  const a = getArticle(pillar, slug);
  if (!a) return {};
  const url = `/${a.pillar}/${a.slug}`;
  return {
    title: { absolute: a.metaTitle ?? `${a.title} | ${site.name}` },
    description: a.metaDescription ?? a.dek,
    alternates: { canonical: url },
    robots: a.status === "draft" ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: a.title,
      description: a.dek,
      url,
      publishedTime: a.datePublished,
      modifiedTime: a.dateModified ?? a.datePublished,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { pillar, slug } = await params;
  const a = getArticle(pillar, slug);
  if (!a) notFound();
  const p = pillarBySlug(a.pillar)!;
  const author = getAuthor(a.author);
  const url = `${site.url}/${a.pillar}/${a.slug}`;

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": a.pillar === "whats-new" ? "NewsArticle" : "Article",
        headline: a.title,
        description: a.dek,
        url,
        mainEntityOfPage: url,
        inLanguage: site.language,
        datePublished: a.datePublished,
        dateModified: a.dateModified ?? a.datePublished,
        author: author
          ? { "@type": "Person", name: author.name, url: `${site.url}/authors/${author.slug}` }
          : undefined,
        publisher: { "@id": `${site.url}/#org` },
        citation: a.sources.map((s) => s.url),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.name, item: site.url },
          { "@type": "ListItem", position: 2, name: p.name, item: `${site.url}/${p.slug}` },
          { "@type": "ListItem", position: 3, name: a.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="article">
      {a.status === "draft" && (
        <p className="draft-banner">Draft: not yet approved by the editor. Hidden from the public site and search engines.</p>
      )}
      <div className="kicker">
        <Link className="tag" data-pillar={p.slug} href={`/${p.slug}`}>{p.name}</Link>
        <span className="label">{a.format}</span>
      </div>
      <h1>{a.title}</h1>
      <p className="dek">{a.dek}</p>
      <div className="byline">
        <span>
          By {author ? <Link href={`/authors/${author.slug}`}>{author.name}</Link> : a.author}
        </span>
        <time dateTime={a.datePublished}>{formatDate(a.datePublished)}</time>
        {a.dateModified && a.dateModified !== a.datePublished && (
          <span>
            Updated <time dateTime={a.dateModified}>{formatDate(a.dateModified)}</time>
          </span>
        )}
        <span>{readMinutes(a.html)} min read</span>
      </div>
      <div className="answer">
        <span className="label">Short answer</span>
        <p>{a.shortAnswer}</p>
      </div>
      <div className="prose" dangerouslySetInnerHTML={{ __html: a.html }} />
      {a.sources.length > 0 && (
        <section className="sources" aria-labelledby="sources">
          <h2 id="sources" className="label">Sources</h2>
          <ol>
            {a.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} rel="noopener">{s.title}</a>
              </li>
            ))}
          </ol>
        </section>
      )}
      <aside className="made">
        <span className="stamp">{a.status === "approved" ? "Checked by a human" : "Awaiting the editor"}</span>
        <strong>How this was made</strong>
        <span>
          {a.madeWith === "ai-assisted"
            ? `Drafted with AI from the sources listed above, then fact-checked and edited by ${author?.name ?? a.author}.`
            : `Written by ${author?.name ?? a.author} without AI drafting.`}{" "}
          <Link href="/ai-policy">Read our AI policy</Link>.
        </span>
      </aside>
      <JsonLd data={ld} />
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/lib/content";
import { pillarBySlug, pillars } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return pillars.map((p) => ({ pillar: p.slug }));
}

type Props = { params: Promise<{ pillar: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar } = await params;
  const p = pillarBySlug(pillar);
  if (!p) return {};
  const hasContent = getArticles().some((a) => a.pillar === p.slug && a.status === "approved");
  return {
    title: p.name,
    description: p.blurb,
    alternates: { canonical: `/${p.slug}` },
    // Empty hubs are thin pages: keep them out of the index until they hold real articles.
    robots: hasContent ? undefined : { index: false, follow: true },
  };
}

export default async function PillarPage({ params }: Props) {
  const { pillar } = await params;
  const p = pillarBySlug(pillar);
  if (!p) notFound();
  const articles = getArticles().filter((a) => a.pillar === p.slug);
  return (
    <>
      <header className="page-head">
        <span className="label">Section</span>
        <h1>{p.name}</h1>
        <p>{p.blurb}</p>
        {p.slug === "super-intelligence" && (
          <p>
            Tracking the term and the policy around it? See the <Link href="/super-intelligence/observatory">SI Observatory</Link>.
          </p>
        )}
      </header>
      {articles.length ? (
        <div className="grid">{articles.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
      ) : (
        <p className="empty">Nothing published here yet. The first pieces are with the editor.</p>
      )}
    </>
  );
}

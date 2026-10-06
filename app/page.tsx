import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/lib/content";
import { pillars, site } from "@/lib/site";

export default function Home() {
  const latest = getArticles().slice(0, 6);
  return (
    <>
      <header className="page-head">
        <span className="label">AI, explained for everyone</span>
        <h1>What changed in AI, why it matters, and what to do about it.</h1>
        <p>{site.description}</p>
      </header>

      <section className="section" aria-labelledby="latest">
        <h2 id="latest">Latest</h2>
        {latest.length ? (
          <div className="grid">{latest.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
        ) : (
          <p className="empty">Our first articles are with the editor. Check back soon.</p>
        )}
      </section>

      <section className="section" aria-labelledby="sections">
        <h2 id="sections">Find your way</h2>
        <div className="grid">
          {pillars.map((p) => (
            <Link key={p.slug} className="card" href={`/${p.slug}`}>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

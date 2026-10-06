import Link from "next/link";
import entries from "@/content/observatory.json";
import { getArticles, getAuthor, formatDate } from "@/lib/content";
import { pillarBySlug, pillars } from "@/lib/site";

type Entry = { date: string; title: string };
const latestEntries = (entries as Entry[]).slice().sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 2);

export default function Home() {
  const articles = getArticles();
  const [lead, ...rest] = articles;
  const notes = rest.slice(0, 3);
  const editor = lead ? getAuthor(lead.author) : undefined;

  return (
    <>
      <section className="hero" aria-labelledby="lead">
        {lead ? (
          <>
            <div className="q">
              <Link className="tag" data-pillar={lead.pillar} href={`/${lead.pillar}`}>
                {pillarBySlug(lead.pillar)?.name} · {lead.format}
                {lead.status === "draft" ? " · Draft" : ""}
              </Link>
              <h1 id="lead">
                <Link href={`/${lead.pillar}/${lead.slug}`}>{lead.title}</Link>
              </h1>
              <p>{lead.dek}</p>
              <Link className="cta" href={`/${lead.pillar}/${lead.slug}`}>
                Read the full answer
              </Link>
            </div>
            <div className="a">
              <span className="label">The short answer</span>
              <p className="big">{lead.shortAnswer}</p>
              <div className="human">
                <span className="stamp">{lead.status === "approved" ? "Checked by a human" : "Awaiting the editor"}</span>
                <span>
                  {lead.madeWith === "ai-assisted" ? "Drafted with AI, edited by " : "Written by "}
                  {editor ? <Link href={`/authors/${editor.slug}`}>{editor.name}</Link> : lead.author}
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="q">
              <span className="tag">AI, explained for everyone</span>
              <h1 id="lead">
                Questions about AI, answered in <mark>plain English</mark>.
              </h1>
              <p>Explainers, guides and a short brief on what actually changed, written with AI and checked by a named person.</p>
              <Link className="cta" href="/glossary">
                Start with the glossary
              </Link>
            </div>
            <div className="a">
              <span className="label">How we work</span>
              <ul>
                <li><b>Short answer first</b> · every piece opens with it.</li>
                <li><b>Sources on every claim</b> · linked, so you can check.</li>
                <li><b>Edited by a person</b> · named, on every article.</li>
              </ul>
              <div className="human">
                <span className="stamp">Checked by a human</span>
                <Link href="/ai-policy">How we use AI</Link>
              </div>
            </div>
          </>
        )}
      </section>

      {notes.length > 0 && (
        <div className="notes">
          {notes.map((a) => (
            <Link key={a.slug} className="note" href={`/${a.pillar}/${a.slug}`}>
              <span className="tag" data-pillar={a.pillar}>
                {pillarBySlug(a.pillar)?.name}
                {a.status === "draft" ? " · Draft" : ""}
              </span>
              <h3>{a.title}</h3>
              <p>{a.dek}</p>
            </Link>
          ))}
        </div>
      )}

      {latestEntries.length > 0 && (
        <p className="ticker">
          <Link href="/super-intelligence/observatory">
            <b>SI Observatory</b>
          </Link>
          {latestEntries.map((e) => (
            <span key={e.date + e.title}>
              {formatDate(e.date)} · {e.title}
            </span>
          ))}
        </p>
      )}

      <section className="section" aria-labelledby="sections">
        <h2 id="sections">Find your way</h2>
        <div className="grid">
          {pillars.map((p) => (
            <Link key={p.slug} className="card" href={`/${p.slug}`}>
              <span className="tag" data-pillar={p.slug}>Section</span>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

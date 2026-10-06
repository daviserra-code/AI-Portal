import type { Metadata } from "next";
import Link from "next/link";
import { getTerms } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI glossary",
  description: "Plain-English definitions of the AI terms you keep hearing, from AGI to super intelligence.",
  alternates: { canonical: "/glossary" },
};

export default function GlossaryPage() {
  const terms = getTerms();
  return (
    <>
      <header className="page-head">
        <span className="label">Glossary</span>
        <h1>AI words, without the jargon</h1>
        <p>Short, plain definitions we keep up to date. Each one links to the articles that use it.</p>
      </header>
      {terms.length ? (
        <ul className="terms">
          {terms.map((t) => (
            <li key={t.slug}>
              <Link href={`/glossary/${t.slug}`}>
                <strong>{t.term}</strong>
                <span>{t.definition}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">The first entries are with the editor.</p>
      )}
    </>
  );
}

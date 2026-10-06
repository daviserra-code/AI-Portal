import type { Metadata } from "next";
import Link from "next/link";
import entries from "@/content/observatory.json";
import { formatDate } from "@/lib/content";

type Entry = { date: string; title: string; summary: string; source: string };
const timeline = (entries as Entry[]).slice().sort((a, b) => (a.date < b.date ? 1 : -1));

export const metadata: Metadata = {
  title: "SI Observatory",
  description: "A dated, sourced record of how governments and AI labs use and regulate \"super intelligence\".",
  alternates: { canonical: "/super-intelligence/observatory" },
  // Until the record has enough entries to be useful on its own, keep it out of the index.
  robots: timeline.length >= 5 ? undefined : { index: false, follow: true },
};

export default function ObservatoryPage() {
  return (
    <>
      <header className="page-head">
        <span className="label">
          <Link href="/super-intelligence">Super Intelligence</Link> · Observatory
        </span>
        <h1>SI Observatory</h1>
        <p>Every policy move, accord and official use of the &ldquo;super intelligence&rdquo; label, dated and linked to its source. Newest first.</p>
      </header>
      <ol className="timeline">
        {timeline.map((e) => (
          <li key={e.date + e.title}>
            <time dateTime={e.date}>{formatDate(e.date)}</time>
            <strong>{e.title}</strong>
            <span>{e.summary}</span>
            <a href={e.source} rel="noopener">Source</a>
          </li>
        ))}
      </ol>
    </>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <header className="page-head">
      <span className="label">404</span>
      <h1>We couldn&rsquo;t find that page</h1>
      <p>
        It may have moved, or it was never published. Try the <Link href="/">home page</Link> or the{" "}
        <Link href="/glossary">glossary</Link>.
      </p>
    </header>
  );
}

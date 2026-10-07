import { getTerms } from "@/lib/content";
import { ogSize, shareCard, tagColour } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "AI-Portal glossary";

export function generateStaticParams() {
  return getTerms().map((t) => ({ term: t.slug }));
}

export default async function Image({ params }: { params: Promise<{ term: string }> }) {
  const { term } = await params;
  const t = getTerms().find((x) => x.slug === term);
  return shareCard({ tag: "Glossary", colour: tagColour.glossary, title: t ? `What is ${t.term}?` : "Glossary", text: t?.definition });
}

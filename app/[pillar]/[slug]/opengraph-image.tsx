import { getArticle, getArticles } from "@/lib/content";
import { ogSize, shareCard, tagColour } from "@/lib/og";
import { pillarBySlug } from "@/lib/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "AI-Portal article";

export function generateStaticParams() {
  return getArticles().map((a) => ({ pillar: a.pillar, slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ pillar: string; slug: string }> }) {
  const { pillar, slug } = await params;
  const a = getArticle(pillar, slug);
  return shareCard({
    tag: pillarBySlug(pillar)?.name ?? "AI-Portal",
    colour: tagColour[pillar] ?? "#ffd23f",
    title: a?.title ?? "AI-Portal",
    text: a?.dek,
  });
}

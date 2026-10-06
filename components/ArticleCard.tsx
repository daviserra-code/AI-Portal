import Link from "next/link";
import type { Article } from "@/lib/content";
import { pillarBySlug } from "@/lib/site";

export function ArticleCard({ article }: { article: Article }) {
  const pillar = pillarBySlug(article.pillar);
  return (
    <Link className="card" href={`/${article.pillar}/${article.slug}`}>
      <span className="kicker">
        {pillar?.name} · {article.format}
        {article.status === "draft" ? " · Draft" : ""}
      </span>
      <h3>{article.title}</h3>
      <p>{article.dek}</p>
    </Link>
  );
}

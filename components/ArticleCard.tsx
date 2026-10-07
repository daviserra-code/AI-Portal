import Link from "next/link";
import type { Article } from "@/lib/content";
import { pillarBySlug } from "@/lib/site";

export function ArticleCard({ article }: { article: Article }) {
  const pillar = pillarBySlug(article.pillar);
  return (
    <Link className="card" href={`/${article.pillar}/${article.slug}`}>
      {article.image && <img className="card-art" src={article.image} alt="" width={1200} height={675} loading="lazy" />}
      <span className="tag" data-pillar={article.pillar}>
        {pillar?.name} · {article.format}
        {article.status === "draft" ? " · Draft" : ""}
      </span>
      <h3>{article.title}</h3>
      <p>{article.dek}</p>
    </Link>
  );
}

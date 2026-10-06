import { getArticles } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = getArticles()
    .filter((a) => a.status === "approved")
    .slice(0, 30)
    .map((a) => {
      const url = `${site.url}/${a.pillar}/${a.slug}`;
      return `<item><title>${esc(a.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(`${a.datePublished}T12:00:00Z`).toUTCString()}</pubDate><description>${esc(a.dek)}</description></item>`;
    })
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${site.name}</title><link>${site.url}</link><description>${esc(site.description)}</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

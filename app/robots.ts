import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Search and answer engines that cite sources are welcome. Training-only crawlers are
// listed separately so the editor can change that decision in one place.
const trainingOnly = ["GPTBot", "Google-Extended", "CCBot", "ClaudeBot", "Applebot-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: trainingOnly, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

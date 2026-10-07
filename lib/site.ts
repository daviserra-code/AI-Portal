export const site = {
  name: "AI-Portal",
  url: "https://ai-portal.si",
  tagline: "AI explained for everyone, edited by people.",
  description:
    "Plain-English explainers, guides and news about artificial intelligence and super intelligence, written with AI and checked by a named human editor.",
  language: "en",
  editorialEmail: "info@ai-portal.si",
  owner: "[legal owner name and country]",
};

export const pillars = [
  {
    slug: "understand",
    name: "Understand",
    blurb: "Plain-language explainers on how AI works and what the words mean.",
  },
  {
    slug: "use",
    name: "Use",
    blurb: "Practical guides and tools, tested by a person before we recommend them.",
  },
  {
    slug: "live-with-it",
    name: "Live with it",
    blurb: "What AI changes for work, school, health, money, privacy and your rights.",
  },
  {
    slug: "whats-new",
    name: "What's new",
    blurb: "A short, curated brief on the developments that actually matter.",
  },
  {
    slug: "super-intelligence",
    name: "Super Intelligence",
    blurb: "The new US term, the frontier labs, policy and the long-term debate.",
  },
] as const;

export type PillarSlug = (typeof pillars)[number]["slug"];

export function pillarBySlug(slug: string) {
  return pillars.find((p) => p.slug === slug);
}

/** Drafts render only in development or when SHOW_DRAFTS=1 (for preview deploys). */
export const showDrafts =
  process.env.SHOW_DRAFTS === "1" || process.env.NODE_ENV !== "production";

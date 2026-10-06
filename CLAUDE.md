# AI-Portal: notes for Claude

- English only. Next.js App Router (v16), React 19, TypeScript 5, plain CSS tokens in `app/globals.css`. No Tailwind.
- Content is Markdown in `content/`; see README "How publishing works". Never set `status: approved` yourself: only the human editor approves.
- Follow the Editorial Handbook: short answer box, sources on every claim, banned AI phrases (list in `scripts/check-content.mjs`), "How this was made" disclosure.
- One canonical site (ai-portal.si). Other domains only redirect; never duplicate content onto them.
- Thin pages stay `noindex` (empty hubs, drafts, an observatory with fewer than 5 entries).
- Design rules: `design-system/ai-portal/MASTER.md`. Run `npm run check` and `npm run build` before pushing.

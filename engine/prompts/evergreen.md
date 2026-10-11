# Evergreen and roundup drafts (twice-weekly writer)

The daily engine drafts only news that at least two outlets have covered, and it often finds nothing. The twice-weekly writer tops this up so the site gains a few pages every week. It is a Claude Code routine, run on Wednesday and Sunday mornings. The editor still approves every piece with `/publish`, and nothing is ever marked approved here.

## Each run

1. Read `engine/prompts/draft.md` (voice, banned phrases, fields) and `engine/prompts/illustration.md` (illustration style). Read two approved articles in `content/articles/` for format and depth. `ls content/articles content/glossary` shows what exists: never duplicate a page, and link to related pages as `/<pillar>/<slug>`.
2. Pick the work:
   - **Sunday:** the weekly roundup. Pillar `whats-new`, format `Weekly roundup`, slug `week-in-ai-YYYY-MM-DD` (that Sunday's date). It covers the 5 to 7 AI stories of the past seven days that matter most to ordinary people, each under a plain `##` heading: what happened (attributed), then what it means for the reader. Use the engine's triage notes in the last engine runs and your own search of the week's news. Write 900 to 1,500 words.
   - **Every run:** the next one or two unticked topics in `engine/backlog.md`. Explainers run 1,200 to 1,900 words. Tick each topic you draft.
3. Research on the web. Every specific fact, number, date, name or quote must come from a page you opened and list in `sources`. Prefer primary sources, and report disputes as claims, saying who makes them.
4. Write `content/articles/<slug>.md`. Use the same frontmatter as the existing articles, with `status: draft`, no `approvedBy`, `author: davide-serra`, `madeWith: ai-assisted`, and `datePublished` set to today. Then write `public/illustrations/<slug>.svg`. Main fill by pillar: understand #B8F2D0, use #CFD8FF, live-with-it #FFB3C7, super-intelligence #E3D0FF, whats-new white with the sun highlight.
5. Run `npm ci`, `npm run check` and `npm run build`. Render the illustrations with Playwright (Chromium is at /opt/pw-browsers/chromium) and look at them.
6. Commit on a new branch `claude/drafts-YYYY-MM-DD` and push. Open a pull request (not a draft), titled "Drafts for <day month>". The body lists each piece with the two or three facts most worth the editor's check, as `☐` lines. Opening the PR sends the editor the Telegram message. Do not merge.

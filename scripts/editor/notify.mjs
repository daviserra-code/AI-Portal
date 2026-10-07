// Sends the editor a Telegram message about a pull request with drafts to review.
// Needs TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID; without them it does nothing.
// Usage: node scripts/editor/notify.mjs <pr-url> <file>...
import fs from "node:fs";
import matter from "gray-matter";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chat = process.env.TELEGRAM_CHAT_ID;
const [url, ...files] = process.argv.slice(2);
if (!token || !chat) {
  console.log("::notice::Telegram is not set up (TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID), so no message was sent.");
  process.exit(0);
}

// Optional: checks per file from the content engine (engine-checks.json).
let checks = {};
try { checks = JSON.parse(fs.readFileSync(process.env.CHECKS_FILE || "engine-checks.json", "utf8")); } catch {}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const articles = [];
let glossary = 0;
for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  if (data.status !== "draft") continue;
  if (file.startsWith("content/glossary/")) glossary++;
  else if (file.startsWith("content/articles/")) {
    const notes = (content.match(/\[EDITOR:/g) ?? []).length;
    const toCheck = (checks[file] ?? []).slice(0, 3).map((c) => `\n  ☐ ${esc(c)}`).join("");
    articles.push(`• <b>${esc(data.title)}</b>\n${esc(data.dek)}${toCheck}${notes ? `\n⚠️ ${notes} editor note(s) left in the text: /publish will refuse it` : ""}`);
  }
}
if (articles.length === 0 && glossary === 0) {
  console.log("No drafts in this pull request.");
  process.exit(0);
}

const parts = ["📝 <b>AI-Portal: drafts to review</b>", articles.join("\n\n")];
if (glossary) parts.push(`• ${glossary} glossary entr${glossary === 1 ? "y" : "ies"}`);
parts.push(`Read them: ${esc(url)}\nTo publish, comment <code>/publish</code> there. Nothing goes live until you do.`);

const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ chat_id: chat, text: parts.filter(Boolean).join("\n\n"), parse_mode: "HTML", disable_web_page_preview: true }),
});
const body = await res.json().catch(() => ({}));
if (!body.ok) {
  console.log(`::warning::Telegram refused the message: ${body.description ?? res.status}. Check TELEGRAM_CHAT_ID and that you have messaged the bot at least once.`);
  process.exit(0);
}
console.log("Telegram message sent.");

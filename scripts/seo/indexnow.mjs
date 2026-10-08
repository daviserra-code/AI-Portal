// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver) about every page in the live sitemap.
// Bing's index feeds ChatGPT search and Copilot, so this is how new pages reach AI assistants fastest.
// Runs after each deploy. The key is public by design: IndexNow checks it at https://ai-portal.si/<key>.txt.
const KEY = "0e88efc0d0e0f41722dcca584008c31e";
const HOST = "ai-portal.si";

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(`https://${HOST}/`));
if (urlList.length === 0) {
  console.log("::warning::IndexNow: the sitemap had no URLs, nothing sent.");
  process.exit(0);
}
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
// 200 and 202 both mean accepted; anything else is reported but never fails the deploy.
if (res.ok) console.log(`IndexNow: sent ${urlList.length} URLs (HTTP ${res.status}).`);
else console.log(`::warning::IndexNow refused the list: HTTP ${res.status} ${await res.text()}`);

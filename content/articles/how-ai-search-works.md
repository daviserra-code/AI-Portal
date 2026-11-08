---
title: "How does AI search work, and why do answers cite sources?"
dek: "Google, ChatGPT, Perplexity and Copilot now answer many questions with a written summary and a row of small links. Here is what happens behind that answer, why the links are there, and why they don't always prove what the answer says."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-11-08"
status: draft
madeWith: ai-assisted
image: /illustrations/how-ai-search-works.svg
imageAlt: "A magnifying glass over a stack of pages with a yellow bookmark, joined by a dotted line to a speech bubble with three small empty boxes beneath it."
metaTitle: "How AI search works, and why its sources can be wrong"
metaDescription: "AI search finds web pages, then a language model writes a summary with links. How it works, why citations mislead, what it means for sites."
shortAnswer: "AI search tools like Google's AI Overviews and AI Mode, ChatGPT search, Perplexity and Copilot first run ordinary web searches, then hand the pages they find to a language model that writes a summary and attaches links. The links are there so you can check the answer, but studies by the Tow Center at Columbia and by the BBC and EBU found that cited answers are often wrong or point to pages that don't support them. Treat an AI answer as a starting point and open the source before you rely on it."
sources:
  - title: "Google Search Central: AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
  - title: "Search Engine Journal: Query fan-out technique in AI Mode, new details from Google"
    url: "https://www.searchenginejournal.com/query-fan-out-technique-in-ai-mode-new-details-from-google/"
  - title: "Google: A new era for AI Search (I/O 2026)"
    url: "https://blog.google/intl/en-ie/products/search-io-2026/"
  - title: "OpenAI Help Center: ChatGPT search"
    url: "https://help.openai.com/en/articles/9237897-chatgpt-search"
  - title: "OpenAI Help Center: Publishers and developers FAQ"
    url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq"
  - title: "Perplexity Help Center: How does Perplexity work?"
    url: "https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work"
  - title: "Search Engine Land: Microsoft brings AI search to Copilot with emphasis on citations"
    url: "https://searchengineland.com/microsoft-brings-ai-search-to-copilot-with-emphasis-on-citations-464382"
  - title: "Lewis et al. (arXiv): Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    url: "https://arxiv.org/abs/2005.11401"
  - title: "Meta AI: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (NeurIPS 2020)"
    url: "https://ai.meta.com/research/publications/retrieval-augmented-generation-for-knowledge-intensive-nlp-tasks/"
  - title: "Columbia Journalism Review (Tow Center): AI search has a citation problem"
    url: "https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php"
  - title: "Nieman Lab: AI search engines fail to produce accurate citations in over 60% of tests"
    url: "https://www.niemanlab.org/2025/03/ai-search-engines-fail-to-produce-accurate-citations-in-over-60-of-tests/"
  - title: "European Broadcasting Union: AI's systemic distortion of news is consistent across languages and territories"
    url: "https://www.ebu.ch/news/2025/10/ai-s-systemic-distortion-of-news-is-consistent-across-languages-and-territories-international-study-by-public-service-broadcaste"
  - title: "Pew Research Center: Google users are less likely to click on links when an AI summary appears"
    url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/"
  - title: "Reuters Institute: Emerging uses of AI chatbots for news (Digital News Report 2026)"
    url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/emerging-uses-ai-chatbots-news-and-what-it-means-journalism"
  - title: "Google: New opportunities, control and insights for website owners"
    url: "https://blog.google/products-and-platforms/products/search/new-controls-website-owners/"
  - title: "9to5Google: Google lets sites opt out of AI Mode and AI Overviews"
    url: "https://9to5google.com/2026/06/02/google-ai-mode-overviews-opt-out/"
  - title: "Computer Weekly: Publishers can now opt out of Google AI summaries and training"
    url: "https://www.computerweekly.com/news/366643963/Publishers-can-now-opt-out-of-Google-AI-summaries-and-training"
  - title: "eWeek: European Commission opens antitrust probe into Google's use of online content for AI"
    url: "https://www.eweek.com/news/europe-probe-google-ai-online-content/"
---

Type a question into Google today and, about one time in five, the first thing you see is not a list of links but a written answer. That was the share Pew Research Center measured for AI summaries in US Google searches in March 2025, and the habit has spread since: Google said in May 2026 that AI Mode, its chat-style search, had passed one billion monthly users a year after launch. ChatGPT, Perplexity and Microsoft's Copilot do the same thing in their own apps.

All of these tools work in roughly the same way, and once you know how, it becomes much clearer why the little links under the answer matter, and why they can still let you down.

## What happens between your question and the answer?

An AI search answer is built in two stages: first a search, then a piece of writing.

**Stage one: search.** The tool takes your question and runs ordinary web searches with it, often several at once. Google's guide for website owners says AI Overviews and AI Mode may work by "issuing multiple related searches across subtopics and data sources." Google calls this "query fan-out". Robby Stein, Google's vice president of product for Search, explained it in an interview reported by Search Engine Journal: ask about an evening out and the system "may think of a bunch of questions like great restaurants, great bars, things to do if you have kids."

ChatGPT works in a similar way. OpenAI's help page says it "will automatically search the web if your question might benefit from information on the web", and that search queries may be sent to "third-party search providers such as Bing." Perplexity says it searches "the internet in real-time" for every question.

**Stage two: writing.** The pages the search turns up, or chunks of them, are handed to a [large language model](/glossary/large-language-model), the same kind of program that runs a [chatbot](/glossary/chatbot). The model reads that material and writes a summary in plain language, then the tool attaches links to some of the pages it used.

This combination has a name in the industry: retrieval-augmented generation, or RAG. "Retrieval" is the search, "generation" is the writing. The term comes from a 2020 research paper by Patrick Lewis and colleagues, published by Meta's AI research group (then Facebook AI). They described models that combine two kinds of memory: what the model absorbed during training, and an outside collection of documents it can look things up in. A useful picture is a student sitting an exam with an open book. The book helps a great deal, but the student still has to find the right page and read it correctly. For the basics of how the writing part works, see [How does an AI chatbot actually work?](/understand/how-chatbots-work)

## Why do AI answers show sources at all?

A plain chatbot answering from memory has nothing to point to. Its knowledge is spread across the [model](/glossary/model) itself, not stored as a list of pages. AI search is different: it has just read specific pages, so it can show them.

The companies present the links as a way for you to check the answer. Perplexity says "each answer includes numbered citations linking to the original sources." ChatGPT shows "inline citations" and a "Sources" button at the end of the reply. Microsoft says Copilot's answers now have "more prominent citations to show you the publisher content that it was sourced from."

There is a second reason: the pages belong to someone. Links send at least some readers back to the websites whose work the answer is built on, and regulators are starting to insist on that. When the UK's Competition and Markets Authority imposed new rules on Google Search in June 2026, one requirement, according to Computer Weekly, was that Google attribute publishers' content properly, with clear links in AI-generated results.

## Why can an answer with citations still be wrong?

Because the link and the sentence next to it are produced by different steps. The search finds a page. The model then writes a sentence. Nothing guarantees that the sentence says what the page says. A citation proves that a page was retrieved, not that it supports the claim.

That leaves several ways for things to go wrong:

- **The model misreads or overstates the page.** It can merge two sources, drop a "not", or turn "may" into "will".
- **The page is wrong or out of date.** The answer is only as good as what the search found.
- **The link points to the wrong place.** A copy of an article on another site, an unrelated page, or an address that doesn't exist.
- **The model fills gaps from memory.** If the pages don't cover the question, it may still write a confident answer. That is the [hallucination](/glossary/hallucination) problem, covered in [Why does AI make things up?](/understand/why-ai-makes-things-up)

Two large studies have measured how often this happens with news.

**The Tow Center test.** In March 2025, researchers Klaudia Jaźwińska and Aisvarya Chandrasekar at Columbia University's Tow Center for Digital Journalism gave eight AI search tools short excerpts from real news articles and asked each to name the article, the publisher, the date and the web address. Across 1,600 queries, the tools, they wrote in the Columbia Journalism Review, "provided incorrect answers to more than 60 percent of queries." Perplexity did best, wrong 37% of the time; xAI's Grok 3 did worst, at 94%. More than half of the answers from Gemini and Grok 3 cited made-up or broken web addresses. Some tools also cited republished copies on other sites instead of the original: ChatGPT, for example, cited a Yahoo News copy of a USA Today article.

The researchers also noticed how sure of themselves the tools sounded. Nieman Lab, reporting the study, noted that ChatGPT gave 134 wrong citations and signalled doubt in only 15 of them.

**The BBC and EBU study.** In October 2025 the European Broadcasting Union published research led by the BBC in which 22 public broadcasters in 18 countries checked more than 3,000 answers from ChatGPT, Copilot, Gemini and Perplexity. They found that 45% of answers had at least one significant issue, and 31% had serious sourcing problems, which the EBU defines as "missing, misleading, or incorrect attributions." Gemini performed worst, with significant issues in 76% of its answers, largely because of poor sourcing.

Both studies are snapshots from 2025, and the products have changed since. They also focused on news, which is harder than, say, a recipe. But they show the pattern clearly: a neat row of links can make an answer look more checked than it is.

## What does this mean for websites and publishers?

For most of the web's history, search engines and websites had a simple deal: the search engine showed a short snippet, and people clicked through to read the rest. AI answers change that, because the answer is often enough on its own.

Pew Research Center tracked the browsing of 900 US adults in March 2025. When a Google search showed an AI summary, people clicked a regular result on 8% of visits, against 15% when there was no summary. They clicked a link inside the summary itself on just 1% of visits. The Reuters Institute's Digital News Report 2026 found the same in chatbots: across 27 countries, just 4% of people said they always or often click through to the news sources behind an AI answer, against 19% for search engines.

Google disputes the idea that AI is bad for websites. Its guidance for site owners says that clicks from pages with AI Overviews "are higher quality", meaning visitors spend more time on the site. That is Google's own measurement.

Publishers have pushed back in other ways. In December 2025 the European Commission opened an antitrust investigation into whether Google uses publishers' content in AI Overviews and AI Mode without fair payment or a meaningful way to opt out. The Commission stressed that opening a case does not mean Google has broken the law.

In the UK, the Competition and Markets Authority went further. Its June 2026 rules require Google to let publishers keep their content out of its AI features without disappearing from normal search results. Google responded with a switch in Search Console, its free tool for site owners. Google says sites that turn it on "will not receive traffic or impressions from our generative AI features", that their normal search ranking is not affected, and that by the end of August 2026 the control had reached website owners worldwide. It does not cover the separate Gemini app, according to 9to5Google.

If you run a website, the practical points are these:

- **There is no secret trick for Google.** Google says a page needs to be indexed and eligible for a normal search snippet, and that there are "no additional requirements" or special optimisations for AI Overviews or AI Mode.
- **Search and training are separate switches.** OpenAI, for example, uses one crawler for ChatGPT search (OAI-SearchBot) and another for gathering [training data](/glossary/training-data) (GPTBot). OpenAI says publishers should block GPTBot to keep pages out of potential training, and should not block OAI-SearchBot if they want to be summarised and cited in ChatGPT search.
- **You can measure it.** OpenAI says ChatGPT adds "utm_source=chatgpt.com" to links it sends, so visits show up in your analytics. Google's new Search Console reports show which pages appear in its AI answers and in which countries.

## How can you check an AI answer?

None of this means AI search is useless. It is often a fast way to get oriented on a topic. It just means the answer is a draft, and the links are your way to check it.

1. **Open at least one source for anything that matters.** Health, money, law, travel rules, anything you will act on. Find the actual sentence on the page.
2. **Check that the page says what the answer says.** Look for the number, the date or the claim itself, not just the topic. If it isn't there, treat that part of the answer as unconfirmed.
3. **Look at who the source is.** An official site, a known news outlet and an anonymous forum post are not equal, even if they get the same small grey link.
4. **Watch the dates.** Prices, laws, opening hours and news change. Make sure the page is current.
5. **Be wary of links that don't open** or land on an unrelated page. In the Tow Center tests, broken and invented addresses were common.
6. **Ask the question a second way, or in a second tool.** If two tools disagree, go to the sources.
7. **Click through to news you care about.** The original article usually has context the summary leaves out, and reading it keeps the people who report it in business.

If you are choosing a tool mainly for research with sources, our comparison of [which AI assistant to use](/use/chatbots-compared) looks at how each one handles citations.

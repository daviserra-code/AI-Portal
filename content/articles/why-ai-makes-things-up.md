---
title: "Why does AI make things up, and how do you catch it?"
dek: "Chatbots sometimes invent facts, quotes and sources, and say them with total confidence. Here is why it happens, how often it happens, what it has cost people, and a simple routine for catching it."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-10-09"
status: approved
approvedBy: davide-serra
madeWith: ai-assisted
image: /illustrations/why-ai-makes-things-up.svg
imageAlt: "A green chat window with two speech bubbles, and a magnifying glass with a yellow handle over it showing a crossed-out line."
metaTitle: "Why AI makes things up, and how to catch it"
metaDescription: "AI chatbots invent facts and sources with full confidence. Why hallucinations happen, real cases, measured error rates, and a checklist to catch them."
shortAnswer: "AI chatbots make things up because they are built to produce likely-sounding text, not to look facts up, and their training rewards a confident guess over admitting they don't know. Measured error rates vary widely by task, from a few per cent when summarising a document to a third or more on hard factual questions. Check any name, number, quote or source that matters before you rely on it."
sources:
  - title: "OpenAI: Why language models hallucinate"
    url: "https://openai.com/index/why-language-models-hallucinate/"
  - title: "OpenAI: Introducing GPT-5"
    url: "https://openai.com/index/introducing-gpt-5/"
  - title: "TechCrunch: OpenAI's new reasoning AI models hallucinate more"
    url: "https://techcrunch.com/2025/04/18/openais-new-reasoning-ai-models-hallucinate-more/"
  - title: "Bloomberg Law: Phony ChatGPT brief leads to $5,000 fine for NY lawyers"
    url: "https://news.bloomberglaw.com/bloomberg-government-news/chatgpt-phony-legal-filing-case-gets-lawyers-a-5-000-fine"
  - title: "The Register: Lawyers who cited fake cases sanctioned"
    url: "https://www.theregister.com/2023/06/22/lawyers_fake_cases/"
  - title: "Damien Charlotin: AI Hallucination Cases database"
    url: "https://www.damiencharlotin.com/hallucinations/"
  - title: "Mondaq: Airline ordered to compensate a BC man because its chatbot provided inaccurate information"
    url: "https://www.mondaq.com/canada/new-technology/1427926/airline-ordered-to-compensate-a-bc-man-because-its-chatbot-provided-inaccurate-information"
  - title: "AP (via News4Jax): Deloitte to partially refund Australian government for report with apparent AI-generated errors"
    url: "https://www.news4jax.com/business/2025/10/07/deloitte-to-partially-refund-australian-government-for-report-with-apparent-ai-generated-errors/"
  - title: "NPR (via WBHM): How an AI-generated summer reading list got published in major newspapers"
    url: "https://wbhm.org/npr-story/how-an-ai-generated-summer-reading-list-got-published-in-major-newspapers"
  - title: "European Broadcasting Union: International study on AI assistants and news"
    url: "https://www.ebu.ch/news/2025/10/ai-s-systemic-distortion-of-news-is-consistent-across-languages-and-territories-international-study-by-public-service-broadcaste"
  - title: "Stanford HAI: AI on trial, legal models hallucinate in 1 out of 6 (or more) benchmarking queries"
    url: "https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries"
  - title: "Vectara: Hallucination leaderboard (GitHub)"
    url: "https://github.com/vectara/hallucination-leaderboard"
---

In 2023 a New York lawyer handed a federal judge a brief that cited six court decisions. None of them existed. ChatGPT had invented them, and when the lawyer asked it whether one was real, it assured him the case "does indeed exist", according to his own court declaration, as reported by The Register.

That is a [hallucination](/glossary/hallucination): an AI system stating something false, in the same calm, fluent voice it uses for things that are true. It is the single most useful thing to understand about [chatbots](/glossary/chatbot), because it shapes how far you can trust anything they tell you.

## Why does a chatbot invent things at all?

A chatbot runs on a [large language model](/glossary/large-language-model), a program trained on huge amounts of text to predict which word is likely to come next. It does not look facts up in a database the way a search engine or an encyclopedia does. It produces text that fits the pattern of what an answer usually looks like. (For the basics of how these systems learn, see [What is AI, really?](/understand/what-is-ai).)

Most of the time, likely-sounding text and true text are the same thing. Ask for the capital of France and the pattern is so strong that the model gets it right. The trouble starts with rare, specific facts: an obscure court case, a minor author's book titles, a person's birthday. There is no pattern that predicts those. The model still produces something that looks like an answer, because that is what it was built to do.

OpenAI made this argument itself in a September 2025 research post, [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). It says models learn from text with no "true" or "false" labels attached, so spelling and grammar improve with scale but "arbitrary" facts that appear rarely cannot be learned reliably from patterns alone.

The post adds a second reason, which is about incentives. The tests used to rank AI models mostly score whether an answer is right. A model that says "I don't know" scores zero. A model that guesses sometimes gets lucky. OpenAI's example: guess someone's birthday and you have a 1 in 365 chance of being right; leave it blank and you are guaranteed nothing. Over thousands of questions, the guesser climbs the leaderboard. In OpenAI's words, standard training and evaluation "reward guessing over acknowledging uncertainty."

So a chatbot is a bit like a student who has learned that a confident wrong answer on an exam costs no more than a blank one.

## What has it actually cost people?

The lawyer's case, *Mata v. Avianca*, ended badly for him. Bloomberg Law reports that in June 2023 Judge P. Kevin Castel of the federal court in Manhattan fined the two lawyers and their firm $5,000, saying they had "abandoned their responsibilities when they submitted non-existent judicial opinions." He also ordered them to send his ruling to every real judge falsely named as the author of a fake opinion.

It did not stop there. The legal researcher Damien Charlotin keeps a public [database of court decisions involving AI hallucinations](https://www.damiencharlotin.com/hallucinations/), mostly invented citations and arguments. When we checked on 8 October 2026, it listed 2,149 cases, and Charlotin notes it does not capture every one.

Outside courtrooms:

- **An airline's chatbot invented a refund rule.** Air Canada's website chatbot told a grieving passenger he could claim a cheaper bereavement fare after travelling. That was wrong. Air Canada argued it could not be held responsible for what its chatbot said. British Columbia's Civil Resolution Tribunal disagreed in *Moffatt v. Air Canada* (2024), and ordered the airline to pay him $650.88 in damages plus interest and fees, [Mondaq reports](https://www.mondaq.com/canada/new-technology/1427926/airline-ordered-to-compensate-a-bc-man-because-its-chatbot-provided-inaccurate-information).
- **A government report cited research that does not exist.** In October 2025 the Associated Press reported that Deloitte would partly refund the Australian government for a 237-page report that contained references to non-existent academic papers and a fabricated quote from a federal court judgment. A Sydney University researcher, Chris Rudge, spotted the errors. The revised report disclosed that Azure OpenAI had been used to write it.
- **Newspapers recommended books nobody wrote.** In May 2025 the Chicago Sun-Times and at least one edition of the Philadelphia Inquirer ran a syndicated summer reading list in which, NPR found, only 5 of 15 books were real. One was "Tidewater Dreams", credited to Isabel Allende, who never wrote it. The writer said the list was partly generated by AI and called it a "huge mistake on my part."

Notice the pattern. In every case the invented detail was specific, plausible and dressed in the right format: a case name with a citation, a policy with a deadline, a footnote, a book title. That is exactly what makes hallucinations hard to spot.

## How often does it happen?

There is no single number, and you should be wary of anyone who quotes one. The rate depends heavily on the task, the model and how the test is scored. Here are some credible measurements, with what each one measured.

**Summarising a document you give it.** The AI company Vectara runs a public [hallucination leaderboard](https://github.com/vectara/hallucination-leaderboard) that asks models to summarise documents using only the text provided, then checks whether the summary adds anything the document does not support. In its May 2026 update, rates ranged from 1.8% for the best model to 24.2% for the worst, with well-known models from OpenAI, Google and Anthropic (the company that makes the AI used to help draft this article) mostly between about 3% and 12%. This is the easiest case: the facts are right in front of the model.

**News questions.** In October 2025 the European Broadcasting Union published a study led by the BBC in which journalists from 22 public broadcasters in 18 countries reviewed more than 3,000 answers from ChatGPT, Copilot, Gemini and Perplexity. They found that 45% of answers had at least one significant issue, 31% had serious sourcing problems, and 20% had major accuracy problems, including invented details and outdated information. Not every issue counted is a hallucination in the strict sense, but these are the errors a reader would actually meet.

**Specialist legal tools.** A 2024 Stanford study tested AI research tools sold to lawyers on more than 200 legal questions. It found that Lexis+ AI and Thomson Reuters' Ask Practical Law AI gave incorrect or unsupported answers more than 17% of the time, and Westlaw's AI-Assisted Research more than 34% of the time. These are products built specifically to avoid making things up.

**Hard questions about people.** OpenAI's own tests, reported by TechCrunch in April 2025, found that its then-new o3 model hallucinated on 33% of questions in a test about people, and o4-mini on 48%, against 16% for the older o1.

## Is it getting better?

Yes, though not evenly. OpenAI said when it launched GPT-5 in August 2025 that, with web search switched on and on prompts resembling real ChatGPT use, its answers were about 45% less likely to contain a factual error than GPT-4o's, and about 80% less likely than o3's when using its "thinking" mode. These are the company's own figures.

The bigger change is that models are being trained to say "I'm not sure" more often. In OpenAI's September 2025 post, on one test of short factual questions, an older model (o4-mini) declined to answer only 1% of the time and was wrong 75% of the time. A newer one (gpt-5-thinking-mini) declined 52% of the time and was wrong 26% of the time. It got slightly fewer answers right, but it made far fewer confident mistakes.

Two other things help. Chatbots that search the web can now show links to where an answer came from, which gives you something to check. And reading a document you supply is much more reliable than answering from memory, as the Vectara numbers suggest.

None of this makes hallucinations go away. The o3 results above show that a newer, more capable model can make things up more, not less. And the same failure matters more when AI acts for you: an invented detail in an [AI agent](/understand/ai-agents-explained) can become a wrong booking or a sent email.

## How do you catch a hallucination?

You don't need to distrust everything a chatbot says. You need to know which parts to check. A short routine:

1. **Check the things that are easy to invent.** Names, dates, numbers, quotes, prices, laws, deadlines, book and paper titles, and anything presented as a citation. These are where hallucinations hide.
2. **Open every source.** If a chatbot gives you a link, click it and find the claim on the page. If it gives a reference without a link, search for it yourself. A source that cannot be found, or that says something different, is a red flag for the whole answer.
3. **Be most careful with rare or recent facts.** The less often something has been written about, the more likely the model is to fill the gap. The same goes for events after the model was trained, unless it is searching the web.
4. **Don't ask the chatbot to vouch for itself.** "Are you sure?" is not a check. The Avianca lawyer asked, and got a confident yes. Check with a second, independent source instead: an official website, the original document, a reputable outlet.
5. **Give it the material.** If you want a summary of a contract or a report, paste in or upload the document and ask it to answer only from that text. It is still not perfect, but the measured error rates are much lower.
6. **Invite it to say "I don't know".** Telling it "if you are not sure, say so" or "only answer if you can point to a source" gives it permission not to guess. Our guide to [writing a good prompt](/use/how-to-write-a-good-prompt) has more on this.
7. **Watch for answers that are too neat.** A perfect quote that sums up your argument, a statistic that is exactly what you hoped, a case that matches your situation in every detail. Real evidence is usually messier.
8. **Match your checking to the stakes.** A dinner recipe needs little checking. Anything going to a court, a client, a doctor, a newspaper or your bank needs every fact checked by a person, because, as the Air Canada and Avianca cases show, the person or company that uses the answer is the one held responsible.

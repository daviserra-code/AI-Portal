---
title: "What is a context window, and why do chatbots forget things?"
dek: "A chatbot can only work with what fits on its desk right now. Here is how big that desk is in ChatGPT, Claude and Gemini, why long chats go wrong, and how memory features differ."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-11-04"
status: draft
madeWith: ai-assisted
image: /illustrations/context-windows-and-memory.svg
imageAlt: "A chat window with a yellow sticky note pinned to its corner, feeding a long paper strip that is torn in the middle, where a lilac scrap has lost its lines."
metaTitle: "Context windows explained: why chatbots forget"
metaDescription: "What tokens and context windows are, how much ChatGPT, Claude and Gemini can hold, why long chats degrade, and how memory features differ."
shortAnswer: "A context window is the amount of text a chatbot can see at once: your messages, its replies and any files, measured in tokens, which are small chunks of words. When a chat grows long, older parts get trimmed or summarised, and research shows models also pay less attention to details buried in the middle. Memory features are separate: they save notes about you and slip them into new chats, and you can view or delete them in settings."
sources:
  - title: "Anthropic (Claude Platform Docs): Context windows"
    url: "https://platform.claude.com/docs/en/build-with-claude/context-windows"
  - title: "Anthropic (Claude Platform Docs): Glossary"
    url: "https://platform.claude.com/docs/en/about-claude/glossary"
  - title: "Claude Help Center: How large is the context window on paid Claude plans?"
    url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans"
  - title: "Claude Help Center: Understanding usage and length limits"
    url: "https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits"
  - title: "Claude Help Center: Use Claude's chat search and memory to build on previous context"
    url: "https://support.claude.com/en/articles/11817273"
  - title: "PCWorld: Claude AI now remembers chats and interactions for free users"
    url: "https://www.pcworld.com/article/3078077/claude-ai-now-remembers-chats-and-interactions-for-free-users.html"
  - title: "OpenAI: ChatGPT pricing and plan comparison"
    url: "https://chatgpt.com/pricing"
  - title: "OpenAI: Memory and new controls for ChatGPT"
    url: "https://openai.com/index/memory-and-new-controls-for-chatgpt/"
  - title: "Neowin: ChatGPT memory upgrade extends to free users"
    url: "https://www.neowin.net/news/chatgpt-memory-upgrade-extends-to-free-users"
  - title: "Google: Gemini Apps limits and upgrades for Google AI subscribers"
    url: "https://support.google.com/gemini/answer/16275805?hl=en-GB"
  - title: "Google: Save info and reference past chats in Gemini Apps"
    url: "https://support.google.com/gemini/answer/16413516"
  - title: "Google: Connect your Google apps to personalize your Gemini experience"
    url: "https://support.google.com/gemini/answer/16598406"
  - title: "Google Blog: Gemini launches new personalisation features in the UK"
    url: "https://blog.google/company-news/inside-google/around-the-globe/google-europe/united-kingdom/gemini-launches-new-personalisation-features-in-the-uk/"
  - title: "heise online: Google expands Gemini in Germany with personalization features"
    url: "https://heise.de/-11276628"
  - title: "Liu et al.: Lost in the Middle: How Language Models Use Long Contexts (TACL)"
    url: "https://arxiv.org/abs/2307.03172"
  - title: "Chroma Research: Context Rot, how increasing input tokens impacts LLM performance"
    url: "https://www.trychroma.com/research/context-rot"
---

A [chatbot](/glossary/chatbot) does not keep reading your whole conversation forever. It can only take in a fixed amount of text at once, called its [context window](/glossary/context-window). Once a chat outgrows that space, something has to give, and that is the most common reason a chatbot seems to forget what you told it an hour ago.

There is a second reason, which surprises people more: even inside the window, models pay less attention to some parts than others. And then there are "memory" features, which sound like the same thing but work quite differently.

If you want the bigger picture of how chatbots write their answers, start with [how do AI chatbots actually work?](/understand/how-chatbots-work). This page zooms in on the forgetting.

## What is a token?

Chatbots don't count words. They count [tokens](/glossary/token), which are the small chunks a [large language model](/glossary/large-language-model) breaks text into before it reads it. A token can be a whole short word, part of a longer one, a single character or a piece of punctuation.

How much text fits in a token depends on the model and the language. Anthropic's documentation says that on its older Claude models a token is about 3.5 English characters, and that its newer models split the same text into roughly 30% more tokens. As a rough feel, a common English word is one or two tokens, and less common words or other languages take more.

You rarely see tokens directly. They matter because every limit on a chatbot, including how much it can see, is measured in them.

## What is a context window?

The context window is everything the model can look at while it writes its next reply. Anthropic's documentation describes it as "all the text a language model can reference when generating a response, including the response itself", and calls it a "working memory" for the model, separate from what it learned in training.

It helps to know what goes into that space. Not only your messages and the chatbot's replies, but also any files you attach, the hidden instructions the company gives the model, search results it fetches and, if memory is on, notes about you. OpenAI's pricing page makes this point directly: the figures it lists are shared totals, and the room left for your own words is smaller because system instructions, memory and the model's reasoning also take up space.

Think of a desk. Training is the library the model read years ago. The context window is the pile of papers on the desk today. If a page is not on the desk, the model cannot see it, however clearly you wrote it.

## How big are context windows today?

Bigger than they used to be, and it depends on your plan. These are the figures the companies publish as of early November 2026:

- **ChatGPT.** OpenAI's plan comparison lists a total context window of 27K tokens for its fast "Instant" model on the free plan, 54K on Go, Plus and Business, and 128K on Pro. For its reasoning models it lists 256K on Go, Plus and Business, 400K on Pro, and "varies" on the free plan.
- **Gemini.** Google's help page lists 32K tokens without a paid plan, 128K with Google AI Plus, and 1 million with Google AI Pro or Ultra.
- **Claude.** Anthropic, which makes Claude (and the AI used to help draft this article), says that on paid plans its newest chat models have 1 million tokens, several slightly older ones have 500K, and models it does not list have 200K. Its help page does not give a figure for the free plan.

By rough arithmetic, 27,000 tokens is in the order of 15,000 to 20,000 English words, a short book's worth of chat. A million tokens is several long novels. That sounds like plenty, and for most everyday chats it is. The trouble is that a bigger desk does not mean the model reads every page equally well.

## Why do long chats get worse?

Researchers have measured two related problems.

The first is known as **"lost in the middle"**. In a 2023 study accepted by the journal Transactions of the Association for Computational Linguistics, Nelson Liu and colleagues hid the one useful piece of information at different places in a long text. They found that "performance is often highest when relevant information occurs at the beginning or end of the input context", and that it dropped when the information sat in the middle, "even for explicitly long-context models." In a long chat, the middle is often where your key instructions ended up.

The second is what the vector database company Chroma called **"context rot"** in a July 2025 report. Its researchers tested 18 models, including ones from Anthropic, OpenAI, Google and Alibaba's Qwen family, on deliberately simple tasks while making the input longer. "Across all experiments, model performance consistently degrades with increasing input length," they wrote. Distracting text made it worse: "even a single distractor reduces performance."

Anthropic now uses the same phrase in its own documentation: "As token count grows, accuracy and recall degrade, a phenomenon known as context rot."

In practice, a long chat often goes wrong in familiar ways. The chatbot drops a rule you set at the start, mixes up two versions of a document you pasted, or repeats a mistake you corrected earlier, because the old wrong version is still sitting in the window next to the fix. Those slips can look a lot like [making things up](/understand/why-ai-makes-things-up), and sometimes that is what they become.

## What happens when a chat hits the limit?

Each service handles it differently, and most don't tell you exactly when it happens.

Anthropic's documentation says chat apps like claude.ai "can also manage the context window on a rolling 'first in, first out' basis", meaning the oldest material falls off first. Its help centre adds that on paid plans with code execution switched on, Claude "summarizes earlier messages to make room for new content" as a chat nears its limit. A summary keeps the gist but loses detail, so a precise figure or wording from early on can quietly disappear. Anthropic also says these long, summarised chats use up more of your usage allowance.

The practical result is the same everywhere: in a very long conversation, assume the start is no longer fully in view.

## Isn't that what "memory" is for?

Partly, but memory is a different mechanism. The context window is what the model sees in this chat. Memory is a set of notes the service saves between chats and puts back into the window when it thinks they are relevant. It is closer to a sticky note on the desk than to the model learning about you.

All three big chatbots now have it:

- **ChatGPT** has "saved memories", which are things you ask it to remember, and "chat history", where it draws on your past conversations, according to OpenAI's announcement. When OpenAI extended chat history to free users in June 2025, Neowin reported that free users in the EEA, UK, Switzerland, Norway, Iceland and Liechtenstein had to switch it on themselves, while elsewhere it was on by default.
- **Claude** generates memory from your chats. Anthropic's help page says it is on by default for its individual plans on web, desktop and mobile, and PCWorld reports it reached free users in March 2026. Each project has its own separate memory.
- **Gemini** has "Saved info" and the ability to reference past chats, managed under **Personal context** in its settings. Google says these are not available to users under 18. Google brought the automatic "Memory" setting to the UK in April 2026, and heise reported a limited version reaching Germany and the EEA around the same time. Gemini's deeper feature, Personal Intelligence, which can draw on Gmail, Photos and other Google apps, is listed on Google's help page as "Not available in the European Economic Area, Nigeria, Switzerland, or the United Kingdom."

Memory solves a different problem from the context window. It helps a new chat start with your name, job or preferences. It does not let one very long chat see everything you said in it.

## What happens to what memory stores, and how do I delete it?

Memories are data about you, kept on the company's servers. OpenAI says it "may use content that you provide to ChatGPT, including memories, to improve our models", unless you opt out in Data Controls. For the wider picture of what each company keeps and how to stop training on your chats, see [is it safe to paste my data into an AI chatbot?](/live-with-it/your-data-and-ai-chatbots)

One detail catches people out. **Deleting a chat does not delete what was remembered from it.** OpenAI says so plainly, and Anthropic says memories created from a deleted chat aren't automatically removed. You have to delete the memory itself.

Where to find the controls, according to each company's help pages:

- **ChatGPT:** Settings, then Personalization, then Manage memories to view or delete them, or turn memory off there. You can also ask it to forget something.
- **Claude:** Settings, then Your Claude, then Manage next to Your memory. Open a topic to edit or delete it. The Generate memory from chats switch lets you pause memory or reset it, which permanently deletes all memories.
- **Gemini:** Settings, then Personal context. Use the More menu next to an entry to edit or delete it. Google says that to remove something Gemini learned from your connected apps, you may also need to delete the related chats in Gemini Apps Activity.

ChatGPT's Temporary Chat and Claude's incognito chats don't use or add to memory, so they suit one-off sensitive questions.

## How do I keep a chatbot on track?

A few habits help more than any setting:

- **Start a new chat for a new task.** One topic per conversation keeps the window short and free of distractions.
- **Carry over a summary, not the whole history.** Before you leave a long chat, ask the chatbot for a short summary of the decisions and facts that matter, check it, and paste it into a fresh one.
- **Put the important instruction where it gets noticed.** Given the "lost in the middle" findings, repeat a key rule near the end of a long request instead of relying on something you said 40 messages ago.
- **Attach the file instead of pasting it again and again.** Several versions of the same text in one chat invite mix-ups. Share the current version once, and say clearly which one counts.
- **Ask about specific parts of long documents.** "What does section 4 say about notice periods?" works better than "summarise this contract".
- **Check what memory thinks it knows.** Every few months, open the memory page and delete anything wrong or out of date.

For more on phrasing requests so the chatbot gets the context it needs, see [how to write a good prompt](/use/how-to-write-a-good-prompt).

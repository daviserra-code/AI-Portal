---
title: "How does an AI chatbot actually work?"
dek: "You type a question and fluent text comes back in seconds. Knowing what happens in between explains why chatbots are so useful, why they vary, and why they still get things wrong."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-10-09"
status: draft
madeWith: ai-assisted
image: /illustrations/how-chatbots-work.svg
imageAlt: "A green chat bubble with lines of writing, a short line leading to a row of four tiles, the last one yellow and raised a little above the others."
metaTitle: "How does an AI chatbot work? A plain-English guide"
metaDescription: "Training, tokens, next-word prediction, context windows, web search and memory: how chatbots like ChatGPT, Claude and Gemini work, with no maths."
shortAnswer: "An AI chatbot runs on a large language model: a program trained on a vast amount of text until it became very good at predicting which chunk of text comes next. When you ask something, it writes the reply one small piece at a time, using your conversation as its only short-term memory, and it can call tools such as web search to fetch facts it was never trained on. It produces likely-sounding text, not checked facts, so anything important still needs checking."
sources:
  - title: "OpenAI Help Center: How ChatGPT and our foundation models are developed"
    url: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-foundation-models-are-developed"
  - title: "OpenAI Help Center: What are tokens and how to count them?"
    url: "https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them"
  - title: "Meta AI: Introducing Meta Llama 3"
    url: "https://ai.meta.com/blog/meta-llama-3/"
  - title: "Anthropic: Tracing the thoughts of a large language model"
    url: "https://www.anthropic.com/research/tracing-thoughts-language-model"
  - title: "OpenAI Help Center: Why am I getting different completions on Playground vs. the API?"
    url: "https://help.openai.com/en/articles/6643200-why-am-i-getting-different-completions-on-playground-vs-the-api"
  - title: "Anthropic (Claude Platform Docs): Context windows"
    url: "https://platform.claude.com/docs/en/build-with-claude/context-windows"
  - title: "Claude Help Center: How up-to-date is Claude's training data?"
    url: "https://support.claude.com/en/articles/8114494-how-up-to-date-is-claude-s-training-data"
  - title: "OpenAI Help Center: Searching the web with ChatGPT"
    url: "https://help.openai.com/en/articles/9237897-chatgpt-search"
  - title: "Anthropic (Claude Platform Docs): Tool use with Claude"
    url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
  - title: "OpenAI Help Center: Memory in ChatGPT"
    url: "https://help.openai.com/en/articles/8590148-memory-faq"
  - title: "OpenAI: Why language models hallucinate"
    url: "https://openai.com/index/why-language-models-hallucinate/"
---

A [chatbot](/glossary/chatbot) does not look up your answer anywhere. It writes it, a small piece at a time, by repeatedly guessing what text should come next. Almost everything about how chatbots behave, good and bad, follows from that one fact.

The engine underneath ChatGPT, Claude, Gemini and the rest is a [large language model](/glossary/large-language-model), usually shortened to LLM. If you want the wider picture of what AI is first, start with [what is AI, really?](/understand/what-is-ai). This page goes one level deeper, still with no maths.

## What happens when I type a question?

First, your message is chopped into [tokens](/glossary/token). A token is a chunk of text: sometimes a whole short word, sometimes part of a longer one, sometimes a space or a comma. OpenAI's rule of thumb for English is that one token is about four characters, or about three quarters of a word, so 100 tokens come to roughly 75 words.

The model then reads all those tokens and works out which token is most likely to come next. It adds that token to the text, reads everything again, and picks the next one. And again, and again, until it decides the answer is finished. OpenAI's help centre describes the model predicting "the next most likely word when generating a response, one word at a time."

Think of the autocomplete on your phone keyboard, which suggests the next word as you type. A chatbot is that idea scaled up enormously, and good enough to keep going for whole pages.

## What does "training" mean, and how is that different from using it?

There are two very different stages, and it helps to keep them apart.

**Training** happens once, before you ever see the chatbot. The company feeds the model a vast amount of text and has it practise predicting the next token, over and over. Each time it guesses wrong, its billions of internal settings are nudged slightly so the right answer becomes a bit more likely. Those settings are what the model ends up with. The scale is hard to picture: Meta said in 2024 that its Llama 3 model was trained on "over 15T tokens", that is more than 15 trillion, all from publicly available sources.

A second round of training then teaches the raw text-predictor to behave like a helpful assistant, using examples and ratings from people. We cover that step in [what is AI, really?](/understand/what-is-ai)

**Using** the model, which you do every time you chat, is a different thing. The settings are frozen. The model is not learning from you as you talk; it is applying what it already learned. A useful comparison is a student: training is the years of school, using is sitting the exam. Nothing new goes into the student's head during the exam itself.

One consequence: the [training data](/glossary/training-data) stops at a date, called the knowledge cutoff. Anthropic's help centre says each Claude model has one and that models "may not be aware of events or information that occurred after their respective cutoff dates." Without extra help, a chatbot simply does not know what happened last week.

## If it only predicts the next word, why does it sound so fluent?

Because predicting the next word well turns out to require picking up a great deal along the way. To guess the next word of a recipe, a legal letter or a joke, a model has to absorb grammar, tone, the usual shape of each kind of document, and a lot of facts that appear often in writing.

Nobody programs these skills in. Anthropic, which makes Claude, puts it this way: language models "aren't programmed directly by humans", and during training "they learn their own strategies to solve problems." Its researchers found, for example, that when asked to write a rhyming couplet, Claude picked possible rhyming words before starting the second line. "Claude plans ahead," they wrote.

OpenAI also stresses that the model does not paste in stored text: its models "do not store or retain copies of the data they are trained on", and ChatGPT "does not 'copy and paste' from its training data." It is more like a very well-read improviser than a library.

The catch is that fluency is about how text usually sounds, not whether it is true. A smooth, confident paragraph and an accurate one are produced in exactly the same way.

## Why do I get a different answer every time?

Because the chatbot does not always pick the single most likely next token. It usually picks from among several likely ones, with a bit of chance mixed in, which keeps the writing varied and less robotic.

Developers control this with a setting called temperature. OpenAI's developer help pages explain that if the temperature is above zero, "the model will generate outputs with some randomness", so "seeing different completions is expected." Consumer chatbots choose this setting for you.

Small early choices snowball. If the first sentence starts "There are three reasons" in one attempt and "It depends" in another, the rest of the answer heads off in a different direction. That is why asking again, or rephrasing, can give you a noticeably better or worse reply. It also means that if you get two answers that disagree, neither one is automatically right.

## What is a context window?

The [context window](/glossary/context-window) is everything the model can see while writing its reply: your messages, its own earlier replies, any documents you have pasted or uploaded, hidden instructions from the company, and the answer it is writing. Anthropic's documentation calls it the model's "working memory", separate from everything it learned in training.

Picture a desk. Training is everything the model read over the years; the context window is the pile of papers in front of it right now. It can only work with what is on the desk.

Desks have become big. Anthropic says several of its current Claude models have a context window of one million tokens, which by OpenAI's rule of thumb is roughly 750,000 words. But a bigger pile is not always better. Anthropic notes that "as token count grows, accuracy and recall degrade", something it calls "context rot." In very long chats, early details can get lost or muddled. Starting a fresh chat, with a short summary of what matters, often helps.

## How does a chatbot search the web or use other tools?

The model itself can only produce text. So companies give it tools, and teach it to write a request for one when it needs it.

Anthropic's developer documentation describes the loop. The model decides "when to call a tool based on the user's request and the tool's description", writes a structured request, and the surrounding software actually carries it out. The result is fed back into the context window, and the model writes its answer using it. The model never browses by itself; it asks, and something else does the fetching.

Web search is the most familiar example. OpenAI's help centre says ChatGPT "may search the web automatically when your question would benefit from current information" and "typically rewrites your query into one or more targeted queries." Answers that use search may include citations, and OpenAI warns that the sources themselves may be outdated or incorrect. Other tools work the same way: a calculator, a code runner, your calendar. When chatbots use tools to carry out whole tasks, they become [AI agents](/understand/ai-agents-explained).

## Does a chatbot remember me?

Not in the way a person does. Because the model is not learning while you chat, each new conversation normally starts with an empty desk.

Memory features work by putting notes back on the desk. OpenAI's help page on memory in ChatGPT describes saved memories, which are details you ask it to keep, and an option to reference past chat history. ChatGPT "decides which available information is relevant to a response" and adds it to the conversation. It is closer to a stack of sticky notes than to a mind that knows you. You can turn memory off in the settings, and temporary chats "do not create or update memories." For what companies keep from your chats, see [is it safe to paste my data into an AI chatbot?](/live-with-it/your-data-and-ai-chatbots)

## What can't a chatbot do?

Knowing the mechanism makes the limits less surprising.

- **It cannot guarantee facts.** It produces likely text, not checked text. When it invents something it is called a [hallucination](/glossary/hallucination). OpenAI says models are often rewarded for guessing rather than admitting uncertainty, because "saying 'I don't know' guarantees zero points" in many tests.
- **It does not know recent events on its own.** Anything after its knowledge cutoff needs a web search, and then it is only as good as the pages it finds.
- **It is not a calculator.** Anthropic notes that Claude "was trained on text, not equipped with mathematical algorithms." Many chatbots now hand sums to a tool, but simple arithmetic done "in its head" can slip.
- **It cannot reliably explain itself.** Ask a chatbot how it reached an answer and it will write a plausible account, which may not match what actually happened inside. Anthropic's researchers found that Claude "sometimes makes up plausible-sounding steps to get where it wants to go."
- **It sees tokens, not letters.** Because text arrives in chunks, tasks that depend on individual letters, like counting them in a word or certain word games, can trip it up.
- **It only knows what is on the desk.** If you leave out a key detail, it fills the gap with the most typical guess, which may not fit your situation. A clearer request helps, and our guide to [writing a good prompt](/use/how-to-write-a-good-prompt) shows how.


---
title: "What is AI, really? A plain-English guide"
dek: "AI is in your inbox, your photo app and your phone's chatbot. Knowing roughly how it works helps you judge when to trust it and when to double-check."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-10-07"
status: approved
approvedBy: davide-serra
madeWith: ai-assisted
metaTitle: "What is AI, really? How it works, in plain English"
metaDescription: "What people mean by AI today, how machine learning and chatbots work, why they get things wrong, and where AGI fits. A calm, plain-English guide."
shortAnswer: "Today, \"AI\" mostly means software that learns patterns from huge numbers of examples instead of following rules a person wrote. Chatbots like ChatGPT produce text by repeatedly predicting the most likely next word, which is why they can sound fluent and confident while still being wrong. They are useful helpers, not thinking minds."
sources:
  - title: "OECD.AI: Updates to the OECD's definition of an AI system explained"
    url: "https://oecd.ai/en/wonk/ai-system-definition-update"
  - title: "Dartmouth: Artificial Intelligence (AI) coined at Dartmouth"
    url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth"
  - title: "MIT News: Explained: Generative AI"
    url: "https://news.mit.edu/2023/explained-generative-ai-1109"
  - title: "OpenAI Help Center: How ChatGPT and our foundation models are developed"
    url: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-foundation-models-are-developed"
  - title: "Anthropic: Model training notice"
    url: "https://www.anthropic.com/legal/model-training-notice"
  - title: "OpenAI: Aligning language models to follow instructions"
    url: "https://openai.com/index/instruction-following/"
  - title: "OpenAI: Why language models hallucinate"
    url: "https://openai.com/index/why-language-models-hallucinate/"
  - title: "VRT: Largest study of its kind shows AI assistants misrepresent news content 45% of the time"
    url: "https://www.vrtinternational.com/news/largest-study-of-its-kind-shows-ai-assistants-misrepresent-news-content-45"
  - title: "TechRadar: Google blocked 100m spam Gmail messages using AI"
    url: "https://www.techradar.com/news/google-blocked-100m-spam-gmail-messages-using-ai"
  - title: "Google Blog: Improved search in Google Photos, plus early access to Ask Photos"
    url: "https://blog.google/products/photos/google-ask-photos-early-access/"
  - title: "Google Research: A neural network for machine translation, at production scale"
    url: "https://research.google/blog/a-neural-network-for-machine-translation-at-production-scale/"
  - title: "Scientific American: In the race to artificial general intelligence, where's the finish line?"
    url: "https://scientificamerican.com/article/what-does-artificial-general-intelligence-actually-mean"
---

## What do people mean by "AI" today?

[Artificial intelligence](/glossary/artificial-intelligence) is an old phrase with a shifting meaning. It was coined for a 1956 summer research project at Dartmouth College, organised by the computer scientist John McCarthy, according to the college. The goal then was to work out whether every feature of intelligence could be described precisely enough for a machine to copy it.

For decades, "AI" could mean almost any clever program, from a chess computer to a system that followed long lists of hand-written rules. Today the word usually means something narrower: software that learns from examples instead of being told exactly what to do.

One widely cited official definition comes from the OECD, an international organisation of governments. Its updated wording, approved by member countries in late 2023, says an AI system is "a machine-based system that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments."

Strip away the formal language and the key word is "infers". An AI system works out an answer from patterns, rather than looking it up or following a fixed recipe.

## What is machine learning, in everyday terms?

[Machine learning](/glossary/machine-learning) is the main way modern AI gets built. Instead of writing rules ("if an email mentions a lottery win, mark it as spam"), engineers show a program a very large number of examples and let it find the patterns itself.

Think of how a child learns what a dog is. Nobody hands them a definition. They see hundreds of dogs, get corrected when they call a cat a dog, and gradually build a sense of "dogness". A machine learning [model](/glossary/model) does something loosely similar with numbers: it adjusts millions or billions of internal settings until its guesses match the examples it was shown.

According to MIT News, before the recent boom most AI meant exactly this kind of prediction: a model trained on millions of examples to flag possible tumours in X-rays, or to estimate whether a borrower will repay a loan. The examples a model learns from are called its [training data](/glossary/training-data), and the quality of that data shapes everything the model does.

## How do chatbots actually write their answers?

The [chatbots](/glossary/chatbot) most people now use, such as ChatGPT, Gemini or Claude, are built on [large language models](/glossary/large-language-model). These are machine learning models trained on enormous amounts of written text.

The core trick is surprisingly simple to describe. Anthropic, which makes Claude, says that after its first stage of training "the model can predict the most likely next word in a sequence based on the words that come before it," and compares this to the autocomplete on your phone. OpenAI's help centre describes the same thing: the model generates a response "one word at a time", each time predicting the next most likely word. (Strictly, models work in [tokens](/glossary/token), which are chunks of words, but "word" is close enough.)

Where does all that text come from? OpenAI says it uses information that is publicly available on the internet, information it licenses from partners, and information provided by users, human trainers and researchers. Anthropic lists similar sources: public web pages, third-party datasets, data from users who opt in, and data it generates itself. Both companies say their models learn general patterns rather than storing copies of what they read.

A model that has only learned to predict text is not yet a helpful assistant. It might continue your question with three more questions instead of answering it. So companies add a second stage, often called post-training, where people step in.

OpenAI described an early version of this in 2022. Human labellers wrote examples of good answers and ranked several of the model's attempts from best to worst. Those rankings were used to train the model towards the kind of answer people preferred. Anthropic says its reviewers rate responses on "quality, helpfulness, safety, and accuracy," and that it also trains models to follow a written set of principles, a technique it calls Constitutional AI.

Put together: a chatbot is a very large pattern-predictor, trained on a huge slice of human writing, then tuned by people to behave like a polite, useful assistant. Nothing in that recipe involves the system understanding the world the way you do. That is still debated among researchers, but it is a sensible default assumption for everyday use.

## Why can a chatbot sound so sure and still be wrong?

Because sounding right and being right are different skills, and the training mostly rewards the first.

When a chatbot invents a fact, a quote or a source, it is called a [hallucination](/glossary/hallucination). OpenAI defines these as "plausible but false statements generated by language models." In a September 2025 research post, it gave two reasons they happen.

The first is how models learn. Patterns that repeat across millions of documents, like spelling and grammar, are learned well. But a rare, arbitrary fact, such as a particular person's birthday, cannot be reliably predicted from patterns, so the model may produce something that merely looks right.

The second is how models are tested. OpenAI says most evaluations grade only on accuracy, which encourages guessing: "Saying 'I don't know' guarantees zero points." A model trained to score well learns that a confident guess beats an honest shrug.

This matters in practice. In October 2025, 22 public broadcasters from 18 countries, led by the European Broadcasting Union and the BBC, tested ChatGPT, Copilot, Gemini and Perplexity on more than 3,000 news questions. According to Belgian broadcaster VRT, which took part, 45% of the answers had at least one significant problem, and 31% had missing or misleading sources.

What you can do: treat a chatbot's answer as a first draft, not a verdict. Ask for its sources, open them, and check anything that matters (health, money, law, names and dates) somewhere else. Our guide to [writing a good prompt](/use/how-to-write-a-good-prompt) also helps.

## What is AI good at, and bad at, right now?

Some of the most reliable AI is so familiar that people forget it is there.

- **Spam filters.** Google said in 2019 that machine learning helped Gmail block 99.9% of spam, phishing and malware, according to TechRadar's report. Spam filtering suits AI well: there are billions of examples, and a mistake is easy to fix.
- **Photo search.** Your phone can find "beach" or "dog" in thousands of unlabelled pictures. In September 2024, Google said its Photos app had begun accepting everyday descriptions such as "Kayaking on a lake surrounded by mountains."
- **Translation.** In 2016, Google switched its Translate service to a neural system that treats "the entire input sentence as a unit for translation," instead of translating phrase by phrase. Its own human raters found errors fell by 55% to 85% on several major language pairs.
- **Chatbots.** They are good at drafting, summarising, explaining and brainstorming. They are weaker at exact facts, recent events and arithmetic, and they cannot tell you when they are out of their depth unless they have been built to.

A rough rule of thumb follows from how these systems learn. AI does best on tasks with lots of examples, clear patterns and low cost of error. It does worst on rare cases, brand-new situations and anything where one wrong detail is a serious problem. It also absorbs the [biases](/glossary/bias) in its training data. Our [EU AI Act explainer](/live-with-it/eu-ai-act-explained) covers how European law treats the riskier uses.

## So where do "AGI" and "superintelligence" fit?

Everything above describes AI that exists today. [AGI](/glossary/agi), or artificial general intelligence, is a hypothetical next step: a system that matches or beats people across most kinds of thinking, not just one task.

There is no agreed definition. Scientific American notes that "few people agree on what AGI is to begin with." OpenAI's charter defines it as "highly autonomous systems that outperform humans at most economically valuable work." Some researchers reject the idea altogether: the Berkeley psychologist Alison Gopnik has called it "a very good marketing slogan."

[Superintelligence](/glossary/superintelligence) goes further still: an AI that greatly exceeds human ability in nearly every field. It remains a claim about the future, made by some company leaders and researchers and disputed by others. Nobody can show you one.

To add to the confusion, since late September 2026 the US federal government has been using "super intelligence" as its official word for ordinary AI. We explain what that change does and does not mean in [SI, AI or AGI?](/super-intelligence/si-ai-or-agi).

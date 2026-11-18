---
title: "How is an AI model trained, from data to chatbot?"
dek: "Every chatbot you use went through the same long production line: collect text, teach a model to predict it, coach it into an assistant, then test it. Knowing the steps explains what chatbots know, how they behave and why they cost so much."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-11-18"
status: approved
approvedBy: davide-serra
madeWith: ai-assisted
image: /illustrations/how-ai-models-are-trained.svg
imageAlt: "A stack of paper pages with an arrow pointing into a mint-green machine with dials and sliders, and a second arrow leading out to a speech bubble with a yellow tick mark on its corner."
metaTitle: "How is an AI model trained? From data to chatbot"
metaDescription: "Training data, pre-training, fine-tuning, human feedback, safety tests and cost: how AI models like ChatGPT are built, step by step, in plain English."
shortAnswer: "An AI model is trained in stages. First it reads trillions of words, mostly scraped from the public web and filtered, and learns to predict the next piece of text; this pre-training takes months on thousands of chips. Then people and other AI systems coach it with example answers and ratings until it behaves like a helpful assistant, and it is tested for dangerous abilities before release. The biggest training runs cost tens to hundreds of millions of dollars, and whether companies may use copyrighted work this way is still being fought in court."
sources:
  - title: "Common Crawl: home page"
    url: "https://commoncrawl.org/"
  - title: "Hugging Face (arXiv): The FineWeb Datasets, decanting the web for the finest text data at scale"
    url: "https://arxiv.org/abs/2406.17557"
  - title: "OpenAI Help Center: How ChatGPT and our foundation models are developed"
    url: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-foundation-models-are-developed"
  - title: "TechCrunch: Anthropic users face a new choice, opt out or share your data for AI training"
    url: "https://techcrunch.com/2025/08/28/anthropic-users-face-a-new-choice-opt-out-or-share-your-data-for-ai-training/"
  - title: "Meta AI: Introducing Llama 3.1"
    url: "https://ai.meta.com/blog/meta-llama-3-1/"
  - title: "Stanford HAI: AI Index Report 2025, chapter 1 (research and development)"
    url: "https://hai-production.s3.amazonaws.com/files/hai_ai-index-report-2025_chapter1_final.pdf"
  - title: "TIME: OpenAI used Kenyan workers on less than $2 per hour to make ChatGPT less toxic"
    url: "https://time.com/6247678/openai-chatgpt-kenya-workers/"
  - title: "Nature (via PubMed Central): DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12443585/"
  - title: "Scientific American: Secrets of DeepSeek AI model revealed in landmark paper"
    url: "https://www.scientificamerican.com/article/secrets-of-chinese-ai-model-deepseek-revealed-in-landmark-paper/"
  - title: "The Register: Sorry, but DeepSeek didn't really train its flagship model for $294,000"
    url: "https://www.theregister.com/2025/09/19/deepseek_cost_train/"
  - title: "OpenAI: Preparedness Framework, version 2"
    url: "https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf"
  - title: "UK AI Security Institute: Pre-deployment evaluation of Anthropic's upgraded Claude 3.5 Sonnet"
    url: "https://aisi.gov.uk/work/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet"
  - title: "Resultsense: Inside AISI, NYT profiles the UK's £360m frontier model red team"
    url: "https://www.resultsense.com/news/2026-05-25-aisi-frontier-model-redteam-nyt/"
  - title: "Epoch AI: How much does it cost to train frontier AI models?"
    url: "https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models"
  - title: "European Commission: General-purpose AI obligations under the AI Act"
    url: "https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act"
---

Training an AI [model](/glossary/model) is not one event but a production line with four main stations: gather the data, pre-train, coach the model into an assistant, and test it. Each station leaves fingerprints on the [chatbot](/glossary/chatbot) you end up talking to, from what it knows to how polite it is to what it refuses to do.

This page follows that line from start to finish. If you want to know what happens when you type a question into a finished chatbot, read [how does an AI chatbot actually work?](/understand/how-chatbots-work) first. Here we stay on the factory floor.

## Where does the training data come from?

Mostly from the public web. A common starting point is Common Crawl, a non-profit that has been copying the web since 2007 and calls itself "a free, open repository of web crawl data that can be used by anyone." It says its archive holds over 300 billion pages, with 3 to 5 billion new pages added each month.

Raw web pages are mostly junk for this purpose: menus, cookie banners, spam, duplicates. So the first real job is cleaning. Hugging Face, an AI company that publishes its methods, describes one such pipeline in its paper on FineWeb, a free dataset of 15 trillion [tokens](/glossary/token) (chunks of words) built from 96 Common Crawl snapshots. The steps are typical of the industry:

- **Pull out the text**, throwing away page layout and boilerplate.
- **Keep one language**, using a small program that guesses what language each page is in.
- **Drop low-quality pages**, using rules such as "too many repeated lines" or "too few sentences that end properly", plus a blocklist of adult sites.
- **Remove duplicates**, because the same article copied across a thousand sites would otherwise be learned a thousand times.
- **Strip some personal details**, such as email addresses, before the dataset is published.

After basic filtering, the Hugging Face team was left with about 36 trillion tokens; removing duplicates within each snapshot cut that to about 20 trillion, before further quality filters brought it to the final 15 trillion.

The big labs say they do something similar with their own [training data](/glossary/training-data). OpenAI's help centre lists three sources: information "publicly available on the internet", information it gets through partners, and information that users, human trainers and researchers provide or generate. It says it does not seek content it knows is behind paywalls or on the "dark web", and that it filters out "hate speech, adult content, sites that primarily aggregate personal information, and spam."

That third source can include you. In August 2025, TechCrunch reported, Anthropic told users of its consumer Claude plans that their chats would be used for training unless they switched it off, with the setting turned on by default for existing users. Most big chatbots have a similar switch; our guide [is it safe to paste my data into an AI chatbot?](/live-with-it/your-data-and-ai-chatbots) shows where to find it.

There is also a looming shortage. Stanford's AI Index 2025 cites projections by the research group Epoch AI that the current stock of human-written training data "will be fully utilized between 2026 and 2032." One response is synthetic data, text written by other AI models: Meta said in 2024 that it used synthetic data to produce "the vast majority" of the examples in one of its later training stages.

## What happens in pre-training?

Pre-training is the long, expensive stage where a model learns from all that text. The model is a [neural network](/glossary/neural-network): a huge grid of adjustable numbers, called parameters. It is shown a stretch of text with the next token hidden, guesses what comes next, and every parameter is nudged slightly so the right answer becomes a little more likely. Repeat that across trillions of tokens.

The scale is the hard part to picture. When Meta released Llama 3.1 405B in July 2024 (the "405B" means about 405 billion parameters), it said it had trained the model on over 15 trillion tokens using more than 16,000 of Nvidia's H100 chips. According to the AI Index, Google's Gemini 1.0 Ultra took around 100 days to train. Why this needs so many specialised chips is explained in [why does AI need so many chips, and what is a GPU?](/understand/ai-chips-and-gpus)

What comes out is called a base model. It has absorbed grammar, facts, styles and a great deal of the internet's [bias](/glossary/bias), but it is not yet an assistant. Ask it a question and it may simply continue with more questions, because that is what often follows a question on a web page. Its knowledge also stops at the date its data was collected, which is why chatbots have a knowledge cutoff.

## How does a raw model become a helpful assistant?

This stage is usually called post-training, and it is where a company shapes its product's personality. It is a kind of [fine-tuning](/glossary/fine-tuning): further training on a much smaller, carefully chosen set of examples.

There are two main ingredients.

**Example answers.** People write model conversations: a question and a good reply. Training on thousands of these teaches the base model the shape of a helpful answer. The technical name is supervised fine-tuning.

**Ratings.** The model writes several answers to the same request and people, or sometimes another AI model, say which is better. The model is then trained towards the preferred kind of answer. This is the method usually called reinforcement learning from human feedback, and it is a big part of what labs call [alignment](/glossary/alignment), which we cover in depth in [what do AI labs mean by 'alignment'?](/super-intelligence/what-is-ai-alignment)

In practice the two are repeated in rounds. Meta described its Llama 3.1 post-training as "several rounds of alignment", each combining example answers with two further techniques for picking out and rewarding the better replies.

Behind this stage is a large human workforce that most users never hear about. In January 2023 TIME reported that workers in Kenya, employed through the outsourcing firm Sama, earned a take-home wage of between about $1.32 and $2 an hour labelling tens of thousands of text passages, many describing violence and abuse, to build a filter that kept toxic content out of ChatGPT.

## How do "reasoning" models learn to think step by step?

Newer models that work through a problem before answering are trained with an extra round of reinforcement learning, where the reward comes from getting checkable answers right rather than from human taste.

The clearest public description comes from the Chinese company DeepSeek, whose R1 model was described in a peer-reviewed paper in Nature in September 2025. For maths, the team checked whether the final answer was correct; for code, a program ran the model's answer against test cases. The model was rewarded for correct results and left to work out its own way of getting there, which the authors say removed the need for "human-labelled reasoning trajectories". They chose these simple rule-based checks partly because reward systems built from other AI models could be gamed by the model being trained, a problem known as reward hacking.

## How is a model tested before release?

Before launch, companies try to break their own models. Testers, inside the company and outside it, attack the model on purpose to see whether it will help with something dangerous or behave badly under pressure. This is called red-teaming; Meta, for example, says it ran "extensive red teaming with both external and internal experts" on Llama 3.1.

Big labs also measure specific dangerous abilities against thresholds they publish themselves. OpenAI's Preparedness Framework, last updated in April 2025, tracks three areas: biological and chemical weapons, cybersecurity, and AI that improves itself. If a model crosses its "High" level in one of these, OpenAI says it must have safeguards in place before release.

Governments test too, but with limited powers. The UK's AI Security Institute and its US counterpart jointly tested an Anthropic model before its release in 2024, covering biology, cyber attacks, software development and how well its safeguards held. They stressed they had only a "limited period" of access. A New York Times profile, summarised by Resultsense in May 2026, describes the UK institute as a red team of about 100 people with a £360 million budget but "no regulatory powers".

The EU has set some ground rules. Since 2 August 2025, the European Commission says, makers of general-purpose AI models must keep technical documentation, have a copyright policy and publish a summary of their training content. Models trained with very large amounts of computing are presumed to pose "systemic risk" and must also assess and reduce risks and report serious incidents. Our [EU AI Act explainer](/live-with-it/eu-ai-act-explained) has the wider picture.

## How much does it cost to train a model?

A lot, and the bill keeps growing. Epoch AI found in 2024 that the cost of training frontier models had grown "by a factor of 2 to 3x per year for the past eight years", and projected that the largest training runs would cost more than a billion dollars by 2027. Estimates cited in the AI Index put GPT-4's training at about $79 million and Llama 3.1 405B at about $170 million. Companies rarely publish their own figures, so these are outside estimates.

Most of the money goes on chips. Epoch's breakdown of development costs for several models put hardware at 47 to 67 percent, research staff at 29 to 49 percent, and energy at only 2 to 6 percent. The energy is still large in absolute terms; see [how much energy and water does AI really use?](/live-with-it/ai-energy-and-water)

Headline cost figures need care. DeepSeek said in supplementary material to its Nature paper that R1 cost the equivalent of $294,000 to train, Scientific American reported. But that covered only the reasoning stage. The base model underneath cost about $6 million more, and The Register points out that both figures assume rented chips at about $2 an hour, leaving out the hardware, research and failed attempts that came before.

## Is it legal to train on other people's work?

That is the most contested part of the whole process. Much of the web, and many books, articles and images used in training, were made by people who were never asked and are not paid. Some of them have taken AI companies to court, and the rulings so far point in different directions. We go through the main cases, and what the EU requires, in [who owns AI-generated images and text?](/live-with-it/who-owns-ai-generated-content)

For readers, the practical upshot of the whole production line is simple. A chatbot knows what was in its data up to a cutoff date, behaves the way its post-training coached it to, and refuses what its makers tested and trained it to refuse. When it surprises you, one of those stations is usually the reason.

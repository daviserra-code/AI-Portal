---
title: "What is open-source AI, and why does it matter?"
dek: "Some AI models can be downloaded and run on your own computer, for free. Here is what 'open' really means, which models you can get, what you gain, and why the idea is so hotly argued over."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-10-28"
status: draft
madeWith: ai-assisted
image: /illustrations/open-source-ai.svg
imageAlt: "An open green box with a laptop sitting inside it showing a speech bubble, and a yellow key lying beside the box."
metaTitle: "What is open-source AI? Open weights vs closed models"
metaDescription: "Open source, open weights or closed: what the labels mean, which AI models you can download in 2026, what you gain, the safety debate and the EU AI Act."
shortAnswer: "Open-source AI usually means an AI model whose inner workings are published so anyone can download, run and change it, instead of only using it through a company's app. Most models called 'open' are really open-weights models: you get the finished model, but not all the data and code used to build it. For ordinary people that means AI that can run privately on your own computer, at no cost per question, though the biggest models still need serious hardware and the safety trade-offs are hotly debated."
sources:
  - title: "Open Source Initiative: The Open Source AI Definition 1.0"
    url: "https://opensource.org/ai/open-source-ai-definition"
  - title: "Open Source Initiative: Open Source AI overview"
    url: "https://opensource.org/ai"
  - title: "InfoWorld: OSI unveils Open Source AI Definition 1.0"
    url: "https://www.infoworld.com/article/3593266/osi-unveils-open-source-ai-definition-1-0.html"
  - title: "SiliconANGLE: OSI clarifies what makes AI systems open source, and most open models fall short"
    url: "https://siliconangle.com/2024/10/28/osi-clarifies-makes-ai-systems-open-source-open-models-fall-short/"
  - title: "Axios: Meta, OSI tussle over definition of open source AI"
    url: "https://www.axios.com/2024/10/29/meta-osi-definition-open-source-ai-llama"
  - title: "Hugging Face: Llama 4 Maverick model page and Llama 4 Community License"
    url: "https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Original"
  - title: "The Decoder: Meta releases first multimodal Llama 4 models, leaves EU out in the cold"
    url: "https://the-decoder.com/meta-releases-first-multimodal-llama-4-models-leaves-eu-out-in-the-cold/"
  - title: "The Next Web: Meta launches Muse Spark, the first model from Meta Superintelligence Labs"
    url: "https://thenextweb.com/news/meta-muse-spark-msl-first-model"
  - title: "Google Open Source Blog: Gemma 4, expanding the Gemmaverse with Apache 2.0"
    url: "https://opensource.googleblog.com/2026/03/gemma-4-expanding-the-gemmaverse-with-apache-20.html"
  - title: "Hugging Face: Gemma 4 E2B model card"
    url: "https://huggingface.co/google/gemma-4-E2B-it"
  - title: "OpenAI: Introducing gpt-oss"
    url: "https://openai.com/index/introducing-gpt-oss/"
  - title: "OpenAI Cookbook: How to run gpt-oss locally with Ollama"
    url: "https://developers.openai.com/cookbook/articles/gpt-oss/run-locally-ollama"
  - title: "Hugging Face: DeepSeek-V4.1-Flash model page"
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
  - title: "Hugging Face: Qwen3.6-27B model page"
    url: "https://huggingface.co/Qwen/Qwen3.6-27B"
  - title: "Hugging Face: Mistral Small 4 model page"
    url: "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603"
  - title: "Hugging Face: Mistral Medium 3.5 model page"
    url: "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B"
  - title: "International AI Safety Report 2026: Executive summary"
    url: "https://internationalaisafetyreport.org/publication/2026-report-executive-summary"
  - title: "European Commission: Guidelines for providers of general-purpose AI models, FAQ"
    url: "https://digital-strategy.ec.europa.eu/en/faqs/guidelines-obligations-gpai-providers"
  - title: "Orrick: The EU AI Act, application to open-source projects"
    url: "https://www.orrick.com/de-DE/Insights/2024/09/The-EU-AI-Act-Application-to-Open-Source-Projects"
---

Most people meet AI through an app: you type into ChatGPT, Gemini or Claude, and the [model](/glossary/model) doing the work sits on a company's computers. You never see it and you can't take it home. Open AI models work differently. Their makers publish the model itself, so anyone can download it, run it on their own machine and change it.

That simple idea has turned into one of the biggest arguments in AI. It touches privacy, cost, who controls the technology, and how safe it is.

## What's the difference between open source, open weights and closed?

A trained AI model is, at heart, a very large file of numbers called weights. They are what the model learned during training, and they decide how it answers. If you want the background on how that works, see [how chatbots work](/understand/how-chatbots-work).

There are roughly three levels of openness.

- **Closed models.** The weights stay private. You can use the model only through the company's app or paid service, on its terms. The flagship models behind the best-known chatbots work this way.
- **Open-weights models.** The company publishes the weights, usually with a licence saying what you may do with them. You can download and run the model, and adapt it with extra training (called [fine-tuning](/glossary/fine-tuning)). But you usually don't get the [training data](/glossary/training-data) or the full recipe used to build it. This is what most "open" AI actually is. Our glossary has a short entry on the [open-weights model](/glossary/open-weights-model).
- **Open-source AI, in the strict sense.** Everything needed to understand and rebuild the model is shared: the weights, the code used to train and run it, and detailed information about the data, all under terms that let anyone use and share it.

The gap between the second and third levels is where the argument starts.

## Who decides what counts as open-source AI?

For ordinary software, the Open Source Initiative (OSI), a non-profit, has kept the standard definition of "open source" for decades. It published the [Open Source AI Definition 1.0](https://opensource.org/ai/open-source-ai-definition) on 28 October 2024, according to [InfoWorld](https://www.infoworld.com/article/3593266/osi-unveils-open-source-ai-definition-1-0.html).

The [OSI says](https://opensource.org/ai) an open-source AI system must give users four freedoms: to use it for any purpose without asking permission, to study how it works, to modify it, and to share it, changed or not. To make those freedoms real, the definition asks for three things: "the complete source code used to train and run the system", the model parameters such as weights, and "sufficiently detailed information about the data used to train the system" so that a skilled person could build a comparable one.

Note what it does not demand: the training data itself. That is a compromise, and it is criticised from both sides. Some analysts quoted by [SiliconANGLE](https://siliconangle.com/2024/10/28/osi-clarifies-makes-ai-systems-open-source-open-models-fall-short/) argue that without the data, a model is not truly open. Rob Enderle of the Enderle Group put it bluntly: "without transparency on training data you really don't have an open platform."

Meanwhile, many popular models fail the test anyway. SiliconANGLE reported at the time that Meta's Llama models fell short, partly because of commercial restrictions and partly because Meta does not publish its training data. Meta disagreed. A spokesperson said "there is no single open source AI definition", according to [Axios](https://www.axios.com/2024/10/29/meta-osi-definition-open-source-ai-llama). The OSI has no power to stop companies calling their models open source, so in everyday use the label is loose. A safe rule: when a company says "open source", check whether it really means open weights, and read the licence.

## Which open models can you download today?

As of late October 2026, these are the best-known families. Licences matter here, because they range from very permissive to quite restrictive.

- **Meta Llama.** Llama 4, released in April 2025, comes under Meta's own Llama 4 Community License. According to the [licence text](https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Original), services with more than 700 million monthly users must ask Meta for permission, and all users must follow an acceptable use policy. [The Decoder](https://the-decoder.com/meta-releases-first-multimodal-llama-4-models-leaves-eu-out-in-the-cold/) reported that companies and individuals based in the EU were excluded from using the image-capable versions, though not as end users of apps built on them. In April 2026 Meta launched Muse Spark, its newest model, which [The Next Web](https://thenextweb.com/news/meta-muse-spark-msl-first-model) reports "is closed source"; Meta says it hopes to open future versions.
- **Google Gemma.** Google's [Gemma 4](https://opensource.googleblog.com/2026/03/gemma-4-expanding-the-gemmaverse-with-apache-20.html), announced in April 2026, is the first Gemma release under Apache 2.0, a standard permissive licence the OSI approves. Its [model card](https://huggingface.co/google/gemma-4-E2B-it) says the smallest versions are designed to run on laptops and phones.
- **OpenAI gpt-oss.** In August 2025 OpenAI [released](https://openai.com/index/introducing-gpt-oss/) two open-weights models, gpt-oss-120b and gpt-oss-20b, under Apache 2.0. OpenAI says the smaller one runs in 16 GB of memory.
- **DeepSeek.** The Chinese lab publishes its models under the permissive MIT licence. Its latest, [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash), appeared on Hugging Face in September 2026. It is far too big for a home computer; most people use it through online services.
- **Alibaba Qwen.** The [Qwen3.6](https://huggingface.co/Qwen/Qwen3.6-27B) models, released in April 2026, use Apache 2.0. Licences vary between releases, so check each one.
- **Mistral.** The French company publishes some models under Apache 2.0, such as [Mistral Small 4](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603), and others under a modified MIT licence that, per its [model page](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B), makes "exceptions for companies with large revenue", as with Mistral Medium 3.5.

Even the most permissively licensed of these are open weights rather than open source by the OSI's standard, unless their makers also publish training code and data information.

## What do ordinary people get out of it?

**AI that stays on your own machine.** When a model runs on your laptop, what you type never leaves it. That matters for medical questions, legal papers or work documents. Compare that with what cloud chatbots keep, covered in [our guide to your data and AI chatbots](/live-with-it/your-data-and-ai-chatbots). Google says Gemma 4 "allows for local, private execution that doesn't rely on cloud-only infrastructure."

**It works offline, and there's no bill per question.** Free apps such as Ollama let you download a model and chat with it without an internet connection. OpenAI's own [guide](https://developers.openai.com/cookbook/articles/gpt-oss/run-locally-ollama) to running gpt-oss this way is aimed at "consumer hardware, like running a model on a PC or Mac", though it recommends at least 16 GB of graphics or unified memory for the smaller model. On an older or cheaper machine, smaller models will run, but slowly and less capably.

**Cheaper and more varied services.** Because anyone can host open models, many apps and smaller companies build on them instead of paying a big AI firm. You may already be using one without knowing.

**Control.** A company can change, restrict or withdraw its closed model at any time. A model file you have downloaded stays exactly as it is.

The honest catch: the biggest open models need data-centre hardware, and the small ones that fit on a laptop are less capable than the flagship models behind the big chatbot apps. For everyday chatting, writing and summarising, a mid-sized open model on a decent laptop is good enough for many people. For help choosing among the big apps instead, see [which chatbot should you use](/use/chatbots-compared).

## Why do some people think open models are risky?

The same openness that gives you control also gives it to everyone else.

Closed models come with safety rules the company enforces: they refuse some requests, and the company can watch for abuse and block accounts. With open weights, those protections can be weakened. The [International AI Safety Report 2026](https://internationalaisafetyreport.org/publication/2026-report-executive-summary), written by more than 100 experts, says open-weight models offer "significant research and commercial benefits, particularly for lesser-resourced actors", but that their safeguards "are easier to remove", that people "can use them outside of monitored environments", and that "they cannot be recalled once released."

Companies releasing open models now test for this. OpenAI says it deliberately retrained gpt-oss to strip its refusals on biology and cybersecurity topics, as an attacker might, and found that these versions "were unable to reach high capability levels" by its own measures. That is the company's own assessment, though it says three outside expert groups reviewed the method.

Supporters of open models answer that openness lets independent researchers study how AI behaves, find flaws and check companies' claims, and stops a handful of firms from controlling a technology this important. Both sides tend to agree the stakes rise as models get more capable. That is why open weights keep coming up in the wider debate about [AI safety](/super-intelligence/what-is-ai-safety).

## How does the EU AI Act treat open-source models?

Europe's [AI Act](/glossary/ai-act) gives open-source AI some relief, but less than the label suggests. Our [EU AI Act explainer](/live-with-it/eu-ai-act-explained) covers the law in general.

For apps and tools built with AI, the Act largely does not apply to systems released under free and open-source licences. But, as the law firm [Orrick](https://www.orrick.com/de-DE/Insights/2024/09/The-EU-AI-Act-Application-to-Open-Source-Projects) explains, the exemption does not cover banned uses, high-risk uses, or AI that talks to people or produces content they see. Those categories carry most of the Act's duties, so in practice the exemption is narrow.

For the big general-purpose models themselves, the [European Commission](https://digital-strategy.ec.europa.eu/en/faqs/guidelines-obligations-gpai-providers) says open-source providers can skip some paperwork, such as technical documentation for authorities, if three conditions hold: the licence allows access, use, change and sharing "without monetisation"; the weights and details of the model are public; and the model is not one deemed to carry "systemic risk". They must still publish a summary of their training data and have a copyright policy. The most powerful models, those trained with more than 10^25 operations of computing, are presumed to carry systemic risk and must follow every rule, "regardless of whether the model is open-source."

So a model with a restrictive licence, or one from a company that charges for it, may not count as open source under the AI Act at all, whatever its maker calls it.

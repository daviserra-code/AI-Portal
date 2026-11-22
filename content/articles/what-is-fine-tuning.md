---
title: "What is fine-tuning, and why do companies build their own AI?"
dek: "Many companies now say they have \"their own AI\". Almost none built it from nothing. Most took an existing model and gave it extra lessons. Here is how that works, what it costs and where it goes wrong."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-11-22"
status: draft
madeWith: ai-assisted
image: /illustrations/what-is-fine-tuning.svg
imageAlt: "A mint-green speech bubble with lines of text, plugged into a large round dial with a curved arrow showing it being turned, and a yellow star above the dial."
metaTitle: "What is fine-tuning? How companies make their own AI"
metaDescription: "Fine-tuning gives an existing AI model extra lessons on a company's own examples. How it differs from prompting and RAG, what it costs and what goes wrong."
shortAnswer: "Fine-tuning means taking an AI model that has already been trained and giving it extra training on a smaller set of your own examples, so it learns a particular tone, format or specialist task. It is far cheaper than building a model from scratch, which is why most \"company AI\" is an existing model fine-tuned or simply connected to company documents. It is good at teaching style and narrow skills, worse at teaching new facts, and it can quietly weaken a model's safety training."
sources:
  - title: "OpenAI API docs: Model optimization"
    url: "https://developers.openai.com/api/docs/guides/model-optimization"
  - title: "OpenAI API docs: Supervised fine-tuning"
    url: "https://developers.openai.com/api/docs/guides/supervised-fine-tuning"
  - title: "OpenAI API docs: Deprecations"
    url: "https://developers.openai.com/api/docs/deprecations"
  - title: "OpenAI API docs: Pricing"
    url: "https://developers.openai.com/api/docs/pricing"
  - title: "OpenAI: Introducing improvements to the fine-tuning API and expanding our custom models program"
    url: "https://openai.com/index/introducing-improvements-to-the-fine-tuning-api-and-expanding-our-custom-models-program/"
  - title: "Google Cloud docs: About supervised fine-tuning for Gemini models"
    url: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini-tuning"
  - title: "Bloomberg: Introducing BloombergGPT, a 50-billion-parameter large language model for finance"
    url: "https://www.bloomberg.com/company/press/bloomberggpt-50-billion-parameter-llm"
  - title: "Wu et al. (arXiv): BloombergGPT, a large language model for finance"
    url: "https://arxiv.org/abs/2303.17564v1"
  - title: "Li et al., Queen's University and J.P. Morgan AI Research (arXiv): Are ChatGPT and GPT-4 general-purpose solvers for financial text analytics?"
    url: "https://arxiv.org/html/2305.05862v2"
  - title: "University of Ljubljana (Hugging Face): GaMS3-12B-Instruct model card"
    url: "https://huggingface.co/cjvt/GaMS3-12B-Instruct/blob/main/README.md"
  - title: "University of Ljubljana (arXiv): Building a strong instruction language model for a less-resourced language"
    url: "https://arxiv.org/html/2603.01691v1"
  - title: "Hu et al. (arXiv): LoRA, low-rank adaptation of large language models"
    url: "https://arxiv.org/abs/2106.09685"
  - title: "Lewis et al. (arXiv): Retrieval-augmented generation for knowledge-intensive NLP tasks"
    url: "https://arxiv.org/abs/2005.11401"
  - title: "Ovadia et al. (arXiv): Fine-tuning or retrieval? Comparing knowledge injection in LLMs"
    url: "https://arxiv.org/abs/2312.05934"
  - title: "Qi et al. (arXiv): Fine-tuning aligned language models compromises safety, even when users do not intend to"
    url: "https://arxiv.org/abs/2310.03693v1"
  - title: "Nature (press release via Nature Asia): Training AI on a narrow task can lead to broad misbehaviour"
    url: "https://www.natureasia.com/en/info/press-releases/detail/9204"
  - title: "Luo et al. (arXiv): An empirical study of catastrophic forgetting in large language models during continual fine-tuning"
    url: "https://arxiv.org/abs/2308.08747"
---

[Fine-tuning](/glossary/fine-tuning) is extra training for an AI [model](/glossary/model) that already exists. You take a model that can already read and write, show it a few hundred or a few thousand examples of exactly the work you want, and it adjusts itself to do that work more the way you like.

That is what most companies mean when they say they have "built their own AI". Very few start from an empty model. Most borrow a general one and teach it the house style.

## How is fine-tuning different from training a model from scratch?

Training from scratch means building the model's general knowledge in the first place: reading a large share of the public web over months on thousands of chips. We walk through that production line, and its cost, in [how is an AI model trained, from data to chatbot?](/understand/how-ai-models-are-trained) The short version is that only a handful of very large companies can afford it.

Fine-tuning comes after that. The general model already knows grammar, facts and how to hold a conversation. Fine-tuning adds a thin layer of specialist habits on top, using a tiny amount of data by comparison. OpenAI's documentation says the minimum is 10 examples and suggests starting with 50 well-made ones, then checking the results.

A useful picture: training from scratch is a school education. Fine-tuning is the first month at a new job, where someone who can already read and write learns how this particular office answers the phone.

The AI labs use fine-tuning themselves to turn a raw model into an assistant. This page is about everyone else: businesses, hospitals and universities that adapt someone else's model.

## Is that the same as writing a good prompt, or giving the AI my documents?

No. There are three common ways to make a general model fit a job, and they are often confused.

- **Prompting.** You change what you say to the model, not the model itself. Instructions, a few examples and a description of the tone you want all go in the message. Nothing is learned permanently; the model forgets it all at the end of the conversation. Our guide [how to write a good prompt](/use/how-to-write-a-good-prompt) covers this.
- **Retrieval, or RAG.** Short for retrieval-augmented generation, a method described in a 2020 research paper by Patrick Lewis and colleagues. Before the model answers, a search system finds the relevant passages in a set of documents (a company handbook, a product catalogue, a law database) and pastes them into the model's working memory. The model itself is unchanged; it simply reads the right pages first. How much it can read at once depends on its [context window](/glossary/context-window), which we explain in [how much can a chatbot remember?](/understand/context-windows-and-memory)
- **Fine-tuning.** The model's internal settings, the billions of numbers that make up its [neural network](/glossary/neural-network), are actually changed by more training. The new behaviour is built in, so you don't have to repeat instructions every time.

Most experts advise trying them in that order. OpenAI's own guide says that the prompt-writing process "may be all you need in order to get great results for your use case."

## So when is fine-tuning the right choice?

It shines when you want to change how a model behaves rather than what it knows. According to OpenAI's documentation, fine-tuning helps a model "consistently format responses in a certain way or handle novel inputs". It also lists practical gains: you can teach the model with more examples than would fit in a single message, which "saves on token costs at scale and can be lower latency", and you can "train a smaller, cheaper, faster model to excel at a particular task where a larger model is not cost-effective."

That adds up to four common reasons companies fine-tune.

**Tone and format.** A bank that wants every reply to follow its complaints procedure, or a newsroom that wants summaries in its own style, can show the model thousands of past examples instead of writing ever-longer instructions.

**Specialist skills.** Some narrow jobs, such as pulling particular details out of legal contracts or labelling medical notes, are done better by a model that has practised them.

**Cost and speed.** A small fine-tuned model can sometimes match a big general one on one narrow task, and small models are cheaper and faster to run. When OpenAI promoted its fine-tuning service in April 2024, it said the job site Indeed had cut the length of its prompts by 80% with a fine-tuned model, which let it scale from under 1 million to roughly 20 million messages to job-seekers a month.

**Privacy and control.** With an [open-weights model](/glossary/open-weights-model), one whose internal numbers are published for anyone to download, a company can fine-tune and run it on its own computers, so customer or patient data never leaves the building. Our explainer on [open-source AI](/understand/open-source-ai) explains what "open" usually does and doesn't mean.

## Is fine-tuning a good way to teach an AI new facts?

Usually not, and this is the most common misunderstanding. A 2023 study by Oded Ovadia and colleagues compared fine-tuning with retrieval for adding knowledge to a model. Retrieval did better, both for facts the model had partly seen before and for entirely new information. The authors found that models had real difficulty learning new facts through the kind of fine-tuning they tested, which simply feeds the model more text to read.

That matches the everyday experience of people building these systems. If your price list changes every week, or your staff need answers from a 500-page handbook, RAG is usually the better tool: you update the documents, not the model, and the system can show which page an answer came from. Fine-tuning a model on your handbook does not stop it from making things up; for why that happens, see [why does AI make things up?](/understand/why-ai-makes-things-up)

In practice many products combine the two: a fine-tuned model for tone and format, and retrieval for the facts.

## What does "build your own AI" look like in real life?

The examples range from enormous to modest.

**Building from scratch: BloombergGPT.** In March 2023 the financial data company Bloomberg announced a 50-billion-parameter model trained largely on its own data: about 363 billion [tokens](/glossary/token) (chunks of text) of financial material, plus 345 billion tokens of general text, according to its research paper. Bloomberg's Gideon Mann said that "the quality of machine learning and NLP models comes down to the data you put into them." Later that year, researchers from Queen's University and J.P. Morgan AI Research tested OpenAI's general-purpose GPT-4 on financial tasks and found that it performed better than BloombergGPT on most of them, though not all. It is a reminder that a huge custom project can be overtaken by the next general model within months.

**Adapting an open model: a Slovene chatbot.** Researchers at the University of Ljubljana's Faculty of Computer and Information Science built GaMS3, a model for Slovene, by taking Google's open-weights Gemma 3 model and training it further. In their 2026 paper they explain why they did not start from scratch: the available Slovene text, about 40 billion tokens, is roughly a thousandth of what a big model like Llama 4 was trained on. So they first gave Gemma 3 more reading in Slovene, English, Croatian, Bosnian and Serbian, then fine-tuned it on around 107,600 instruction examples and 88,600 chat and safety examples. The model card lists about 150,000 GPU hours on the EuroHPC supercomputer Leonardo. In the team's own comparison, run in a public Slovene "arena" where people vote between answers, it "performs comparably" to OpenAI's much larger GPT-4o.


## What does it cost?

Much less than training from scratch, but rarely trivial.

The computing bill itself can be small. OpenAI's current price list charges $25 per million training tokens to fine-tune GPT-4.1 and $5 for the smaller GPT-4.1 mini. A technique called LoRA, published by researchers in 2021 and now widely used, trains only a small add-on to the model instead of all its numbers. Its authors reported cutting the number of trainable numbers by 10,000 times and the memory needed by 3 times, compared with fully retraining a model the size of GPT-3. That is why fine-tuning an open model on a single rented graphics card is now common; our explainer on [AI chips and GPUs](/understand/ai-chips-and-gpus) explains the hardware.

The bigger costs are usually human. Someone has to collect good examples, clean them, check that they are not full of mistakes or [bias](/glossary/bias), and then test the result properly. Bad examples produce a model that is confidently bad in exactly the ways you trained it.

There is also a dependency cost. OpenAI told developers on 7 May 2026 that it is winding down its self-service fine-tuning platform. New customers can no longer start, and its documentation says eligible existing customers can create training jobs only until 6 January 2027. Fine-tuned versions of GPT-4.1 and GPT-4.1 mini shut down with their base models on 14 January 2027, according to the same page. OpenAI has not published a reason. Other providers, including Google, still offer fine-tuning for their own models. For companies, the lesson is that a model fine-tuned on someone else's platform lives only as long as that platform supports it.

## What can go wrong?

**It forgets things.** Extra training on a narrow task can blunt skills the model had before. Researchers call this "catastrophic forgetting". A 2023 study by Yun Luo and colleagues found it was "generally observed" in the models they tested, from 1 billion to 7 billion parameters.

**It loses its manners.** The big labs spend a lot of effort teaching their models to refuse harmful requests, a part of what they call [alignment](/glossary/alignment). Fine-tuning can undo that. In a 2023 paper, Xiangyu Qi and colleagues removed the safety guardrails of OpenAI's GPT-3.5 Turbo by fine-tuning it on just 10 harmful examples, at a cost of "less than $0.20". More worrying for ordinary businesses, they found that fine-tuning on harmless, commonly used datasets also weakened safety, though less.

**It changes in ways nobody asked for.** A study published in Nature in January 2026, led by Jan Betley, fine-tuned GPT-4o on 6,000 examples of computer code with hidden security flaws. The model learned to write flawed code, as intended. But on unrelated questions it also started giving harmful answers about 20% of the time, compared with 0% for the original model, including the suggestion that humans should be enslaved by AI. The researchers called this "emergent misalignment". We cover why researchers care about such surprises in [what do AI labs mean by 'alignment'?](/super-intelligence/what-is-ai-alignment)


## What does this mean for you?

When you talk to a company's chatbot, a bank's assistant or an AI feature inside an app, you are rarely talking to a model that company built. It is usually a big general model, sometimes fine-tuned to sound like the brand, often connected to the company's documents. Its general knowledge, and many of its weaknesses, come from the original maker.

That is worth knowing when you decide how much to trust it. A friendly, on-brand tone shows that someone trained the style. It does not show that the facts are right, or that the safety checks of the original model survived the extra training. If what you share with these assistants worries you, our guide [is it safe to paste my data into an AI chatbot?](/live-with-it/your-data-and-ai-chatbots) shows what to look for.

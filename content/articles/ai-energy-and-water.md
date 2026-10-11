---
title: "How much energy and water does AI really use?"
dek: "One chatbot question uses about as much electricity as a few seconds of TV, by the companies' own numbers. The bigger story is the sheer number of questions, the power-hungry extras like video, and how little of this is independently checked."
pillar: live-with-it
format: Explainer
author: davide-serra
datePublished: "2026-10-11"
status: approved
approvedBy: davide-serra
madeWith: ai-assisted
image: /illustrations/ai-energy-and-water.svg
imageAlt: "A speech bubble plugged into a wall socket by a cable, next to a single yellow drop of water."
metaTitle: "How much energy and water does AI use?"
metaDescription: "What one chatbot question costs in electricity and water, why estimates disagree, what training adds, what EU rules require, and what you can do."
shortAnswer: "A typical text question to a chatbot uses roughly 0.2 to 0.3 watt-hours of electricity and a few drops to a few spoonfuls of water, according to figures published by Google, OpenAI and independent researchers. That is small for one person, but AI is used billions of times a day, image and video generation use far more, and most numbers are company self-reports that nobody outside has checked."
sources:
  - title: "Google Cloud blog: Measuring the environmental impact of AI inference"
    url: "https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference"
  - title: "Google: Measuring the environmental impact of delivering AI at Google scale (technical paper, arXiv)"
    url: "https://arxiv.org/abs/2508.15734"
  - title: "MIT Technology Review: In a first, Google has released data on how much energy an AI prompt uses"
    url: "https://www.technologyreview.com/2025/08/21/1122288/google-gemini-ai-energy/"
  - title: "Sam Altman: The Gentle Singularity"
    url: "https://blog.samaltman.com/the-gentle-singularity"
  - title: "TechRadar: Sam Altman reveals how much power each ChatGPT prompt uses"
    url: "https://www.techradar.com/computing/artificial-intelligence/sam-altman-doesnt-think-you-should-be-worried-about-chatgpts-energy-usage-reveals-exactly-how-much-power-each-prompt-uses"
  - title: "Epoch AI: How much energy does ChatGPT use?"
    url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use"
  - title: "MIT Technology Review: We did the math on AI's energy footprint"
    url: "https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/"
  - title: "Mistral AI: Our contribution to a global environmental standard for AI"
    url: "https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai"
  - title: "Li, Yang, Islam and Ren: Making AI Less Thirsty (arXiv)"
    url: "https://arxiv.org/abs/2304.03271"
  - title: "International Energy Agency: Energy and AI, executive summary"
    url: "https://www.iea.org/reports/energy-and-ai/executive-summary"
  - title: "International Energy Agency: AI is set to drive surging electricity demand from data centres"
    url: "https://www.iea.org/news/ai-is-set-to-drive-surging-electricity-demand-from-data-centres-while-offering-the-potential-to-transform-how-the-energy-sector-works"
  - title: "International Energy Agency: Data centre electricity use surged in 2025"
    url: "https://www.iea.org/news/data-centre-electricity-use-surged-in-2025-even-with-tightening-bottlenecks-driving-a-scramble-for-solutions"
  - title: "European Commission AI Act Service Desk: Annex XI"
    url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-11"
  - title: "European Commission AI Act Service Desk: Article 53"
    url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-53"
  - title: "artificialintelligenceact.eu: An introduction to the Code of Practice for general-purpose AI"
    url: "https://artificialintelligenceact.eu/introduction-to-code-of-practice/"
  - title: "Swedish Energy Agency: Data centre energy performance reporting"
    url: "https://www.energimyndigheten.se/en/climate/climate/data-centre-energy-performance-reporting/"
  - title: "DLA Piper: New data centre sustainability reporting obligations under EU Regulation 2024/1364"
    url: "https://www.dlapiper.com/en/insights/publications/2024/09/new-data-centre-sustainability-reporting-obligations-introduced-through-eu-20241364-regulation"
  - title: "Reuters via The Star: EU to require data centres to disclose energy and water efficiency"
    url: "https://www.thestar.com.my/tech/tech-news/2026/09/21/eu-to-require-data-centres-to-disclose-energy-and-water-efficiency"
---

## How much does one chatbot question use?

For a short text question, the published figures cluster around a quarter to a third of a watt-hour of electricity. A watt-hour is the energy a 1-watt device uses in an hour, so this is a tiny amount on its own.

The numbers we have:

- **Google (Gemini).** In August 2025 Google said the median text prompt in its Gemini apps used [0.24 watt-hours, 0.03 grams of CO2 and 0.26 millilitres of water](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference), about five drops. Google compares the energy to watching TV for less than nine seconds. MIT Technology Review compares it to running a microwave for about one second.
- **OpenAI (ChatGPT).** In a June 2025 blog post, OpenAI's chief executive Sam Altman wrote that the average ChatGPT query uses ["about 0.34 watt-hours"](https://blog.samaltman.com/the-gentle-singularity), about what an oven uses in a little over a second, and "roughly one fifteenth of a teaspoon" of water. He did not explain how this was measured.
- **Epoch AI (independent).** The research group Epoch AI estimated in February 2025 that a typical text question to GPT-4o, one of the [models](/glossary/model) behind ChatGPT, uses [roughly 0.3 watt-hours](https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use). It built that from assumptions about chips and model size, not from OpenAI data.
- **Mistral (with outside auditors).** The French company Mistral published a full [life-cycle analysis](https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai) in July 2025, carried out with the consultancy Carbone 4 and France's ecological transition agency, ADEME. It put one 400-token answer from its Le Chat assistant at 1.14 grams of CO2 and 45 millilitres of water. (A [token](/glossary/token) is a chunk of a word; 400 tokens is a few paragraphs.)

The Google and OpenAI figures are company self-reports. Google says its estimate has not been independently verified, and OpenAI has published no method at all. Epoch AI's figure is an outside estimate, so it is independent but built on guesses. Mistral's study was peer-reviewed by two outside firms, but it covers only Mistral.

## How does that compare with everyday things?

Only a few comparisons come with a source behind them, so here are those:

- Google's median prompt: less than nine seconds of TV, according to Google.
- ChatGPT's average query: a little over one second of an oven, or a couple of minutes of a high-efficiency light bulb, according to Altman.
- Epoch AI notes that the average US household uses over 28,000 watt-hours a day, so one 0.3 watt-hour question is a very small fraction of that.

Other kinds of AI use far more. In tests on open models run in 2025, MIT Technology Review found that a large text model, Meta's Llama 3.1 405B, used about as much energy per answer as [eight seconds of a microwave](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/). One high-quality image took about 5.5 seconds of microwave. A single five-second video clip took the equivalent of running a microwave for over an hour.

So a text question is cheap. A video clip is not.

## Why do the estimates disagree so much?

Water figures range from five drops (Google) to 45 millilitres (Mistral). A widely shared paper led by researchers at the University of California, Riverside, [Making AI Less Thirsty](https://arxiv.org/abs/2304.03271), estimated that an older model, GPT-3, used a 500 ml bottle of water for "roughly 10 – 50 medium-length responses, depending on when and where it is deployed." Energy estimates for ChatGPT went from about 3 watt-hours in an often-quoted 2023 estimate to 0.3 in Epoch AI's 2025 one.

These are not simply right and wrong answers. They measure different things:

- **What is counted.** Google's figure includes idle backup machines, cooling and other building overhead. If you count only the AI chips, Google says the figure drops to 0.10 watt-hours, which it calls "an optimistic scenario at best." Mistral's analysis also counts things like making the hardware.
- **Which water.** Data centres use water on site, mostly for cooling. Power stations also use water to make the electricity. The Riverside paper counts both, and recommends that companies report the second kind too. Some company figures cover only the first.
- **Which model and which year.** Epoch AI says its estimate is ten times lower than the 2023 one mainly because of newer chips, a smaller assumed model and shorter assumed answers. Google says its own median prompt used 33 times less energy in May 2025 than a year earlier.
- **Where and when.** The Riverside paper's own table shows the water per bottle varying several-fold between US states and Ireland. MIT Technology Review found that the CO2 from the same electricity in California can be more than four times higher at night than in the afternoon.
- **What kind of question.** Epoch AI estimates that a question with a very long document attached, around 100,000 tokens, could take about 40 watt-hours. "Reasoning" models that think step by step produce many more tokens and use more energy.

A median prompt is also just the middle of the range. Google's figure excludes images and video entirely.

## What about training the AI in the first place?

Training is the one-off process where a [large language model](/glossary/large-language-model) learns from huge amounts of [training data](/glossary/training-data). It is energy-hungry. MIT Technology Review cites an estimate that training GPT-4 took 50 gigawatt-hours, enough to power San Francisco for three days. Mistral says its Mistral Large 2 model had produced 20.4 thousand tonnes of CO2 and consumed 281,000 cubic metres of water by January 2025, a figure covering training plus its first 18 months of use. The Riverside researchers estimated that training GPT-3 in Microsoft's US data centres directly evaporated 700,000 litres of fresh water.

But training is no longer the main cost. According to MIT Technology Review, an estimated 80 to 90 percent of AI computing power now goes on inference, the everyday answering of questions. OpenAI said in December 2024 that ChatGPT receives 1 billion messages a day. Small amounts, repeated that often, add up.

## How big is this compared with the whole power grid?

The International Energy Agency (IEA) says data centres of all kinds, not only AI, used about [415 terawatt-hours in 2024](https://www.iea.org/reports/energy-and-ai/executive-summary), around 1.5 percent of the world's electricity. In its April 2025 projections, that roughly doubles to about 945 terawatt-hours by 2030, slightly more than Japan uses today. In April 2026 the IEA reported that data centre electricity demand [rose 17 percent in 2025](https://www.iea.org/news/data-centre-electricity-use-surged-in-2025-even-with-tightening-bottlenecks-driving-a-scramble-for-solutions), against 3 percent growth in global electricity demand.

The effects are uneven. The IEA says a typical AI-focused data centre uses as much electricity as 100,000 households, and the largest ones being built will use 20 times that. Data centres are on course to account for almost half of the growth in US electricity demand to 2030. The IEA's own range for 2035 runs from 700 to 1,700 terawatt-hours, which shows how uncertain all this is.

## What do companies and the EU have to report?

Companies are not obliged to publish per-question figures anywhere. The ones above were published voluntarily, and each company chose its own method. Sasha Luccioni of the AI company Hugging Face told MIT Technology Review that Google's report "is not a replacement or proxy for standardized comparisons."

In the EU, two sets of rules apply:

- **The [AI Act](/glossary/ai-act).** Since 2 August 2025, companies that make general-purpose AI models, the large systems behind popular chatbots, must keep technical documentation that includes the ["known or estimated energy consumption of the model"](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-11). They can estimate it from the computing power used. That documentation goes to the EU's AI Office and national authorities on request; it is not published. The voluntary Code of Practice that goes with the law asks for compute and energy use in a standard form, and encourages, but does not require, publishing it. Our [EU AI Act guide](/live-with-it/eu-ai-act-explained) explains the wider law.
- **The Energy Efficiency Directive.** Data centres in the EU with an installed IT power demand of at least 500 kW must report yearly to a European database, covering energy use, water use and waste heat, among other indicators. The latest round, for 2025, was due by 15 May 2026. Only totals per country and for the EU are made public; figures for individual operators stay confidential, according to the law firm DLA Piper.

On 21 September 2026 the European Commission proposed a [rating scheme](https://www.thestar.com.my/tech/tech-news/2026/09/21/eu-to-require-data-centres-to-disclose-energy-and-water-efficiency) that would make data centres disclose how efficiently they use energy and water, including how their water use relates to local water stress, Reuters reported. It would not cap use. EU governments and lawmakers have two months to object before it takes effect.

None of these rules tells you, the user, what your own question cost.

## What can I sensibly do?

Your personal chatbot use is a small part of your energy footprint, and the big decisions about data centres and power grids sit with companies and governments. Still, a few habits make a real difference:

- **Save the heavy stuff for when it matters.** Generating video and lots of images uses far more energy than typing questions.
- **Use a smaller or faster model for simple jobs.** Mistral's study found that a model ten times bigger has roughly ten times the impact for the same amount of text. Many chatbots offer a lighter model or let you turn off extended "thinking".
- **Don't resend huge documents.** Attaching a long file has a big upfront cost, according to Epoch AI. Ask your follow-up questions in the same chat instead of starting over.
- **Skip AI when a normal tool does the job.** A calculator, a map app or a bookmarked page needs no [generative AI](/glossary/generative-ai).

If you want better numbers, the most useful thing is to ask for them: from the companies whose tools you use, and from your elected representatives when the EU reviews its rules.

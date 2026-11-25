---
title: "What is an AI benchmark, and why do companies keep quoting them?"
dek: "Every new AI model arrives with a chart of test scores. Here is what those tests measure, why the numbers are less solid than they look, and how to read the next launch chart without being fooled."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-11-25"
status: draft
madeWith: ai-assisted
image: /illustrations/what-is-an-ai-benchmark.svg
imageAlt: "A clipboard with a test sheet showing three ticked boxes and one empty one, next to a bar chart whose tallest bar is topped by a yellow star."
metaTitle: "What is an AI benchmark? How to read AI test scores"
metaDescription: "AI benchmarks are standard tests that let companies compare models. What they measure, why scores can mislead, and how to read a launch chart."
shortAnswer: "An AI benchmark is a fixed set of test questions or tasks, scored the same way for every AI model, so that models can be compared. Companies quote them because they are the simplest way to claim their model is better, but the best-known tests fill up within months, test questions leak into training data, and companies choose which scores to show. Treat a launch chart as an advert: useful, but check independent results and how close the task is to what you actually want to do."
sources:
  - title: "Stanford HAI: AI Index Report 2026, technical performance chapter (PDF)"
    url: "https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_2_technical.pdf"
  - title: "Stanford HAI: AI Index Report 2026, technical performance"
    url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance"
  - title: "Texas A&M Stories: Don't panic, Humanity's Last Exam has begun"
    url: "https://stories.tamu.edu/news/2026/02/25/dont-panic-humanitys-last-exam-has-begun/"
  - title: "OpenAI: Why we no longer evaluate SWE-bench Verified"
    url: "https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/"
  - title: "Arena: LMArena is now Arena"
    url: "https://arena.ai/blog/lmarena-is-now-arena/"
  - title: "TechCrunch: LMArena lands $1.7B valuation four months after launching its product"
    url: "https://techcrunch.com/2026/01/06/lmarena-lands-1.7b-valuation-four-months-after-launching-its-product"
  - title: "TechCrunch: Meta's vanilla Maverick AI model ranks below rivals on a popular chat benchmark"
    url: "https://techcrunch.com/2025/04/11/metas-vanilla-maverick-ai-model-ranks-below-rivals-on-a-popular-chat-benchmark"
  - title: "arXiv: The Leaderboard Illusion (Singh et al.)"
    url: "https://arxiv.org/abs/2504.20879"
  - title: "Oxford Internet Institute: Study identifies weaknesses in how AI systems are evaluated"
    url: "https://www.oii.ox.ac.uk/study-identifies-weaknesses-in-how-ai-systems-are-evaluated/"
  - title: "Epoch AI: Self-reported GPQA scores are consistent with independent evaluations"
    url: "https://epoch.ai/data-insights/self-reported-gpqa"
  - title: "The Decoder: AI benchmarks are broken and the industry keeps using them anyway"
    url: "https://the-decoder.com/ai-benchmarks-are-broken-and-the-industry-keeps-using-them-anyway-study-finds/"
  - title: "FlowingData: OpenAI botches the charts in GPT-5 introduction"
    url: "https://flowingdata.com/2025/08/07/openai-botches-the-charts-in-gpt-5-introduction/"
  - title: "Tech.co: OpenAI apologizes for 'mega chart screwup' from GPT-5 launch"
    url: "https://tech.co/news/openai-apologizes-mega-chart-screwup"
  - title: "Carta: Why do AI labs keep committing chart crimes?"
    url: "https://carta.com/data/linkedin-chart-crimes-ai-labs-y-axis/"
  - title: "OpenAI: Measuring the performance of our models on real-world tasks (GDPval)"
    url: "https://openai.com/index/gdpval"
  - title: "Scale AI: Remote Labor Index"
    url: "https://scale.com/blog/rli"
  - title: "Center for AI Safety: A significant increase in digital labor automation"
    url: "https://safe.ai/blog/significant-increase-in-digital-labor-automation"
  - title: "METR: Time Horizon 1.1"
    url: "https://metr.org/blog/2026-1-29-time-horizon-1-1"
---

An AI benchmark is a standard test. It is a fixed set of questions or tasks, scored the same way every time, so that two AI [models](/glossary/model) can be compared on equal terms. When a company launches a new model and shows a chart where its bar is the tallest, those bars are benchmark scores.

Companies quote them because they are short, numerical and easy to put in a headline. The trouble is that the numbers are much softer than they look, and in 2026 even the people who build the tests are saying so.

## What does a benchmark actually look like?

Most benchmarks are closer to a school exam than to anything mysterious. A typical one is a few hundred or a few thousand questions with known right answers. The model answers them, a computer marks them, and the result is a percentage.

Some well-known examples, and what they test:

- **MMLU** is a large multiple-choice exam covering school and university subjects. It was the headline test for [large language models](/glossary/large-language-model) for years. According to Stanford's AI Index 2026, the best systems now match or beat the human baseline on it, so it no longer separates top models.
- **GPQA Diamond** is a set of very hard science questions written so that experts in the field get them right but clever non-experts searching the web usually don't. The AI Index reports that the average top model reached 93% in 2025, above the 81.2% scored by human experts.
- **Humanity's Last Exam** was built because the older tests had become too easy. It has 2,500 questions from nearly 1,000 researchers, covering maths, sciences, humanities and ancient languages, and it was published in the journal Nature in 2026. According to [Texas A&M University](https://stories.tamu.edu/news/2026/02/25/dont-panic-humanitys-last-exam-has-begun/), early models scored between 2.7% and 8%, while Gemini 3.1 Pro and Claude Opus 4.6 have reached roughly 40% to 50%.
- **SWE-bench Verified** tests coding. It is 500 real programming problems taken from software projects, and the model has to write a fix that passes the project's own tests.
- **OSWorld** tests whether an [AI agent](/glossary/ai-agent) can use a computer: open apps, click, type and finish an everyday task. The AI Index reports that the best score rose from about 5% in 2024 to 66.3% in 2025, still below the 72.35% scored by people.

A score on any of these tells you how a model did on that particular set of questions, run in a particular way. That is all it tells you.

## What is LMArena, and why is it different?

The other kind of number you will see is a leaderboard ranking, and the best known is Arena, which was called LMArena until January 2026 and started life as Chatbot Arena, a research project at UC Berkeley.

Arena doesn't use a fixed exam. On its website, anyone can type a question, get answers from two anonymous models side by side, and vote for the better one. Those millions of votes are turned into a rating, similar to the ratings used to rank chess players. Arena says it has more than 5 million monthly users in 150 countries. [TechCrunch reported](https://techcrunch.com/2026/01/06/lmarena-lands-1.7b-valuation-four-months-after-launching-its-product) in January 2026 that the company had raised $150 million at a $1.7 billion valuation and also sells paid evaluation services to AI companies.

The appeal is that it measures what people prefer when they use a [chatbot](/glossary/chatbot), not what a test writer thought was important. The limit is the same thing: it measures preference, and people can prefer an answer that is confident, long and friendly over one that is correct. By March 2026, according to the AI Index, the top four companies on Arena were separated by fewer than 25 points, so the "number one" spot can change with each new release.

## Why are benchmark scores less reliable than they look?

There are four main problems, and they add up.

**The tests fill up.** Once most top models score close to 100%, a benchmark stops telling them apart. The AI Index 2026 puts it bluntly: "Evaluations intended to be challenging for years are saturated in months." Humanity's Last Exam went from under 10% to 38.3% in a single year, according to the same report. So companies keep moving on to newer, harder tests, and a score you read about last year may not be comparable with one you read today.

**Test questions leak into training.** Models learn from enormous amounts of text collected from the internet (we explain how in [how AI models are trained](/understand/how-ai-models-are-trained)). Benchmark questions and their answers are often published online, so they can end up in the [training data](/glossary/training-data). A model that has seen the answers is being tested on memory, not skill. Researchers call this contamination.

It is not a theoretical worry. In February 2026, [OpenAI said it had stopped reporting SWE-bench Verified scores](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/), one of the most quoted coding tests, and recommended that other companies do the same. OpenAI says every frontier model it probed could reproduce the original human-written fixes or the exact wording of some problems, a sign they had seen them in training. It also found that in a sample of problems its models kept failing, 59.4% had faulty tests or descriptions, and some tests rejected correct answers.

**Companies choose what to show.** A launch chart is put together by the company selling the model. It picks the benchmarks, the rivals, the settings and the version of its own model. The clearest example is from April 2025, when Meta's Llama 4 Maverick placed near the top of LMArena. It later emerged that the version tested was an experimental one "optimized for conversationality", as Meta's own chart noted. [TechCrunch reported](https://techcrunch.com/2025/04/11/metas-vanilla-maverick-ai-model-ranks-below-rivals-on-a-popular-chat-benchmark) that when the ordinary public version was scored, it ranked below older models from OpenAI, Anthropic and Google. LMArena apologised and changed its rules.

A research paper called [The Leaderboard Illusion](https://arxiv.org/abs/2504.20879), by a team of 13 researchers published in 2025, found that Meta had tested 27 private variants on the site before the Llama 4 release, and that some providers could test many versions in private and publish only the best. It also estimated that Google and OpenAI had each received around a fifth of all the site's voting data, while 83 [open-weights models](/glossary/open-weights-model) together got under 30%. More data helps a company tune its model to the leaderboard.

**Gaming and sloppy measurement.** When a number decides headlines and investment, people optimise for the number. Sometimes that is deliberate; often it is just that small choices in how a test is run move the score. Epoch AI, an independent research group, [has pointed out](https://the-decoder.com/ai-benchmarks-are-broken-and-the-industry-keeps-using-them-anyway-study-finds/) that how a benchmark is set up and how the model is accessed can change results a lot, and these details are rarely disclosed.

The tests themselves are often weaker than they look. A [study led by the Oxford Internet Institute](https://www.oii.ox.ac.uk/study-identifies-weaknesses-in-how-ai-systems-are-evaluated/), with 42 researchers, reviewed 445 AI benchmarks in November 2025. It found that only 16% of the studies used statistical tests when comparing models, so a small lead may be chance, and that about half tried to measure vague ideas such as "reasoning" without defining them.

To be fair to the companies, the picture is mixed. When Epoch AI [rechecked companies' own GPQA Diamond scores](https://epoch.ai/data-insights/self-reported-gpqa) in 2025, they were consistent with its independent results. Self-reported scores are not usually made up. The problems are more about what gets chosen, what gets left out, and whether the test still means anything.

## Is anyone trying to measure real work instead?

Yes, and this is where the most interesting work is happening. The idea is to test models on tasks that look like real jobs, judged by people who do those jobs.

- **GDPval**, published by OpenAI in September 2025, covers 44 occupations, from lawyers to nurses. Experts with an average of 14 years' experience wrote tasks based on their real work, and other experts compared the AI's output with a human professional's without knowing which was which. In OpenAI's first results, the best model, Claude Opus 4.1, was rated as good as or better than the human in just under half of the tasks. OpenAI notes that each task was done in one go, without the back-and-forth of real work.
- **The Remote Labor Index**, from Scale AI and the Center for AI Safety, uses 240 real freelance projects, from graphic design to data analysis, that people had been paid for. At its launch in October 2025, the best AI agent produced work a client would accept in 2.5% of projects. By July 2026, [the Center for AI Safety reported](https://safe.ai/blog/significant-increase-in-digital-labor-automation) the top score had risen to 15.8%.
- **METR**, a non-profit research group, measures how long a task an AI agent can finish, in terms of how long it would take a skilled person. Its January 2026 update put the best model it had measured at around five hours, succeeding about half the time, and found that this figure has been doubling every few months, though METR says its recent estimates are uncertain.

These tests are slower and more expensive to run, and they are still tests. But a score like "good enough for a client in one project in six" says more to an ordinary reader than "91.2% on MMLU-Pro".

## How should you read a launch chart?

Next time a company announces a model with a wall of scores, a few questions will get you most of the way.

1. **Look at the axis.** Bars that start at 70% instead of zero make a two-point lead look huge. In August 2025, [OpenAI's GPT-5 launch](https://flowingdata.com/2025/08/07/openai-botches-the-charts-in-gpt-5-introduction/) showed a bar labelled 52.8% drawn taller than one labelled 69.1%; Sam Altman called it a "mega chart screwup". Carta's data team has [made the same complaint](https://carta.com/data/linkedin-chart-crimes-ai-labs-y-axis/) about an Anthropic chart.
2. **Check who it is compared with.** Is the rival model the latest one, or last year's? Are all models run with the same settings? The footnotes usually say, and they often matter.
3. **Notice what is missing.** If a company used to quote a test and has quietly stopped, there may be a reason, good or bad.
4. **Ask whether the test is still alive.** A one-point gain on a test where everyone scores above 90% means very little.
5. **Look for independent results.** Wait a week or two for groups such as Epoch AI, METR or Arena to publish their own numbers, and for real users to report how the model behaves.
6. **Match the test to your use.** A record score in competition maths says nothing about whether a model will write a good letter to your landlord or stop [making things up](/understand/why-ai-makes-things-up). For that, your own trial is the best benchmark there is. Our [comparison of the main chatbots](/use/chatbots-compared) is a good place to start.

Benchmarks are not useless. They are the main way researchers track how fast AI is improving, and they are behind serious debates about frontier models and how quickly they are gaining skills. They are just not as precise as a single number on a launch slide makes them seem.

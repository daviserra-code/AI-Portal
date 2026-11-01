---
title: "Why does AI need so many chips, and what is a GPU?"
dek: "Behind every chatbot answer sits a rack of specialised chips in a warehouse-sized building. Here is what those chips do, who makes them, why there are never enough, and how that reaches your wallet and your phone."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-11-01"
status: approved
approvedBy: davide-serra
madeWith: ai-assisted
image: /illustrations/ai-chips-and-gpus.svg
imageAlt: "A large square computer chip with pins on every side, a yellow speech bubble just above its corner, and a row of identical smaller chips lined up beside it."
metaTitle: "What is a GPU, and why does AI need so many chips?"
metaDescription: "What a GPU is, why AI runs on it, training versus inference, who makes AI chips in 2026, TSMC, China export controls, and what it means for you."
shortAnswer: "A GPU is a chip that does thousands of small calculations at the same time, which is exactly the kind of maths AI models are made of. Building and running AI takes enormous numbers of these chips, mostly designed by Nvidia and made by TSMC in Taiwan, so they are scarce, expensive and power-hungry. For ordinary people that shows up in subscription limits, pricier phones and laptops, and the energy debate, while smaller AI now also runs on chips inside your own devices."
sources:
  - title: "Nvidia blog: What's the difference between a CPU and a GPU?"
    url: "https://blogs.nvidia.com/blog/2009/12/16/whats-the-difference-between-a-cpu-and-a-gpu"
  - title: "HotHardware: Nvidia's Q2 results, data centre demand and Vera Rubin"
    url: "https://hothardware.com/news/nvidias-ai-empire-crushes-q2-estimates-data-center-demand"
  - title: "The Star (Xinhua): Nvidia Q2 revenue jumps 106 pct to 96.22 bln USD"
    url: "https://www.thestar.com.my/news/world/2026/08/27/nvidia-q2-revenue-jumps-106-pct-to-9622-bln-usd"
  - title: "Guru3D (via Bloomberg): Nvidia advances Vera Rubin launch to Q3 2026"
    url: "https://www.guru3d.com/story/nvidia-advances-vera-rubin-launch-to-q3-2026-targets-billion-gpu-revenue"
  - title: "StorageNewsletter: AMD and OpenAI collaborating across every layer of the stack"
    url: "https://www.storagenewsletter.com/2026/07/29/amd-aai-2026-amd-and-openai-collaborating-across-every-layer-of-the-stack/"
  - title: "TechRadar: Google Cloud unveils eighth-generation TPUs"
    url: "https://www.techradar.com/pro/google-cloud-unveils-eighth-generation-tpus-built-to-support-an-agentic-era"
  - title: "DatacenterDynamics: AWS makes Trainium3 UltraServers generally available"
    url: "https://www.datacenterdynamics.com/en/news/aws-makes-trainium3-ultraservers-generally-available/"
  - title: "Silicon UK: Microsoft launches Maia 200"
    url: "https://www.silicon.co.uk/cloud/datacenter/microsoft-maia-200-628488"
  - title: "VKTR: Meta expands its in-house AI chip roadmap"
    url: "https://www.vktr.com/ai-news/meta-expands-in-house-ai-chip-roadmap/"
  - title: "Maginative: OpenAI and Broadcom to co-design custom AI chips, deploy 10 GW by 2029"
    url: "https://www.maginative.com/article/openai-and-broadcom-to-co-design-custom-ai-chips-deploy-10-gw-by-2029/"
  - title: "King's College London (The Conversation): How Taiwan came to dominate the global chip industry"
    url: "https://www.kcl.ac.uk/news/comment-how-taiwan-came-to-dominate-the-global-chip-industry"
  - title: "Let's Data Science: TSMC says AI demand still exceeds its supply capability"
    url: "https://letsdatascience.com/news/tsmc-says-ai-demand-still-exceeds-its-supply-capability-as-q-2fed75bf"
  - title: "Focus Taiwan: TSMC record third-quarter revenue"
    url: "https://focustaiwan.tw/business/202610080012"
  - title: "Built In: Trump lifted the AI chip ban on China, now what?"
    url: "https://builtin.com/articles/trump-lifts-ai-chip-ban-china-nvidia"
  - title: "Epoch AI: OpenAI Stargate Abilene data centre profile"
    url: "https://epoch.ai/data/ai-data-centers/directory/openai-stargate-abilene"
  - title: "International Energy Agency: Data centre electricity use surged in 2025"
    url: "https://www.iea.org/news/data-centre-electricity-use-surged-in-2025-even-with-tightening-bottlenecks-driving-a-scramble-for-solutions"
  - title: "Consumer Reports: AI data centres are buying up RAM and raising laptop prices"
    url: "https://pressroom.consumerreports.org/electronics-computers/laptops-chromebooks/ai-data-centers-buying-up-ram-and-raising-laptop-prices-a3637558313/"
  - title: "ITdaily: Copilot+ PCs require 16 GB RAM and an AI chip with 40+ TOPS"
    url: "https://itdaily.com/news/workplace/windows-copilot-plus-pc-system-requirements"
  - title: "TechCrunch: Apple lets developers tap into its offline AI models"
    url: "https://techcrunch.com/2025/06/09/apple-lets-developers-tap-into-its-offline-ai-models/"
---

Every answer from a [chatbot](/glossary/chatbot) is worked out on a chip in a data centre, and the chips that do most of that work are called GPUs. In the three months to late July 2026, Nvidia, the best-known designer of these chips, sold $89 billion worth of data-centre products, according to its quarterly results as reported by The Star. That one number tells you how hungry AI is for this kind of hardware.

## What is a GPU, and why is it good at AI?

GPU stands for graphics processing unit. It was invented to draw video game graphics, which means working out the colour of millions of pixels many times a second. Each pixel is a small, simple sum, and none of them has to wait for the others.

The main chip in your laptop, the CPU, is built the other way round. Nvidia's own explainer describes CPUs as a few powerful cores that are "good for serial processing": they handle a handful of tasks at once, very quickly, one step after another. A GPU has hundreds or thousands of smaller cores that run thousands of threads at the same time, splitting a big problem into many little ones.

That turns out to be exactly what AI needs. An AI [model](/glossary/model), such as the [large language models](/glossary/large-language-model) behind chatbots, is at heart a huge pile of numbers arranged in a [neural network](/glossary/neural-network). Using it means multiplying long grids of numbers together, billions of times, and most of those multiplications can happen side by side. Modern AI chips add parts built only for this: Nvidia says its Tensor Cores exist to speed up the large matrix operations "that underpin AI".

A rough picture: a CPU is a handful of brilliant mathematicians, a GPU is a stadium full of people who can each do simple sums, all at once. For AI, the stadium wins.

## What is the difference between training and running a model?

There are two quite different jobs, and both need chips.

**Training** is building the model. The system is shown enormous amounts of [training data](/glossary/training-data), text, images or code, and slowly adjusts its billions of internal numbers until its guesses get better. For the biggest models this runs for weeks or months on many thousands of chips wired together, and it happens once per model (plus updates). If you want the longer story of how a chatbot learns, see [how chatbots work](/understand/how-chatbots-work).

**Inference** is using the finished model: every question you type, every image you generate. Each answer is cheap compared with training, but it happens billions of times a day, for every user, forever. As more people use AI, and as AI [agents](/glossary/ai-agent) run long tasks on their own, inference is becoming a large share of the demand.

The chipmakers now design for the two jobs separately. In April 2026 Google announced two eighth-generation chips at once, TechRadar reports: TPU 8t for training and TPU 8i for inference. Microsoft says its Maia 200 chip, announced in January 2026, is built for inference.

## Who makes the chips?

**Nvidia** is the name most people know. Its current generation, called Vera Rubin, began shipping in early August 2026, according to HotHardware and The Star, with systems running at Google Cloud, Microsoft Azure, Oracle and CoreWeave. Chief executive Jensen Huang said in August: "Now, compute is revenue." Nvidia's results showed data-centre products made up over 92% of its total sales.

**AMD** is Nvidia's best-known rival among companies that sell AI GPUs to others. Its Helios system uses AMD's Instinct MI455X GPUs. In July 2026 AMD said OpenAI expects to start bringing Helios online in the second half of 2026, as the first phase of a 6-gigawatt deal the two companies announced in October 2025.

The biggest cloud and AI companies also design their own chips, partly to depend less on Nvidia:

- **Google** has made its own AI chips, called TPUs (tensor processing units), for years. The two new ones, TPU 8t and 8i, were due to reach cloud customers "in the coming months" after April 2026, according to TechRadar.
- **Amazon** sells Trainium chips through its AWS cloud. DatacenterDynamics reports that Trainium3, AWS's first chip on a 3-nanometre process, is generally available, that Anthropic is among its users, and that Trainium4 is on the way.
- **Microsoft** says Maia 200 is made by TSMC and is already supporting its Copilot assistant, according to Silicon UK.
- **Meta** said in March 2026 that it is rolling out four generations of its MTIA chips through 2026 and 2027, VKTR reports, with the later ones aimed at running generative AI.
- **OpenAI** announced in October 2025 that it would design its own AI chips with the chip company Broadcom, aiming for 10 gigawatts of them by 2029, with first deployments planned for late 2026, according to Maginative. The same report says OpenAI will keep using Nvidia GPUs, mainly for training.

Notice the unit: gigawatts. The industry now often measures chip deals by the electricity they will draw rather than by the number of chips.

## Who actually builds them?

Almost none of these companies own a chip factory. They design the chips and send the designs to a contract manufacturer, and for the most advanced chips that is mostly one company: TSMC, the Taiwan Semiconductor Manufacturing Company. A King's College London analysis published in April 2026 says TSMC makes "more than 90% of the world's most advanced semiconductor chips."

That makes TSMC a choke point. In October 2026 it reported record quarterly revenue of NT$1.49 trillion, Focus Taiwan reports, and its chairman C.C. Wei said "demand remains above TSMC's present supply capability." About 79% of its wafer revenue came from its most advanced processes, 7 nanometres and smaller.

A chip is also more than the processor. AI chips sit next to stacks of very fast memory, and only a few companies make memory at scale. That is one reason the supply chain is so easy to strain: one extra order for a data centre can ripple all the way down to the price of a laptop.

## Why does China come into it?

Because AI chips are now treated as a matter of national security. Since October 2022, US export controls have stopped the most powerful AI chips from being sold to China, Built In explains, and the rules have been tightened, loosened and renegotiated many times since. In December 2025, for example, the US government approved sales of Nvidia's older H200 chip to vetted Chinese customers, while China's own internet regulator had earlier told domestic firms not to buy Nvidia AI chips.

The upshot for now: Nvidia told investors in August 2026 that its forecast assumes no data-centre chip revenue from China at all, citing export restrictions. Chinese companies are pushing to build their own chips instead; the King's College piece notes that Chinese chip executives have proposed raising the country's chip self-sufficiency to 80% by 2030.

## Why are data centres getting so big?

Because the latest models need tens or hundreds of thousands of chips working as one machine, and each chip draws a lot of power and gives off a lot of heat. That pushes everything into single, enormous buildings with their own electricity supply and cooling.

OpenAI's first Stargate site in Abilene, Texas, is a useful example. Epoch AI, a research group that tracks data centres from satellite images and company filings, estimates it already uses about 618 megawatts of power for its computers, with the operator Oracle saying six of eight buildings have been handed over. Epoch puts the cost so far at about $23.4 billion. These are estimates, not official figures.

Across the world, the International Energy Agency says data-centre electricity use rose 17% in 2025, against 3% for electricity overall, and expects it to double by 2030, with AI-focused data centres tripling. Our guide to [how much energy and water AI uses](/live-with-it/ai-energy-and-water) looks at what that means per question.

## What does all this mean for me?

**AI subscriptions and limits.** Every answer costs the AI company chip time and electricity. That is a large part of why the strongest models sit behind paid plans and why even paid plans have usage caps, especially for image and video generation. Whether a plan is worth it for you is a separate question, covered in [is a paid AI subscription worth it?](/use/is-a-paid-ai-subscription-worth-it).

**Phones and laptops can cost more.** AI data centres compete with consumer gadgets for the same memory chips. Consumer Reports found in December 2025 that a 32GB memory kit its writer had bought for $90 in September cost $269.99 two months later, and cited Counterpoint Research expecting average smartphone prices to rise 6.9% in 2026. Some makers may keep prices steady and quietly cut the specifications instead.

**More AI runs on your own device.** Many new phones and laptops include an NPU, a neural processing unit: a small chip built for AI sums that uses little battery. Microsoft's "Copilot+ PC" label, for example, requires an NPU of at least 40 TOPS (trillion operations per second) and 16 GB of memory, ITdaily reports. Apple lets app makers use its on-device models, which Apple's Craig Federighi said are "available when you're offline", according to TechCrunch. Work done on your device does not need a data centre, and your words do not have to leave the phone. Smaller [open-weights models](/glossary/open-weights-model) can run on a decent home computer too; see [what is open-source AI](/understand/open-source-ai).

**Energy is now a shared question.** Data centres the size of Abilene draw power from the same grids as homes and businesses. How that is paid for, and where the electricity comes from, is becoming a local political issue in many places, and it is one AI users will hear more about.

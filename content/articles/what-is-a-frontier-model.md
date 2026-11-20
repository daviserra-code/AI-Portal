---
title: "What is an AI 'frontier model', and who decides the risks?"
dek: "Laws, companies and governments all talk about 'frontier' AI, the most powerful systems being built. Here is what the word means, how the rules decide which models count, and who really gets the final say before one reaches you."
pillar: super-intelligence
format: Explainer
author: davide-serra
datePublished: "2026-11-20"
status: draft
madeWith: ai-assisted
image: /illustrations/what-is-a-frontier-model.svg
imageAlt: "A tall purple block standing on a measuring ruler beside three shorter blocks, with a yellow flag planted on top of the tallest one."
metaTitle: "What is a frontier AI model, and who decides the risks?"
metaDescription: "What 'frontier model' means, the computing thresholds in EU and US law, company safety frameworks, government testing, and who has the final say."
shortAnswer: "A frontier model is one of the most capable general-purpose AI models of its time, the kind behind ChatGPT, Gemini and Claude. Laws in the EU, California and New York pick them out mainly by how much computing power was used to train them, and require their makers to assess risks and report serious incidents. In practice the companies still decide when a model is safe to release, while government institutes mostly test by agreement and regulators can only step in afterwards."
sources:
  - title: "Frontier Model Forum: Our mission"
    url: "https://www.frontiermodelforum.org/about-us"
  - title: "Infosecurity Magazine: OpenAI, Microsoft, Google and Anthropic form body to regulate AI (July 2023)"
    url: "https://www.infosecurity-magazine.com/news/openai-microsoft-google-anthropic/"
  - title: "UK government: The Bletchley Declaration (1 to 2 November 2023)"
    url: "https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration/the-bletchley-declaration-by-countries-attending-the-ai-safety-summit-1-2-november-2023"
  - title: "Epoch AI: Over 30 AI models have been trained at the scale of GPT-4"
    url: "https://epoch.ai/data-insights/models-over-1e25-flop"
  - title: "European Commission: Guidelines for providers of general-purpose AI models (FAQ)"
    url: "https://digital-strategy.ec.europa.eu/en/faqs/guidelines-obligations-gpai-providers"
  - title: "European Commission: General-purpose AI obligations under the AI Act"
    url: "https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act"
  - title: "Euronews: Some 26 tech companies sign up to EU Commission's AI code (1 August 2025)"
    url: "https://euronews.com/next/2025/08/01/some-26-tech-companies-sign-up-to-eu-commissions-ai-code"
  - title: "Future of Privacy Forum: California's SB 53, the first frontier AI law, explained"
    url: "https://fpf.org/blog/californias-sb-53-the-first-frontier-ai-law-explained/"
  - title: "Mayer Brown: California enacts SB 53"
    url: "https://www.mayerbrown.com/en/insights/publications/2025/10/california-enacts-sb-53-creating-new-requirements-for-developers-of-frontier-artificial-intelligence-models-and-related-whistleblower-provisions"
  - title: "Davis Wright Tremaine: California enacts AI frontier model disclosure law"
    url: "https://www.dwt.com/blogs/artificial-intelligence-law-advisor/2025/10/california-enacts-ai-frontier-model-disclosure-law"
  - title: "Morrison Foerster: New York amends the RAISE Act to align more closely with California law"
    url: "https://www.mofo.com/resources/insights/260403-new-york-amends-the-raise-act-to-align-more-closely"
  - title: "Skadden: New AI executive order calls for frontier model security and early government access (June 2026)"
    url: "https://www.skadden.com/insights/publications/2026/06/new-ai-executive-order"
  - title: "Anthropic: Responsible Scaling Policy version 3.0"
    url: "https://www.anthropic.com/news/responsible-scaling-policy-v3"
  - title: "Anthropic: Responsible Scaling Policy updates"
    url: "https://www.anthropic.com/rsp-updates"
  - title: "Technobezz: Anthropic revises safety policy to allow AI development despite unmitigated risks"
    url: "https://www.technobezz.com/news/anthropic-revises-safety-policy-to-allow-ai-development-despite-unmitigated-risks"
  - title: "OpenAI: Our updated Preparedness Framework (15 April 2025)"
    url: "https://openai.com/index/updating-our-preparedness-framework/"
  - title: "The Register: Google DeepMind's Frontier Safety Framework adds misalignment and manipulation risks (22 September 2025)"
    url: "https://theregister.com/2025/09/22/google_ai_misalignment_risk"
  - title: "Brookings: How are countries evaluating AI models? (16 October 2026)"
    url: "https://www.brookings.edu/articles/how-are-countries-evaluating-ai-models/"
  - title: "UK government: AI Security Institute Frontier AI Trends Report factsheet"
    url: "https://www.gov.uk/government/publications/ai-security-institute-frontier-ai-trends-report-factsheet/ai-security-institute-frontier-ai-trends-report-factsheet"
  - title: "Associated Press (via KPRC): Trump administration lifts restrictions on Anthropic's Claude models after cybersecurity alarm (1 July 2026)"
    url: "https://www.click2houston.com/business/2026/07/01/trump-administration-lifts-restrictions-on-anthropics-claude-models-after-cybersecurity-alarm/"
---

A frontier model is one of the most capable general-purpose AI [models](/glossary/model) in existence at a given moment. Today that means the systems behind ChatGPT, Gemini, Claude and a handful of rivals: huge [large language models](/glossary/large-language-model) that can write, code, analyse images and increasingly act on their own.

The word matters because it has become a legal category. Several laws now treat these models differently from ordinary AI, and governments test them before release. This page explains how a model ends up on the frontier list, what its makers have to do, and who gets the last word on whether it is safe.

## Where does the term come from?

From the industry, in 2023. In July that year OpenAI, Google, Microsoft and Anthropic set up the Frontier Model Forum, a joint industry body, and described frontier models as "large-scale machine-learning models that exceed the capabilities currently present in the most advanced existing models", [Infosecurity Magazine reported](https://www.infosecurity-magazine.com/news/openai-microsoft-google-anthropic/). The Forum's [own definition](https://www.frontiermodelforum.org/about-us) today is a general-purpose model that beats, on a range of standard tests, "all other models that have been widely deployed for at least 12 months."

Governments picked the word up within months. The [Bletchley Declaration](https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration/the-bletchley-declaration-by-countries-attending-the-ai-safety-summit-1-2-november-2023), signed at the UK's AI Safety Summit in November 2023, described frontier AI as "those highly capable general-purpose AI models" and said their developers have "a particularly strong responsibility" for safety, including through testing.

Two things follow from these definitions. The frontier moves: today's leader is tomorrow's ordinary model. And the frontier is crowded. The research group [Epoch AI counted](https://epoch.ai/data-insights/models-over-1e25-flop) more than 30 publicly announced models from 12 developers trained at least on the scale of GPT-4 as of June 2025, up from one in March 2023.

## How do laws decide which models count?

Mostly by measuring how much computing went into training them. Training a model means running trillions of calculations over its [training data](/glossary/training-data), and that total can be counted in FLOP (floating-point operations, basically individual sums done by a computer chip). Our explainer on [how AI models are trained](/understand/how-ai-models-are-trained) covers the process.

Computing power is a rough stand-in for ability, not a direct measure of danger. Lawmakers use it because it is a number a company knows before release and can report. Here is where the main lines sit.

**The EU.** Under the [AI Act](/glossary/ai-act), a model trained with more than 10²³ FLOP that can generate language, images or video is presumed to be a "general-purpose AI model", according to the [European Commission's guidelines](https://digital-strategy.ec.europa.eu/en/faqs/guidelines-obligations-gpai-providers). Above 10²⁵ FLOP (a 1 followed by 25 zeros) a model is presumed to have "high-impact capabilities" and to pose "systemic risk". This is the EU's version of a frontier model, although the law does not use the word.

Makers of these models must tell the Commission within two weeks once they cross the line, evaluate the model with "standardised protocols and state-of-the-art tools", including adversarial testing (deliberately trying to make it misbehave), report serious incidents to the EU's AI Office and protect the model against hacking. The Commission can also designate a model below the threshold if it judges it risky enough, and it says the [10²⁵ threshold itself is under review](https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act).

The duties have applied since 2 August 2025, and the Commission has been able to enforce them, including with fines, since 2 August 2026. Models released before August 2025 have until 2 August 2027. Companies can show they comply by following a voluntary code of practice. [Euronews reported](https://euronews.com/next/2025/08/01/some-26-tech-companies-sign-up-to-eu-commissions-ai-code) that some 26 companies, including Amazon, Google, Microsoft, OpenAI and Mistral, signed it in August 2025; Meta refused, and xAI signed only the safety and security chapter. Our guide to [who regulates AI](/super-intelligence/who-regulates-ai) covers the AI Office's first enforcement moves.

**California.** The state's SB 53, signed on 29 September 2025 and in force since 1 January 2026 according to the law firm [Davis Wright Tremaine](https://www.dwt.com/blogs/artificial-intelligence-law-advisor/2025/10/california-enacts-ai-frontier-model-disclosure-law), sets the bar ten times higher, at 10²⁶ operations. The heavier duties fall on "large frontier developers", those with yearly revenue above $500 million, the [Future of Privacy Forum](https://fpf.org/blog/californias-sb-53-the-first-frontier-ai-law-explained/) explains.

These companies must publish a framework each year explaining how they spot and reduce "catastrophic risk", defined as a risk that a model could contribute to the death or serious injury of 50 or more people or at least $1 billion in damage. Every frontier developer must publish a transparency report before releasing a new frontier model and report critical safety incidents to the state's Office of Emergency Services within 15 days, or 24 hours if lives are in immediate danger.

**New York.** The RAISE Act, amended in 2026 to look more like California's law, uses the same 10²⁶ and $500 million tests, according to [Morrison Foerster](https://www.mofo.com/resources/insights/260403-new-york-amends-the-raise-act-to-align-more-closely). It sets a tighter 72-hour deadline for incident reports, creates an oversight office in the state's Department of Financial Services, and is enforced from January 2027.

**The US federal government.** There is no federal frontier law. An executive order of 2 June 2026, "Promoting Advanced Artificial Intelligence Innovation and Security", sets up a voluntary scheme for "covered frontier models", which the law firm [Skadden](https://www.skadden.com/insights/publications/2026/06/new-ai-executive-order) says are picked out by a classified test of advanced cyber-attack skills, with the director of the National Security Agency making the call. Developers may then give the government up to 30 days of access before wider release. The order rules out any "mandatory governmental licensing, preclearance, or permitting requirement."

## What do the companies promise themselves?

Before any of these laws, the big labs wrote their own rulebooks, usually called frontier safety frameworks. They share one idea: decide in advance which dangerous abilities you will test for, and what extra protection you will add if a model has them. The areas tested are typically help with biological or chemical weapons, cyber-attacks and AI that can improve itself.

- **OpenAI's Preparedness Framework**, [updated in April 2025](https://openai.com/index/updating-our-preparedness-framework/), tracks biological and chemical, cybersecurity and self-improvement abilities at two levels: "High", which "could amplify existing pathways to severe harm", and "Critical", which "could introduce unprecedented new pathways". An internal Safety Advisory Group reviews the safeguards, but its advice "goes to OpenAI Leadership for final decisions."
- **Google DeepMind's Frontier Safety Framework** sets "Critical Capability Levels". Version 3.0, published in September 2025, added harmful manipulation and a section on models that might work against human control, [The Register reported](https://theregister.com/2025/09/22/google_ai_misalignment_risk).
- **Anthropic's Responsible Scaling Policy** was rewritten as version 3.0 in [February 2026](https://www.anthropic.com/news/responsible-scaling-policy-v3) and has been [revised four times since](https://www.anthropic.com/rsp-updates), most recently in July 2026. (Anthropic makes Claude, the AI used to help draft this article.) It now includes published risk reports every three to six months, with outside review "in certain circumstances".

These frameworks are promises a company makes to itself, and the companies can change them. Anthropic's rewrite dropped its firm commitment to halt training or release of a model that could cause catastrophic harm without adequate safeguards, [Technobezz reports, citing Time](https://www.technobezz.com/news/anthropic-revises-safety-policy-to-allow-ai-development-despite-unmitigated-risks); it said it would not necessarily delay if competitors pressed ahead with weaker safeguards. OpenAI's framework contains a similar clause: "If another frontier AI developer releases a high-risk system without comparable safeguards, we may adjust our requirements."

California's law gives these documents some teeth. A large developer that "fails to comply with its own frontier AI framework" can be fined up to $1 million per violation by the state attorney general, the law firm [Mayer Brown](https://www.mayerbrown.com/en/insights/publications/2025/10/california-enacts-sb-53-creating-new-requirements-for-developers-of-frontier-artificial-intelligence-models-and-related-whistleblower-provisions) notes. But the company still writes the framework.

## Who tests the models before you get them?

Increasingly, government institutes. Since 2023 a string of countries has set up AI safety or security institutes: research teams that probe new models for dangerous abilities. A [Brookings overview from October 2026](https://www.brookings.edu/articles/how-are-countries-evaluating-ai-models/) lists them in the US, the UK, Japan, Singapore, Canada and Australia, among others. Their international network was renamed in December 2025 and is coordinated by the UK.

The UK's AI Security Institute is the largest. Its Frontier AI Trends Report, [published in December 2025](https://www.gov.uk/government/publications/ai-security-institute-frontier-ai-trends-report-factsheet/ai-security-institute-frontier-ai-trends-report-factsheet), drew on two years of testing leading models "before and after deployment"; Brookings says it covers more than 30 frontier models. In the US, testing runs through the Center for AI Standards and Innovation (CAISI) at the standards agency NIST, which in May 2026 signed pre-release testing agreements with Google DeepMind, Microsoft and xAI, according to Brookings.

The catch is in Brookings' own summary: these institutes are advisory, "not regulatory", and "most companies, however, are not obliged to act on evaluation results." Testing happens because companies agree to it. Our explainer on [AI safety](/super-intelligence/what-is-ai-safety) covers the independent labs, such as METR, that do similar work from outside government.

## So who actually decides?

For most frontier models, the company that built it. It runs its own tests against its own thresholds and decides whether to release, as both the OpenAI and Anthropic frameworks describe. Outsiders mainly come in at three points.

**Before release, by invitation.** Government institutes and independent testers see a model early only if the developer agrees. In the US this is voluntary even under the new executive order.

**After release, by law.** In the EU, the AI Office can demand information, require fixes and fine providers of systemic-risk models. In California and New York, the attorneys general can sue developers who break their own published frameworks or fail to report incidents. These are powers to punish or correct, not a licence to launch.

**In an emergency, by blunt instrument.** The clearest case of a government overruling a release came this summer. On 12 June 2026, the Commerce Department blocked foreign nationals from using Anthropic's two newest models, Claude Fable 5 and Mythos 5, over concerns that they could help find and exploit software flaws, the [Associated Press reported](https://www.click2houston.com/business/2026/07/01/trump-administration-lifts-restrictions-on-anthropics-claude-models-after-cybersecurity-alarm/). Anthropic said this forced it to take the products down for all users. By the end of June, Fable 5 was widely available again and Mythos 5 was restored only for a group of US organisations approved by the government.

Brookings points out the weakness this exposed: Anthropic said it had not been given specific reasons, and the disagreement over how dangerous the model was "could not be adjudicated publicly because no test or threshold was published."

Courts may become a fourth route. In November 2026 a group of nonprofits sued several frontier developers in San Francisco, asking a judge to halt their most advanced work; our [weekly roundup](/whats-new/week-in-ai-2026-11-15) has the details.

## What does this mean for you?

Nothing visible on your phone, most days. Frontier rules are about how the biggest models are tested and documented, not about how you use a chatbot.

They do change a few things worth knowing. If you are in the EU or California, the companies behind the major chatbots have to publish how they assess catastrophic risks, so you can read their frameworks and transparency reports yourself. When a company says a model is safe, ask who tested it, against which published threshold, and whether anyone outside the company could have said no.

The hardest questions sit further out. Whether these frameworks would hold for far more capable systems, up to the [superintelligence](/glossary/superintelligence) some researchers worry about, depends on [alignment](/glossary/alignment) research that is still unsettled. Our explainer on [what superintelligence is](/super-intelligence/what-is-superintelligence) covers that debate.

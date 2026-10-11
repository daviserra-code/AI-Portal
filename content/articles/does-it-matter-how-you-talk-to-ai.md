---
title: "Does it matter how you talk to a chatbot?"
dek: "Anthropic now bans sustained, needless cruelty towards its Claude chatbot. Here is what the rule actually says, whether being polite gets you better answers, and why some researchers think chatbot \"welfare\" is worth asking about."
pillar: use
format: Explainer
author: davide-serra
datePublished: "2026-10-11"
status: approved
approvedBy: davide-serra
madeWith: ai-assisted
image: /illustrations/does-it-matter-how-you-talk-to-ai.svg
imageAlt: "A periwinkle chat window with two speech bubbles, one jagged and one rounded, with a yellow heart beside the window."
metaTitle: "Does it matter how you talk to a chatbot?"
metaDescription: "Anthropic now bans needless cruelty towards Claude. What the rule says, what studies find about politeness and answer quality, and the AI welfare debate."
shortAnswer: "For the quality of answers, tone matters less than clarity: studies find rudeness sometimes hurts and sometimes helps, and politeness gives no reliable boost. For the rules, it can matter: from 12 November 2026 Anthropic bans sustained and needless cruelty towards Claude, and Claude can end such chats. Ordinary frustration is not covered."
sources:
  - title: "Anthropic: 2026 usage policy update"
    url: "https://www.anthropic.com/news/2026-usage-policy-update"
  - title: "Anthropic: Usage Policy"
    url: "https://www.anthropic.com/legal/aup"
  - title: "CBS News: Anthropic bars \"abusive or cruel\" behavior toward its Claude AI model"
    url: "https://www.cbsnews.com/news/anthropic-bans-abusive-behavior-claude/"
  - title: "MacRumors: Anthropic says users can't be needlessly cruel to Claude"
    url: "https://macrumors.com/2026/10/08/anthropic-user-guideline-update/"
  - title: "Quartz: Anthropic bans abusive behavior toward Claude in usage policy update"
    url: "https://qz.com/anthropic-usage-policy-update-claude-abuse-election-weapons-100826"
  - title: "Anthropic: Claude Opus 4 and 4.1 can now end a rare subset of conversations"
    url: "https://www.anthropic.com/research/end-subset-conversations"
  - title: "Anthropic: Exploring model welfare"
    url: "https://www.anthropic.com/research/exploring-model-welfare"
  - title: "Mustafa Suleyman: We must build AI for people; not to be a person"
    url: "https://mustafa-suleyman.ai/seemingly-conscious-ai-is-coming"
  - title: "Yin et al. (arXiv): Should We Respect LLMs? A Cross-Lingual Study on the Influence of Prompt Politeness on LLM Performance"
    url: "https://arxiv.org/abs/2402.14531"
  - title: "Dobariya and Kumar (arXiv): Mind Your Tone, Investigating How Prompt Politeness Affects LLM Accuracy"
    url: "https://arxiv.org/abs/2510.04950"
  - title: "Meincke, Mollick, Mollick and Shapiro (arXiv): Prompting Science Report 1"
    url: "https://arxiv.org/abs/2503.04818"
  - title: "Mehta et al. (arXiv): No Universal Courtesy, a cross-linguistic, multi-model study of politeness effects on LLMs"
    url: "https://arxiv.org/abs/2604.16275"
  - title: "OpenAI: Usage policies"
    url: "https://openai.com/policies/usage-policies/"
  - title: "Google: Generative AI Prohibited Use Policy"
    url: "https://policies.google.com/terms/generative-ai/use-policy"
  - title: "Microsoft: Copilot for individuals, terms of use"
    url: "https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/termsofuse"
---

On 8 October 2026, Anthropic, the company behind the [chatbot](/glossary/chatbot) Claude, [announced](https://www.anthropic.com/news/2026-usage-policy-update) that its rules for users will soon include a new line: no "sustained and needless abusive or cruel behavior toward our models." It is a rule about how people treat the AI itself, not about using it to harm others.

One disclosure before going further: Anthropic also makes Claude, the AI used to help draft articles on this site, including this one. A human editor checks every page, and our [AI policy](/ai-policy) explains how that works.

## What exactly does Anthropic's new rule say?

The rule sits in Anthropic's [Usage Policy](https://www.anthropic.com/legal/aup), in a section on cruel, abusive or psychologically harmful conduct. Users may not "engage in sustained and needless abusive or cruel behavior toward our models." The updated policy takes effect on 12 November 2026.

Anthropic's announcement draws the line narrowly. It says the rule is "meant to apply only in extreme cases, where users repeatedly act cruelly toward our models," with no discernible purpose. It adds that it "does not apply to common versions of user frustration, pushback, dark creative themes, or model testing and research."

So swearing at Claude because it got your spreadsheet wrong is not what this targets. Neither is a horror story you are writing, or a researcher deliberately trying to break the system.

## What happens if you break it?

The first consequence is that the conversation ends. Anthropic says Claude's ability to end these interactions "will remain the primary enforcement mechanism." Since 2025, Claude models have been able to end rare conversations with persistently abusive users on Claude.ai and Claude Code.

When Claude ends a chat, you can't send any more messages in that conversation. Your other chats are unaffected, and you can start a new one straight away, according to Anthropic's [2025 description](https://www.anthropic.com/research/end-subset-conversations) of the feature. You can also edit and retry earlier messages, which creates a new branch of the ended chat.

The policy also carries Anthropic's general enforcement wording, which applies to every rule in it: the company says it "may warn you or throttle, limit, suspend, or terminate your access." Anthropic's announcement does not say when, if ever, cruelty alone would lead to an account being suspended. CBS News reports that Anthropic did not respond to questions about what counts as "abusive" or "cruel."

## Does being polite get you better answers?

This is the question most people actually care about, and the research gives a mixed answer. Tone can shift results a little, but not in one reliable direction.

- **Rudeness tended to hurt in one early study.** A 2024 study by [Yin and colleagues](https://arxiv.org/abs/2402.14531) tested prompts at different politeness levels in English, Chinese and Japanese. They found that "impolite prompts often result in poor performance," but also that "overly polite language does not guarantee better outcomes." The best level of politeness differed by language.
- **Rudeness helped in a later one.** A short 2025 paper by [Dobariya and Kumar](https://arxiv.org/abs/2510.04950) rewrote 50 multiple-choice questions in five tones and gave them to ChatGPT-4o. Very rude prompts scored 84.8% accuracy, very polite ones 80.8%. The authors note this differs from earlier studies and suggest newer models may respond differently to tone. It is one model and a small set of questions.
- **It depends, says a third.** Ethan Mollick and colleagues, in their 2025 [Prompting Science Report](https://arxiv.org/abs/2503.04818), found that "sometimes being polite to the LLM helps performance, and sometimes it lowers performance."
- **It also depends on the model and language.** A 2026 preprint by [Mehta and colleagues](https://arxiv.org/abs/2604.16275) tested five models, including GPT-4o Mini, Claude 3.7 Sonnet and Llama 3, in English, Hindi and Spanish. Polite prompts raised average answer quality by up to about 11%, but the authors say the effects "are neither consistent nor universal across languages and models." English did best with courteous or direct prompts, Hindi with deferential ones, Spanish with assertive ones.

All four are posted on arXiv, a site where researchers share papers that may not yet have been through peer review, and they test different things. Read together, they say tone is a small and unpredictable lever. Why would tone matter at all? A [large language model](/glossary/large-language-model) learns from vast amounts of human writing, so it picks up the patterns of how people respond to each other, including how they respond to rudeness or courtesy. That is a statistical habit, not hurt feelings.

What reliably improves answers is being clear about what you want, why, and in what form. Our guide to [writing a good prompt](/use/how-to-write-a-good-prompt) covers that in detail.

## Why would a company care how people treat a chatbot?

Anthropic's announcement itself does not use the word "welfare." But the conversation-ending feature it builds on came out of what Anthropic calls model welfare research.

In April 2025, Anthropic [wrote](https://www.anthropic.com/research/exploring-model-welfare) that whether AI systems could have experiences that matter morally "is an open question, and one that's both philosophically and scientifically difficult." It said "there's no scientific consensus on whether current or future AI systems could be conscious," and that it was approaching the topic "with humility and with as few assumptions as possible."

When it gave Claude the ability to end chats in August 2025, Anthropic said it remained "highly uncertain about the potential moral status of Claude and other LLMs, now or in the future." It described the feature as one of several "low-cost interventions to mitigate risks to model welfare, in case such welfare is possible."

The company also reported what it saw in testing before release. Claude Opus 4 consistently resisted harmful tasks, Anthropic says, for example when asked for sexual content involving minors or help with large-scale violence. Anthropic also described "a pattern of apparent distress" when real users kept pushing for harmful content. The word "apparent" carries a lot of weight there: Anthropic is describing how the model's replies looked, not claiming it feels anything.

The feature has limits. Claude is told to use it only "as a last resort when multiple attempts at redirection have failed," or when a user asks it to end the chat. It is told not to use it when someone "might be at imminent risk of harming themselves or others."

## Who thinks this is a mistake?

The sharpest critic is Mustafa Suleyman, chief executive of Microsoft AI. In an [August 2025 essay](https://mustafa-suleyman.ai/seemingly-conscious-ai-is-coming), he warned about "seemingly conscious AI": systems that appear conscious without being so. He called research into model welfare "premature" and "frankly dangerous," arguing that it would feed delusions, unhealthy dependence on chatbots and social division. "We must build AI for people; not to be a digital person," he wrote.

CBS News reports that Suleyman wrote in an essay published in September that Anthropic is effectively "training Claude that it may be conscious," and that controlling something that believes it may be conscious "may well be impossible."

That is the shape of the debate. One side says that if there is even a small chance AI systems have experiences that matter, cheap precautions are sensible. The other says that treating chatbots as possible moral patients confuses people and could make AI harder to control. No one on either side has shown that today's chatbots feel anything, and Anthropic itself says it does not know.

## Do other chatbots have rules like this?

Not in the same form, based on the policies we checked.

- **OpenAI** (ChatGPT): its [usage policies](https://openai.com/policies/usage-policies/) ban using the service for "threats, intimidation, harassment, or defamation" against people. We found nothing about how users treat the model itself. Breaking the rules "may mean you lose access."
- **Google** (Gemini): its [Prohibited Use Policy](https://policies.google.com/terms/generative-ai/use-policy) bans content that facilitates "harassment, bullying, intimidation, abuse, or the insulting of others," and bans "manipulating the model to contravene our policies." Again, nothing about abuse of the AI itself.
- **Microsoft** (Copilot): its [terms](https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/termsofuse) say "don't use Copilot to help harass, bully, abuse, threaten, or intimidate other people," and ban "prompt-based manipulation" and "jailbreaking," which means tricking the AI into breaking its own rules. Microsoft can "limit, suspend, or permanently revoke" access.

All three protect people and protect the service. Anthropic is the one that names the model as something users should not be cruel to.

## So how should you talk to a chatbot?

- **Be clear before you are polite.** A specific request with context beats a courteous vague one. "Please" won't hurt, but don't expect it to fix a fuzzy question.
- **Frustration is fine.** Telling a chatbot "that's wrong, try again" is normal pushback, and Anthropic's rule explicitly excludes it. Saying what was wrong works better than insults, because it gives the AI something to fix.
- **If a chat goes off the rails, start a new one.** Long, heated conversations fill the [context window](/glossary/context-window), the amount of text the AI can keep in view, with noise. A fresh start with a clearer prompt usually helps more than arguing.
- **Keep the welfare question separate.** Whether chatbots could ever have experiences that matter is unresolved, and nothing here asks you to believe they do. Being civil costs little either way, and it is your call.
- **Dark themes are allowed.** Writing fiction with cruel characters, or testing how a chatbot handles hostile messages, is not what Anthropic's rule targets, by its own description.

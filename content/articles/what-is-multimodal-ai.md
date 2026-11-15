---
title: "What is multimodal AI? Chatbots that see, hear and speak"
dek: "Today's chatbots can read a photo, follow what your camera sees, talk back in a natural voice and make pictures and video. Here is how that works, where it still goes wrong, and what you share when you point your phone at something."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-11-15"
status: draft
madeWith: ai-assisted
image: /illustrations/what-is-multimodal-ai.svg
imageAlt: "A phone showing a camera lens and a speech bubble, next to a photo of mountains under a yellow magnifying glass, with a sound wave and two sound arcs nearby."
metaTitle: "What is multimodal AI? Chatbots that see, hear, speak"
metaDescription: "Multimodal AI handles text, images, sound and video. How chatbots read photos and hold voice chats, where they still slip up, and what to share."
shortAnswer: "Multimodal AI is AI that works with more than one kind of information: text, images, sound and video, both coming in and going out. It is why you can photograph a sign and ask what it means, talk to a chatbot out loud, or share your screen with it. It still misreads pictures, miscounts and invents details, and anything you show or say to it may be stored, so check its answers and think before you share."
sources:
  - title: "OpenAI: Introducing gpt-realtime (28 August 2025)"
    url: "https://openai.com/index/introducing-gpt-realtime"
  - title: "SiliconANGLE: OpenAI launches GPT-Live voice model series (8 July 2026)"
    url: "https://siliconangle.com/2026/07/08/openai-launches-gpt-live-voice-model-series-ahead-broad-gpt-5-6-release/"
  - title: "OpenAI Help Center: ChatGPT Voice"
    url: "https://help.openai.com/en/articles/20001274-chatgpt-voice"
  - title: "Engadget: Screen and camera sharing in Gemini Live is heading to all Android and iOS devices (20 May 2025)"
    url: "https://www.engadget.com/ai/screen-and-camera-sharing-in-gemini-live-is-heading-to-all-android-and-ios-devices-174547592.html"
  - title: "Google: Gemini Apps Privacy Hub"
    url: "https://support.google.com/gemini/answer/13594961?hl=en"
  - title: "Anthropic: Vision (Claude developer documentation)"
    url: "https://platform.claude.com/docs/en/build-with-claude/vision"
  - title: "Vo et al.: Vision Language Models are Biased (arXiv, 2025, revised 2026)"
    url: "https://arxiv.org/abs/2505.23941"
  - title: "Google DeepMind: Veo"
    url: "https://deepmind.google/models/veo/"
  - title: "OpenAI: Launching Sora responsibly (30 September 2025)"
    url: "https://openai.com/index/launching-sora-responsibly/"
  - title: "Consumer Reports: Do these 6 AI voice cloning companies do enough to prevent misuse? (10 March 2025)"
    url: "https://innovation.consumerreports.org/new-report-do-these-6-ai-voice-cloning-companies-do-enough-to-prevent-misuse/"
---

"Multimodal" is a plain idea with a technical name. A mode is a kind of information: written text, a picture, a sound, a moving video. An AI system is [multimodal](/glossary/multimodal) when it can take in, or produce, more than one of them.

The first public [chatbots](/glossary/chatbot) were text only. You typed, they typed back. Today the main assistants from OpenAI, Google, Anthropic and others will look at a photo, listen to your voice, answer out loud, follow what your phone camera is pointing at, and in some cases make images and video. That is multimodal AI, and you have probably used it already without the label.

## What can a multimodal chatbot actually do?

It helps to split it into what goes in and what comes out.

**In:** text you type, photos and screenshots you upload, documents such as PDFs, your voice, a live camera feed, or a live view of your phone screen.

**Out:** text, a spoken reply in a synthetic voice, a generated image, and with some tools a short video with sound.

Not every assistant does all of these, and features differ by app, plan and country. But the mix is now common. A few everyday examples:

- **Photo questions.** Snap a parking sign in a foreign language, a warning light on your dashboard, a plant you can't name or a confusing letter from the tax office, and ask what it means.
- **Live voice conversations.** Talk to the assistant as you would on a phone call, interrupt it, and have it answer straight away.
- **Camera and screen sharing.** Point your camera at a broken shelf bracket and ask how to fix it, or share your screen while you fill in an awkward online form. In May 2025 Google announced that camera and screen sharing in Gemini Live would come to compatible Android and iOS phones as a free update, [Engadget reported](https://www.engadget.com/ai/screen-and-camera-sharing-in-gemini-live-is-heading-to-all-android-and-ios-devices-174547592.html). OpenAI's help pages say ChatGPT's "Advanced" voice option supports live video and screen sharing in the phone apps for eligible subscribers.
- **Making pictures and video.** Describe an image and get one back. Video generators such as Google's Veo now add sound too: Google DeepMind's [Veo page](https://deepmind.google/models/veo/) says Veo 3 "lets you add sound effects, ambient noise, and even dialogue." For how image tools work under the bonnet, see [how AI image generators work](/understand/how-ai-image-generators-work).

## How can one model handle pictures and sound?

A chatbot runs on a [large language model](/glossary/large-language-model), which works by reading and predicting [tokens](/glossary/token): small chunks of text, roughly word fragments. If you want the full picture of that, read [how an AI chatbot actually works](/understand/how-chatbots-work).

The trick behind multimodal AI is to turn other kinds of information into tokens too.

For a picture, the system cuts the image into a grid of small squares and turns each square into a token, a list of numbers that captures what is in that patch: colour, edges, texture, shapes. Anthropic's [developer documentation](https://platform.claude.com/docs/en/build-with-claude/vision) gives a concrete example. Its Claude models split images into 28 by 28 pixel patches, one token each, so a 1,000 by 1,000 pixel photo becomes 1,296 tokens. Big images are shrunk first, which is one reason fine print in a large photo can get lost.

Sound works in a similar way. The audio is chopped into very short slices and each slice is turned into numbers. Video is a stream of pictures plus a soundtrack, so it becomes a long run of image tokens and audio tokens.

Once everything is tokens, the same [neural network](/glossary/neural-network) can look at all of it together. During [training](/glossary/training-data) it sees huge numbers of images paired with captions, recordings paired with transcripts and so on, and learns which patterns in one mode go with which in another. That is how it can connect the shape of a red octagon with the word "stop".

Voice used to be done the long way round: one program turned your speech into text, the chatbot answered in text, and a second program read the answer aloud. That loses tone of voice and adds a delay. OpenAI said in August 2025 that its [gpt-realtime](https://openai.com/index/introducing-gpt-realtime) model instead handles audio through a single model, which it says cuts the delay and keeps more of the nuance in speech. In July 2026, [SiliconANGLE reported](https://siliconangle.com/2026/07/08/openai-launches-gpt-live-voice-model-series-ahead-broad-gpt-5-6-release/) that OpenAI's newer GPT-Live models for ChatGPT's voice mode use a "full-duplex" design, meaning the model can keep listening while it talks and decide mid-conversation whether to jump in or look something up.

Going the other way, from tokens to a picture or a voice, usually involves a separate generator attached to the language model. The language model decides what to make, and the generator produces the pixels or the sound.

## Where does it still go wrong?

Seeing is not the same as understanding. Multimodal systems make the same kind of errors as text chatbots, plus some of their own.

**Misreading images.** Anthropic's own documentation warns that its model "might hallucinate or make mistakes when interpreting low-quality, rotated, or very small images." Blurry photos, odd angles and handwriting are where mistakes cluster.

**Counting.** Counting is surprisingly hard. The same Anthropic page says its model gives "approximate counts" that "might not always be precisely accurate, especially with large numbers of small objects." A 2025 study by researchers including An Vo and Anh Totti Nguyen, [Vision Language Models are Biased](https://arxiv.org/abs/2505.23941), tested leading models on slightly altered pictures of familiar things, such as a well-known three-stripe logo with a fourth stripe added. The models averaged about 17% accuracy at counting in these images. The authors found they tend to answer from what they expect to see rather than from what is actually there.

**Made-up details.** A multimodal model can describe things that are not in the picture, or read text that is not quite what the sign says, with full confidence. This is the visual version of a [hallucination](/glossary/hallucination). For why it happens, see [why AI makes things up](/understand/why-ai-makes-things-up).

**It can't tell you if an image is fake.** People often ask a chatbot whether a photo is AI-generated. Anthropic's documentation is blunt: its model "cannot determine whether an image is AI-generated" and should not be relied on "to detect fake or synthetic images". For better ways to check, read [how to spot AI-generated images, video and text](/live-with-it/spotting-ai-generated-content).

**Not a doctor.** The same page says Claude "is not designed to interpret complex diagnostic scans such as CTs or MRIs." Showing a chatbot a photo of a mole or a scan is not a diagnosis.

The practical rule: use the answer as a first guess and check anything that matters, especially numbers, prices, dosages, dates and small print. A quick way is to ask the assistant to quote exactly what it reads in the image, then compare that with the image yourself.

## Why do realistic voices and video worry people?

The same progress that makes a voice assistant pleasant to talk to also makes fake voices and fake video easier to produce. A [deepfake](/glossary/deepfake) is audio, video or an image made to look like a real person saying or doing something they did not.

Voice cloning is the sharpest example. When Consumer Reports assessed six voice-cloning products in March 2025, it [found](https://innovation.consumerreports.org/new-report-do-these-6-ai-voice-cloning-companies-do-enough-to-prevent-misuse/) that four "fail to take basic steps to stop unauthorized voice cloning", and called for a technical way to confirm the speaker's consent. Scammers use cloned voices to fake calls from relatives in trouble; our guide to [AI voice clone scams](/live-with-it/ai-voice-clone-scams) explains how they work and how a family "safe word" helps.

The big labs say they build in limits. OpenAI says its realtime voice API "uses preset voices to help prevent malicious actors from impersonating others." When it launched its Sora 2 video app in September 2025, OpenAI [said](https://openai.com/index/launching-sora-responsibly/) every video carried a visible watermark and embedded C2PA metadata, a standard digital label that records where a file came from, and that people decided who could use their likeness. Google says videos made with Veo are marked with SynthID, its own watermark. These are the companies' own descriptions, and watermarks and labels can be stripped or lost when a file is copied, so they help but don't settle whether something is real.

## What should I think about before sharing photos, my screen or my voice?

A photo carries more than you might notice: faces, house numbers, a letter on the table, the view from your window, sometimes location data stored in the file. A shared screen can show notifications, messages and passwords that pop up while the AI is watching. Your voice is personal data too.

The companies' own pages say what they keep, and it is worth knowing the defaults.

- **ChatGPT.** OpenAI's [help page on ChatGPT Voice](https://help.openai.com/en/articles/20001274-chatgpt-voice) says audio clips, and video clips from the Advanced option, are stored with the chat and "retained for 30 days". It says clips are not used for training unless you turn on separate settings to share your audio or video recordings, though transcripts can be used for training if "Improve the model for everyone" is on.
- **Gemini.** Google's [Gemini privacy hub](https://support.google.com/gemini/answer/13594961?hl=en) says that with Keep Activity on, your Gemini Live activity includes "audio, Gemini Live videos and screenshares", and transcripts of Live chats are used to improve Google services, including AI models. Audio, video and screenshares are not used for that by default. With Keep Activity off, Google says Live chats are kept for up to 72 hours.

Settings change often, so check the current version in your app. For the wider picture of what chatbots keep and where the off switches are, read [is it safe to paste my data into an AI chatbot?](/live-with-it/your-data-and-ai-chatbots), and for features built into your handset, [what the AI on your phone can do](/use/ai-on-your-phone).

A few habits help:

- **Crop before you upload.** Cut the photo down to the part you are asking about.
- **Close what you don't want seen** before you share your screen, and turn on do-not-disturb so messages don't pop up.
- **Keep other people out of it.** Avoid uploading photos of friends, children or strangers without a good reason, and never of anyone's ID documents.
- **Stop sharing when you are done.** Live camera and screen sessions keep running until you end them.
- **Use the privacy settings.** Turn off the options that let your recordings be used for training if you don't want that, and delete chats you no longer need.

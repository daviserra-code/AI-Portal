---
title: "What are AI agents allowed to do on your computer?"
dek: "Browser and computer-use agents see your screen, click and type with your logins. Here is what access they ask for, how the approval settings work, and what you should never hand over."
pillar: understand
format: Explainer
author: davide-serra
datePublished: "2026-11-11"
status: draft
madeWith: ai-assisted
image: /illustrations/ai-agents-on-your-computer.svg
imageAlt: "An open laptop with a mouse pointer on its screen, next to a key on a ring with a yellow tag."
metaTitle: "AI agents on your computer: permissions and risks"
metaDescription: "What browser and computer-use AI agents can see and do, how approval prompts and sandboxes work, and which accounts never to hand over."
shortAnswer: "An AI agent on your computer can do roughly what you let it: it looks at screenshots or page text, then clicks and types, often inside accounts you are already logged into. Most tools ask before purchases, sent messages and deletions, but every major vendor admits that hidden instructions on web pages can still trick an agent. Give it a separate browser profile without your bank, email or password manager, keep approvals switched on, and watch it on anything that matters."
sources:
  - title: "Anthropic: Computer use tool (developer documentation)"
    url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool"
  - title: "Anthropic Help Center: Claude in Chrome permissions guide"
    url: "https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide"
  - title: "Anthropic Help Center: Using Claude in Chrome safely"
    url: "https://support.claude.com/en/articles/12902428-using-claude-in-chrome-safely"
  - title: "Anthropic: Claude in Chrome is generally available"
    url: "https://claude.com/blog/claude-in-chrome-generally-available"
  - title: "OpenAI: Computer use in ChatGPT Work"
    url: "https://learn.chatgpt.com/docs/computer-use"
  - title: "OpenAI: Permission modes in ChatGPT Work"
    url: "https://learn.chatgpt.com/docs/permission-modes"
  - title: "OpenAI: Continuously hardening ChatGPT Atlas against prompt injection attacks"
    url: "https://openai.com/index/hardening-atlas-against-prompt-injection"
  - title: "The Next Web: OpenAI shuts down ChatGPT Atlas as it launches ChatGPT Work"
    url: "https://thenextweb.com/news/openai-chatgpt-atlas-browser-shutdown-superapp"
  - title: "Simon Willison: OpenAI's CISO on Atlas and prompt injection"
    url: "https://simonwillison.net/2025/Oct/22/openai-ciso-on-atlas/"
  - title: "Google: The new era of browsing, putting Gemini to work in Chrome"
    url: "https://blog.google/products-and-platforms/products/chrome/gemini-3-auto-browse/"
  - title: "Google Security Blog: Architecting security for agentic capabilities in Chrome"
    url: "https://blog.google/security/architecting-security-for-agentic/"
  - title: "Microsoft Support: Experimental agentic features in Windows"
    url: "https://support.microsoft.com/en-us/windows/ai/ai-features/experimental-agentic-features"
  - title: "Perplexity: Mitigating prompt injection in Comet"
    url: "https://hub-prod.perplexity.ai/hub/blog/mitigating-prompt-injection-in-comet"
  - title: "Brave: Agentic browser security, indirect prompt injection in Perplexity Comet"
    url: "https://brave.com/blog/comet-prompt-injection/"
  - title: "Brave: Unseeable prompt injections in screenshots"
    url: "https://brave.com/blog/unseeable-prompt-injections/"
  - title: "Guardio Labs: Scamlexity, we put agentic AI browsers to the test"
    url: "https://guard.io/labs/scamlexity-we-put-agentic-ai-browsers-to-the-test-they-clicked-they-paid-they-failed"
  - title: "SiliconANGLE: Zenity warns of inherent security risks in agentic browsers"
    url: "https://siliconangle.com/2026/03/03/zenity-warns-inherent-security-risks-agentic-browsers-perplexity-comet-findings/"
  - title: "The Hacker News: Claude for Chrome flaw lets other extensions trigger tasks"
    url: "https://thehackernews.com/2026/07/claude-for-chrome-flaw-lets-other.html"
---

An [AI agent](/glossary/ai-agent) that works on your computer can, in principle, do anything you could do sitting at the keyboard. What it actually does depends on three things: which apps and websites you let it into, which approval setting you pick, and whether something it reads along the way manages to trick it.

For the basics, start with [what an AI agent is](/understand/ai-agents-explained). This page is about access: what these tools see, what they can touch, and where to draw the line.

## How does an agent use a computer at all?

Mostly the way you do, by looking and pointing. Anthropic's developer documentation for its computer use tool describes a loop: the [model](/glossary/model) asks for a screenshot, decides where to click or what to type, the computer carries out that action, and a new screenshot comes back. The loop repeats until the job is done. The tool's actions include taking a screenshot, zooming, clicking, dragging, scrolling and typing.

Browser agents do the same inside one browser, sometimes reading the page's text rather than a picture of it. Either way, they act with whatever you are logged into.

That last point is what makes them useful and what makes them risky. A browser agent does not need its own passwords for your email, because your browser is already signed in.

## Which tools do this today?

As of November 2026, the main ones aimed at ordinary users are:

- **Claude in Chrome** (Anthropic, the company that also makes the AI used to help draft this article): a Chrome extension that Anthropic says became "generally available on every paid Claude plan" on 26 August 2026. It can read pages, click, type and fill in forms.
- **ChatGPT Work** (OpenAI): a desktop app for Mac and Windows. According to The Next Web, it replaced OpenAI's ChatGPT Atlas browser, which OpenAI said it would shut down on 9 August 2026. The app has a built-in browser that can log into accounts and download files, and a separate cloud browser on OpenAI's servers. Its "computer use" feature can also operate other apps on your desktop.
- **Gemini in Chrome with auto browse** (Google): launched on 28 January 2026 as a preview for AI Pro and Ultra subscribers in the US. Google says it handles "multi-step chores" such as comparing flights and filling in forms.
- **Copilot Actions on Windows** (Microsoft): tested with Windows Insiders since late 2025, inside a separate "agent workspace".
- **Perplexity Comet**: a whole web browser built around an AI assistant that can browse and act for you.

## What access do they ask for?

More than most people realise.

**Your screen and your mouse.** On a Mac, OpenAI says ChatGPT's computer use needs the system's Screen Recording permission to see an app and its Accessibility permission to click and type. On Windows, the app you want it to use has to stay visible on the screen while it works.

**Particular apps or sites.** ChatGPT asks before it uses each app, and you can tick "Always allow" for ones you trust. Claude in Chrome asks per site: you can allow one action, "always allow actions on this site", or decline, and you can revoke these later in the extension's Permissions page. Anthropic calls approving one action at a time "the safest option".

**Your files.** On Windows, Microsoft says agents run under their own separate account, not yours, and can ask for read and write access to six folders: Documents, Downloads, Desktop, Music, Pictures and Videos. For each agent you can choose "Allow Always", "Ask every time" or "Never allow". The whole feature is off by default and only an administrator can turn it on, after which it applies to everyone on that computer.

**Your logged-in accounts.** This is the big one. A browser agent inherits your sessions. Google says Gemini's auto browse can, with your permission, use Google Password Manager to sign in, although Google's security team writes that "the model does not have direct access to stored passwords."

**Your money.** Saved cards and addresses in your browser are within reach of anything that can fill in a checkout form. Vendors handle this differently, as the next section shows.

## How do approval prompts and sandboxes work?

Think of two separate controls. The approval setting decides when the agent stops to ask you. The sandbox decides what it can reach at all.

**Approval settings.** Claude in Chrome has three modes. "Manually approve" pauses before every action. "Automatically approve" keeps going but runs a safety check on each step and stops when something looks wrong. "Skip all approvals" does neither, and Anthropic says to use it only when you completely trust everything involved. ChatGPT Work offers "Ask for approval", "Approve for me", which only asks about actions an automatic reviewer flags, and "Full access", described as "unrestricted access to the internet and any file on your computer".

**Actions that always need you.** Several vendors keep a short list that no setting overrides. Anthropic says Claude in Chrome cannot make purchases, create accounts, handle card or ID numbers, or follow instructions found in emails or web pages, and must always ask before entering sensitive information or permanently deleting emails, files or messages. Google says Chrome's agent asks before going to banking and medical sites, before signing in, and before payments or sending messages. Perplexity says Comet pauses for confirmation before sending messages, changing your calendar or placing orders.

**Sandboxes.** A sandbox is a fenced-off space where the agent works. Microsoft's agent workspace is a separate Windows session with its own account, so the agent's actions can be told apart from yours. Google's Chrome agent limits which sites it may read from and which it may click on for a given task. Anthropic's own advice to developers goes furthest: run computer use in "a dedicated virtual machine or container with minimal privileges", keep account logins away from it, and limit it to a list of approved websites.

There is a gap between that developer advice and the consumer products. Few people will set up a virtual machine. Most will run an agent in the same browser where their bank is open.

## What is prompt injection, and has it really happened?

Prompt injection is the agent's weak spot. An agent reads web pages, emails and documents to do its job, and text in them can pose as instructions. The agent may not reliably tell your request apart from words it happens to read.

Security researchers have shown this repeatedly on real products:

- **A Reddit comment that stole a login code.** In August 2025, the browser company Brave showed that a hidden comment on Reddit could make Perplexity's Comet, when asked only to summarise the page, find the user's email address, request a one-time login code, read it from their open Gmail and post both back to the attacker. Brave said Perplexity's first fixes were incomplete.
- **Instructions you cannot see.** In October 2025, Brave showed text in faint colours that people could not read but Comet's screenshot reading could, and found a similar problem in another AI browser, Fellou, where simply asking it to open a website was enough.
- **A fake shop and a fake bank.** Guardio Labs reported in August 2025 that Comet, in some runs, bought a watch on a fake shop and filled in the saved card and address without asking, and helped fill in a login form on a phishing page.
- **A password manager emptied.** In March 2026, Zenity Labs reported that a booby-trapped calendar invite could steer Comet into reading local files, and that prompt injection could lead it through a logged-in 1Password web session to reveal passwords. SiliconANGLE reports that Perplexity fixed the underlying issue and added stricter confirmations.
- **A resignation letter nobody asked for.** OpenAI itself described an internal test in which a malicious email led its Atlas agent, asked only to write an out-of-office reply, to send a resignation letter to the user's CEO instead.

The vendors are candid about the limits. OpenAI wrote in December 2025 that prompt injection, "much like scams and social engineering on the web, is unlikely to ever be fully 'solved'." Its security chief had earlier called it "a frontier, unsolved security problem". Microsoft's Windows page warns that malicious content in documents or on screen "can override agent instructions", which could lead to stolen data or installed malware.

Defences are improving. Anthropic says that with its latest models, probes and safety classifier, no attacks succeeded in its own stronger test against most current models, and 0.3% did against one. Google runs a second model that checks each proposed action against what you asked for. These are the companies' own figures and tests.

## Can the agent software itself have bugs?

Yes, and those are a separate problem from tricking the AI. In July 2026, The Hacker News reported research by Manifold Security showing that another browser extension able to run code on the Claude website could fake a click and start one of Claude in Chrome's built-in tasks, including ones that read Gmail, Google Docs and Calendar. In the default mode an approval prompt still appeared; with "Act without asking" switched on, it did not. At the time of that report, the publication found no patch. The researchers' advice was to turn off the no-approval mode and review which extensions you have installed.

## What should you allow, supervise or never hand over?

**Fine to allow, with approvals on:**

- Research and comparison on public websites, with nothing at stake if it gets a detail wrong.
- Filling in forms with information that is not sensitive, which you check before submitting.
- Working inside one app or one folder you chose for the job.

**Supervise, one step at a time:**

- Anything that sends a message, books something or changes a setting. Use the mode that asks before each action, and read the prompt before you click yes.
- Sites with lots of user-written content, such as forums, reviews and comment sections, which is where hidden instructions are easiest to plant. Anthropic advises avoiding unfamiliar sites for sensitive tasks.
- Your inbox. Emails are written by strangers, and two of the attacks above started in one.

**Never hand over:**

- Online banking, investments, tax, health and government accounts. Anthropic strongly advises against using its extension to manage money and suggests a separate browser profile without these logins.
- Your password manager. Do not run an agent in a browser where your vault is unlocked.
- A saved card you could not afford to lose. If you must let an agent shop, a low-limit prepaid or virtual card limits the damage.
- "Full access" or "skip all approvals" modes on your everyday computer.

OpenAI suggests using a logged-out mode when a task does not need your accounts, and giving narrow instructions rather than broad ones, such as "find three hotels in Ljubljana under 120 euros" instead of "sort out my trip". Stop the task if the agent wanders to an unrelated site, asks for a password or starts talking about something you did not ask for: Anthropic lists all three as signs of a possible attack. And when you stop using an agent, remove its site and app permissions, just as you would [delete old chat data](/live-with-it/your-data-and-ai-chatbots).

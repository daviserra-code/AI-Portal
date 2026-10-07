---
term: "Context window"
definition: "The amount of text an AI model can take into account at one time, including your messages, any documents you share and its own replies."
related: [token, large-language-model, prompt]
status: approved
approvedBy: davide-serra
---

Think of the context window as the model's working desk. Everything on the desk can be used to form an answer: the conversation so far, a pasted report, your instructions. Anything that does not fit on the desk is out of view. The size is measured in [tokens](/glossary/token).

If you paste a very long contract into a chatbot and ask about a clause near the end, a model with a small context window may not be able to see that part. In a long conversation, the earliest messages can fall off the desk, and the tool may seem to forget what you said at the start.

A bigger window lets a model handle longer documents, but it does not guarantee it pays equal attention to everything inside. Details buried in the middle of a long text can still be missed, so ask about specific sections and check the answers.

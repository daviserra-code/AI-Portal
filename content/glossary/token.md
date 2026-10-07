---
term: "Token"
definition: "A small chunk of text, often a short word or part of a word, that a language model reads and writes. Usage limits and prices are often counted in tokens."
related: [large-language-model, context-window, prompt]
status: draft
---

A [large language model](/glossary/large-language-model) does not read whole sentences the way you do. It first breaks text into pieces called tokens. A common short word like "cat" may be one token, while a longer or rarer word such as "unbelievable" may be split into several. Spaces and punctuation count too.

As a rough guide for English, a page of ordinary text is a few hundred tokens. Other languages can use more tokens for the same meaning. [EDITOR: check whether to add a specific rule of thumb, e.g. tokens per word, from a cited source]

You rarely need to think about tokens when chatting. They matter when you see limits ("this model handles up to so many tokens") or prices for business use, which are usually charged per number of tokens. They also explain why a model can stumble on tasks like counting letters in a word: it sees chunks, not individual letters.

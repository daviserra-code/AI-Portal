---
term: "Fine-tuning"
definition: "Extra training that takes an existing AI model and adapts it to a particular job, style or subject using a smaller set of examples."
related: [model, training-data, open-weights-model]
status: draft
---

Training a big [model](/glossary/model) from scratch takes huge amounts of data, time and computing power. Fine-tuning is a shortcut. You start with a model that already has general skills and give it further practice on a narrower set of examples, so it becomes better at one kind of task.

A company might fine-tune a model on thousands of its past customer service replies so that it answers in the company's tone and knows its products. A hospital might fine-tune one to summarise medical notes in a standard format.

Fine-tuning changes how a model behaves, but it is not the only way to customise one, and it is not always the best. Often simply giving the model the right documents along with your [prompt](/glossary/prompt) works well. Fine-tuning on poor or one-sided examples can also add new errors or [bias](/glossary/bias).

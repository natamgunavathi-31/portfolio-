export type SkillCategory = 'Prompt Engineering' | 'LLM Paradigms' | 'AI Workflows & Output' | 'Testing & Optimization';

export type Skill = {
  title: string;
  category: SkillCategory;
  description: string;
  formula: string;
  useCase: string;
  promptTemplate: string;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  summary: string;
  metric: string;
  stack: string[];
  objective: string;
  prompt: string;
  workflow: string[];
  rubric: string[];
  scenario: string;
};

export type ExperienceItem = {
  title: string;
  meta: string;
  detail: string;
};

export type Certification = {
  name: string;
  issuer: string;
  status: string;
  year: string;
};

export const portfolioData = {
  personal: {
    name: 'Gunavathi Natam',
    title: 'Prompt Engineering Specialist',
    headline: 'Turning Ideas into Intelligent AI Experiences.',
    subheadline:
      'Exploring the power of prompt engineering to create clearer instructions, smarter AI workflows, and more effective interactions with generative AI.',
    email: 'gunavathi.natam.ai@gmail.com',
    emailPlaceholder: 'your.real.email@gmail.com',
    githubPlaceholder: 'https://github.com/your-username',
    linkedinPlaceholder: 'https://linkedin.com/in/your-profile',
    twitterPlaceholder: 'https://x.com/your-handle',
    resumeAvailable: false,
  },
  stats: [
    { label: 'AI workflows designed', value: '18+' },
    { label: 'Prompt experiments', value: '42' },
    { label: 'Output quality iterations', value: '9x' },
  ],
  pillars: [
    {
      title: 'Precision Instruction',
      description: 'Clear roles, constraints, and task framing reduce ambiguity and produce reliable outputs.',
    },
    {
      title: 'Contextual Grounding',
      description: 'Structured references and retrieval patterns make responses anchored to the right source material.',
    },
    {
      title: 'Deterministic Outputs',
      description: 'Schema, examples, and validation loops improve consistency without sacrificing creativity.',
    },
    {
      title: 'Iterative Benchmarking',
      description: 'Repeated testing and scoring create measurable improvements in signal, tone, and completeness.',
    },
  ],
  skills: [
    {
      title: 'Prompt Engineering',
      category: 'Prompt Engineering',
      description: 'Designing system prompts that turn vague goals into explicit, testable tasks.',
      formula: 'Role + Objective + Constraints + Context + Output Schema + Quality Check',
      useCase: 'Transforms open-ended requests into well-scoped tasks for better reasoning and output control.',
      promptTemplate: 'You are a [role]. Your task is to [objective].\nUse this context: [context].\nFollow these constraints: [constraints].\nReturn output in [format].',
    },
    {
      title: 'Generative AI',
      category: 'LLM Paradigms',
      description: 'Applying LLM capabilities to content generation, synthesis, and task automation.',
      formula: 'Use Case + Model Selection + Context + Guardrails + Review Loop',
      useCase: 'Helps teams use generative models for ideation, summarization, and workflow acceleration.',
      promptTemplate: 'Act as a [domain expert]. Generate [artifact type] based on [inputs].\nPrioritize [quality criteria].\nReject unsupported claims.',
    },
    {
      title: 'Large Language Models',
      category: 'LLM Paradigms',
      description: 'Understanding model strengths, failure modes, and alignment strategies.',
      formula: 'Task Framing + Examples + Context Window + Evaluation Method',
      useCase: 'Improves reliability when building assistants, copilots, and knowledge tools.',
      promptTemplate: 'Evaluate this task for model suitability.\nIdentify bottlenecks in reasoning, context use, and factual grounding.\nRecommend a safe workflow.',
    },
    {
      title: 'Zero-shot & Few-shot',
      category: 'Prompt Engineering',
      description: 'Teaching the model through direct instruction and targeted examples.',
      formula: 'Instruction + Example(s) + Desired Output Pattern + Constraints',
      useCase: 'Useful when rapid prototyping or adapting prompts to new tasks without retraining.',
      promptTemplate: 'Example 1: [input] -> [output]\nExample 2: [input] -> [output]\nNow complete: [new input].',
    },
    {
      title: 'Chain-of-Thought Prompting',
      category: 'LLM Paradigms',
      description: 'Structuring the model to reason explicitly before finalizing a result.',
      formula: 'Goal + Reasoning Steps + Hidden Constraints + Verified Answer',
      useCase: 'Helps decompose complex decisions and reduce missing-step errors in analytic tasks.',
      promptTemplate: 'Solve this step by step.\nState assumptions.\nShow intermediate reasoning.\nEnd with a concise final answer and confidence note.',
    },
    {
      title: 'Structured Output Design',
      category: 'AI Workflows & Output',
      description: 'Converting free-form responses into JSON, XML, or schema-based structures.',
      formula: 'Schema + Field Definitions + Validation + Error Recovery',
      useCase: 'Makes model outputs reliable enough for automation, tools, and handoff systems.',
      promptTemplate: 'Return a JSON object with keys: [field1], [field2], [field3].\nNo extra text.\nUse strict types and valid values.',
    },
    {
      title: 'AI Workflow Design',
      category: 'AI Workflows & Output',
      description: 'Mapping the right model actions across research, drafting, review, and delivery.',
      formula: 'Input -> Stage 1 -> Stage 2 -> Validation -> Delivery',
      useCase: 'Creates scalable AI operations that stay understandable and controllable.',
      promptTemplate: 'Follow this workflow: research, summarize, critique, rewrite, validate.\nOutput only the final artifact and a brief quality checklist.',
    },
    {
      title: 'Prompt Testing & Optimization',
      category: 'Testing & Optimization',
      description: 'Benchmarking prompt variants and selecting the strongest performer.',
      formula: 'Metric + Variant Set + Evaluation Rubric + Iteration Loop',
      useCase: 'Improves consistency, reduces hallucinations, and aligns outputs with product goals.',
      promptTemplate: 'Compare the following prompt variants across [metrics].\nIdentify the best-performing version and explain why.',
    },
    {
      title: 'AI-assisted Research',
      category: 'Testing & Optimization',
      description: 'Combining retrieval, synthesis, and verification for evidence-led outputs.',
      formula: 'Research Query + Source Filtering + Synthesis + Citations + Fact Check',
      useCase: 'Supports faster insight discovery while keeping outputs transparent and accountable.',
      promptTemplate: 'Research [topic] using [source constraints].\nSummarize evidence, cite sources, and flag uncertain claims.',
    },
  ],
  projects: [
    {
      id: 'prompt-library',
      name: 'AI Prompt Library',
      category: 'Prompt Systems',
      summary: 'Modular prompt catalog for recurring AI tasks across content, research, and analysis.',
      metric: '7 reusable templates',
      stack: ['Prompt Design', 'Evaluation', 'Automation'],
      objective: 'Create repeatable prompts that are easy to adapt for new tasks while preserving guardrails and output structure.',
      prompt:
        'You are an AI operations specialist. Design a reusable prompt for [task].\nInclude role, objective, constraints, expected JSON output, and quality checks.\nKeep the language concise and implementation-ready.',
      workflow: ['Task definition', 'Prompt framing', 'Variant testing', 'Deployment and review'],
      rubric: ['Clarity', 'Safety', 'Output completeness', 'Operational ease'],
      scenario: 'For internal teams who need fast, consistent AI execution without reinventing prompts every time.',
    },
    {
      id: 'optimization-lab',
      name: 'Prompt Optimization Lab',
      category: 'Evaluation Studio',
      summary: 'A/B testing workflow for prompt variants to discover stronger instructions and safer output patterns.',
      metric: '3x faster refinement',
      stack: ['A/B Testing', 'Benchmarking', 'Guardrails'],
      objective: 'Compare prompt variants under a consistent rubric to see which version produces cleaner, more reliable results.',
      prompt:
        'Compare two prompt variants for [task].\nScore each on clarity, factual grounding, format compliance, and safety.\nSuggest the best option with reasons.',
      workflow: ['Collect baseline', 'Generate variants', 'Score outputs', 'Retune and re-test'],
      rubric: ['Accuracy', 'Reasoning quality', 'Format fidelity', 'Risk detection'],
      scenario: 'Useful for product teams tuning assistant behavior before rollout into user-facing workflows.',
    },
    {
      id: 'content-assistant',
      name: 'AI Content Assistant',
      category: 'Content Systems',
      summary: 'Multi-stage content engine for research-backed drafts tailored to audience and intent.',
      metric: 'Structured drafts in under 4 min',
      stack: ['Research', 'Drafting', 'Rewriting'],
      objective: 'Turn raw inputs into coherent, structured content that is easy to review and publish.',
      prompt:
        'Write a [content type] for [audience].\nUse [brief], maintain tone [tone], and cite credible evidence where relevant.\nReturn a structured outline and final draft.',
      workflow: ['Research brief', 'Outline generation', 'Drafting', 'Revision and polish'],
      rubric: ['Audience fit', 'Clarity', 'Credibility', 'Actionability'],
      scenario: 'Ideal for marketing assistants, research brief workflows, and internal communications teams.',
    },
    {
      id: 'research-assistant',
      name: 'AI Research Assistant',
      category: 'Knowledge Synthesis',
      summary: 'Evidence-first synthesis tool that aggregates information and flags uncertainty.',
      metric: 'Verifiable insight flow',
      stack: ['Research', 'Summarization', 'Citations'],
      objective: 'Support knowledge work by condensing source material into concise, inspectable takeaways.',
      prompt:
        'Summarize the source material on [topic].\nCapture key ideas, identify uncertainties, and provide a source-backed conclusion.\nUse a transparent citation format.',
      workflow: ['Source gathering', 'Extraction', 'Comparison', 'Final synthesis'],
      rubric: ['Evidence quality', 'Coverage', 'Verification', 'Readability'],
      scenario: 'Best for learning, analyst notes, policy summaries, and exploratory research tasks.',
    },
  ],
  experience: {
    labs: [
      {
        title: 'Prompt Failure Pattern Mapping',
        meta: 'Practice Lab · Ongoing',
        detail: 'Testing edge cases where vague instructions and missing constraints create inconsistent or low-quality outputs.',
      },
      {
        title: 'Schema-first Output Prototyping',
        meta: 'Practice Lab · Ongoing',
        detail: 'Building structured prompt pipelines that enforce JSON, XML, and rubric-based responses for automation workflows.',
      },
      {
        title: 'AI Workflow Benchmarking',
        meta: 'Practice Lab · Ongoing',
        detail: 'Evaluating prompt variants against clarity, factuality, tone, and usefulness to increase operational confidence.',
      },
    ],
    education: [
      {
        title: 'Bachelor of Technology / Relevant AI Learning Path',
        meta: 'Academic Background · Placeholder',
        detail: 'Strong interest in applied AI, human-computer interaction, and intelligent software systems.',
      },
      {
        title: 'Prompt Engineering & GenAI Practice Tracks',
        meta: 'Self-driven Learning · Ongoing',
        detail: 'Hands-on study across model behavior, guardrails, evaluation methods, and workflow design.',
      },
    ],
    work: [
      {
        title: 'AI Workflow & Prompt Experimenter',
        meta: 'Independent Practice · Current',
        detail: 'Designing and refining AI tasks for research assistants, messaging workflows, and structured content generation.',
      },
      {
        title: 'AI Product & Research Intern (Placeholder)',
        meta: 'Future Role · Editable',
        detail: 'Focused on prompt quality testing, structured content pipelines, and evaluation frameworks.',
      },
    ],
  },
  certifications: [
    { name: 'Prompt Engineering Foundations', issuer: 'Practice Track', status: 'Completed', year: '2025' },
    { name: 'Generative AI Workflow Design', issuer: 'Workshop', status: 'Completed', year: '2025' },
    { name: 'LLM Evaluation & Testing', issuer: 'Lab Series', status: 'In Progress', year: '2026' },
    { name: 'AI Safety & Guardrail Design', issuer: 'Learning Module', status: 'Completed', year: '2025' },
  ],
};

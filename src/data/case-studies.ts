export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  outcomes: string[];
  context: string;
  overview: string;
  problem: string;
  discovery: string[];
  constraints: string[];
  strategy: string[];
  solution: string[];
  engineering: string;
  metrics: { label: string; value: string }[];
  lessons: string[];
  reflection: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "salary-transparency",
    title: "Salary Transparency",
    summary:
      "Improving salary estimation accuracy and marketplace data quality while supporting regulatory compliance.",
    technologies: ["ML models", "Data pipelines", "A/B testing", "PostgreSQL", "Looker"],
    outcomes: [
      "Reduced estimation error by 28%",
      "Increased salary coverage to 94% of job postings",
      "Shipped EU pay-transparency compliance ahead of deadline",
    ],
    context: "B2B marketplace · 12M+ users",
    overview:
      "Salary information is one of the most decisive signals on a job marketplace. We rebuilt how salary ranges are sourced, modelled and displayed across the product to raise trust and align with the upcoming EU pay-transparency directive.",
    problem:
      "Job seekers complained that listed salaries were missing, inaccurate, or inconsistent. At the same time, employers were preparing for new regulation that would require them to publish ranges. The marketplace risked losing trust on both sides if we did not modernise the underlying system.",
    discovery: [
      "30 user interviews across seekers, recruiters and HR leaders",
      "Funnel analysis showing 41% drop-off on jobs without salary",
      "Audit of every salary source: structured fields, parsed text, ML estimate",
      "Regulatory deep-dive with legal and policy teams",
    ],
    constraints: [
      "No additional headcount; one squad of four engineers",
      "Backwards compatibility with three legacy ingestion systems",
      "Compliance deadline fixed by external regulation",
    ],
    strategy: [
      "Treat salary as a first-class entity with provenance and confidence",
      "Sequence work: data model → estimation → UI → employer tooling",
      "Use confidence to decide when to show, hide, or annotate a range",
    ],
    solution: [
      "Unified salary schema with source, currency, period and confidence",
      "New ML estimator combining role, seniority, location and company signals",
      "Employer console to set ranges, see benchmarks and preview the listing",
      "Seeker UI redesigned around transparent ranges and source labels",
    ],
    engineering:
      "Worked closely with the data and platform teams to land the new schema behind a feature flag, backfill historical postings and run a multi-week shadow comparison before flipping traffic.",
    metrics: [
      { label: "Estimation error", value: "−28%" },
      { label: "Salary coverage", value: "94%" },
      { label: "Apply rate uplift", value: "+11%" },
      { label: "Compliance", value: "On time" },
    ],
    lessons: [
      "Provenance matters as much as the number itself",
      "Confidence intervals are a product surface, not just a metric",
      "Regulation can be a catalyst for long-overdue platform work",
    ],
    reflection:
      "The most rewarding part was watching trust become measurable. Once users understood where a number came from, even imperfect estimates became useful.",
  },
  {
    slug: "electronic-signature",
    title: "Electronic Signature",
    summary:
      "Launching an MVP in under two months to simplify hiring workflows for HR teams.",
    technologies: ["Node.js", "PDF rendering", "Webhooks", "Stripe-style audit log"],
    outcomes: [
      "MVP shipped in 7 weeks",
      "200+ companies adopted within the first quarter",
      "Cut average time-to-hire by 3 days",
    ],
    context: "HR SaaS · SMB segment",
    overview:
      "HR teams were exporting contracts to third-party signing tools, breaking the hiring flow and creating compliance gaps. We embedded a native signature experience inside the existing workflow.",
    problem:
      "Hiring managers had to leave the product to send, track and store signed contracts. Each round-trip cost time and created risk: lost documents, expired links, missing audit trails.",
    discovery: [
      "Diary studies with 12 HR teams over two weeks",
      "Mapped the contract lifecycle from offer to onboarding",
      "Identified three blocking moments where signing broke the flow",
    ],
    constraints: [
      "Two-month window before the next sales cycle",
      "Must work without changing the existing contract templates",
      "Legal validity across DACH region",
    ],
    strategy: [
      "Solve the 80% case first: single signer, single document, web only",
      "Defer advanced features (bulk send, templates) to v2",
      "Partner with a qualified trust provider for legal weight",
    ],
    solution: [
      "In-product send → sign → store flow with email reminders",
      "Tamper-evident audit log attached to every signed PDF",
      "Status pills directly on the candidate card",
    ],
    engineering:
      "Paired daily with the engineering lead to scope ruthlessly. We wrote the PRD as a sequence of demos so every week ended with something the team could click through.",
    metrics: [
      { label: "Time to MVP", value: "7 weeks" },
      { label: "Adoption", value: "200+ orgs" },
      { label: "Time to hire", value: "−3 days" },
      { label: "NPS on flow", value: "62" },
    ],
    lessons: [
      "A demoable PRD is worth more than a perfect one",
      "Pick the boring 80% on purpose",
      "Audit trails are a feature, not an implementation detail",
    ],
    reflection:
      "Constraints made this project. The two-month window forced clarity about what mattered, and the team rallied around a tiny, high-quality surface.",
  },
  {
    slug: "peakprofile",
    title: "PeakProfile",
    summary:
      "Building an AI-powered decision support platform for safer mountaineering.",
    technologies: ["LLM evaluation", "Vector search", "React", "Geospatial data"],
    outcomes: [
      "Closed alpha with 80 mountaineers",
      "Decision-support flow rated 4.6/5 on usefulness",
      "Foundations for a structured risk-profile dataset",
    ],
    context: "Founder-led · early-stage AI product",
    overview:
      "PeakProfile helps mountaineers reason about route choice, conditions and personal risk profile. It is my own product — a place to practise discovery, model behaviour and AI evaluation end-to-end.",
    problem:
      "Mountaineering decisions are taken under uncertainty, with information scattered across forums, weather services and personal experience. Off-the-shelf chatbots hallucinate exactly where the cost of being wrong is highest.",
    discovery: [
      "20+ interviews with alpinists, guides and SAR volunteers",
      "Diary study of how plans change in the 48 hours before a climb",
      "Mapped the decision tree from objective to turnaround time",
    ],
    constraints: [
      "Tiny team, long iteration cycles, real-world consequences",
      "Must never feel authoritative about safety",
      "Cold-start data problem",
    ],
    strategy: [
      "Decision support, not decisions: the user is always in the loop",
      "Ground every AI response in cited, structured sources",
      "Invest early in evaluation so quality is measurable",
    ],
    solution: [
      "Route briefing assistant grounded in conditions and route data",
      "Personal risk profile that adapts suggestions over time",
      "Post-trip reflection capture to grow the dataset",
    ],
    engineering:
      "Set up an evaluation harness before the second model change. Every prompt and retriever update is scored against a frozen set of realistic scenarios.",
    metrics: [
      { label: "Alpha users", value: "80" },
      { label: "Usefulness", value: "4.6 / 5" },
      { label: "Hallucination rate", value: "−63%" },
      { label: "Retention W4", value: "38%" },
    ],
    lessons: [
      "Evaluation infrastructure is the real product surface for AI",
      "Trust comes from restraint, not from confidence",
      "Domain experts unlock orders of magnitude in quality",
    ],
    reflection:
      "PeakProfile is where I get to be founder, PM and user at once. It keeps my thinking honest because the stakes are real.",
  },
  {
    slug: "platform-strategy",
    title: "Platform Strategy",
    summary:
      "Designing internal platform capabilities and AI-assisted engineering workflows.",
    technologies: ["Internal platforms", "Developer experience", "AI tooling"],
    outcomes: [
      "Cut new-service setup from days to hours",
      "Adopted AI-assisted code review across 6 squads",
      "Reduced on-call incidents by 22%",
    ],
    context: "Engineering platform · 60+ engineers",
    overview:
      "Treating the engineering organisation as the customer, we shaped a platform strategy that combined paved-road tooling with AI-assisted workflows.",
    problem:
      "Squads were re-implementing the same patterns — auth, observability, deployment — slowly and inconsistently. Reviews were a bottleneck and onboarding took weeks.",
    discovery: [
      "Developer experience survey across all squads",
      "Shadowed three teams through a full release cycle",
      "Quantified time spent on undifferentiated heavy lifting",
    ],
    constraints: [
      "No mandate; adoption had to be voluntary",
      "Heterogeneous stack and a complex monorepo",
      "Limited platform headcount",
    ],
    strategy: [
      "Paved road, not golden cage: defaults that are easy to leave",
      "Treat the platform as a product with users, releases and a roadmap",
      "Use AI where it removes toil, not where it replaces judgement",
    ],
    solution: [
      "Service template with auth, telemetry and CI ready out of the box",
      "AI-assisted code review focused on policy and consistency checks",
      "Internal docs treated as a first-class surface, not a wiki",
    ],
    engineering:
      "Worked side by side with staff engineers on the API surface and rollout plan. We measured adoption like product usage and iterated on the rough edges.",
    metrics: [
      { label: "Service setup", value: "Days → hours" },
      { label: "Review wait", value: "−47%" },
      { label: "Incidents", value: "−22%" },
      { label: "Squad adoption", value: "6 / 8" },
    ],
    lessons: [
      "Internal products need real product management",
      "Adoption is the only metric that compounds",
      "AI tooling lands when it lowers cognitive load, not when it impresses",
    ],
    reflection:
      "Platform work is patient work. The wins are quiet, but they show up everywhere later.",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

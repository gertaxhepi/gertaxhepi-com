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
    title: "Salary Transparency & Structured Job Data",
    summary:
      "Improving salary transparency for millions of job seekers through higher-quality structured job data.",
  technologies: ["Structured Data", "Taxonomy", "Ground Truth", "Marketplace", "Data Quality"],
    outcomes: [
      "Reduced estimation error by 28%",
      "Increased salary coverage to 94% of job postings",
    ],
    context: "B2B Marketplace · Data Products",
    overview:
      "Salary ranges shown to job seekers depended on the quality of employer-provided job data. Job postings arrived with inconsistent or incomplete structured data. Salaries were estimated from sparse, noisy inputs — role titles that meant different things, missing seniority levels, conflicting location mappings. The result was estimates that felt wrong to users and eroded trust. My work focused on improving taxonomy, structured attributes and data quality so salary estimates became more reliable and trustworthy.",
    problem:
      "Job postings arrived with inconsistent or incomplete structured data. Salaries were estimated from sparse, noisy inputs — role titles that meant different things, missing seniority levels, conflicting location mappings. The result was estimates that felt wrong to users and eroded trust.",
    discovery: [
      "Mapped every field feeding the salary estimation pipeline",
      "Interviewed job seekers to understand which estimates felt credible and why",
      "Audited employer posting flows to identify where structured data was being lost",
      "Traced data lineage from ingestion through to the salary estimation model",
    ],
    constraints: [
      "Three legacy ingestion systems",
      "No additional engineering headcount",
      "Zero disruption during rollout",
    ],
    strategy: [
      "Treat structured data as the product surface, not just a backend concern",
      "Build a unified taxonomy before improving the model",
      "Use confidence scores to decide when to show, hide or qualify an estimate",
    ],
    solution: [
      "Unified job taxonomy mapping titles, seniority and location to canonical values",
      "New structured data pipeline with validation at ingestion",
      "Confidence scoring that surfaced source quality alongside the estimate",
    ],
    engineering:
      "Worked closely with data and engineering teams to land the new schema behind a feature flag, backfill historical postings and run a shadow comparison before flipping traffic.",
    metrics: [
      { label: "Lower salary estimation error", value: "28%" },
      { label: "Jobs with salary estimates", value: "94%" },
      { label: "Job applications", value: "+11%" },
    ],
    lessons: [
      "Better AI starts with better ground truth, not better algorithms",
      "Provenance matters as much as the number itself",
      "Confidence intervals are a product surface, not just a metric",
    ],
    reflection:
      "Better products start long before the algorithm. Better decisions come from better data, thoughtful product design and helping users understand where answers come from. That lesson has shaped nearly every product I've built since.",
  },
  {
    slug: "electronic-signature",
    title: "Electronic Signature MVP",
    summary:
      "Launching an end-to-end e-signature experience that simplified hiring workflows for HR teams.",
    technologies: ["MVP Strategy", "Workflow Automation", "Product Discovery", "Cross-functional Delivery"],
    outcomes: [
      "MVP shipped in 7 weeks",
      "200+ companies adopted within the first quarter",
      "Cut average time-to-hire by 3 days",
    ],
    context: "HR SaaS · SMB segment",
    overview:
      "HR teams were exporting contracts to third-party signing tools, breaking the hiring flow and creating gaps. We embedded a native signature experience inside the existing workflow.",
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
      "Building an AI-powered product that helps mountaineers make better decisions through structured experience data.",
    technologies: ["AI Product", "Trust Systems", "Decision Support", "User Research"],
    outcomes: [
      "20 early users engaged",
      "30+ discovery interviews conducted",
      "3 AI prototypes tested",
      "MVP in active development",
    ],
    context: "Founder · AI Product",
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
      { label: "Early users", value: "20" },
      { label: "Discovery interviews", value: "30+" },
      { label: "AI prototypes tested", value: "3" },
      { label: "Status", value: "MVP in development" },
    ],
    lessons: [
      "Evaluation infrastructure is the real product surface for AI",
      "Trust comes from restraint, not from confidence",
      "Domain experts unlock orders of magnitude in quality",
    ],
    reflection:
      "PeakProfile is where I get to be founder, PM and user at once. It keeps my thinking honest because the stakes are real.",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

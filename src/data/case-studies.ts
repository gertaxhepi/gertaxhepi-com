export type DecisionItem = { title: string; description: string };

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string; // e.g. "XING • Product Manager"
  technologies: string[];
  outcomes: string[];
  context: string;
  overview: string;
  /** Short opening line that frames the user/business problem. */
  challengeLead: string;
  /** Supporting paragraphs that expand on the challenge. */
  challengeBody: string[];
  /** Intro sentence for the discovery block. */
  discoveryLead: string;
  discovery: string[];
  constraints: string[];
  /** Decisions with title + supporting copy. */
  keyDecisions: DecisionItem[];
  /** Solution shipped, numbered. */
  solutionItems: DecisionItem[];
  /** Short paragraph framing the results before the metric grid. */
  resultsLead: string;
  metrics: { label: string; value: string }[];
  /** Hero metrics (3-4). Defaults to first 3 of `metrics` when absent. */
  heroMetrics?: { label: string; value: string }[];
  lessons: string[];
  reflection: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "salary-transparency",
    title: "Salary Transparency Platform",
    summary:
      "Improving salary transparency for millions of job seekers by transforming inconsistent job data into reliable salary estimates.",
    role: "XING • Product Manager",
    technologies: ["Structured Data", "Taxonomy", "Ground Truth", "Marketplace", "Data Quality"],
    outcomes: ["Reduced estimation error by 28%", "Increased salary coverage to 94% of job postings"],
    context: "B2B Marketplace · Data Products",
    overview: "Salary ranges shown to job seekers depended on the quality of employer-provided job data.",
    challengeLead: "Job seekers were making career decisions based on salary estimates they couldn't fully trust.",
    challengeBody: [
      "Behind the scenes, job postings arrived with inconsistent or incomplete structured data — role titles that meant different things across employers, missing seniority levels, conflicting location mappings, and gaps in core attributes. The salary model was being fed sparse, noisy inputs, so the estimates it produced felt wrong to users and eroded trust in the marketplace.",
      "My work focused on improving taxonomy, structured data and data quality so salary estimates became more reliable and trustworthy.",
    ],
    discoveryLead:
      "To understand where trust was breaking down, I focused on understanding both the data and the user experience.",
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
    keyDecisions: [
      {
        title: "Treat structured data as the product",
        description:
          "Rather than treating taxonomy as backend infrastructure, we treated structured data as part of the user experience because it directly shaped the salary estimates users saw.",
      },
      {
        title: "Standardize before optimizing",
        description:
          "Built a unified taxonomy before improving the salary model itself, so every later gain compounded on a stable foundation.",
      },
      {
        title: "Make uncertainty visible",
        description:
          "Used confidence scoring so users could understand when estimates were reliable, instead of hiding uncertainty behind a single number.",
      },
    ],
    solutionItems: [
      {
        title: "Unified job taxonomy",
        description:
          "Mapped titles, seniority and locations into canonical values so postings could be compared on the same terms.",
      },
      {
        title: "Improve data quality at ingestion",
        description:
          "Caught gaps and inconsistencies as postings entered the system, so the salary model worked from cleaner inputs.",
      },
      {
        title: "Show users how confident the estimate is",
        description:
          "Displayed data quality alongside salary estimates so people could weigh the answer instead of accepting it blindly.",
      },
    ],
    resultsLead:
      "Improving structured data increased both the accuracy and coverage of salary estimates, making salary information more trustworthy for millions of job seekers while increasing marketplace engagement.",
    metrics: [
      { label: "Lower salary estimation error", value: "28%" },
      { label: "Jobs with salary estimates", value: "94%" },
      { label: "Job applications", value: "+11%" },
    ],
    heroMetrics: [
      { label: "Lower salary estimation error", value: "28%" },
      { label: "Jobs with salary estimates", value: "94%" },
      { label: "Job applications", value: "+11%" },
    ],
    lessons: [
      "Better products start with better ground truth, not better algorithms",
      "Provenance matters as much as the number itself",
      "Confidence intervals are a product surface, not just a metric",
    ],
    reflection:
      "Better products start long before the algorithm. Better decisions come from better data, thoughtful product design and helping users understand where answers come from. That lesson has shaped nearly every product I've built since.",
  },
  {
    slug: "electronic-signature",
    title: "Electronic Signature MVP",
    summary: "Launched an end-to-end e-signature experience that streamlined hiring workflows for HR teams.",
    role: "jacando • Product Manager",
    technologies: ["MVP Strategy", "Workflow Automation", "Product Discovery", "Cross-functional Delivery"],
    outcomes: [
      "MVP shipped in 7 weeks",
      "200+ companies adopted within the first quarter",
      "Cut average time-to-hire by 3 days",
    ],
    context: "HR SaaS · SMB segment",
    overview:
      "HR teams were exporting contracts to third-party signing tools, breaking the hiring flow and creating gaps.",
    challengeLead:
      "Hiring managers were losing days — and sometimes candidates — every time a contract had to leave the product.",
    challengeBody: [
      "To send an offer, HR teams exported a PDF, switched to a third-party signing tool, uploaded the document, configured signers, and then manually copied the signed file back into the candidate record. Each round-trip cost time and introduced risk: lost documents, expired links, missing audit trails, and broken handoffs into onboarding.",
      "The product owned the hiring workflow everywhere except the most important moment — the signature. My work focused on bringing that moment back into the product without compromising legal validity.",
    ],
    discoveryLead:
      "I started by following real contracts end-to-end with the teams that lived this workflow every week.",
    discovery: [
      "Diary studies with 12 HR teams over two weeks",
      "Mapped the contract lifecycle from offer to onboarding",
      "Identified three blocking moments where signing broke the flow",
      "Reviewed legal requirements across the DACH region with counsel",
    ],
    constraints: [
      "Two-month window before the next sales cycle",
      "Must work without changing the existing contract templates",
      "Legal validity across DACH region",
    ],
    keyDecisions: [
      {
        title: "Solve the 80% case first",
        description:
          "Scoped v1 to single signer, single document, web only. Most hiring contracts fit that shape, and shipping it unlocked the workflow for the majority of customers.",
      },
      {
        title: "Defer advanced features on purpose",
        description:
          "Bulk send, templates and signer routing were explicitly deferred to v2. Cutting them protected the timeline and forced clarity about what really mattered for the first release.",
      },
      {
        title: "Partner for legal weight",
        description:
          "Integrated a qualified trust provider rather than building signing infrastructure from scratch, so the team could focus on the product experience around the signature.",
      },
    ],
    solutionItems: [
      {
        title: "In-product send → sign → store flow",
        description:
          "Contracts could be sent, signed and stored without ever leaving the product. Email reminders nudged signers automatically.",
      },
      {
        title: "Tamper-evident audit trail",
        description:
          "Every signed PDF carried an audit log of who signed, when, and from where — turning compliance into a built-in feature rather than a manual task.",
      },
      {
        title: "Status visible where work happens",
        description:
          "Signing status appeared directly on the candidate card, so hiring managers could see progress in the same place they tracked the rest of the hire.",
      },
    ],
    resultsLead:
      "Bringing signing back into the product compressed the hiring workflow, removed entire categories of manual work and gave HR teams a clear view of every contract in flight.",
    metrics: [
      { label: "From idea to launch", value: "7 weeks" },
      { label: "Companies using the feature", value: "200+" },
      { label: "Hiring workflow", value: "3 days faster" },
      { label: "NPS on flow", value: "62" },
    ],
    heroMetrics: [
      { label: "From idea to launch", value: "7 weeks" },
      { label: "Companies using the feature", value: "200+" },
      { label: "Hiring workflow", value: "3 days faster" },
    ],
    lessons: [
      "A demoable PRD is worth more than a perfect one",
      "Pick the boring 80% on purpose",
      "Audit trails are a feature, not an implementation detail",
    ],
    reflection:
      "Constraints made this project. A tight window forced clarity about what mattered, and the team rallied around a small, high-quality surface — a reminder that scope is one of the most powerful product tools you have.",
  },
  {
    slug: "peakprofile",
    title: "PeakProfile",
    summary:
      "Building an AI-powered product that helps mountaineers make better decisions through structured experience data.",
    role: "PeakProfile • Founder & Product",
    technologies: ["AI Product", "Trust Systems", "Decision Support", "User Research"],
    outcomes: [
      "20 early users engaged",
      "30+ discovery interviews conducted",
      "3 AI prototypes tested",
      "MVP in active development",
    ],
    context: "Founder · AI Product",
    overview: "PeakProfile helps mountaineers reason about route choice, conditions and personal risk profile.",
    challengeLead:
      "Mountaineers were making high-stakes decisions with information scattered across forums, weather services and personal memory.",
    challengeBody: [
      "Route choice, turnaround times and risk assessments depend on synthesising a lot of fragmented context: recent conditions, party experience, objective hazards and personal history. Off-the-shelf chatbots either hallucinated specifics or gave generic advice exactly where the cost of being wrong is highest.",
      "I started PeakProfile to explore what a trustworthy decision-support product could look like in a domain where over-confidence is dangerous and lived experience matters as much as data.",
    ],
    discoveryLead:
      "Because the stakes are real, discovery had to come from people who actually make these calls in the mountains.",
    discovery: [
      "30+ interviews with alpinists, guides and SAR volunteers",
      "Diary study of how plans change in the 48 hours before a climb",
      "Mapped the decision tree from objective to turnaround time",
      "Tested 3 AI prototypes with target users to pressure-test trust",
    ],
    constraints: [
      "Tiny team, long iteration cycles, real-world consequences",
      "Must never feel authoritative about safety",
      "Cold-start data problem",
    ],
    keyDecisions: [
      {
        title: "Decision support, not decisions",
        description:
          "The product never makes the call for the user. It structures information, surfaces trade-offs and keeps the climber in the loop — because that's where accountability has to live.",
      },
      {
        title: "Ground every answer in sources",
        description:
          "AI responses are anchored to cited, structured inputs rather than free-form generation. Users can always trace why the product said what it said.",
      },
      {
        title: "Build evaluation before scale",
        description:
          "Invested early in an evaluation harness so model and retrieval changes could be scored against a frozen set of realistic scenarios — making quality measurable from day one.",
      },
    ],
    solutionItems: [
      {
        title: "Route briefing assistant",
        description:
          "A structured briefing grounded in conditions and route data, designed to support — not replace — the climber's own planning.",
      },
      {
        title: "Personal risk profile",
        description:
          "Suggestions adapt over time to the climber's experience, recent activity and stated risk tolerance, so the product gets more useful the longer it's used.",
      },
      {
        title: "Post-trip reflection capture",
        description:
          "Lightweight prompts after each trip turn lived experience into structured data, slowly building the dataset the product needs to keep improving.",
      },
    ],
    resultsLead:
      "PeakProfile is early — the goal at this stage is signal, not scale. The numbers below reflect how much I've learned with a small, engaged group of users while the MVP takes shape.",
    metrics: [
      { label: "Early users", value: "20" },
      { label: "Discovery interviews", value: "30+" },
      { label: "AI prototypes tested", value: "3" },
      { label: "Status", value: "MVP in dev" },
    ],
    heroMetrics: [
      { label: "Early users", value: "20" },
      { label: "Discovery interviews", value: "30+" },
      { label: "AI prototypes tested", value: "3" },
    ],
    lessons: [
      "Evaluation infrastructure is the real product surface for AI",
      "Trust comes from restraint, not from confidence",
      "Domain experts unlock orders of magnitude in quality",
    ],
    reflection:
      "PeakProfile is where I get to be founder, PM and user at once. The stakes keep my thinking honest — you can't ship over-confident answers when real decisions depend on them.",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

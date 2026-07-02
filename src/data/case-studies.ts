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
    outcomes: ["MVP launched in 7 weeks", "200+ customers using the feature", "Reduced average time-to-hire by 3 days"],
    context: "HR SaaS · SMB segment",
    overview: "HR teams had to leave the platform every time a contract needed to be signed.",
    challengeLead: "The hiring workflow broke every time a contract needed to be signed.",
    challengeBody: [
      "Although HR teams managed recruitment inside jacando, they had to leave the platform to complete one of the most important steps in the process. To send an offer, they exported a contract, switched to a third-party e-signature tool, uploaded the document, configured signers, and manually uploaded the signed contract back into the candidate record.",
      "Switching between tools created unnecessary administrative work, fragmented the hiring experience, and made it harder to manage contracts from a single place. My goal was to bring the entire signing process back into the product while meeting legal requirements.",
    ],
    discoveryLead:
      "Before designing the solution, I needed to understand both the hiring workflow and the e-signature ecosystem.",
    discovery: [
      "Interviewed HR teams to understand how contracts were created, signed and managed.",
      "Mapped the hiring workflow to identify where users left the product and where the biggest friction occurred.",
      "Evaluated multiple e-signature providers based on API capabilities, legal compliance and implementation effort.",
      "Reviewed competitor products to understand common workflows and user expectations.",
      "Worked closely with legal and engineering to define an MVP that balanced compliance, user experience and delivery speed.",
    ],
    constraints: [
      "Deliver the MVP before the next sales cycle",
      "Keep existing contract templates fully compatible",
      "Support legally compliant electronic signatures across the DACH region",
      "Integrate with an external trust provider rather than building signing infrastructure",
    ],
    keyDecisions: [
      {
        title: "Use a trusted e-signature provider",
        description:
          "Rather than building signing infrastructure ourselves, we integrated an established provider and focused our effort on creating a seamless hiring experience.",
      },
      {
        title: "Keep HR teams in one workflow",
        description:
          "Instead of sending users to another application, every important step — from preparing a contract to tracking its signature — remained inside jacando.",
      },
      {
        title: "Start with the most common hiring flow",
        description:
          "Rather than supporting every signing scenario, we focused on the contract flow used by most HR teams so we could launch quickly, validate the solution, and expand over time.",
      },
    ],
    solutionItems: [
      {
        title: "Keep the hiring workflow in one place",
        description:
          "HR teams could prepare, send, sign and store employment contracts without leaving jacando, eliminating the need to switch between multiple tools.",
      },
      {
        title: "Integrate, don't reinvent",
        description:
          "Instead of building our own signing infrastructure, we integrated a trusted e-signature provider and focused engineering effort on delivering a seamless user experience.",
      },
      {
        title: "Reduce manual work",
        description:
          "Contract status, signed documents and audit information were automatically synchronized back into the hiring workflow, removing repetitive manual steps for HR teams.",
      },
    ],
    resultsLead:
      "The MVP was delivered in seven weeks and successfully launched before the next sales cycle. By bringing contract signing into the hiring workflow, HR teams completed offers faster, reduced manual work and no longer needed to switch between multiple tools.",
    metrics: [
      { label: "From idea to launch", value: "7 weeks" },
      { label: "Customers using the feature", value: "200+" },
      { label: "Faster hiring workflow", value: "3 days" },
    ],
    heroMetrics: [
      { label: "From idea to launch", value: "7 weeks" },
      { label: "Customers using the feature", value: "200+" },
      { label: "Faster hiring workflow", value: "3 days" },
    ],
    lessons: [
      "The biggest opportunities often come from removing context switching.",
      "A focused MVP creates more value than a feature-complete first release.",
      "Good integrations should feel invisible to the user.",
    ],
    reflection:
      "This project reminded me that great product work isn't always about adding something new. Sometimes the biggest impact comes from removing friction people have quietly accepted as part of their everyday work.",
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

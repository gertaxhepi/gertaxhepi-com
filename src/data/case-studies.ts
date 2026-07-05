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
  /** Optional intro heading + paragraphs shown above the solution items. */
  solutionIntro?: { title: string; paragraphs: string[] };
  /** Optional inline diagram rendered between the intro and the solution items. */
  solutionDiagram?: { src: string; alt: string; label: string; caption: string };
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
      "Building an AI-powered decision support product that helps mountaineers and guides plan safer expeditions.",

    role: "Founder",
    technologies: ["AI Product", "Trust Systems", "Decision Support", "User Research"],

    outcomes: ["20 early testers", "30+ discovery interviews", "Trustworthy AI decision support MVP"],

    context: "AI Product",

    overview:
      "PeakProfile helps mountaineers and guides assess whether an expedition is the right fit by combining route conditions, personal experience and historical knowledge.",

    challengeLead:
      "Mountaineering has become more accessible, but experience and technical skills do not grow at the same pace.",

    challengeBody: [
      "Social media inspires more people to climb bigger mountains, often framing mountaineering as self-improvement. That can be true, but it can also hide the learning curve. Safe expeditions depend on technical skills, physical readiness, judgement and experience.",
      "Guides often have limited information to understand a client's real ability before planning an expedition. At the same time, climbers piece together information from weather forecasts, guidebooks, forums, accident reports and recent trip reports. The information exists, but it is fragmented, inconsistent and constantly changing.",
      "PeakProfile explores whether AI can help guides and climbers make better decisions by combining structured data, historical knowledge and personal experience into one trustworthy planning assistant.",
    ],

    discoveryLead:
      "Because the consequences of poor decisions are real, discovery focused on understanding how experienced mountaineers assess readiness and risk.",

    discovery: [
      "Conducted 30+ interviews with climbers, mountain guides and SAR volunteers.",
      "Studied expedition planning across forums, guidebooks, weather reports, accident reports and recent trip reports.",
      "Mapped how route selection changes based on weather, objective hazards, experience and fitness.",
      "Compared how experienced and inexperienced climbers evaluate the same objective.",
      "Built and tested three AI approaches to understand where users trusted—and distrusted—the recommendations.",
    ],

    constraints: [
      "Safety decisions must always remain with the climber and guide.",
      "AI recommendations must be explainable and transparent.",
      "Information comes from many fragmented and constantly changing sources.",
      "Trust is more important than automation.",
    ],

    keyDecisions: [
      {
        title: "Decision support, not decisions",
        description:
          "The product never decides whether someone should climb a mountain. It structures information, highlights trade-offs and helps users make informed decisions while keeping accountability with the climber and guide.",
      },
      {
        title: "Classify before recommending",
        description:
          "Instead of asking an LLM to generate advice directly, PeakProfile first classifies the important signals: route difficulty, recent conditions, required technical skills, experience level, fitness and environmental risks. The AI then explains the trade-offs using this structured understanding.",
      },
      {
        title: "Ground every answer in evidence",
        description:
          "Recommendations are linked back to weather reports, route information, accident reports and community knowledge whenever possible, allowing users to understand why the product reached a conclusion.",
      },
    ],

    solutionItems: [
      {
        title: "Route briefing",
        description:
          "Combines current conditions, objective hazards, route information and recent community reports into one structured planning view.",
      },
      {
        title: "Personal readiness profile",
        description:
          "Uses climbing history, recent activity, fitness and technical experience to help users understand whether an objective matches their current ability.",
      },
      {
        title: "Guide matching",
        description:
          "Gives guides a richer understanding of a client's experience than a short conversation or simple questionnaire, helping create better matched expeditions.",
      },
    ],

    resultsLead:
      "PeakProfile is currently in development. At this stage the objective is learning rather than scale. These metrics reflect product discovery and early validation.",

    metrics: [
      { label: "Early testers", value: "20" },
      { label: "Discovery interviews", value: "30+" },
      { label: "AI approaches evaluated", value: "3" },
      { label: "Status", value: "Development" },
    ],

    heroMetrics: [
      { label: "Early testers", value: "20" },
      { label: "Discovery interviews", value: "30+" },
      { label: "AI approaches evaluated", value: "3" },
    ],

    lessons: [
      "In high-stakes domains, explainability matters more than confident answers.",
      "AI should support judgement, not replace it.",
      "Trust starts with structured information, classification and evidence.",
    ],

    reflection:
      "Building PeakProfile has changed how I think about AI products. In high-stakes environments, the goal is not to replace human judgement with confident answers, but to help people make better decisions by bringing together the right information at the right moment.",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

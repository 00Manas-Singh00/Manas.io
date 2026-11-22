// Content for the redesigned home page, sourced from the 2026 resume.

export const PROFILE = {
  name: "Manas Singh",
  tagline: "/merges on fridays/",
  role: "Associate Software Engineer",
  company: "Sage Technologies",
  // Base64 so the address is not sitting in the HTML for scrapers.
  emailB64: "MDBtYW5hc3NpbmdoMDBAZ21haWwuY29t",
  resumeHref: "/resume/Manas_Singh_Resume.pdf",
  portrait: "/r/portrait.jpeg",
};

export const NAV_ITEMS = [
  { id: "work", label: "Work", meta: "/02" },
  { id: "projects", label: "Projects", meta: "/04" },
  { id: "about", label: "About", meta: "/26" },
  { id: "contact", label: "Contact", meta: "/@" },
] as const;

export const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/manas-singh-877645252" },
  { label: "GitHub", href: "https://github.com/00Manas-Singh00" },
  { label: "X", href: "https://x.com/singhmanas2705" },
];

export const SUMMARY =
  "Hi, I'm Manas. I love the moment a tangled, real-world problem turns into software people actually use. Most days I'm the engineer on the client call in the morning and deep in the codebase by night: I listen, sketch, demo, then build the whole thing, from the interface you touch to the APIs, data and cloud underneath. And when nobody's looking, I'm making a physics puzzle game. Same job, better excuses.";

export const EDUCATION =
  "B.Tech, Computer Science. Jaypee University of Engineering and Technology, 2022-2026.";

/** How I work: three short rules, each set large with a two-line aside. */
export const PRINCIPLES = [
  {
    title: "Talk to people first",
    caption: [
      "The best spec is a conversation.",
      "I sit in on the call, the demo, the review.",
    ],
  },
  {
    title: "Ship small, ship often",
    caption: ["A rough version on Tuesday", "beats a perfect one next month."],
  },
  {
    title: "Own it after launch",
    caption: [
      "Alerts, dashboards, the late-night fix.",
      "Shipped means it keeps working.",
    ],
  },
];

export type Chapter = {
  title: string;
  stack: string;
  points: string[];
};

export type Role = {
  company: string;
  role: string;
  period: string;
  place: string;
  intro?: string;
  chapters: Chapter[];
};

export const WORK: Role[] = [
  {
    company: "Sage Technologies",
    role: "Associate Software Engineer",
    period: "Jun 2026 - Present",
    place: "India",
    intro:
      "Primary engineer on a two-person team. I run discovery calls, demos, onboarding and security questionnaires with client teams several times a week.",
    chapters: [
      {
        title: "AI document pipeline",
        stack: "TypeScript, NestJS, React, MongoDB, Redis, BullMQ, Gemini API",
        points: [
          "Built a 4-stage async pipeline (OCR, LLM extraction, validation, posting to the client's ERP) that cut handling time per document from about 3 minutes to about 10 seconds.",
          "Multi-tenant from day one: about 1,000 documents a month across 3+ enterprise clients on one deployment.",
          "99% field-level accuracy against a labeled test set, with confidence thresholds that route uncertain fields to a human instead of guessing.",
          "Role- and policy-based access control (6 roles, 10 permissions), a four-eyes impersonation flow for auditors and 12 admin views.",
        ],
      },
      {
        title: "Anomaly detection platform",
        stack: "Python, FastAPI, PostgreSQL, Redis, React",
        points: [
          "Detection engine that catches duplicate invoices, suspicious bank-detail changes and risky payments before money moves.",
          "Designed an outbound-only relay inside each client's AWS account, so it reads their ERP over OData without a single inbound firewall change.",
          "Tenant isolation with PostgreSQL Row-Level Security, per-tenant HashiCorp Vault keys, OIDC single sign-on and audit logging.",
          "Run in production with Prometheus and Grafana alerting, tested restores and dashboards load-tested at 1M+ findings.",
        ],
      },
    ],
  },
  {
    company: "Radical Logix",
    role: "Software Developer Intern",
    period: "Jun 2025 - Aug 2025",
    place: "Remote",
    chapters: [
      {
        title: "Three internal web applications",
        stack: "TypeScript, Next.js, Django, AWS, GitHub Actions",
        points: [
          "Shipped features from design handoff to AWS deployment on a two-person team.",
          "Cut API response time by 35% through request batching, and added JWT auth with refresh-token rotation for 3,000+ users.",
          "Set up GitHub Actions CI/CD so production fixes deploy the same day.",
        ],
      },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  caption: string;
  year: string;
  status: string;
  stack: string;
  points: string[];
  href?: string;
  /** Which live halftone plate represents the project (see project-visual.tsx). */
  visual: "margin" | "graph" | "tide" | "voice";
};

export const PROJECTS: Project[] = [
  {
    id: "the-margin",
    title: "The Margin",
    caption: "A physics puzzle game that saves offline and syncs later",
    year: "2026",
    status: "Pre-launch, solo",
    stack:
      "TypeScript, Next.js, NestJS, Godot (WebAssembly), Prisma, PostgreSQL, Zod, Playwright",
    points: [
      "A Godot game compiled to WebAssembly, a Next.js site with accounts and a NestJS API in one TypeScript monorepo, with 16 handcrafted levels.",
      "Offline-first cloud saves: one versioned schema shared through Zod contracts, revision-based conflict detection and a reload-safe outbox.",
      "Security review before launch (Argon2id, hashed session tokens, CSRF, strict CSP), with 105 level tests and Playwright runs across three engines.",
    ],
    visual: "margin",
  },
  {
    id: "curiosity-engine",
    title: "Curiosity Engine",
    caption: "A knowledge graph you can wander through",
    year: "2025",
    status: "Side project",
    stack: "Next.js, Node.js, FastAPI, PostgreSQL, Redis, D3.js, Gemini API",
    points: [
      "An interactive D3.js explorer over 10,000+ graph relationships.",
      "Sub-200 ms responses through Redis caching, with Gemini-powered topic expansion.",
    ],
    visual: "graph",
  },
  {
    id: "tradetide",
    title: "TradeTide",
    caption: "Trade what you know for what you want to learn",
    year: "2025",
    status: "Open source",
    stack: "React, TypeScript, Redux Toolkit, Socket.io, Tailwind CSS",
    points: [
      "Skill-bartering marketplace with requests, real-time chat and session scheduling.",
      "Reviews and ratings after each session, behind secure authentication.",
    ],
    href: "https://github.com/00Manas-Singh00/TradeTide",
    visual: "tide",
  },
  {
    id: "meet-genius",
    title: "Meet Genius",
    caption: "Measures how closely a meeting stuck to its agenda",
    year: "2025",
    status: "Hackathon build",
    stack:
      "Python, Flask, OpenAI Whisper, Sentence Transformers, scikit-learn, Chart.js",
    points: [
      "Takes video, audio or text, transcribes with Whisper and scores each discussion against the agenda topics.",
      "Visual similarity analytics and downloadable reports.",
    ],
    href: "https://github.com/00Manas-Singh00/ProductivityAnalyzer",
    visual: "voice",
  },
];

export const CAPABILITY_WORDS = [
  "TypeScript",
  "NestJS",
  "FastAPI",
  "PostgreSQL",
  "Next.js",
  "Python",
  "Gemini",
  "React",
  "Redis",
  "AWS",
];

export const SKILL_GROUPS = [
  { title: "Languages", items: "TypeScript, JavaScript, Python, SQL" },
  { title: "Frontend", items: "React, Next.js, D3.js, data-heavy dashboards" },
  {
    title: "Backend",
    items: "Node.js, NestJS, FastAPI, OData, Prisma, Zod, BullMQ, Dramatiq",
  },
  {
    title: "Data and cloud",
    items:
      "PostgreSQL, MongoDB, Redis, AWS, Docker, GitHub Actions, Prometheus, Grafana",
  },
  {
    title: "Security",
    items:
      "Multi-tenant isolation, RBAC, OIDC, JWT, HashiCorp Vault, audit logging",
  },
  {
    title: "AI and integrations",
    items:
      "Gemini API, Whisper, OCR, LLM extraction and evaluation, REST, OData, SAP",
  },
];

export const RECOGNITION = [
  {
    title: "Winner, HackOverflow 7.0",
    detail: "NIT Durgapur, national hackathon, 200+ teams",
    year: "2024",
  },
  {
    title: "Winner, Live the Code 3.0",
    detail: "National hackathon, 200+ teams",
    year: "2024",
  },
  {
    title: "7+ articles on GeeksforGeeks",
    detail: "Frontend and JavaScript tutorials, 11,000+ views",
    year: "2023",
  },
  {
    title: "Mentored 20+ students",
    detail: "Through the college GDSC chapter",
    year: "2024",
  },
];

/**
 * The recruiter view's proof, in the order a busy reader should see it. Every figure
 * also appears in WORK or RECOGNITION above; keep them in step.
 */
export const HIGHLIGHTS = [
  {
    value: "3 min → 10 s",
    label: "Per document, after the AI pipeline I built went to production",
  },
  {
    value: "99%",
    label: "Field-level extraction accuracy on a labeled test set",
  },
  {
    value: "1,000 / mo",
    label: "Documents processed across 3+ enterprise clients",
  },
  { value: "2×", label: "National hackathon winner, 200+ teams each" },
];

/**
 * Long-form write-ups for /projects/[id]. Every claim here comes from the résumé;
 * add screenshots, numbers and stories as they become available.
 */
export type CaseStudy = {
  /** One-line framing shown under the title. */
  lede: string;
  problem: string;
  built: string[];
  hardParts: { title: string; body: string }[];
  outcome: string[];
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "the-margin": {
    lede: "A physics puzzle game that behaves like a product: accounts, cloud saves and a security review, all in one TypeScript monorepo.",
    problem:
      "A browser game lives in the least reliable place there is. Players close tabs mid-level, lose connection on a train and switch devices, and every one of those moments is a chance to lose their progress. The Margin had to keep a save safe through all of it, offline first, and still feel like a game rather than a form.",
    built: [
      "The game itself, built in Godot and compiled to WebAssembly so it runs in the browser, with 16 handcrafted levels.",
      "A Next.js site with player accounts, and a NestJS API behind it, together in one TypeScript monorepo.",
      "Offline-first cloud saves: the game keeps playing without a connection and syncs when one comes back.",
    ],
    hardParts: [
      {
        title: "Saves that never lose progress",
        body: "Two devices can both believe they hold the latest save. Each save carries a revision, so the server detects a conflict instead of silently overwriting, and pending writes wait in an outbox that survives a page reload, so nothing is dropped between the game and the API.",
      },
      {
        title: "One schema everywhere",
        body: "The save format is a single versioned schema, shared through Zod contracts, so the site and the API validate exactly the same shape and a format change is one edit rather than three.",
      },
      {
        title: "Treating a game like production software",
        body: "Before launch it went through a security review: Argon2id password hashing, hashed session tokens, CSRF protection and a strict Content Security Policy.",
      },
    ],
    outcome: [
      "16 levels, covered by 105 level tests.",
      "Playwright runs across three browser engines.",
      "Pre-launch, built solo.",
    ],
  },
  "curiosity-engine": {
    lede: "A knowledge graph you can wander through, one connection at a time.",
    problem:
      "Lists and search results show you topics one at a time and hide how they connect. Curiosity Engine turns a topic into a graph you can explore, following links outward the way curiosity actually works.",
    built: [
      "An interactive D3.js explorer over a graph of 10,000+ relationships.",
      "A Next.js front end over Node.js and FastAPI services, with PostgreSQL storing the graph.",
      "Gemini-powered topic expansion, so the graph can grow from any node you pick.",
    ],
    hardParts: [
      {
        title: "Keeping a large graph feel instant",
        body: "Exploration only works if every click answers immediately. Redis caching in front of the graph queries keeps responses under 200 ms.",
      },
      {
        title: "Growing the graph on demand",
        body: "Instead of precomputing everything, Gemini expands a topic into new related nodes when you ask for them, so the graph reaches places nobody seeded by hand.",
      },
    ],
    outcome: [
      "Sub-200 ms responses across 10,000+ relationships.",
      "A side project.",
    ],
  },
  tradetide: {
    lede: "A marketplace where the currency is what you know.",
    problem:
      "Most people have a skill someone else wants and a skill they would like to learn. TradeTide lets them trade one for the other directly: no money, just people teaching each other.",
    built: [
      "A skill-bartering marketplace for posting and answering trade requests.",
      "Real-time chat between matched people, built on Socket.io.",
      "Session scheduling, then reviews and ratings after each session.",
      "A React and TypeScript front end with Redux Toolkit state and Tailwind CSS, behind secure authentication.",
    ],
    hardParts: [
      {
        title: "Real-time without losing the thread",
        body: "Requests, chat and scheduling all change while you are looking at them. Socket.io carries those updates live, and Redux Toolkit keeps a single source of truth on the client so the views stay consistent with each other.",
      },
      {
        title: "Trust between strangers",
        body: "A barter only works if both sides show up. Reviews and ratings after every session give the next person something to go on.",
      },
    ],
    outcome: ["Open source on GitHub."],
  },
  "meet-genius": {
    lede: "Measures how closely a meeting actually stuck to its agenda.",
    problem:
      "Every meeting has an agenda, and most drift away from it. Nobody can say by how much. Meet Genius takes the recording and the agenda and answers that question with a score.",
    built: [
      "Accepts video, audio or plain text, and transcribes recordings with OpenAI Whisper.",
      "Scores each part of the discussion against the agenda topics, using Sentence Transformers and scikit-learn.",
      "Visual similarity analytics with Chart.js, and downloadable reports, served from a Python and Flask back end.",
    ],
    hardParts: [
      {
        title: "Turning talk into something measurable",
        body: "A transcript is unstructured. Comparing each stretch of discussion with each agenda topic as sentence embeddings turns relevance into a number you can chart and compare.",
      },
      {
        title: "Any input, one pipeline",
        body: "Video, audio and text all end up as text, so a single scoring and reporting path serves every format.",
      },
    ],
    outcome: ["Built as a hackathon project.", "Open source on GitHub."],
  },
};

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
  "I'm Manas. I turn messy, real-world problems into software people use, from the client call to the cloud. Off hours, I'm building a physics puzzle game.";

export const EDUCATION =
  "B.Tech, Computer Science · Jaypee University, 2022–2026";

/** How I work: three short rules, each set large with a two-line aside. */
export const PRINCIPLES = [
  {
    title: "Talk to people first",
    caption: ["The best spec", "is a conversation."],
  },
  {
    title: "Ship small, ship often",
    caption: ["Rough on Tuesday", "beats perfect next month."],
  },
  {
    title: "Own it after launch",
    caption: ["Shipped means", "it keeps working."],
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
      "Primary engineer on a two-person team, and the one on the client calls.",
    chapters: [
      {
        title: "AI document pipeline",
        stack: "TypeScript, NestJS, MongoDB, BullMQ, Gemini",
        points: [
          "Document handling cut from ~3 min to ~10 s.",
          "~1,000 documents a month for 3+ enterprise clients.",
          "99% field accuracy; unsure fields go to a human.",
          "Role-based access with audited impersonation.",
        ],
      },
      {
        title: "Anomaly detection platform",
        stack: "Python, FastAPI, PostgreSQL, React",
        points: [
          "Flags duplicate invoices and risky payments before money moves.",
          "Reads client ERPs with zero inbound firewall changes.",
          "Row-level tenant isolation, Vault keys, SSO.",
          "Alerting in production; load-tested at 1M+ findings.",
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
        title: "Three internal web apps",
        stack: "Next.js, Django, AWS, GitHub Actions",
        points: [
          "Shipped from design handoff to AWS.",
          "35% faster APIs; JWT auth for 3,000+ users.",
          "CI/CD for same-day production fixes.",
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
    caption: "A physics puzzle game with offline saves",
    year: "2026",
    status: "Pre-launch, solo",
    stack: "TypeScript, Next.js, NestJS, Godot, PostgreSQL",
    points: [
      "Godot game, site and API in one TypeScript monorepo.",
      "Offline-first cloud saves with conflict detection.",
      "16 levels, 105 level tests, security-reviewed.",
    ],
    visual: "margin",
  },
  {
    id: "curiosity-engine",
    title: "Curiosity Engine",
    caption: "A knowledge graph to wander through",
    year: "2025",
    status: "Side project",
    stack: "Next.js, FastAPI, PostgreSQL, Redis, D3.js",
    points: [
      "D3.js explorer over 10,000+ relationships.",
      "Sub-200 ms responses; Gemini grows the graph.",
    ],
    visual: "graph",
  },
  {
    id: "tradetide",
    title: "TradeTide",
    caption: "Trade skills, not money",
    year: "2025",
    status: "Open source",
    stack: "React, TypeScript, Redux Toolkit, Socket.io",
    points: [
      "Skill-swap marketplace with real-time chat.",
      "Scheduling, then reviews after every session.",
    ],
    href: "https://github.com/00Manas-Singh00/TradeTide",
    visual: "tide",
  },
  {
    id: "meet-genius",
    title: "Meet Genius",
    caption: "Scores a meeting against its agenda",
    year: "2025",
    status: "Hackathon build",
    stack: "Python, Flask, Whisper, Sentence Transformers",
    points: [
      "Transcribes with Whisper, scores talk against the agenda.",
      "Charts and downloadable reports.",
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
  { title: "Languages", items: "TypeScript, Python, SQL" },
  { title: "Frontend", items: "React, Next.js, D3.js" },
  { title: "Backend", items: "Node.js, NestJS, FastAPI, Prisma, BullMQ" },
  { title: "Data and cloud", items: "PostgreSQL, MongoDB, Redis, AWS, Docker" },
  { title: "Security", items: "RBAC, OIDC, JWT, Vault, tenant isolation" },
  { title: "AI and integrations", items: "Gemini, Whisper, OCR, OData, SAP" },
];

export const RECOGNITION = [
  {
    title: "Winner, HackOverflow 7.0",
    detail: "NIT Durgapur · 200+ teams",
    year: "2024",
  },
  {
    title: "Winner, Live the Code 3.0",
    detail: "National · 200+ teams",
    year: "2024",
  },
  {
    title: "7+ articles on GeeksforGeeks",
    detail: "11,000+ views",
    year: "2023",
  },
  {
    title: "Mentored 20+ students",
    detail: "College GDSC chapter",
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
    label: "Per document, with my AI pipeline",
  },
  { value: "99%", label: "Field extraction accuracy" },
  { value: "1,000 / mo", label: "Documents for 3+ enterprise clients" },
  { value: "2×", label: "National hackathon winner" },
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

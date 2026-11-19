// Content for the redesigned home page, sourced from the 2026 resume.

export const PROFILE = {
  name: "Manas Singh",
  tagline: "/full-stack, forward-deployed/",
  role: "Associate Software Engineer",
  company: "Sage Technologies",
  // Base64 so the address is not sitting in the HTML for scrapers.
  emailB64: "MDBtYW5hc3NpbmdoMDBAZ21haWwuY29t",
  resumeHref: "/resume/Manas_Singh_Resume.pdf",
  portrait: "/r/ai image.jpeg",
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
  "I ship production software for enterprise finance teams. As the primary engineer on a two-person team, I run discovery, demos and security reviews with client teams, then build the platform end to end: React and TypeScript, Python APIs, PostgreSQL and AWS, wired into SAP S/4HANA and ECC.";

export const EDUCATION =
  "B.Tech, Computer Science. Jaypee University of Engineering and Technology, 2022-2026.";

export const PROOF = [
  {
    value: 10,
    from: 180,
    suffix: "s",
    caption: [
      "Per invoice, extraction to SAP posting.",
      "It used to take three minutes.",
    ],
  },
  {
    value: 99,
    from: 0,
    suffix: "%",
    caption: [
      "Field-level extraction accuracy,",
      "tracked against a labeled test set.",
    ],
  },
  {
    value: 2,
    from: 0,
    prefix: "/0",
    caption: ["Platforms in production,", "3+ enterprise clients each."],
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
      "Primary engineer on a two-person team. I run discovery calls, demos, onboarding and security questionnaires with client finance and IT teams several times a week.",
    chapters: [
      {
        title: "AI Document Processing Platform",
        stack: "TypeScript, NestJS, React, MongoDB, Redis, BullMQ, Gemini API",
        points: [
          "Multi-tenant platform that extracts invoice and freight-document data and posts it to SAP (MIRO), about 1,000 documents a month for 3+ enterprise clients.",
          "A 4-stage async pipeline (OCR, Gemini extraction, validation, automated SAP posting) cut handling time from about 3 minutes to about 10 seconds.",
          "99% field-level accuracy, with confidence thresholds that flag uncertain fields for operator review.",
          "Role- and policy-based access control (6 roles, 10 permissions), a four-eyes impersonation flow for auditors and 12 admin views.",
        ],
      },
      {
        title: "Financial Anomaly Detection Platform",
        stack: "Python, FastAPI, PostgreSQL, Redis, React",
        points: [
          "Flags duplicate invoices, suspicious vendor bank-account changes and risky payments in SAP S/4HANA and ECC data before payment.",
          "An outbound-only relay in each client's AWS account reads SAP over OData with no inbound firewall changes.",
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
  image: string;
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
    image:
      "https://picsum.photos/seed/margin-puzzle-shoreline/900/1200?grayscale",
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
    image:
      "https://picsum.photos/seed/curiosity-engine-water/900/1200?grayscale",
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
    image:
      "https://picsum.photos/seed/tradetide-hands-light/900/1200?grayscale",
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
    image:
      "https://picsum.photos/seed/meet-genius-sand-fabric/900/1200?grayscale",
  },
];

export const CAPABILITY_WORDS = [
  "TypeScript",
  "NestJS",
  "FastAPI",
  "PostgreSQL",
  "SAP S/4HANA",
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
    title: "AI and enterprise",
    items:
      "Gemini API, OCR, LLM extraction and evaluation, SAP S/4HANA, SAP ECC, MIRO",
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

import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "tradetide",
    title: "TradeTide",
    period: {
      start: "05.2025",
    },
    link: "https://github.com/00Manas-Singh00/TradeTide",
    skills: [
      "Open Source",
      "React",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "Framer Motion",
      "Socket.io",
    ],
    description: `TradeTide is a modern, full-stack web application for skill trading. It enables users to barter their skills, connect via real-time chat, schedule sessions, and leave reviews—all in a seamless, user-friendly platform.
- Skill Marketplace: Discover and connect with users offering a wide variety of skills.
- Barter Requests: Propose, accept, or decline skill trades with other users.
- Real-Time Chat: Communicate instantly with your barter partners.
- Scheduling: Propose and manage sessions for skill exchanges.
- Reviews & Ratings: Leave and view feedback after completed sessions.
- Authentication: Secure registration and login system.`,
    // logo: "",
    isExpanded: false,
  },
  {
    id: "mnzdev",
    title: "Manas.io",
    period: {
      start: "07.2025",
    },
    link: "#",
    skills: [
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Vercel",
    ],
    description: `A minimal portfolio.
- Clean & modern design
- Light & Dark theme support
- vCard integration
- Spam-protected email
- Installable PWA

Blog Features:
- MDX & Markdown support
- Syntax Highlighting for better readability
- RSS Feed for easy content distribution
- Dynamic OG Images for rich previews`,
    logo: "/r/Dev Logo.svg",
  },
  {
    id: "meetgenius",
    title: "Meet Genius",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/00Manas-Singh00/ProductivityAnalyzer",
    skills: [
      "Python",
      "Flask",
      "Javascript",
      "Chart.js",
      "OpenAI Whisper",
      "Sentence Transformers",
      "Scikit Learn",
      "MoviesPy"
    ],
    description:`
This Meeting Productivity Analyzer helps teams improve their meeting efficiency by quantifying how closely discussions adhere to predefined agenda topics.
- Accepts video, audio, or text inputs of meetings
- Transcribes audio/video content using OpenAI's Whisper AI
- Analyzes the transcribed or uploaded text against specified agenda topics using NLP
- Provides detailed visual analytics with similarity metrics
- Generates comprehensive reports available for download
    `,
    logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  },
  {
    id: "blitzkeyboard",
    title: "Blitz Keyboard",
    period: {
      start: "10.2024",
    },
    link: "https://blitzkeyboard.netlify.app/",
    skills: [
      "Javascript",
      "Node.js",
      "ExpressJs",
      "HTML",
      "CSS"
    ],
    description: `Blitz Keyboard is not just another typing test tool—it's a powerful platform designed to help you elevate your typing skills to a professional level.
- Detailed metrics like Words Per Minute (WPM), best WPM, total mistakes, and characters typed help you identify areas of improvement.
- Choose from normal text, hard mode, numbers, symbols, or coding syntax to push your limits.
- As you type, real-time performance metrics like WPM, accuracy, and error count are updated, giving you instant feedback and helping you gauge your performance against your personal best.
    `,
  },
];

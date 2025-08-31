import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "radical logix",
    companyName: "Radical Logix",
    companyLogo: "/r/radical logix.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Software Developer",
        employmentPeriod: {
          start: "06.2025",
          end: "08.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed AI-powered content recommendation and generation features using Django and Gemini API.
- Implemented prompt-based, paraphrasing, and image-driven content workflows for dynamic post creation.
- Optimized API calls and backend logic to ensure scalable and reliable performance.
- Collaborated with the team to align AI outputs with platform-specific content styles for better engagement.
- Contributed to building a robust and maintainable backend architecture for seamless integration of advanced features.
`,
        skills: [
          "TypeScript",
          "Next.js",
          "Django",
          "Google Gemini API",
          "Tailwind CSS",
          "Social Media Integration",
          "Research",
          "Problem-solving",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "hypweb solutions",
    companyName: "Hypweb Solutions LLP",
    companyLogo: "/r/hypweb solutions.jpeg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Frontend Engineer",
        employmentPeriod: {
          start: "02.2025",
          end: "03.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Contributed to multiple client and in-house projects, focusing on UI/UX design, performance optimization, and responsive web development.
- Strengthened expertise in modern frontend technologies including Next.js, React.js, TailwindCSS, Mantine UI, ShadCN UI, Bootstrap, GSAP, Framer Motion, and Figma.

In-house Project: [Hypweb Solutions Website](https://hypweb.in)
- Redesigned the official company website using Figma, enhancing visual appeal and brand consistency.
- Delivered a modern, responsive, and user-friendly interface aligned with the company’s vision.

Client Project: Shipping Service Platform
- Improved state management, fixed responsiveness issues, and resolved UI glitches on a live shipping service website.
- Enhanced overall user experience by debugging, refining workflows, and ensuring smooth performance across devices.

Creative Contributions
- Integrated Framer Motion and GSAP animations to add interactivity and bring websites to life with engaging user experiences.
- Contributed to UI/UX design and brand design, ensuring consistency across projects.
`,
        skills: [
          "Next.js",
          "ReactJs",
          "TailwindCSS",
          "Mantine UI",
          "ShadCN UI",
          "Bootstrap",
          "GreenSock (GSAP)",
          "Framer Motion",
          "UI/UX Design",
          "Brand Design",
          "Figma",
        ],
        isExpanded: false,
      },     
    ],
    isCurrentEmployer: false,
  },
  {
    id: "gfg",
    companyName: "Geeks For Geeks",
    companyLogo: "/r/gfg.jpeg",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Technical Writer",
        employmentPeriod: {
          start: "2023",
        },
        employmentType: "Freelance",
        description: `- Authored and published 7 technical articles on the official GeeksforGeeks website, reaching a wide developer audience.
- Simplified complex programming concepts into beginner-friendly tutorials with practical examples.
- Focused on Frontend Development, JavaScript, and Web Technologies, contributing to the learning resources of thousands of readers.`,
        icon: "code",
        skills: [
          "Content Writing",
          "Research",
          "Proofreading",
          "Editing",
          "English proficiency",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Jaypee University of Engineering and Technology",
        employmentPeriod: {
          start: "08.2022",
          end: "06.2026",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Computer Science and Engineering.
- Winner of Smart India Hackathon (SIH) 2024 from the college
- Achieved several awards, including:
  - Silver Medal — Inter-Year Badminton Tournament 2024
  - 2nd Runner up — Chess Tournament on National Sports Day 2024`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Artificial Intelligence",
          "Operating System",
          "Computer Networks",
          "Computer Organization and Architecture",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Jaypee Institute of Information Technology",
        employmentPeriod: {
          start: "01.2025",
          end: "06.2025",
        },
        icon: "education",
        description: `- Student as an Exchange Program at Jaypee Institute of Information Technology.
- 1st Runner up - Hack-In-Winter 2025 Intra College Hackathon
- Held a lecture on "Introduction to "Frontend Development" for freshmen.
`,
        skills: [
          "Non Linear Data Structures",
          "Software Engineering",
          "Computer Organization and Architecture",
          "Graph Theory"
        ],
      },
    ],
  },
];

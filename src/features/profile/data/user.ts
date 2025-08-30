import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Manas",
  lastName: "Singh",
  displayName: "Manas Singh",
  username: "Manas2705",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Software Engineer",
    "Frontend Alchemist",
  ],
  address: "Lucknow, Uttar Pradesh, India",
  phoneNumber: "KzkxOTkzNTY3NTY2OQ==", // +919935675669 encoded in Base64 (E.164 required)
  email: "bWFuYXNzaW5naDI3MDVAZ21haWwuY29t", // base64 encoded
  website: "https://mnz-dev.netlify.app",
  jobTitle: "Full Stack Engineer",
  jobs: [
    {
      title: "Frontend Developer Intern",
      company: "Hypweb Solutions LLP",
      website: "https://hypweb.in/",
    },
    {
      title: "Software Developer Intern",
      company: "Radical Logix",
      website: "https://www.radicallogix.com/",
    },
  ],
  about: `
Hello, World! I’m Manas Singh — a Full Stack Web Developer and Designer passionate about crafting high-performance, visually engaging, and animation-rich web experiences.

With hands-on experience in modern web technologies, I specialize in building dynamic, user-centric applications with seamless interactions and intuitive designs. My expertise spans front-end and back-end development, with a primary focus on web animations that bring interfaces to life.

Beyond my professional work, I actively participate in innovation-driven competitions and have proudly won two national-level hackathons:

[HackOverflow 7.0](https://hackoverflow07.devfolio.co/) organized by NIT Durgapur

[Live the Code 3.0](https://live-the-code-3.devfolio.co/)

These achievements reflect my passion for problem-solving, rapid prototyping, and turning ideas into impactful digital solutions.

Let’s connect and create something extraordinary!
  `,
  avatar: "/r/ai image.jpeg",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1755355653",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  keywords: [
    "manas",
    "mnz",
    "manazz",
    "mns"
  ],
  dateCreated: "2025-08-28", // YYYY-MM-DD
};

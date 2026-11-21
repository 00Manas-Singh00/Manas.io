import { SITE_INFO } from "@/config/site";
import {
  CASE_STUDIES,
  EDUCATION,
  PROFILE,
  PROJECTS,
  RECOGNITION,
  SKILL_GROUPS,
  SOCIALS,
  SUMMARY,
  WORK,
} from "@/features/home/data";

// A plain-text version of the home page for AI assistants and crawlers (llmstxt.org),
// built from the same data the page renders so the two never drift apart.
const content = `# ${PROFILE.name}

> Full-stack, forward-deployed engineer. ${PROFILE.role} at ${PROFILE.company}.

${SUMMARY}

${EDUCATION}

## Experience

${WORK.map(
  (r) => `### ${r.role}, ${r.company} (${r.period}, ${r.place})
${r.intro ? `\n${r.intro}\n` : ""}
${r.chapters
  .map(
    (c) => `#### ${c.title}
Stack: ${c.stack}
${c.points.map((p) => `- ${p}`).join("\n")}`,
  )
  .join("\n\n")}`,
).join("\n\n")}

## Projects

${PROJECTS.map(
  (p) => `### ${p.title} (${p.year}, ${p.status})
${p.caption}. Stack: ${p.stack}
${p.points.map((pt) => `- ${pt}`).join("\n")}${CASE_STUDIES[p.id] ? `\nCase study: ${SITE_INFO.url}/projects/${p.id}` : ""}${p.href ? `\nSource: ${p.href}` : ""}`,
).join("\n\n")}

## Skills

${SKILL_GROUPS.map((g) => `- ${g.title}: ${g.items}`).join("\n")}

## Recognition

${RECOGNITION.map((r) => `- ${r.title} (${r.year}): ${r.detail}`).join("\n")}

## Links

- [Website](${SITE_INFO.url})
- [Résumé](${SITE_INFO.url}${PROFILE.resumeHref})
${SOCIALS.map((s) => `- [${s.label}](${s.href})`).join("\n")}
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(content, {
    headers: { "Content-Type": "text/markdown;charset=utf-8" },
  });
}

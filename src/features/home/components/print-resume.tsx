"use client";

import { useEffect, useState } from "react";

import {
  EDUCATION,
  PROFILE,
  PROJECTS,
  RECOGNITION,
  SKILL_GROUPS,
  SOCIALS,
  WORK,
} from "../data";
import { decodeEmail } from "../lib/lenis";

const SITE = "manas-io.vercel.app";

/** Opens the print dialog; the print stylesheet prints only the résumé. */
export function printResume() {
  window.print();
}

/**
 * A one-page A4 résumé in the site's type and ink, built from the same data as the
 * page so it never drifts. Hidden on screen; when anyone prints the page (⌘P or the
 * palette's "Print résumé"), the print stylesheet hides everything else and shows this.
 */
export function PrintResume() {
  // Decoded in the browser only, so the address isn't in the HTML for scrapers.
  const [email, setEmail] = useState("");
  useEffect(() => setEmail(decodeEmail(PROFILE.emailB64)), []);

  const link = (href: string) => href.replace(/^https?:\/\/(www\.)?/, "");

  return (
    <article aria-hidden className="print-resume">
      <header className="pr-head">
        <div>
          <h1>{PROFILE.name}</h1>
          <p className="pr-role">
            Full-stack, forward-deployed engineer · {PROFILE.role},{" "}
            {PROFILE.company}
          </p>
        </div>
        <ul className="pr-contact">
          {email && <li>{email}</li>}
          <li>{SITE}</li>
          {SOCIALS.filter((s) => s.label !== "X").map((s) => (
            <li key={s.label}>{link(s.href)}</li>
          ))}
        </ul>
      </header>

      <p className="pr-summary">
        I sit with the people who have the problem, then ship the software that
        fixes it, end to end: React and TypeScript front ends, Node and Python
        services, PostgreSQL and AWS, and LLM pipelines in production. I run
        discovery, demos and security reviews with client teams, then build the
        platform.
      </p>

      <div className="pr-grid">
        <section>
          <h2>Experience</h2>
          {WORK.map((r) => (
            <div key={r.company} className="pr-role-block">
              <p className="pr-row">
                <strong>
                  {r.role}, {r.company}
                </strong>
                <span>
                  {r.period} · {r.place}
                </span>
              </p>
              {r.intro && <p className="pr-intro">{r.intro}</p>}
              {r.chapters.map((c) => (
                <div key={c.title} className="pr-chapter">
                  <p className="pr-chapter-title">
                    {c.title} <span>· {c.stack}</span>
                  </p>
                  <ul>
                    {c.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </section>

        <aside>
          <h2>Projects</h2>
          {PROJECTS.map((p) => (
            <div key={p.id} className="pr-project">
              <p className="pr-chapter-title">
                {p.title} <span>· {p.year}</span>
              </p>
              <p>{p.points[0]}</p>
              <p className="pr-stack">{p.stack}</p>
            </div>
          ))}

          <h2>Skills</h2>
          {SKILL_GROUPS.map((g) => (
            <p key={g.title} className="pr-skill">
              <strong>{g.title}:</strong> {g.items}
            </p>
          ))}

          <h2>Recognition</h2>
          <ul>
            {RECOGNITION.map((r) => (
              <li key={r.title}>
                {r.title} ({r.year}). {r.detail}.
              </li>
            ))}
          </ul>

          <h2>Education</h2>
          <p>{EDUCATION}</p>
        </aside>
      </div>
    </article>
  );
}

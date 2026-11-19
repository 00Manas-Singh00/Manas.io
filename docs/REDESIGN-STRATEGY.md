# Manas.io Redesign Strategy

**Design read:** a developer portfolio for hiring managers and enterprise clients who are looking for a full-stack / forward-deployed engineer. It uses a Swiss editorial, kinetic-type language: paper, one cobalt ink, hairline rules and very large grotesk capitals. It's built with Tailwind v4, Barlow, GSAP ScrollTrigger + SplitText, Motion, and a single React Three Fiber canvas.

**Dials:** variance 7 · motion 7 · density 3. Animation should feel quiet: it runs on a single ease, `expo.out` / `cubic-bezier(.16,1,.3,1)`, and nothing loops unless it is the orb.

## 1. Visual system (taken from the three references)

| Token | Light | Dark | Notes |
|---|---|---|---|
| `--paper` | `#FBFBF8` | `#070A17` | Off-white; never pure white or pure black |
| `--ink` | `#2A4DF5` | `#7C97FF` | The only colour. Everything is set in it: text, rules, icons, buttons |
| `--ink-soft` | ink at 62% | ink at 62% | Captions and metadata |
| `--rule` | ink at 100%, 1px | same | The hairline grid holds the composition together |

- **Type:** Barlow 300/400/500, set uppercase for display and sentence case for body. The display sizes are fluid (`clamp`) so headlines always span the column, as they do in the references. There is no second family.
- **Shape rule:** images and panels are sharp (radius 0). Anything clickable that isn't a nav row is a full pill (the "EXPLORE" pill and the "GALLERY · SHOP" pill from the reference). Nav rows are hairline-underlined text.
- **Orb:** the blurred blue sphere from the references becomes the site's 3D signature. It's one R3F noise-displaced sphere rendered behind the content and softened with a CSS blur. It drifts toward the pointer, breathes slowly, and moves between sections as you scroll.
- **Grid:** 12 columns, 24px gutters, max 1440px. On desktop the left half holds content and the right half holds the menu/asset, the same split as the references. Below 768px everything stacks into one column.

## 2. Motion language (which tool does what)

| Library | Used for | Why |
|---|---|---|
| **GSAP + ScrollTrigger + SplitText** | Loader timeline, hero pin and scrub, word-by-word text reveal, pinned work gallery, counters | Scroll-scrubbed and pinned choreography |
| **Lenis** | Smooth scroll, synced to the GSAP ticker | Gives the pinned scenes inertia |
| **Motion (`motion/react`)** | Menu overlay, link letter-roll, project detail modal (`layoutId` morph), magnetic pills, `whileInView` reveals | UI-state animation and springs |
| **React Three Fiber** | Fixed orb canvas (custom GLSL simplex-noise shader) | The 3D layer; one canvas for the whole page, lazy-loaded |

Motion and GSAP never animate the same element. Everything falls back to a static layout under `prefers-reduced-motion`, and the loader is skipped.

## 3. Section-by-section plan

### 0 · Loader (first visit per session)
- A counter (`000 → 100`) in thin Barlow sits bottom-left while a hairline draws across the full width. The name `MANAS SINGH` rises letter by letter with SplitText behind a mask.
- At 100 the ink panel wipes upward (`clip-path inset`) to reveal the hero. The hero headline lines stagger up in the same motion, so the loader and the hero feel like one shot.
- *Why:* it sets the type and colour before any content, and the long wipe gives the canvas time to compile its shaders.
- Total length is about 2.4s. It's skipped on repeat visits within the session and under reduced motion.

### 1 · Navigation
- **In the hero (reference 1):** a top strip reads `MANAS SINGH` / `/full-stack, forward-deployed/` / `MENU`. The right column is the menu as a stack of 48px+ hairline rows: `WORK`, `PROJECTS`, `ABOUT`, `CONTACT`. The left column's bottom row mirrors the reference's SEARCH row: `↓ RÉSUMÉ` with the icon on the left.
- **Hover:** a letter roll. Each label is duplicated and the characters slide up one by one in a 12ms stagger. A hairline under the row fills with ink from the side the pointer entered.
- **After scrolling past the hero (reference 3):** the stack condenses into a 64px fixed bar with the name on the left, a live section label in the middle that rolls to the new word when the section changes, and a `MENU` pill plus theme toggle on the right.
- **Menu overlay:** a full-screen paper sheet slides down with a clip-path. The hairlines draw from left to right (`scaleX`), then the giant links rise in a stagger. Each row shows its section's key number (for example `/04`). Escape closes it, and focus is trapped while it's open.

### 2 · Hero, pinned (references 1 → 2)
- **State A (reference 1):** a split layout. The headline on the left is `HAND ME THE MESSY PROBLEM. I'LL SHIP IT.`. On the right is the portrait in a grayscale, high-contrast duotone. A small caption bottom-left reads `SAGE TECHNOLOGIES / Associate Software Engineer`, standing in for the reference's "SERAPHINA FROST" caption.
- **Scroll (pinned, about 120vh, scrubbed):** the portrait panel collapses to the right (`clip-path`) and the menu column fades upward. The headline scales up to span the whole width, as in reference 2. The orb glides from the lower left to the centre and grows.
- *Why:* it is literally the transition between the two references. The first beat says who you are and the second makes the statement.

### 3 · How I work (from reference 3's `/24`, words instead of numbers)
- Three huge figures, each with a two-line caption on its right: `3 MIN → 10 S` per invoice, `99%` extraction accuracy, `/02` products in production for 3+ clients each.
- The numbers count up once on entry. The rule above them draws in.
- Layout: an asymmetric 7/5 offset. The second figure is pushed right, so it doesn't read as three equal cards.

### 4 · About, as a kinetic paragraph
- The summary paragraph from the resume is set large (clamp 28 to 48px). Each word starts at 15% ink and fills to 100% as you scroll past it, like reading under a lamp.
- A single line underneath gives education: `B.Tech CSE, Jaypee University of Engineering and Technology, 2022-2026`.

### 5 · Work (experience)
- **Layout:** a sticky left column shows the company, role and dates. The right column scrolls the cases.
- **Sage Technologies:** two product chapters, the AI Document Processing Platform and the Financial Anomaly Detection Platform. Each has a stack line and 3–4 resume bullets, and each bullet's hairline draws in as it enters.
- **Radical Logix (intern):** a compact row.
- When the second company comes in, the sticky header's text rolls to the new company, the same mechanism as the nav's section label.

### 6 · Selected Projects (reference 3's gallery)
- **Header row:** `SELECTED WORK` in very large type with the hairline and arrow icon from reference 3's SEARCH / GALLERY bar.
- **Four tall cards** in a row (2×2 on tablet, 1 column on mobile): The Margin, Curiosity Engine, TradeTide and Meet Genius. Captions use reference 3's micro-caption plus `•••` pattern.
- **Image pin animation:** the section pins. Cards rise in a stagger with a clip-path reveal from the bottom, and the image inside counter-scales from 1.25 to 1 (a parallax "lens" effect). On hover the grayscale image picks up an ink duotone and the `•••` expands.
- **Click:** the card morphs (Motion `layoutId`) into a full detail sheet with the bullets and stack. Escape or the close pill collapses it back.
- **Footer of the section:** a giant `WORK` with `/04` on the right and the caption `SHIPPED TO PRODUCTION AND TO THE BROWSER`. An `EXPLORE` pill links to GitHub.

### 7 · Capabilities
- This is the page's single marquee. Huge outline-to-fill words (TYPESCRIPT · NESTJS · FASTAPI · POSTGRES · NEXT.JS · PYTHON · GEMINI) move at a speed tied to scroll velocity and reverse direction with it.
- Below it are six skill groups in a 3×2 grid with hairline tops. This replaces the old icon wall.

### 8 · Recognition
- One full-width row per item, each with its year on the right: HackOverflow 7.0 winner, Live the Code 3.0 winner, GeeksforGeeks articles, GDSC mentoring.
- **Hover:** an ink fill wipes in from the side the pointer entered and the text flips to paper.

### 9 · Contact and footer
- The headline `HAVE A HARD INTEGRATION?` comes first. Then one CTA, `GET IN TOUCH`, a magnetic pill that decodes the obfuscated email address on click.
- The links row: LinkedIn, GitHub, X and Résumé.
- `MANAS SINGH` is set edge to edge. Its letters rise from the baseline mask as the footer enters, and the orb sinks behind them.
- At the bottom right is a `WORK · RÉSUMÉ` pill pair, echoing reference 3's `GALLERY · SHOP`.

## 4. Engineering rules
- The home page moves to its own route group, so the old header and footer stay on the legacy `/blog` and `/components` routes only.
- There is one fixed `<Canvas>`, loaded with `next/dynamic({ ssr:false })` at `dpr` 1 to 1.5. Its render loop stops when the tab is hidden.
- Orb state lives in a mutable store, not React state, and GSAP tweens it directly.
- Every GSAP effect goes through `useGSAP` (automatic cleanup). There are no `scroll` listeners.
- Animations touch only transform, opacity and clip-path.
- The colour tokens have light and dark values, and the theme toggle lives in the compact bar.

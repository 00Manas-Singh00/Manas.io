import { ImageResponse } from "next/og";

// The link-preview card: the home page's paper, ink and orb at 1200x630.
export const alt =
  "Manas Singh, full-stack and forward-deployed engineer. Hand me the messy problem. I'll ship it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f3efe6";
const INK = "#1d3bd1";
const SOFT = "#4c63d9";

const TEXT =
  "MANAS SINGH/FULL-STACK, FORWARD-DEPLOYED/HAND ME THE MESSY PROBLEM. I'LL SHIP IT.MANAS-IO.VERCEL.APPTYPESCRIPT · REACT · PYTHON · AI";

/** Barlow from Google Fonts, subset to the card's text. Falls back to the default font. */
async function barlow(weight: 300 | 400) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Barlow:wght@${weight}&text=${encodeURIComponent(TEXT)}`,
    ).then((r) => r.text());
    const url = css.match(
      /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
    )?.[1];
    if (!url) return null;
    return { data: await fetch(url).then((r) => r.arrayBuffer()), weight };
  } catch {
    return null;
  }
}

export default async function Image() {
  const fonts = (await Promise.all([barlow(300), barlow(400)]))
    .filter((f) => f !== null)
    .map((f) => ({
      name: "Barlow",
      data: f.data,
      weight: f.weight,
      style: "normal" as const,
    }));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: PAPER,
          color: INK,
          fontFamily: "Barlow",
          padding: "44px 56px",
          position: "relative",
        }}
      >
        {/* The orb, flattened to a radial wash. */}
        <div
          style={{
            position: "absolute",
            right: -170,
            top: 40,
            width: 520,
            height: 520,
            borderRadius: 9999,
            backgroundImage: `radial-gradient(circle, #1530c4 0%, ${INK} 28%, rgba(29,59,209,0.35) 52%, rgba(243,239,230,0) 70%)`,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            fontWeight: 400,
            paddingBottom: 14,
            borderBottom: `1.5px solid ${INK}`,
          }}
        >
          <span>MANAS SINGH</span>
          <span>/FULL-STACK, FORWARD-DEPLOYED/</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            fontSize: 112,
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: -1,
          }}
        >
          <span>HAND ME THE</span>
          <span>MESSY PROBLEM.</span>
          <span>I&apos;LL SHIP IT.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 30,
            paddingTop: 14,
            borderTop: `1.5px solid ${INK}`,
            fontSize: 20,
            color: SOFT,
          }}
        >
          <span>TYPESCRIPT · REACT · PYTHON · AI</span>
          <span>MANAS-IO.VERCEL.APP</span>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}

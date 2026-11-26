import { ImageResponse } from "next/og";

import {
  barlow,
  halftonePortrait,
  HOST,
  INK,
  Marks,
  OG_SIZE,
  PAPER,
} from "@/features/home/lib/og";

// The link-preview card: a proof sheet off the same press as the site. Paper, one
// ink, crop and registration marks, and the portrait printed as a dot screen.
export const alt =
  "Manas Singh, full-stack and forward-deployed engineer. Hand me the messy problem. I'll ship it.";
export const size = OG_SIZE;
export const contentType = "image/png";

const PORTRAIT = { w: 360, h: 470 };

export default async function Image() {
  const host = HOST.toUpperCase();
  const lines = ["HAND ME THE", "MESSY PROBLEM.", "I'LL SHIP IT."];
  const top = ["MANAS SINGH", "/MERGES ON FRIDAYS/"];
  const foot = ["FULL-STACK, FORWARD-DEPLOYED ENGINEER", host];
  const slug = `PROOF · ${host} · ONE INK ${INK.toUpperCase()} ON ${PAPER.toUpperCase()} · BARLOW`;

  const [fonts, portrait] = await Promise.all([
    barlow([...lines, ...top, ...foot, slug].join("")),
    halftonePortrait(PORTRAIT.w, PORTRAIT.h, 6),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          color: INK,
          fontFamily: "Barlow",
          position: "relative",
        }}
      >
        <Marks />

        {/* The sheet, inside the trim. */}
        <div
          style={{
            position: "absolute",
            top: 26,
            left: 26,
            right: 26,
            bottom: 26,
            display: "flex",
            padding: "26px 30px 22px",
            gap: 36,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 20,
                paddingBottom: 12,
                borderBottom: `1.5px solid ${INK}`,
              }}
            >
              <span>{top[0]}</span>
              <span>{top[1]}</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "auto",
                fontSize: 80,
                fontWeight: 300,
                lineHeight: 0.92,
                letterSpacing: -1,
              }}
            >
              {lines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 26,
                paddingTop: 12,
                borderTop: `1.5px solid ${INK}`,
                fontSize: 17,
              }}
            >
              <span>{foot[0]}</span>
              <span style={{ fontWeight: 500 }}>{foot[1]}</span>
            </div>
          </div>

          {/* The portrait, printed as a dot screen. */}
          <div
            style={{
              display: "flex",
              width: PORTRAIT.w,
              height: PORTRAIT.h,
              alignSelf: "center",
              border: `1.5px solid ${INK}`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={portrait} width={PORTRAIT.w} height={PORTRAIT.h} alt="" />
          </div>
        </div>

        {/* Slug line in the margin, like the edge of a press proof. */}
        <div
          style={{
            position: "absolute",
            left: 56,
            bottom: 6,
            fontSize: 11,
            letterSpacing: 2,
            display: "flex",
          }}
        >
          {slug}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}

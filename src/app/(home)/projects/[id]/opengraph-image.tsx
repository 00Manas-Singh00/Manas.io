import { ImageResponse } from "next/og";

import { CASE_STUDIES, PROJECTS } from "@/features/home/data";
import {
  barlow,
  HOST,
  INK,
  Marks,
  OG_SIZE,
  PAPER,
  plate,
} from "@/features/home/lib/og";

// A case study's link-preview card: the same proof sheet as the home card, with the
// project's own halftone plate in place of the portrait.
export const alt = "A case study by Manas Singh";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return PROJECTS.filter((p) => CASE_STUDIES[p.id]).map((p) => ({ id: p.id }));
}

const PLATE = { w: 360, h: 470 };

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[Math.max(0, index)];

  const top = [
    `MANAS SINGH · CASE STUDY ${String(index + 1).padStart(2, "0")}/${String(PROJECTS.length).padStart(2, "0")}`,
    `${project.year} · ${project.status.toUpperCase()}`,
  ];
  const title = project.title.toUpperCase();
  const caption = project.caption.toUpperCase();
  const stack = project.stack.toUpperCase();
  const url = `${HOST}/projects/${project.id}`.toUpperCase();
  const slug = `PROOF · ${HOST.toUpperCase()} · PLATE: ${project.visual.toUpperCase()} · ONE INK ${INK.toUpperCase()}`;

  const fonts = await barlow(
    [...top, title, caption, stack, url, slug].join(""),
  );
  const art = plate(project.visual, PLATE.w, PLATE.h, 9);

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
                fontSize: 18,
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
              }}
            >
              <span
                style={{
                  fontSize: title.length > 12 ? 84 : 100,
                  fontWeight: 300,
                  lineHeight: 0.92,
                  letterSpacing: -1,
                }}
              >
                {title}
              </span>
              <span style={{ marginTop: 18, fontSize: 28, lineHeight: 1.2 }}>
                {caption}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                marginTop: 26,
                paddingTop: 12,
                borderTop: `1.5px solid ${INK}`,
                fontSize: 16,
              }}
            >
              <span>{stack}</span>
              <span style={{ fontWeight: 500 }}>{url}</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: PLATE.w,
              height: PLATE.h,
              alignSelf: "center",
              border: `1.5px solid ${INK}`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={art} width={PLATE.w} height={PLATE.h} alt="" />
          </div>
        </div>

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

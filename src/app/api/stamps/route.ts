import { createHash } from "node:crypto";

/**
 * "Sign the press": the guestbook's API. Stamps are 1-3 initials, nothing else, kept
 * in Upstash Redis (Vercel's KV) over its REST API. Without the store's environment
 * variables the API answers `{ enabled: false }` and the section hides itself.
 *
 * Abuse: initials only (A-Z, blocklisted combos refused), one stamp per visitor per
 * 10 minutes keyed on a salted hash of the IP that expires, and the list is capped.
 */

export const dynamic = "force-dynamic";

const URL_ = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const TOKEN =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

const LIST = "press:stamps";
const COUNT = "press:count";
const KEEP = 500;
const COOLDOWN_S = 600;
const BLOCK = new Set([
  "ASS",
  "CUM",
  "DIC",
  "DIK",
  "FAG",
  "FCK",
  "FUC",
  "FUK",
  "KKK",
  "NIG",
  "SEX",
  "SHT",
  "TIT",
  "XXX",
  "NGR",
  "FKU",
  "COK",
  "KYS",
]);

export type Stamp = { i: string; n: number; t: number; r: number };

async function redis(commands: (string | number)[][]) {
  const res = await fetch(`${URL_}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`redis ${res.status}`);
  return (await res.json()) as { result?: unknown; error?: string }[];
}

const json = (body: unknown, status = 200) =>
  Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });

export async function GET() {
  if (!URL_ || !TOKEN) return json({ enabled: false, stamps: [] });
  try {
    const [list, count] = await redis([
      ["LRANGE", LIST, 0, 149],
      ["GET", COUNT],
    ]);
    const stamps = ((list.result as string[]) ?? [])
      .map((s) => {
        try {
          return JSON.parse(s) as Stamp;
        } catch {
          return null;
        }
      })
      .filter(Boolean);
    return json({ enabled: true, stamps, total: Number(count.result ?? 0) });
  } catch {
    return json({ enabled: false, stamps: [] });
  }
}

export async function POST(req: Request) {
  if (!URL_ || !TOKEN) return json({ error: "Guestbook is off." }, 503);

  let initials = "";
  try {
    initials = String((await req.json())?.initials ?? "")
      .trim()
      .toUpperCase();
  } catch {}
  if (!/^[A-Z]{1,3}$/.test(initials))
    return json({ error: "Use 1 to 3 letters." }, 400);
  if (BLOCK.has(initials)) return json({ error: "Try other initials." }, 400);

  // One stamp per visitor per cooldown. The IP is hashed with a salt and only the
  // hash is used, as an expiring key; it is never stored with the stamp.
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const who = createHash("sha256")
    .update(`${TOKEN.slice(0, 12)}:${ip}`)
    .digest("hex")
    .slice(0, 32);

  try {
    const [gate] = await redis([
      ["SET", `press:rl:${who}`, "1", "NX", "EX", COOLDOWN_S],
    ]);
    if (gate.result !== "OK")
      return json({ error: "One stamp at a time. Try again later." }, 429);

    const [n] = await redis([["INCR", COUNT]]);
    const stamp: Stamp = {
      i: initials,
      n: Number(n.result),
      t: Date.now(),
      r: Math.round((Math.random() * 2 - 1) * 14),
    };
    await redis([
      ["LPUSH", LIST, JSON.stringify(stamp)],
      ["LTRIM", LIST, 0, KEEP - 1],
    ]);
    return json({ stamp });
  } catch {
    return json({ error: "The press jammed. Try again." }, 502);
  }
}

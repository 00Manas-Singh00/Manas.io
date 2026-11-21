/**
 * Opt-in sound, synthesised with Web Audio (no files to download). Off by default; the
 * choice is remembered per browser. Audio starts only after the visitor turns it on,
 * which is also the user gesture browsers require before an AudioContext may play.
 */

const KEY = "manas-io:sound";
let ctx: AudioContext | null = null;
let enabled = false;
const listeners = new Set<(on: boolean) => void>();

try {
  enabled = typeof window !== "undefined" && localStorage.getItem(KEY) === "on";
} catch {}

export function isSoundOn() {
  return enabled;
}

export function onSoundChange(fn: (on: boolean) => void) {
  listeners.add(fn);
  return () => void listeners.delete(fn);
}

export function setSound(on: boolean) {
  enabled = on;
  try {
    localStorage.setItem(KEY, on ? "on" : "off");
  } catch {}
  if (on) {
    ctx ??= new AudioContext();
    void ctx.resume();
    play("click");
  }
  listeners.forEach((fn) => fn(on));
}

export type Sound = "tick" | "click" | "flick" | "turn";

let lastFlick = 0;

export function play(name: Sound) {
  if (!enabled) return;
  // Remembered as on from a past visit, but no gesture yet: create lazily, and stay
  // silent until the browser lets it run.
  ctx ??= new AudioContext();
  if (ctx.state !== "running") {
    void ctx.resume();
    return;
  }
  const t = ctx.currentTime;

  switch (name) {
    case "tick":
      return tone(1800, 0.025, 0.05, t);
    case "click":
      return tone(620, 0.05, 0.08, t, "triangle");
    case "flick": {
      // Hover over links: a tiny paper flick, at most ~12 a second.
      if (performance.now() - lastFlick < 80) return;
      lastFlick = performance.now();
      return noise(0.05, 0.05, t, 3800, 9000);
    }
    case "turn":
      // A sheet of paper turning: a filtered noise sweep.
      return noise(0.6, 0.06, t, 500, 4200);
  }
}

function tone(
  freq: number,
  dur: number,
  gain: number,
  t: number,
  type: OscillatorType = "sine",
) {
  const c = ctx!;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(c.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

function noise(dur: number, gain: number, t: number, from: number, to: number) {
  const c = ctx!;
  const len = Math.ceil(c.sampleRate * dur);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  const src = c.createBufferSource();
  src.buffer = buf;
  const band = c.createBiquadFilter();
  band.type = "bandpass";
  band.Q.value = 1.2;
  band.frequency.setValueAtTime(from, t);
  band.frequency.exponentialRampToValueAtTime(to, t + dur);
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + dur * 0.2);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(band).connect(g).connect(c.destination);
  src.start(t);
  src.stop(t + dur + 0.02);
}

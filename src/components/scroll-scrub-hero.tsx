"use client";

import { useEffect, useRef, useState } from "react";
import { BOOK_URL } from "./brand";

const FRAME_COUNT = 754;
const SCROLL_VH = 620;

function frameSrc(index: number) {
  const n = String(Math.min(FRAME_COUNT, Math.max(1, index))).padStart(3, "0");
  return `/scrub/frame_${n}.jpg`;
}

type Beat = {
  until: number;
  eyebrow: string;
  title: string[];
  accentLast: boolean;
  body: string | null;
  support: string | null;
  showCta: boolean;
};

const BEATS: Beat[] = [
  {
    until: 0.18,
    eyebrow: "Los Angeles · Est. 2018",
    title: ["Stylists for", "the Stars"],
    accentLast: true,
    body: "Celebrity Barbershop in Los Angeles",
    support:
      "More than a haircut. It's an experience. Precision fades, beard sculpting and the signature C.E.O Treatment in the heart of Los Angeles.",
    showCta: true,
  },
  {
    until: 0.4,
    eyebrow: "New York · Los Angeles",
    title: ["Down the street,", "into Styles"],
    accentLast: false,
    body: "Step inside",
    support: null,
    showCta: false,
  },
  {
    until: 0.62,
    eyebrow: "The floor",
    title: ["Where the night", "comes alive"],
    accentLast: false,
    body: null,
    support: null,
    showCta: false,
  },
  {
    until: 0.82,
    eyebrow: "Stylists for the Stars",
    title: ["The craft"],
    accentLast: false,
    body: "The finest tools, masters at work",
    support: null,
    showCta: false,
  },
  {
    until: 1,
    eyebrow: "STYLES Barber Lounge",
    title: ["Book your chair"],
    accentLast: false,
    body: null,
    support: null,
    showCta: true,
  },
];

function beatFor(progress: number) {
  return BEATS.find((b) => progress <= b.until) ?? BEATS[BEATS.length - 1];
}

export function ScrollScrubHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const frameRef = useRef(1);
  const rafRef = useRef(0);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const images: (HTMLImageElement | null)[] = Array(FRAME_COUNT + 1).fill(null);
    imagesRef.current = images;

    const draw = (frame: number) => {
      const canvas = canvasRef.current;
      const img = images[frame];
      if (!canvas || !img?.complete || !img.naturalWidth) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (
        canvas.width !== Math.floor(w * dpr) ||
        canvas.height !== Math.floor(h * dpr)
      ) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    };

    const loadOne = (index: number) =>
      new Promise<void>((resolve) => {
        if (images[index]) {
          resolve();
          return;
        }
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          images[index] = img;
          if (index === frameRef.current || index === 1) draw(index);
          resolve();
        };
        img.onerror = () => resolve();
        img.src = frameSrc(index);
      });

    const preloadAll = async () => {
      await loadOne(1);
      if (cancelled) return;
      setReady(true);
      draw(1);

      const order = Array.from({ length: FRAME_COUNT }, (_, i) => i + 1);
      order.sort((a, b) => Math.abs(a - 1) - Math.abs(b - 1) || a - b);

      let cursor = 0;
      const concurrency = 10;
      await Promise.all(
        Array.from({ length: concurrency }, async () => {
          while (!cancelled && cursor < order.length) {
            const next = order[cursor];
            cursor += 1;
            await loadOne(next);
          }
        }),
      );
    };

    void preloadAll();

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const total = Math.max(section.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = reducedMotion ? 0 : scrolled / total;
      const frame = 1 + Math.round(p * (FRAME_COUNT - 1));
      frameRef.current = frame;
      const prev = progressRef.current;
      progressRef.current = p;

      const beatChanged = beatFor(prev).until !== beatFor(p).until;
      if (beatChanged || Math.abs(prev - p) > 0.01) {
        setProgress(p);
      }

      if (images[frame]) draw(frame);
      else
        void loadOne(frame).then(() => {
          if (frameRef.current === frame) draw(frame);
        });
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  const beat = beatFor(progress);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative bg-void"
      style={{ height: reducedMotion ? "100svh" : `${SCROLL_VH}vh` }}
      aria-label="Styles Barber Lounge scroll experience"
      data-progress={progress.toFixed(3)}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        />
        {!ready && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={frameSrc(1)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void/85 via-void/45 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-void/35" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
          <div key={beat.until} className="max-w-3xl animate-fade-up">
            <p className="text-xs font-medium tracking-[0.22em] text-royal uppercase">
              {beat.eyebrow}
            </p>
            <h1 className="font-display mt-4 text-[clamp(2.5rem,7vw,5.25rem)] leading-[0.92] text-snow">
              {beat.title.map((line, i) => (
                <span
                  key={line}
                  className={`block ${
                    beat.accentLast && i === beat.title.length - 1
                      ? "text-royal"
                      : ""
                  }`}
                >
                  {line}
                </span>
              ))}
            </h1>
            {beat.body && (
              <p className="mt-3 text-xl text-snow md:text-2xl">{beat.body}</p>
            )}
            {beat.support && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-snow/85 md:text-lg">
                {beat.support}
              </p>
            )}
            {beat.showCta && (
              <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-royal px-6 py-3 text-sm font-medium text-snow transition hover:brightness-110"
                >
                  Book Your Chair →
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-snow/80 px-6 py-3 text-sm font-medium text-snow transition hover:bg-snow/10"
                >
                  The Experience
                </a>
              </div>
            )}
            {progress < 0.12 && (
              <p className="mt-6 flex items-center gap-2 text-sm text-snow/90">
                <span aria-hidden className="tracking-tight text-amber-300">
                  ★★★★★
                </span>
                <span>5 · 1000+ Google reviews</span>
              </p>
            )}
          </div>

          {!reducedMotion && (
            <p className="pointer-events-none absolute bottom-6 left-5 text-[10px] tracking-[0.25em] text-mute uppercase md:left-8">
              Scroll to enter
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Left = { d: number; h: number; m: number; s: number };

function timeLeft(target: number): Left | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  const t = Math.floor(diff / 1000);
  return { d: Math.floor(t / 86400), h: Math.floor((t % 86400) / 3600), m: Math.floor((t % 3600) / 60), s: t % 60 };
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Live countdown to the start of the conclave. */
export function Countdown() {
  const start = new Date(site.startISO).getTime();
  const end = new Date(site.endISO).getTime();
  // undefined until mounted, so the server and browser render the same first frame
  const [left, setLeft] = useState<Left | null | undefined>(undefined);
  const [phase, setPhase] = useState<"before" | "live" | "after">("before");

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      setPhase(now < start ? "before" : now < end ? "live" : "after");
      setLeft(timeLeft(start));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [start, end]);

  if (phase === "live") {
    return <p className="font-display text-xl text-teal-dark italic">PSYVERSE is happening now in {site.venue.room}.</p>;
  }
  if (phase === "after") {
    return <p className="font-display text-xl text-muted italic">Thank you to everyone who joined the conversation.</p>;
  }

  const units: [string, number | undefined][] = [
    ["Days", left?.d],
    ["Hours", left?.h],
    ["Minutes", left?.m],
    ["Seconds", left?.s],
  ];

  return (
    <div
      className="flex flex-col gap-3 rounded-[1.75rem] bg-purple-mist/70 p-3.5 min-[460px]:flex-row min-[460px]:items-center min-[460px]:gap-5 sm:p-4"
      role="timer"
      aria-live="off"
      aria-label="Time until PSYVERSE 2026 begins"
    >
      <span className="px-2 pt-1 text-xs leading-relaxed font-semibold tracking-[0.2em] text-[#4b4f5e] uppercase min-[460px]:flex min-[460px]:w-36 min-[460px]:shrink-0 min-[460px]:items-center min-[460px]:self-stretch min-[460px]:border-r min-[460px]:border-purple/15 min-[460px]:pt-0 min-[460px]:pr-4">
        The conclave begins in
      </span>
      <div className="grid flex-1 grid-cols-4 gap-2">
        {units.map(([label, v]) => (
          <span key={label} className="flex flex-col items-center rounded-2xl bg-white px-1 py-3 shadow-[var(--shadow-paper)]">
            <span className="font-display text-[1.75rem] leading-none font-bold text-purple [font-variant-numeric:lining-nums_tabular-nums] sm:text-[2rem]">
              {v === undefined ? "--" : pad(v)}
            </span>
            <span className="mt-1.5 text-[0.72rem] text-muted sm:text-xs">{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

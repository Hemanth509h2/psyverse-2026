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
      className="flex items-center gap-[clamp(0.6rem,3.5vw,1rem)] rounded-[1.25rem] bg-[#f6f2fa] py-3 pr-3 pl-[clamp(0.9rem,4.6vw,1.4rem)] md:rounded-[1.75rem]"
      role="timer"
      aria-live="off"
      aria-label="Time until PSYVERSE 2026 begins"
    >
      <span className="flex w-[clamp(3.6rem,23vw,8rem)] shrink-0 items-center self-stretch border-r border-[#ddd3ea] pr-2 text-[clamp(0.45rem,1.85vw,0.75rem)] leading-[1.9] font-medium tracking-[0.18em] text-[#4b4f5e] uppercase">
        The conclave begins in
      </span>
      <div className="grid flex-1 grid-cols-4 gap-[clamp(0.35rem,1.9vw,0.6rem)]">
        {units.map(([label, v]) => (
          <span key={label} className="flex flex-col items-center rounded-[0.8rem] bg-white px-0.5 py-[clamp(0.6rem,2.6vw,0.9rem)] shadow-[0_4px_12px_-8px_rgb(106_54_180_/_0.2)]">
            <span className="font-display text-[clamp(1rem,5.5vw,2rem)] leading-none font-bold text-purple [font-variant-numeric:lining-nums_tabular-nums]">
              {v === undefined ? "--" : pad(v)}
            </span>
            <span className="mt-1.5 text-[clamp(0.58rem,2.15vw,0.8rem)] text-[#5b6070]">{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

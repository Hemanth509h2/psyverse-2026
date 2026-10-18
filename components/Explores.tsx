"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { LotusMark } from "./Decor";
import {
  IconExpert,
  IconExpertise,
  IconFuture,
  IconGrowth,
  IconHuman,
  IconQA,
  IconTech,
  IconTechMind,
} from "./illustrations/icons";
import { SectionHeading } from "./SectionHeading";

const topics = [
  { title: "Evolution of Therapy", text: "How counselling has grown from the consulting room into many settings.", Icon: IconGrowth, mist: "bg-sage-mist" },
  { title: "Technology in Practice", text: "Tools that support practitioners in their everyday work.", Icon: IconTech, mist: "bg-gold-mist" },
  { title: "Client Expectations", text: "What clients look for today: access, flexibility and feeling heard.", Icon: IconExpert, mist: "bg-lavender-mist" },
  { title: "Digital Mental Health", text: "Apps, platforms and self-help resources, and where they fit.", Icon: IconTechMind, mist: "bg-sage-mist" },
  { title: "Ethics", text: "Privacy, consent and boundaries in technology-enabled care.", Icon: IconExpertise, mist: "bg-gold-mist" },
  { title: "Online Therapy", text: "What changes, and what stays the same, when therapy moves to a screen.", Icon: IconQA, mist: "bg-lavender-mist" },
  { title: "Future Trends", text: "How mental-health services could look in the years ahead.", Icon: IconFuture, mist: "bg-sage-mist" },
  { title: "Human Connection", text: "The trust and empathy at the centre of every therapeutic relationship.", Icon: IconHuman, mist: "bg-lavender-mist" },
];

const R = 210; // node orbit radius in the 600-unit map

export function Explores() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const current = active === null ? null : topics[active];

  return (
    <section id="explores" className="section relative isolate overflow-hidden">
      <div className="wrap">
        <SectionHeading
          eyebrow="What PSYVERSE explores"
          title={<>A map of <em className="text-lavender-deep">eight conversations</em></>}
          intro="Hover or tap a theme to read what the panel will explore."
        />

        <div className="relative mx-auto hidden aspect-square w-full max-w-[680px] sm:block">
          <svg viewBox="-300 -300 600 600" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <circle r={R + 70} fill="#FFFFFF" opacity="0.45" filter="url(#wc)" />
            <circle r={R} fill="none" stroke="#D4B483" strokeWidth="1" strokeDasharray="2 7" />
            <circle r={R - 70} fill="none" stroke="#E6DFD5" strokeWidth="1" />
            {topics.map((_, i) => {
              const a = (i * 45 - 90) * (Math.PI / 180);
              const x = Math.cos(a) * (R - 58);
              const y = Math.sin(a) * (R - 58);
              const bend = (i * 45 + 20 - 90) * (Math.PI / 180);
              const cx = Math.cos(bend) * 120;
              const cy = Math.sin(bend) * 120;
              const sx = Math.cos(a) * 92;
              const sy = Math.sin(a) * 92;
              return (
                <motion.path
                  key={i}
                  d={`M${sx},${sy} Q${cx},${cy} ${x},${y}`}
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: reduce ? 1 : 0, stroke: "#B8A9D9", strokeOpacity: 0.45, strokeWidth: 1.2 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.4, delay: 0.2 + i * 0.08, ease: "easeInOut" }}
                  animate={{ stroke: active === i ? "#8B7BB8" : "#B8A9D9", strokeOpacity: active === i ? 0.9 : 0.45, strokeWidth: active === i ? 2 : 1.2 }}
                />
              );
            })}
          </svg>

          <LotusMark className="absolute top-1/2 left-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]" />

          {/* centre */}
          <div className="absolute top-1/2 left-1/2 flex h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-4 text-center shadow-[var(--shadow-lift)] ring-1 ring-gold/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={current ? current.title : "brand"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
              >
                {current ? (
                  <>
                    <p className="font-display text-[clamp(0.85rem,1.8vw,1.05rem)] leading-tight text-lavender-deep">{current.title}</p>
                    <p className="mt-1.5 text-[clamp(0.65rem,1.3vw,0.8rem)] leading-snug text-muted">{current.text}</p>
                  </>
                ) : (
                  <>
                    <p className="font-display text-[clamp(1.2rem,3vw,1.8rem)] font-semibold tracking-wide text-ink">PSYVERSE</p>
                    <p className="mt-1 text-[0.7rem] tracking-[0.24em] text-lavender-deep uppercase">2026</p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* nodes */}
          <ul>
            {topics.map((t, i) => {
              const a = (i * 45 - 90) * (Math.PI / 180);
              const left = 50 + (R / 6) * Math.cos(a);
              const top = 50 + (R / 6) * Math.sin(a);
              const on = active === i;
              return (
                <motion.li
                  key={t.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${left}%`, top: `${top}%` }}
                  initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive(null)}
                    onClick={() => setActive((v) => (v === i ? null : i))}
                    aria-pressed={on}
                    className={`flex h-28 w-28 flex-col items-center justify-center gap-1.5 rounded-full bg-white p-3 text-center shadow-[var(--shadow-soft)] ring-1 transition-all duration-500 md:h-32 md:w-32 ${
                      on ? "-translate-y-1 shadow-[var(--shadow-lift)] ring-lavender" : "ring-line"
                    }`}
                  >
                    <span className={`flex h-11 w-11 items-center justify-center rounded-full ${t.mist}`}>
                      <t.Icon className="h-9 w-9" />
                    </span>
                    <span className={`text-[0.78rem] leading-tight font-medium md:text-[0.85rem] ${on ? "text-lavender-deep" : "text-ink"}`}>{t.title}</span>
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* list for small screens */}
        <ul className="grid gap-3 sm:hidden">
          {topics.map((t) => (
            <li key={t.title} className="card flex items-start gap-4 p-5">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${t.mist}`}>
                <t.Icon className="h-9 w-9" />
              </span>
              <div>
                <p className="font-display text-lg text-ink">{t.title}</p>
                <p className="mt-1 text-sm text-muted">{t.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

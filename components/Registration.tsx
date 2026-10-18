"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { C, Wash } from "./illustrations/base";
import { LineIcon } from "./illustrations/icons";
import { Reveal } from "./Reveal";

const STORAGE_KEY = "psyverse-2026-registered";

export function Registration() {
  const [registered, setRegistered] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    setClosed(Date.now() > new Date(site.deadlineISO).getTime());
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setRegistered(true);
    } catch {
      /* storage unavailable; ignore */
    }
  }, []);

  const confirm = () => {
    setRegistered(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const undo = () => {
    setRegistered(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  const details = [
    { label: "Registration fee", value: site.fee, icon: "ticket" as const },
    { label: "Last date", value: site.deadline, icon: "hourglass" as const },
    { label: "Event date", value: site.date, icon: "calendar" as const },
  ];

  return (
    <section id="register" className="band section relative">
      <div className="wrap">
        <Reveal className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white px-6 py-14 text-center shadow-[var(--shadow-lift)] sm:px-12 md:py-20">
          <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 -z-10 h-full w-full" aria-hidden="true">
            <Wash d="M-40,120 C-20,20 120,-20 220,30 C300,70 260,180 170,200 C70,222 -60,210 -40,120 Z" fill={C.lav} opacity={0.22} />
            <Wash d="M640,420 C660,340 760,320 820,360 C880,400 860,500 780,510 C700,520 626,480 640,420 Z" fill={C.sage} opacity={0.25} />
            <Wash d="M700,60 C720,20 780,20 790,60 C800,100 750,120 724,104 C700,90 692,76 700,60 Z" fill={C.gold} opacity={0.3} />
          </svg>

          <AnimatePresence mode="wait">
            {!registered ? (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
                <span className="eyebrow">Registration</span>
                <h2 className="mx-auto mt-4 max-w-xl text-4xl leading-tight font-medium text-ink md:text-5xl">
                  We would love to <em className="text-lavender-deep">see you there</em>
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
                  Join psychologists, counsellors, researchers and students for a morning of thoughtful conversation.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-mist px-4 py-1.5 text-sm font-medium text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {closed ? "Registrations have closed" : "Limited Seats Available"}
                </span>

                <dl className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                  {details.map((d) => (
                    <div key={d.label} className="rounded-2xl border border-line bg-ivory px-5 py-6">
                      <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-lavender-mist text-lavender-deep">
                        <LineIcon name={d.icon} />
                      </span>
                      <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">{d.label}</dt>
                      <dd className="mt-1 font-display text-2xl text-ink">{d.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10 flex flex-col items-center gap-4">
                  {closed ? (
                    <p className="text-muted">Registration closed on {site.deadline}. Thank you for your interest.</p>
                  ) : (
                    <a href={site.googleFormUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-8 !py-4 text-base">
                      Register Through Google Form <LineIcon name="external" className="h-4 w-4" />
                    </a>
                  )}
                  <p className="text-sm text-muted">The form opens in a new tab. Come back here when you are done.</p>
                  <button type="button" onClick={confirm} className="btn-secondary">
                    <LineIcon name="check" className="h-4 w-4" /> I Have Registered
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                role="status"
                aria-live="polite"
              >
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-lavender to-lavender-deep text-white shadow-[var(--shadow-lift)]"
                >
                  <LineIcon name="check" className="h-9 w-9" />
                </motion.span>
                <h2 className="mt-6 text-4xl font-medium text-ink md:text-5xl">Registration Successful</h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
                  Thank you for registering for PSYVERSE 2026.
                  <br />
                  We look forward to welcoming you to a meaningful discussion on the future of therapy, mental health, and technology.
                </p>
                <div className="mx-auto mt-10 grid max-w-lg gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-line bg-ivory px-5 py-6">
                    <p className="font-display text-2xl text-ink">{site.date}</p>
                    <p className="mt-1 text-muted">{site.time}</p>
                  </div>
                  <div className="rounded-2xl border border-line bg-ivory px-5 py-6">
                    <p className="font-display text-2xl text-ink">{site.venue.room}</p>
                    <p className="mt-1 text-muted">{site.venue.institute}</p>
                  </div>
                </div>
                <button type="button" onClick={undo} className="mt-8 text-sm text-muted underline decoration-line underline-offset-4 hover:text-ink">
                  Not registered yet? Go back to the form
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

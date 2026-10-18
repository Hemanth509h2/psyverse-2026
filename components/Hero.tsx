import { site } from "@/lib/site";
import { Countdown } from "./Countdown";
import { PaperLayers } from "./Decor";
import { C, Wash } from "./illustrations/base";
import { PanelCoverScene } from "./illustrations/panel";
import { LineIcon } from "./illustrations/icons";
import { Parallax } from "./Parallax";
import { Reveal } from "./Reveal";

const chips = [
  { icon: "calendar" as const, title: site.date, sub: site.time },
  { icon: "pin" as const, title: `${site.venue.room}, ${site.venue.institute}`, sub: site.venue.city },
  { icon: "people" as const, title: "Experts, Researchers & Innovators", sub: "" },
];

// Matches the arch drawn in the illustration, so the paper layers line up with it.
const archBox = "absolute top-[4.4%] right-[5%] bottom-[3%] left-[5%]";
const archRadius = "50% 50% 0 0 / 43% 43% 0 0";

/** Line drawing of a head in profile with a looping brain, for the theme card. */
function MindProfile({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} fill="none" aria-hidden="true">
      <circle cx="150" cy="120" r="105" fill="#e9dff7" />
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M150,240 C150,205 158,188 170,166 C192,130 190,70 150,42 C120,20 72,22 52,52 C40,70 42,86 40,96 L24,121 C21,125 25,128 31,129 L33,139 C29,143 31,147 35,148 L35,156 C35,166 41,171 53,171 C65,171 73,174 75,188 L77,240" />
        <path d="M96,96 C86,76 106,58 121,68 C131,50 162,62 153,83 C169,93 161,119 141,113 C136,129 110,127 108,111 C90,116 85,101 96,96 Z" />
        <path d="M114,82 C122,75 133,83 127,92 C121,99 111,93 116,87" />
        <path d="M134,98 C143,96 147,107 139,110" />
        <path d="M128,118 C126,135 122,148 112,160" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <PaperLayers className="absolute right-0 bottom-0 left-0 -z-10 h-40 w-full md:h-56" />

      <div className="wrap grid items-center gap-12 pt-8 pb-24 sm:pb-32 md:pt-10 lg:grid-cols-[1.12fr_1fr] lg:gap-14 lg:pb-40">
        {/* left: what the event is, the theme, and how to register */}
        <div className="flex min-w-0 flex-col">
          <Reveal immediate>
            <p className="text-xs font-semibold tracking-[0.24em] text-purple uppercase sm:text-sm">A Professional Psychology Conclave</p>
            <h1 className="mt-4 flex flex-col font-display">
              <span className="text-[clamp(3.9rem,9vw,7.5rem)] leading-[0.95] font-black tracking-[-0.01em] text-ink">PSYVERSE</span>
              <span className="text-[clamp(3.4rem,7.6vw,6.25rem)] leading-[1] font-bold text-purple italic">2026</span>
            </h1>
            <span className="mt-5 block h-[3px] w-16 rounded-full bg-purple" aria-hidden="true" />
          </Reveal>

          <Reveal immediate delay={0.08} className="mt-7">
            <p className="font-display text-[clamp(2rem,3vw,2.6rem)] leading-[1.1] font-semibold text-ink">{site.tagline}</p>
            <p className="mt-3 text-xl leading-snug text-[#5b6070] md:text-[1.4rem]">Exploring the Future of Mental Healthcare</p>
          </Reveal>

          {/* date, venue and audience */}
          <Reveal immediate delay={0.12} className="mt-8">
            <ul className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {chips.map((c) => (
                <li
                  key={c.icon}
                  className="flex flex-col items-start gap-2 rounded-2xl border border-purple-mist bg-white/80 px-3 py-3.5 shadow-[var(--shadow-paper)] sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-4"
                >
                  <LineIcon name={c.icon} className="h-6 w-6 shrink-0 text-purple sm:h-7 sm:w-7" />
                  <span className="min-w-0 text-[0.8rem] leading-snug sm:text-sm">
                    <span className="block font-semibold text-ink">{c.title}</span>
                    {c.sub && <span className="block text-muted">{c.sub}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* the theme */}
          <Reveal immediate delay={0.16} className="mt-5">
            <figure className="relative isolate overflow-hidden rounded-[2rem] bg-purple-mist px-7 py-9 md:px-11 md:py-11">
              <MindProfile className="pointer-events-none absolute -right-6 bottom-0 -z-10 h-[88%] w-auto text-purple/80 sm:right-0" />
              <figcaption className="text-xs font-semibold tracking-[0.24em] text-purple uppercase">The conclave theme</figcaption>
              <blockquote className="mt-4 font-display leading-[1.1]">
                <span className="block text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold text-ink">{site.theme.lead}</span>
                {site.theme.lines.map((l, i) => (
                  <span
                    key={l}
                    className={`block text-[clamp(1.6rem,2.4vw,2.2rem)] ${i === 2 ? "mt-1 font-bold text-purple italic" : "text-ink/70"}`}
                  >
                    {l}
                  </span>
                ))}
              </blockquote>
            </figure>
          </Reveal>

          {/* register */}
          <Reveal immediate delay={0.2} className="mt-8 flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
            <a
              href="#register"
              className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#7b4fc4_0%,#5e35a8_100%)] px-9 py-[1.1rem] text-lg font-semibold text-white shadow-[0_16px_32px_-14px_rgb(94_53_168_/_0.75)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              Reserve Your Seat <LineIcon name="arrow" className="h-5 w-5" />
            </a>
            <span className="text-[0.95rem] text-muted">
              {site.fee} · Registration closes on <span className="font-medium text-ink">{site.deadline}</span>
            </span>
          </Reveal>

          <Reveal immediate delay={0.24} className="mt-8">
            <Countdown />
          </Reveal>
        </div>

        {/* right: the illustration in layered paper */}
        <Reveal immediate delay={0.12} className="relative min-w-0">
          <div className="relative mx-auto w-full max-w-[640px]">
            {/* background blob */}
            <svg viewBox="0 0 600 600" className="pointer-events-none absolute -inset-[8%] -z-10 h-[116%] w-[116%]" aria-hidden="true">
              <Wash d="M70,300 C40,150 170,40 320,50 C470,60 570,170 550,320 C530,470 410,560 280,550 C140,540 95,430 70,300 Z" fill={C.lav} opacity={0.22} />
              <Wash d="M380,470 C420,420 520,430 540,490 C560,550 480,590 430,570 C380,550 350,510 380,470 Z" fill={C.teal} opacity={0.1} />
            </svg>

            <Parallax distance={18}>
              <div className="relative">
                <div className={`${archBox} translate-x-7 translate-y-7 bg-teal-mist shadow-[var(--shadow-paper)]`} style={{ borderRadius: archRadius }} aria-hidden="true" />
                <div className={`${archBox} translate-x-3.5 translate-y-3.5 bg-lavender-mist shadow-[var(--shadow-paper)]`} style={{ borderRadius: archRadius }} aria-hidden="true" />
                <div className={`${archBox} shadow-[var(--shadow-lift)]`} style={{ borderRadius: archRadius }} aria-hidden="true" />
                <PanelCoverScene className="relative h-auto w-full" />
              </div>
            </Parallax>

            {/* floating foreground paper shapes */}
            <svg viewBox="0 0 120 120" className="float-slow pointer-events-none absolute -top-2 -right-4 h-24 w-24" aria-hidden="true">
              <path d="M60,10 C90,30 96,80 60,110 C24,80 30,30 60,10 Z" fill={C.lavMist} filter="url(#paper)" />
              <path d="M60,22 C60,50 60,80 60,104" stroke={C.lav} strokeWidth="1.5" fill="none" />
            </svg>
            <svg viewBox="0 0 120 120" className="float-slower pointer-events-none absolute top-[42%] -left-8 h-20 w-20" aria-hidden="true">
              <path d="M20,70 C30,30 80,20 104,40 C90,80 50,96 20,70 Z" fill={C.sageMist} filter="url(#paper)" />
              <path d="M28,68 C50,56 74,46 98,42" stroke={C.sage} strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

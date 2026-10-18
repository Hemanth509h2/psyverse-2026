import { site } from "@/lib/site";
import { Countdown } from "./Countdown";
import { PaperLayers } from "./Decor";
import { C, Wash } from "./illustrations/base";
import { PanelCoverScene } from "./illustrations/panel";
import { LineIcon } from "./illustrations/icons";
import { Parallax } from "./Parallax";
import { Reveal } from "./Reveal";

// Matches the arch drawn in the illustration, so the paper layers line up with it.
const archBox = "absolute top-[4.4%] right-[5%] bottom-[3%] left-[5%]";
const archRadius = "50% 50% 0 0 / 43% 43% 0 0";

/* Solid purple icons for the three info chips */
function CalendarIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 text-purple ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <g fill="currentColor" stroke="none">
        <circle cx="8" cy="14" r="1.2" />
        <circle cx="12" cy="14" r="1.2" />
        <circle cx="16" cy="14" r="1.2" />
        <circle cx="8" cy="17.6" r="1.2" />
        <circle cx="12" cy="17.6" r="1.2" />
      </g>
    </svg>
  );
}

function PinIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 text-purple ${className}`} aria-hidden="true">
      <path d="M12 22.5s-7.5-6.6-7.5-12.4a7.5 7.5 0 0 1 15 0c0 5.8-7.5 12.4-7.5 12.4z" fill="currentColor" />
      <circle cx="12" cy="10" r="2.8" fill="#fff" />
    </svg>
  );
}

function PeopleIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 text-purple ${className}`} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="7.6" r="3.2" />
      <path d="M5.6 19.5c0-3.7 2.9-6.4 6.4-6.4s6.4 2.7 6.4 6.4z" />
      <circle cx="5" cy="9.4" r="2.4" />
      <path d="M0.6 18.6c0-2.8 1.9-4.7 4.3-4.7 1 0 1.9.3 2.6.9-1.4 1.1-2.3 2.3-2.6 3.8z" />
      <circle cx="19" cy="9.4" r="2.4" />
      <path d="M23.4 18.6c0-2.8-1.9-4.7-4.3-4.7-1 0-1.9.3-2.6.9 1.4 1.1 2.3 2.3 2.6 3.8z" />
    </svg>
  );
}

/** Line drawing of a head in profile with a looping brain, for the theme card. */
function MindProfile({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 138 188" className={className} fill="none" aria-hidden="true">
      <circle cx="95" cy="90" r="95" fill="#ebe2f7" opacity="0.75" />
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M53,188 C47,172 36,162 25,157 C19,154 15,152 16,149 L14,142 L9,137 L11,132 L8,128 L11,123 L3.5,114 L12,97 C13,80 17,66 25,55 C36,40 50,33 65,31 C92,28 115,42 120,65 C125,88 122,115 122,140 C122,160 128,172 136,182" />
        <path d="M45,80 C40,62 55,50 72,52 C90,54 100,62 104,74 C108,88 98,100 84,98 C74,97 70,88 77,84 C84,80 90,88 85,93" />
        <path d="M60,70 C62,62 72,60 75,66 C78,72 70,76 66,72" />
        <path d="M88,66 C94,64 98,70 94,74" />
        <path d="M60,88 C56,96 62,104 70,100" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <PaperLayers className="absolute right-0 bottom-0 left-0 -z-10 h-40 w-full md:h-56" />

      <div className="wrap grid items-center gap-12 pt-5 pb-24 sm:pt-8 sm:pb-32 md:pt-10 lg:grid-cols-[1.12fr_1fr] lg:gap-14 lg:pb-40">
        {/* left: what the event is, the theme, and how to register */}
        <div className="flex min-w-0 flex-col">
          <Reveal immediate className="px-3 sm:px-0">
            <p className="text-[0.56rem] font-semibold tracking-[0.28em] text-purple uppercase sm:text-xs">A Professional Psychology Conclave</p>
            <h1 className="mt-1 flex flex-col font-display sm:mt-4">
              <span className="text-[clamp(2.6rem,13.9vw,7.5rem)] leading-[0.98] font-black tracking-[-0.01em] text-navy">PSYVERSE</span>
              <span className="text-[clamp(2.6rem,13.9vw,7.5rem)] leading-[0.95] font-extrabold text-purple italic">2026</span>
            </h1>
            <span className="mt-4 block h-[3px] w-11 rounded-full bg-purple" aria-hidden="true" />
          </Reveal>

          <Reveal immediate delay={0.08} className="mt-4 px-3 sm:mt-6 sm:px-0">
            <p className="max-w-[10em] font-display text-[clamp(1.2rem,5.9vw,2.6rem)] leading-[1.08] font-semibold text-navy">{site.tagline}</p>
            <p className="mt-1.5 max-w-[12.5em] text-[clamp(0.8rem,3.65vw,1.4rem)] leading-[1.22] text-[#5b6070]">Exploring the Future of Mental Healthcare</p>
          </Reveal>

          {/* date, venue and audience */}
          <Reveal immediate delay={0.12} className="mt-5">
            <ul className="grid grid-cols-3 gap-[1.7vw] sm:gap-3">
              <li className="flex items-center rounded-[0.9rem] border border-[#efe8f7] bg-[#fbf9fd] py-[3.2vw] pr-[0.8vw] shadow-[0_6px_16px_-10px_rgb(106_54_180_/_0.18)] sm:gap-3 sm:py-3.5 sm:pr-2 sm:pl-4 gap-[3vw] pl-[3.9vw]">
                <CalendarIcon className="h-[4.6vw] w-[4.6vw] sm:h-6 sm:w-6" />
                <span className="min-w-0 leading-snug whitespace-nowrap">
                  <span className="block text-[2.75vw] text-navy sm:text-[0.95rem]">24 October</span>
                  <span className="block text-[2.3vw] text-[#5b6070] sm:text-[0.85rem]">{site.time.replace(":00 PM", " PM")}</span>
                </span>
              </li>
              <li className="flex items-center rounded-[0.9rem] border border-[#efe8f7] bg-[#fbf9fd] py-[3.2vw] pr-[0.8vw] shadow-[0_6px_16px_-10px_rgb(106_54_180_/_0.18)] sm:gap-3 sm:py-3.5 sm:pr-2 sm:pl-4 gap-[2vw] pl-[3.4vw]">
                <PinIcon className="h-[5.2vw] w-[5.2vw] sm:h-6 sm:w-6" />
                <span className="min-w-0 text-[1.95vw] leading-snug whitespace-nowrap sm:text-[0.85rem]">
                  <span className="block font-semibold text-navy">{site.venue.city}, India</span>
                  <span className="block text-[#5b6070]">
                    {site.venue.room.replace(" Auditorium", "")}, {site.venue.institute}
                  </span>
                </span>
              </li>
              <li className="flex items-center rounded-[0.9rem] border border-[#efe8f7] bg-[#fbf9fd] py-[3.2vw] pr-[0.8vw] shadow-[0_6px_16px_-10px_rgb(106_54_180_/_0.18)] sm:gap-3 sm:py-3.5 sm:pr-2 sm:pl-4 gap-[1.8vw] pl-[2.2vw]">
                <PeopleIcon className="h-[5.6vw] w-[5.6vw] sm:h-7 sm:w-7" />
                <span className="min-w-0 text-[1.78vw] leading-snug whitespace-nowrap text-navy sm:text-[0.85rem] sm:whitespace-normal">
                  Experts, Researchers
                  <br className="sm:hidden" /> &amp; Innovators
                </span>
              </li>
            </ul>
          </Reveal>

          {/* the theme */}
          <Reveal immediate delay={0.16} className="mt-4">
            <figure className="relative isolate overflow-hidden rounded-[1.25rem] bg-[linear-gradient(100deg,#f6f1fc_0%,#f1e9fa_100%)] px-[5.3vw] py-[4.4vw] sm:px-6 sm:py-5 md:rounded-[1.75rem] md:p-10">
              <MindProfile className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[91%] w-auto text-[#7a4cc0]" />
              <figcaption className="text-[0.56rem] font-semibold tracking-[0.28em] text-purple uppercase sm:text-xs">The conclave theme</figcaption>
              <blockquote className="mt-3 font-display">
                <span className="block max-w-[7.4em] text-[clamp(1.35rem,7vw,2.9rem)] leading-[1.02] font-bold text-navy">{site.theme.lead}</span>
                {site.theme.lines.map((l, i) => (
                  <span
                    key={l}
                    className={`block text-[clamp(0.95rem,4.8vw,2.2rem)] leading-[1.08] ${i === 2 ? "font-bold text-purple italic" : "text-[#55586a]"} ${i === 0 ? "mt-1" : ""}`}
                  >
                    {l}
                  </span>
                ))}
              </blockquote>
            </figure>
          </Reveal>

          {/* register */}
          <Reveal immediate delay={0.2} className="mt-4 flex flex-col items-center gap-2.5 text-center sm:mt-6 lg:items-start lg:text-left">
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-3.5 rounded-full bg-[linear-gradient(135deg,#7a45c5_0%,#5b2fa5_100%)] px-[2.6rem] py-2.5 text-[1rem] font-semibold text-white shadow-[0_14px_28px_-12px_rgb(91_47_165_/_0.7)] transition-transform duration-200 hover:-translate-y-0.5 sm:px-12 sm:py-3.5 sm:text-lg"
            >
              Reserve Your Seat <LineIcon name="arrow" className="h-5 w-5" />
            </a>
            <span className="text-[clamp(0.72rem,2.65vw,0.95rem)] text-[#5b6070]">
              Registration closes on <span className="text-navy">{site.deadline}</span>
            </span>
          </Reveal>

          <Reveal immediate delay={0.24} className="mt-4 sm:mt-6">
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

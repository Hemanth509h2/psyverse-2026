import { site } from "@/lib/site";
import { Countdown } from "./Countdown";
import { PaperLayers } from "./Decor";
import { LineIcon } from "./illustrations/icons";
import { Reveal } from "./Reveal";

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

/** The purple call to action with the closing date under it. */
function ReserveButton() {
  return (
    <>
      <a
        href="#register"
        className="inline-flex items-center justify-center gap-3.5 rounded-full bg-[linear-gradient(135deg,#7a45c5_0%,#5b2fa5_100%)] px-[2.6rem] py-2.5 text-[1rem] font-semibold text-white shadow-[0_14px_28px_-12px_rgb(91_47_165_/_0.7)] transition-transform duration-200 hover:-translate-y-0.5 sm:px-12 sm:py-3.5 sm:text-lg"
      >
        Reserve Your Seat <LineIcon name="arrow" className="h-5 w-5" />
      </a>
      <span className="text-[clamp(0.72rem,2.65vw,0.95rem)] text-[#5b6070]">
        Registration closes on <span className="text-navy">{site.deadline}</span>
      </span>
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <PaperLayers className="absolute right-0 bottom-0 left-0 -z-10 h-40 w-full md:h-56" />

      <div className="wrap grid pt-5 pb-24 sm:pt-8 sm:pb-32 md:pt-10 lg:grid-cols-[1.12fr_1fr] lg:gap-x-14 lg:pb-40">
        {/* top left: what the event is */}
        <div className="flex min-w-0 flex-col lg:col-start-1 lg:row-start-1">
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
                  <span className="block text-[2.75vw] text-navy sm:text-[0.95rem]">28 October</span>
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
        </div>

        {/* the theme: under the chips on phones; beside the title on laptops, with the countdown under it */}
        <Reveal immediate delay={0.16} className="relative mt-4 min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center">
          <figure className="relative isolate overflow-hidden rounded-[1.25rem] bg-[linear-gradient(100deg,#f6f1fc_0%,#f1e9fa_100%)] px-[5.3vw] py-[4.4vw] sm:px-6 sm:py-5 md:rounded-[1.75rem] md:p-10 lg:rounded-[2rem] lg:px-10 lg:py-9 lg:shadow-[var(--shadow-lift)]">
            <figcaption className="text-[0.56rem] font-semibold tracking-[0.28em] text-purple uppercase sm:text-xs">The conclave theme</figcaption>
            <blockquote className="mt-3 font-display">
              <span className="block text-[clamp(1.35rem,7vw,2.9rem)] leading-[1.02] font-bold text-navy lg:text-[2.35rem]">{site.theme.lead}</span>
              {/* "What Has Changed, What Hasn't," share a line; the question sits under them */}
              <span className="mt-1 block text-[clamp(0.95rem,4.8vw,2.2rem)] leading-[1.08] text-[#55586a] lg:mt-2 lg:text-[1.6rem]">
                {site.theme.lines.slice(0, -1).join(" ")}
              </span>
              <span className="block text-[clamp(0.95rem,4.8vw,2.2rem)] leading-[1.08] font-bold text-purple italic lg:text-[1.6rem]">
                {site.theme.lines.at(-1)}
              </span>
            </blockquote>
          </figure>
          <div className="mt-6 hidden lg:block">
            <Countdown />
          </div>
        </Reveal>

        {/* register under the chips, then the countdown on phones */}
        <Reveal immediate delay={0.2} className="mt-4 flex flex-col items-center gap-2.5 text-center sm:mt-6 lg:col-start-1 lg:row-start-2 lg:mt-10 lg:items-start lg:self-center lg:text-left">
          <ReserveButton />
        </Reveal>
        <Reveal immediate delay={0.24} className="mt-4 min-w-0 sm:mt-6 lg:hidden">
          <Countdown />
        </Reveal>
      </div>
    </section>
  );
}

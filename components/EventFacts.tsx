import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

/** The credibility strip under the hero. */
export function EventFacts() {
  return (
    <section aria-label="PSYVERSE in numbers" className="relative -mt-16 md:-mt-24">
      <div className="wrap">
        <Reveal immediate>
          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {site.stats.map((s) => (
              <li
                key={s.label}
                className="relative flex flex-col items-center gap-2 rounded-3xl border border-line/70 bg-white px-3 py-6 text-center sm:px-6 sm:py-10 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="font-display text-4xl leading-none font-medium text-lavender-deep sm:text-5xl md:text-6xl">{s.value}</span>
                <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.12em] text-ink uppercase sm:mt-2 sm:text-xs sm:tracking-[0.16em]">{s.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

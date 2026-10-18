import Image from "next/image";
import { LotusMark } from "./Decor";
import { Reveal } from "./Reveal";

export function Organizer() {
  return (
    <section id="organizer" className="pt-8 pb-28 md:pb-36" aria-labelledby="organizer-h">
      <div className="wrap">
        <Reveal className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-beige px-8 py-14 shadow-[var(--shadow-soft)] ring-1 ring-lavender/40 md:px-16 md:py-16">
          <LotusMark className="absolute -top-20 -right-20 -z-10 h-80 w-80 opacity-[0.08]" />
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:gap-14 md:text-left">
            <div className="shrink-0 rounded-full bg-ivory p-3 shadow-[var(--shadow-soft)] ring-1 ring-lavender/50">
              <Image src="/staad-logo.png" alt="STAAD logo" width={176} height={176} className="h-40 w-40 md:h-44 md:w-44" />
            </div>
            <div className="flex flex-col gap-3">
              <span className="eyebrow" id="organizer-h">Organized By</span>
              <h2 className="text-5xl font-medium tracking-wide text-ink">STAAD</h2>
              <p className="font-display text-xl text-ink/80 italic">Smart Therapy &amp; AI-Assisted Digital Platform</p>
              <span className="my-1 h-px w-16 self-center bg-lavender md:self-start" aria-hidden="true" />
              <p className="text-sm font-medium tracking-[0.14em] text-teal uppercase">By Tecchash Pvt Ltd</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

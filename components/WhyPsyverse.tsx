import { LotusMark, OrganicBackdrop } from "./Decor";
import { Reveal } from "./Reveal";

export function WhyPsyverse() {
  return (
    <section id="why" className="band section relative isolate overflow-hidden">
      <OrganicBackdrop variant="b" />
      <LotusMark className="absolute -right-24 -bottom-24 -z-10 h-[28rem] w-[28rem] opacity-[0.07]" />
      <div className="wrap mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
        <Reveal>
          <span className="eyebrow">Why PSYVERSE?</span>
          <h2 className="mt-4 text-4xl leading-[1.1] font-medium text-ink md:text-5xl">
            Why this conversation <em className="text-lavender-deep">matters</em>
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col gap-5 text-lg leading-relaxed text-muted">
          <p>
            Therapy continues to evolve through digital tools, changing client expectations and new technologies. Sessions happen on
            screens as well as in rooms, and support can reach people who could never reach it before.
          </p>
          <p>
            Yet <span className="font-medium text-ink">human connection remains at the heart of psychological practice.</span> Trust,
            empathy and careful listening are still what help people heal.
          </p>
          <p>PSYVERSE brings practitioners together to explore how professionals can balance innovation with empathy.</p>
        </Reveal>
        <Reveal delay={0.14} className="flex flex-wrap justify-center gap-3 pt-2">
          {["Innovation", "Empathy", "Balance"].map((w) => (
            <span key={w} className="rounded-full border border-lavender/60 bg-white/70 px-5 py-2 font-display text-ink italic">
              {w}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

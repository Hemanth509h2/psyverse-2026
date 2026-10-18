import { site } from "@/lib/site";
import { LotusMark, PaperLayers } from "./Decor";
import { Reveal } from "./Reveal";

export function Quote() {
  return (
    <section className="relative isolate overflow-hidden bg-beige py-32 md:py-44" aria-label="Featured quote">
      {/* cut-paper layers at top and bottom edges give the band depth */}
      <PaperLayers className="absolute top-0 left-0 -z-10 h-28 w-full rotate-180 md:h-40" />
      <PaperLayers tone="teal" className="absolute bottom-0 left-0 -z-10 h-28 w-full md:h-40" />
      <LotusMark className="absolute top-1/2 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />
      <Reveal className="wrap flex flex-col items-center text-center">
        <span className="font-display text-8xl leading-none text-lavender" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="-mt-6 max-w-4xl font-display text-3xl leading-[1.3] text-ink italic md:text-5xl md:leading-[1.25]">
          {site.quote}
        </blockquote>
        <span className="mt-10 h-px w-20 bg-gold" aria-hidden="true" />
        <p className="eyebrow mt-5">PSYVERSE 2026</p>
      </Reveal>
    </section>
  );
}

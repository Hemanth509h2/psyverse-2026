import { LotusMark } from "./Decor";
import { Parallax } from "./Parallax";
import { Reveal } from "./Reveal";
import { CircleOfConversation } from "./illustrations/circle";
import { StageFuture, StageTechAssisted, StageTraditional } from "./illustrations/scenes";

const arc = [
  { when: "Past", question: "What has changed", note: "From long sessions in the consulting room to many new ways of reaching care.", Art: StageTraditional, ring: "ring-gold/70" },
  { when: "Present", question: "What hasn’t", note: "Trust, empathy and careful listening remain at the heart of the work.", Art: StageTechAssisted, ring: "ring-lavender" },
  { when: "Future", question: "What comes next", note: "How expertise, human connection and technology can grow together.", Art: StageFuture, ring: "ring-teal/70" },
];

const topics = [
  { title: "Evolution of Therapy", text: "How practice has grown, and what that growth has taught us." },
  { title: "Human Connection in Practice", text: "The relationship that sits beneath every effective therapy." },
  { title: "Online Therapy", text: "What changes, and what stays the same, on a screen." },
  { title: "Technology in Mental Healthcare", text: "Tools that support practitioners and the people they help." },
  { title: "Ethical Considerations", text: "Privacy, consent and boundaries in technology-enabled care." },
  { title: "Future of Therapeutic Services", text: "How care could be organised and delivered in the years ahead." },
];

function Arrow() {
  return (
    <svg viewBox="0 0 80 20" className="hidden h-5 w-16 shrink-0 md:block" aria-hidden="true">
      <path d="M2,10 C24,4 52,16 74,10" fill="none" stroke="#D4B483" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M66,5 L75,10 L67,15" fill="none" stroke="#D4B483" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Conversation() {
  return (
    <section id="conversation" className="section relative isolate overflow-hidden" aria-labelledby="conversation-h">
      <LotusMark className="absolute -top-24 -left-24 -z-10 h-[30rem] w-[30rem] opacity-[0.04]" />

      <div className="wrap">
        {/* heading and central statement */}
        <Reveal className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="eyebrow">The purpose of the conclave</span>
          <h2 id="conversation-h" className="mt-5 text-4xl leading-[1.1] font-medium text-ink md:text-5xl">
            The Conversation <em className="text-lavender-deep">We Are Having</em>
          </h2>
          <span className="mt-6 h-px w-16 bg-gold" aria-hidden="true" />
          <p className="mt-10 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.35] text-ink">
            From traditional consulting rooms to digital mental-health support, therapy continues to evolve. At PSYVERSE 2026, professionals will
            explore <span className="text-lavender-deep italic">what has changed</span>, <span className="text-lavender-deep italic">what has remained constant</span>, and{" "}
            <span className="text-teal-dark italic">what the future may hold</span>.
          </p>
        </Reveal>

        {/* past, present, future */}
        <ol className="mx-auto mt-20 grid max-w-5xl gap-12 md:mt-24 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-start md:gap-4">
          {arc.flatMap((a, i) => {
            const item = (
              <Reveal as="li" key={a.when} delay={i * 0.15} className="flex flex-col items-center text-center">
                <span className={`flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[var(--shadow-soft)] ring-2 ring-offset-4 ring-offset-ivory ${a.ring}`}>
                  <span className="block h-20 w-24">
                    <a.Art />
                  </span>
                </span>
                <span className={`mt-6 text-xs font-semibold tracking-[0.2em] uppercase ${i === 2 ? "text-teal-dark" : "text-lavender-deep"}`}>{a.when}</span>
                <h3 className="mt-2 text-2xl font-medium text-ink">{a.question}</h3>
                <p className="mt-2 max-w-[17rem] leading-relaxed text-muted">{a.note}</p>
              </Reveal>
            );
            if (i === arc.length - 1) return [item];
            return [
              item,
              <li key={`arrow-${i}`} className="hidden pt-12 md:block" aria-hidden="true">
                <Arrow />
              </li>,
            ];
          })}
        </ol>

        {/* one illustration beside the discussion topics */}
        <div className="mt-24 grid items-center gap-14 md:mt-32 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <Parallax distance={18}>
              <CircleOfConversation className="mx-auto h-auto w-full max-w-[640px]" />
            </Parallax>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">Key discussion topics</span>
              <h3 className="mt-4 text-3xl leading-tight font-medium text-ink md:text-4xl">
                What the panel <em className="text-lavender-deep">will explore</em>
              </h3>
            </Reveal>
            <ul className="mt-10 border-t border-line">
              {topics.map((t, i) => (
                <Reveal as="li" key={t.title} delay={i * 0.06} className="group flex items-start gap-5 border-b border-line py-5">
                  <span
                    className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-500 group-hover:scale-150 ${
                      i % 3 === 0 ? "bg-lavender" : i % 3 === 1 ? "bg-gold" : "bg-teal/70"
                    }`}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-lavender-deep md:text-[1.4rem]">{t.title}</p>
                    <p className="mt-1 text-[0.95rem] text-muted">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  IconCertificate,
  IconExpert,
  IconFuture,
  IconGrowth,
  IconNetwork,
  IconPanel,
  IconQA,
  IconTechMind,
} from "./illustrations/icons";

const items = [
  { title: "Panel Discussion", text: "A moderated conversation between four senior professionals.", Icon: IconPanel, tone: "lav" as const },
  { title: "Expert Psychologists", text: "Experienced practitioners share what they have seen change.", Icon: IconExpert, tone: "gold" as const },
  { title: "Interactive Q&A", text: "Ask from the floor or drop your question in the box.", Icon: IconQA, tone: "sage" as const },
  { title: "Future of Therapy", text: "Where care is heading, and what it must protect.", Icon: IconFuture, tone: "gold" as const },
  { title: "Networking", text: "Meet practitioners, researchers and fellow students.", Icon: IconNetwork, tone: "lav" as const },
  { title: "Technology & Mental Health", text: "A thoughtful look at digital tools in practice.", Icon: IconTechMind, tone: "sage" as const },
  { title: "Certificates", text: "A certificate of participation for every attendee.", Icon: IconCertificate, tone: "lav" as const },
  { title: "Professional Development", text: "Ideas and contacts that support your growth.", Icon: IconGrowth, tone: "sage" as const },
];

export function Highlights() {
  return (
    <section id="highlights" className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="Event highlights"
          title={<>A morning of <em className="text-lavender-deep">meaningful exchange</em></>}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, text, Icon, tone }, i) => (
            <Reveal as="li" key={title} delay={(i % 4) * 0.08} className="card group flex flex-col gap-4 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
              <Icon tone={tone} className="h-16 w-16" />
              <h3 className="text-xl leading-snug font-medium text-ink">{title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

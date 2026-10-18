import Image from "next/image";
import { speakers, type Speaker } from "@/lib/site";
import { SpeakerPlaceholder } from "./illustrations/panel";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Portrait({ s, index, sizes }: { s: Speaker; index: number; sizes: string }) {
  if (s.photo) {
    return <Image src={s.photo} alt={`Portrait of ${s.name}`} fill sizes={sizes} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />;
  }
  return <SpeakerPlaceholder variant={index} />;
}

export function Speakers() {
  const panel = speakers.filter((s) => s.role === "Panellist");
  const moderator = speakers.find((s) => s.role === "Moderator");

  return (
    <section id="speakers" className="band section">
      <div className="wrap">
        <SectionHeading
          eyebrow="Speakers"
          title={<>Meet our <em className="text-lavender-deep">expert panel</em></>}
          intro="Senior psychologists and mental-health professionals, together in one open conversation. More panellists will be announced soon."
        />

        <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {panel.map((s, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className="group card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-beige">
                <Portrait s={s} index={i} sizes="(min-width: 1024px) 20rem, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 px-7 py-7">
                <h3 className="text-2xl leading-snug font-medium text-ink">{s.name}</h3>
                <p className="font-medium text-lavender-deep">{s.specialization}</p>
                <p className="text-sm text-muted">{s.organization}</p>
                {s.bio && <p className="mt-3 border-t border-line pt-4 text-sm leading-relaxed text-muted">{s.bio}</p>}
              </div>
            </Reveal>
          ))}
        </ul>

        {moderator && (
          <Reveal className="mt-8 flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-muted">
              <span className="eyebrow mr-3">Moderated by</span>
              <span className="font-display text-lg text-ink">{moderator.name}</span>
              {moderator.organization && <span> · {moderator.organization}</span>}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

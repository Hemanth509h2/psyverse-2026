import { OrganicBackdrop } from "./Decor";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhyProfessionals, WhyResearchers, WhyStudents } from "./illustrations/scenes";

const groups = [
  { who: "Students", points: ["Career exploration", "Networking", "Learning"], Art: WhyStudents },
  { who: "Professionals", points: ["Discussion", "Collaboration", "Knowledge exchange"], Art: WhyProfessionals },
  { who: "Researchers", points: ["Emerging insights", "Future trends", "Connections"], Art: WhyResearchers },
];

function Leaf() {
  return (
    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M2,14 C2,6 8,2 14,2 C14,8 10,14 2,14 Z" fill="#A8B5A2" />
      <path d="M2,14 L10,6" stroke="#FFFFFF" strokeWidth="1" />
    </svg>
  );
}

export function WhyAttend() {
  return (
    <section className="section relative isolate overflow-hidden">
      <OrganicBackdrop variant="a" />
      <div className="wrap">
        <SectionHeading
          eyebrow="Why attend"
          title={<>A place for everyone <em className="text-lavender-deep">who cares about the mind</em></>}
        />
        <div className="grid gap-8 md:grid-cols-3">
          {groups.map(({ who, points, Art }, i) => (
            <Reveal key={who} delay={i * 0.1} className="flex flex-col items-center text-center">
              <div className="w-full max-w-[18rem]">
                <Art />
              </div>
              <h3 className="mt-4 text-3xl font-medium text-ink">{who}</h3>
              <span className="my-4 h-px w-12 bg-gold" aria-hidden="true" />
              <ul className="flex flex-col gap-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-left text-muted">
                    <Leaf />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

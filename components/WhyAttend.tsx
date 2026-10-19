import { OrganicBackdrop } from "./Decor";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { who: "Students", points: ["Career exploration", "Networking", "Learning"] },
  { who: "Professionals", points: ["Discussion", "Collaboration", "Knowledge exchange"] },
  { who: "Researchers", points: ["Emerging insights", "Future trends", "Connections"] },
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
          {groups.map(({ who, points }, i) => (
            <Reveal key={who} delay={i * 0.1} className="card flex flex-col items-center px-8 py-10 text-center">
              <h3 className="text-3xl font-medium text-ink">{who}</h3>
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

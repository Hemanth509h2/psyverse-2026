import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, intro, align = "center" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={`mb-16 flex max-w-2xl flex-col gap-5 md:mb-24 ${centered ? "mx-auto items-center text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-4xl leading-[1.1] font-medium text-ink md:text-5xl">{title}</h2>
      {centered && <span className="h-px w-16 bg-gold" aria-hidden="true" />}
      {intro && <p className="text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}

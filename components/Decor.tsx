import { BrainArt, C, Wash } from "./illustrations/base";

/** Large, faint watercolour washes that drift very slowly behind a section. */
export function OrganicBackdrop({ variant = "a", className = "" }: { variant?: "a" | "b" | "c"; className?: string }) {
  const sets = {
    a: [
      { d: "M60,220 C30,120 140,40 260,60 C380,80 420,200 360,280 C300,360 120,360 60,220 Z", fill: C.lav, o: 0.1 },
      { d: "M1000,120 C1060,70 1160,100 1170,180 C1180,260 1100,300 1040,270 C980,240 950,160 1000,120 Z", fill: C.sage, o: 0.1 },
    ],
    b: [
      { d: "M900,300 C860,200 960,120 1060,140 C1160,160 1190,260 1140,330 C1090,400 940,400 900,300 Z", fill: C.lav, o: 0.09 },
      { d: "M40,80 C80,30 170,40 190,110 C210,180 140,220 90,200 C40,180 10,130 40,80 Z", fill: C.gold, o: 0.1 },
    ],
    c: [
      { d: "M80,260 C40,170 130,90 230,110 C330,130 360,230 310,300 C260,370 120,350 80,260 Z", fill: C.sage, o: 0.1 },
      { d: "M960,80 C1010,40 1110,60 1130,130 C1150,200 1080,240 1020,220 C960,200 920,120 960,80 Z", fill: C.lav, o: 0.1 },
    ],
  };
  return (
    <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`} aria-hidden="true">
      {sets[variant].map((s, i) => (
        <g key={i} className={i % 2 ? "float-slower" : "float-slow"} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <Wash d={s.d} fill={s.fill} opacity={s.o} />
        </g>
      ))}
    </svg>
  );
}

/** A faint lotus outline, used as a watermark. */
export function LotusMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-120 -120 240 240" className={`pointer-events-none ${className}`} aria-hidden="true">
      <g fill="none" stroke={C.lavDeep} strokeWidth="1" filter="url(#hand)">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={i} d="M0,-16 C-20,-36 -20,-80 0,-104 C20,-80 20,-36 0,-16 Z" transform={`rotate(${i * 45})`} />
        ))}
        <circle r="14" />
        <circle r="112" strokeDasharray="1 5" />
      </g>
    </svg>
  );
}

/** Brain line art, leaves and lotus marks scattered very faintly across a section. */
export function BrainPattern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`} aria-hidden="true">
      <g opacity="0.045">
        <BrainArt x={110} y={150} scale={0.9} wash={false} />
        <BrainArt x={1110} y={660} scale={1.1} wash={false} />
      </g>
      <g opacity="0.04" fill="none" stroke={C.lavDeep} strokeWidth="1" filter="url(#hand)">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={i} d="M0,-10 C-14,-24 -14,-54 0,-70 C14,-54 14,-24 0,-10 Z" transform={`translate(1060 140) rotate(${i * 45})`} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={`b${i}`} d="M0,-8 C-10,-18 -10,-40 0,-52 C10,-40 10,-18 0,-8 Z" transform={`translate(180 690) rotate(${i * 45})`} />
        ))}
      </g>
      <g fill="none" stroke={C.gold} strokeWidth="1.1" opacity="0.18" filter="url(#hand)">
        <path d="M0,720 C200,660 360,780 560,730 C760,680 900,760 1200,710" />
        <path d="M0,760 C240,710 380,820 600,770 C820,720 960,810 1200,760" opacity="0.6" />
      </g>
    </svg>
  );
}

/** Soft blobs that float slowly. Place inside a relative, isolated parent. */
export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="float-slow absolute -top-10 -left-16 h-72 w-72 opacity-30">
        <Wash d="M40,100 C30,50 80,20 120,30 C170,42 180,100 150,140 C120,180 50,160 40,100 Z" fill={C.lav} opacity={0.35} />
      </svg>
      <svg viewBox="0 0 200 200" className="float-slower absolute top-1/3 -right-20 h-80 w-80 opacity-30">
        <Wash d="M50,90 C40,40 110,20 150,50 C190,80 170,150 120,160 C70,170 56,130 50,90 Z" fill={C.sage} opacity={0.35} />
      </svg>
      <svg viewBox="0 0 200 200" className="float-slow absolute bottom-0 left-1/3 h-56 w-56 opacity-25">
        <Wash d="M60,100 C50,60 100,40 130,60 C160,80 150,130 110,140 C80,148 66,126 60,100 Z" fill={C.gold} opacity={0.35} />
      </svg>
    </div>
  );
}

/** Stacked cut-paper shapes with soft shadows, for layered depth behind content. */
export function PaperLayers({ className = "", tone = "lav" }: { className?: string; tone?: "lav" | "teal" | "gold" }) {
  const top = { lav: C.lavMist, teal: C.tealMist, gold: C.goldMist }[tone];
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="none" className={`pointer-events-none ${className}`} aria-hidden="true">
      <path d="M0,140 C90,90 180,170 300,130 C420,90 500,150 600,110 L600,400 L0,400 Z" fill={C.beige} filter="url(#paper)" />
      <path d="M0,210 C110,160 210,240 320,200 C430,160 520,220 600,190 L600,400 L0,400 Z" fill={top} filter="url(#paper)" />
      <path d="M0,290 C120,250 230,320 340,282 C450,244 530,300 600,272 L600,400 L0,400 Z" fill="#FAF7F2" filter="url(#paper)" />
    </svg>
  );
}

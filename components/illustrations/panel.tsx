import { Armchair, BrainArt, C, Plant, SeatedFigure, Wash } from "./base";

/** A member of the audience seen from behind. Origin is the base of the shoulders. */
function AudienceHead({ x, y, s = 1, fill, bun = false }: { x: number; y: number; s?: number; fill: string; bun?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-36,0 C-36,-26 -19,-36 0,-36 C19,-36 36,-26 36,0 Z" fill={fill} />
      <rect x="-6" y="-44" width="12" height="10" rx="3" fill={fill} />
      <ellipse cx="0" cy="-56" rx="16" ry="18" fill={fill} />
      {bun && <circle cx="0" cy="-78" r="7" fill={fill} />}
    </g>
  );
}

/**
 * Hero: four psychologists in a panel discussion seen past the heads of the audience,
 * framed in an arch like the cover of a journal.
 */
export function PanelCoverScene({ className = "" }: { className?: string }) {
  const arch = "M30,660 L30,300 A270,270 0 0 1 570,300 L570,660 Z";
  const back = [
    { x: 52, bun: false }, { x: 126, bun: true }, { x: 200, bun: false }, { x: 274, bun: false },
    { x: 348, bun: true }, { x: 422, bun: false }, { x: 496, bun: false }, { x: 566, bun: true },
  ];
  const front = [{ x: 20 }, { x: 130, bun: true }, { x: 240 }, { x: 360, bun: true }, { x: 470 }, { x: 580 }];

  return (
    <svg viewBox="0 0 600 680" className={className} role="img" aria-label="Four psychologists seated on stage in a panel discussion, seen past the silhouettes of the audience">
      <defs>
        <clipPath id="cover-arch">
          <path d={arch} />
        </clipPath>
        <linearGradient id="cover-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.lavMist} />
          <stop offset="0.65" stopColor={C.beige} />
        </linearGradient>
        <linearGradient id="cover-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.beige} stopOpacity="0" />
          <stop offset="1" stopColor={C.beige} stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* soft halo behind the frame */}
      <Wash d="M10,360 C0,160 150,40 310,40 C470,40 600,170 590,360 C580,560 480,670 300,670 C120,670 20,560 10,360 Z" fill={C.lav} opacity={0.18} />

      <g clipPath="url(#cover-arch)">
        <rect x="0" y="0" width="600" height="680" fill="url(#cover-wall)" />
        <Wash d="M80,250 C70,150 180,90 300,92 C430,94 530,160 520,260 C510,350 400,380 300,378 C190,376 90,350 80,250 Z" fill={C.lav} opacity={0.28} />
        <Wash d="M420,110 C450,80 520,90 530,140 C540,190 490,210 460,190 C430,170 400,140 420,110 Z" fill={C.gold} opacity={0.25} />

        {/* artwork on the wall */}
        <circle cx="300" cy="215" r="78" fill={C.white} opacity="0.75" />
        <circle cx="300" cy="215" r="78" fill="none" stroke={C.gold} strokeWidth="1.5" />
        <circle cx="300" cy="215" r="86" fill="none" stroke={C.gold} strokeWidth="0.8" strokeDasharray="1 5" />
        <BrainArt x={300} y={208} scale={0.72} />

        {/* floor lamp and plant */}
        <g filter="url(#wc-sm)">
          <path d="M548,486 L548,300" stroke={C.gold} strokeWidth="3" strokeLinecap="round" />
          <path d="M526,300 L570,300 L560,268 L536,268 Z" fill={C.goldMist} stroke={C.gold} strokeWidth="1.5" />
          <ellipse cx="548" cy="488" rx="16" ry="4" fill={C.gold} />
        </g>
        <Wash d="M500,300 C520,278 576,278 596,300 C580,338 516,338 500,300 Z" fill={C.gold} opacity={0.2} />
        <Plant x={58} y={486} scale={1.6} />

        {/* stage */}
        <path d="M0,476 L600,476 L600,680 L0,680 Z" fill={C.goldMist} opacity="0.7" />
        <path d="M0,476 L600,476" stroke={C.gold} strokeWidth="1.5" />
        <ellipse cx="300" cy="486" rx="250" ry="12" fill={C.white} opacity="0.6" filter="url(#wc)" />

        {/* panellists, turned toward one another */}
        <Armchair x={122} y={462} scale={0.92} facing="right" color={C.sage} />
        <SeatedFigure x={122} y={457} scale={0.92} facing="right" skin={C.skin[1]} hair={C.hair[0]} hairStyle="bun" top={C.lavDeep} bottom={C.ink} holding="notebook" />
        <Armchair x={240} y={462} scale={0.92} facing="right" color={C.lav} />
        <SeatedFigure x={240} y={457} scale={0.92} facing="right" skin={C.skin[2]} hair={C.hair[2]} hairStyle="short" top={C.sage} bottom={C.ink} />
        <Armchair x={362} y={462} scale={0.92} facing="left" color={C.lav} />
        <SeatedFigure x={362} y={457} scale={0.92} facing="left" skin={C.skin[0]} hair={C.hair[1]} hairStyle="long" top={C.gold} bottom={C.sageDeep} holding="cup" />
        <Armchair x={480} y={462} scale={0.92} facing="left" color={C.sage} />
        <SeatedFigure x={480} y={457} scale={0.92} facing="left" skin={C.skin[3]} hair={C.hair[3]} hairStyle="short" top={C.lav} bottom={C.ink} />

        {/* the audience, softly in the foreground */}
        <rect x="0" y="540" width="600" height="140" fill="url(#cover-fade)" />
        <g opacity="0.28">
          {back.map((h) => (
            <AudienceHead key={h.x} x={h.x} y={640} s={0.72} fill={C.lavDeep} bun={h.bun} />
          ))}
        </g>
        <g opacity="0.45">
          {front.map((h) => (
            <AudienceHead key={h.x} x={h.x + 30} y={712} s={1.05} fill={C.lavDeep} bun={h.bun} />
          ))}
        </g>
      </g>

      {/* fine gold frame lines */}
      <path d={arch} fill="none" stroke={C.gold} strokeWidth="1.5" />
      <path d="M44,660 L44,302 A256,256 0 0 1 556,302 L556,660" fill="none" stroke={C.gold} strokeWidth="0.8" opacity="0.6" />

      {/* a few leaves drifting outside the frame */}
      <Wash small d="M8,250 C18,232 40,232 46,240 C36,254 18,258 8,250 Z" fill={C.sage} opacity={0.8} />
      <Wash small d="M560,180 C572,164 592,166 596,174 C586,186 570,188 560,180 Z" fill={C.sage} opacity={0.7} />
      <circle cx="574" cy="420" r="3.5" fill={C.gold} opacity="0.8" />
    </svg>
  );
}

/** Placeholder portrait for speakers without a photo: a calm single-tone silhouette. */
export function SpeakerPlaceholder({ variant = 0 }: { variant?: number }) {
  const washes = [C.lav, C.sage, C.gold, C.lav, C.sage];
  const id = `sp-bg-${variant}`;
  return (
    <svg viewBox="0 0 240 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Speaker photo coming soon">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.white} />
          <stop offset="1" stopColor={C.beige} />
        </linearGradient>
      </defs>
      <rect width="240" height="300" fill={`url(#${id})`} />
      <Wash d="M30,130 C20,60 90,24 150,34 C210,44 236,104 220,164 C204,226 130,250 80,230 C40,214 36,180 30,130 Z" fill={washes[variant % washes.length]} opacity={0.3} />
      <circle cx="120" cy="128" r="92" fill="none" stroke={C.gold} strokeWidth="0.8" strokeDasharray="1 5" />
      <g fill={C.lavDeep} opacity="0.2">
        <ellipse cx="120" cy="118" rx="38" ry="44" />
        <rect x="106" y="152" width="28" height="22" rx="8" />
        <path d="M30,300 C30,220 70,184 120,184 C170,184 210,220 210,300 Z" />
      </g>
    </svg>
  );
}

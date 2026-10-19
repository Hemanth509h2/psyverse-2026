import { C, Wash } from "./base";

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

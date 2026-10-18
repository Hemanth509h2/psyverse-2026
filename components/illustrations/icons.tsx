import { C, Wash } from "./base";

type IconProps = { className?: string; tone?: "lav" | "sage" | "gold" };

const washFor = { lav: C.lavMist, sage: C.sageMist, gold: C.goldMist };
const blob = "M8,34 C4,16 20,4 36,6 C52,8 62,22 58,38 C54,54 38,62 24,58 C12,54 10,46 8,34 Z";

function Frame({ children, className = "", tone = "lav" }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <Wash d={blob} fill={washFor[tone]} opacity={1} small />
      <g fill="none" stroke={C.lavDeep} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" filter="url(#hand)">
        {children}
      </g>
    </svg>
  );
}

/* ---------- Event highlights ---------- */

export const IconPanel = (p: IconProps) => (
  <Frame {...p}>
    <circle cx="20" cy="24" r="4.5" /><circle cx="32" cy="21" r="5" /><circle cx="44" cy="24" r="4.5" />
    <path d="M13,38 C13,32 16,30 20,30 C24,30 27,32 27,38" />
    <path d="M25,36 C25,30 28,28 32,28 C36,28 39,30 39,36" />
    <path d="M37,38 C37,32 40,30 44,30 C48,30 51,32 51,38" />
    <path d="M10,42 L54,42 M18,42 L16,50 M46,42 L48,50" />
  </Frame>
);

export const IconExpert = (p: IconProps) => (
  <Frame {...p}>
    <circle cx="28" cy="22" r="7" />
    <path d="M14,48 C14,38 20,33 28,33 C33,33 37,35 39,38" />
    <circle cx="44" cy="42" r="6" fill={C.gold} stroke={C.gold} />
    <path d="M41,47 L39,55 L44,52 L49,55 L47,47" />
  </Frame>
);

export const IconQA = (p: IconProps) => (
  <Frame {...p}>
    <path d="M12,16 h24 a5,5 0 0 1 5,5 v10 a5,5 0 0 1 -5,5 h-14 l-6,5 v-5 h-4 a5,5 0 0 1 -5,-5 v-10 a5,5 0 0 1 5,-5 Z" />
    <path d="M22,23 a3,3 0 1 1 4,3 v2" /><circle cx="26" cy="32" r="0.6" fill={C.lavDeep} />
    <path d="M44,28 h6 a4,4 0 0 1 4,4 v8 a4,4 0 0 1 -4,4 h-2 v4 l-5,-4 h-9 a4,4 0 0 1 -4,-4 v-2" />
  </Frame>
);

export const IconFuture = (p: IconProps) => (
  <Frame {...p}>
    <path d="M18,22 a14,14 0 0 1 28,0" stroke={C.gold} />
    <path d="M32,6 v4 M14,12 l3,3 M50,12 l-3,3" stroke={C.gold} />
    <path d="M32,52 V30" />
    <path d="M32,40 C26,32 18,33 17,37 C21,42 27,43 32,40 Z" />
    <path d="M32,34 C38,26 46,27 47,31 C43,36 37,37 32,34 Z" />
    <path d="M22,52 h20" />
  </Frame>
);

export const IconNetwork = (p: IconProps) => (
  <Frame {...p}>
    <circle cx="32" cy="16" r="5" /><circle cx="16" cy="42" r="5" /><circle cx="48" cy="42" r="5" />
    <path d="M28,20 L19,37 M36,20 L45,37 M21,42 L43,42" strokeDasharray="1 3.5" />
  </Frame>
);

export const IconTechMind = (p: IconProps) => (
  <Frame {...p}>
    <rect x="16" y="12" width="32" height="40" rx="5" />
    <path d="M28,52 h8" />
    <path d="M32,29 c-4,-5 -11,-1 -7,4 l7,7 l7,-7 c4,-5 -3,-9 -7,-4 Z" fill={C.lav} stroke={C.lavDeep} />
  </Frame>
);

export const IconCertificate = (p: IconProps) => (
  <Frame {...p}>
    <rect x="10" y="14" width="44" height="30" rx="3" />
    <path d="M18,23 h22 M18,30 h16" />
    <circle cx="44" cy="40" r="6" fill={C.gold} stroke={C.gold} />
    <path d="M41,45 L39,54 L44,51 L49,54 L47,45" />
  </Frame>
);

export const IconGrowth = (p: IconProps) => (
  <Frame {...p}>
    <path d="M10,50 h12 v-10 h12 v-10 h12 v-10 h8" />
    <path d="M50,20 C50,12 56,8 60,9 C60,16 55,20 50,20 Z" fill={C.sage} stroke={C.sageDeep} />
  </Frame>
);

/* ---------- Human side of technology ---------- */

export const IconHuman = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <g filter="url(#wc-sm)">
      <path d="M32,50 C22,43 14,36 14,27 C14,20 21,17 26,20 C29,22 31,25 32,28 C33,25 35,22 38,20 C43,17 50,20 50,27 C50,36 42,43 32,50 Z" fill={C.lav} />
    </g>
  </svg>
);

export const IconExpertise = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <g filter="url(#wc-sm)">
      <path d="M10,48 C18,43 26,43 32,46 C38,43 46,43 54,48 L54,22 C46,17 38,17 32,20 C26,17 18,17 10,22 Z" fill={C.white} stroke={C.sageDeep} strokeWidth="2" />
      <path d="M32,20 V46" stroke={C.sageDeep} strokeWidth="1.6" />
      <path d="M16,28 h10 M16,34 h10 M38,28 h10 M38,34 h10" stroke={C.sage} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  </svg>
);

export const IconTech = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <g filter="url(#wc-sm)">
      <rect x="14" y="14" width="36" height="28" rx="4" fill={C.white} stroke={C.gold} strokeWidth="2" />
      <path d="M8,46 H56 C56,50 53,52 50,52 H14 C11,52 8,50 8,46 Z" fill={C.gold} />
      <circle cx="32" cy="28" r="6" fill={C.goldMist} stroke={C.gold} strokeWidth="1.6" />
    </g>
  </svg>
);

/* ---------- Small utility icons ---------- */

export function LineIcon({ name, className = "h-5 w-5" }: { name: "calendar" | "clock" | "pin" | "ticket" | "hourglass" | "download" | "arrow" | "external" | "check" | "people"; className?: string }) {
  const paths: Record<typeof name, React.ReactNode> = {
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    pin: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
    ticket: <><path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z" /><path d="M14 6v12" strokeDasharray="2 2" /></>,
    hourglass: <><path d="M6 3h12M6 21h12M7 3c0 5 10 6 10 9s-10 4-10 9M17 3c0 5-10 6-10 9s10 4 10 9" /></>,
    download: <><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
    check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><circle cx="17" cy="9" r="2.5" /><path d="M15.5 14.2A4.5 4.5 0 0 1 21 18.5" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

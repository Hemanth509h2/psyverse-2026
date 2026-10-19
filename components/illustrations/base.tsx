// Shared palette, filters and figure parts for the hand-made watercolour illustrations.

export const C = {
  lav: "#B8A9D9",
  lavDeep: "#8B7BB8",
  lavMist: "#ECE7F5",
  sage: "#A8B5A2",
  sageDeep: "#7E8F78",
  sageMist: "#E7EBE4",
  gold: "#D4B483",
  goldMist: "#F4EBDC",
  ink: "#2D2D2D",
  beige: "#F3EEE8",
  line: "#E6DFD5",
  teal: "#009688",
  tealDark: "#00796B",
  tealMist: "#E3F1EE",
  white: "#FFFFFF",
  skin: ["#EBC9AE", "#C99A7A", "#9A6B4F", "#E2B897"],
  hair: ["#3B2F2F", "#5A4335", "#2A2424", "#7A5B45"],
};

/** Mount once per page. Every illustration references these filters by id. */
export function WatercolorDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        {/* Soft, bleeding edges like paint on wet paper */}
        <filter id="wc" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G" result="disp" />
          <feGaussianBlur in="disp" stdDeviation="1.4" />
        </filter>
        {/* Gentler version for small shapes */}
        <filter id="wc-sm" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" result="disp" />
          <feGaussianBlur in="disp" stdDeviation="0.5" />
        </filter>
        {/* A slight wobble that makes clean strokes feel hand-drawn */}
        <filter id="hand" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="2" seed="11" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        {/* Cut-paper shadow: each layer seems to sit a few millimetres above the one below */}
        <filter id="paper" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#8B7BB8" floodOpacity="0.16" />
        </filter>
        {/* Paper grain laid over washes */}
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="5" result="g" />
          <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0" result="ga" />
          <feComposite in="ga" in2="SourceGraphic" operator="in" result="gi" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="gi" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

type WashProps = { d: string; fill: string; opacity?: number; small?: boolean; transform?: string };
export function Wash({ d, fill, opacity = 0.5, small, transform }: WashProps) {
  return <path d={d} fill={fill} opacity={opacity} filter={`url(#${small ? "wc-sm" : "wc"})`} transform={transform} />;
}

/** Abstract brain in line art, with a lavender wash behind it. Origin is its centre. */
export function BrainArt({ x, y, scale = 1, wash = true }: { x: number; y: number; scale?: number; wash?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {wash && <Wash d="M-80,8 C-96,-30 -70,-70 -32,-68 C-20,-92 22,-92 36,-70 C72,-74 96,-40 82,-8 C96,16 74,46 46,42 C36,60 8,62 -2,48 C-20,62 -56,56 -58,36 C-80,38 -92,24 -80,8 Z" fill={C.lav} opacity={0.35} />}
      <g fill="none" stroke={C.lavDeep} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" filter="url(#hand)">
        <path d="M-70,10 C-90,-20 -70,-60 -35,-62 C-25,-82 15,-84 30,-66 C62,-70 84,-40 74,-10 C88,10 70,36 46,34 C38,50 14,52 2,40 C-14,52 -44,48 -48,30 C-66,32 -78,22 -70,10 Z" />
        <path d="M-44,-34 C-24,-44 -12,-24 -28,-8" />
        <path d="M0,-62 C-6,-42 14,-30 6,-8" />
        <path d="M32,-44 C52,-32 46,-12 28,-4" />
        <path d="M-54,8 C-34,-2 -14,12 -8,26" />
        <path d="M18,10 C34,2 52,12 50,24" />
        <path d="M-20,-4 C-10,6 6,4 10,-6" />
        <path d="M10,40 C12,56 18,64 24,74" />
      </g>
      {/* leaves growing from the stem */}
      <Wash small d="M24,72 C34,58 52,58 58,64 C50,74 36,78 24,72 Z" fill={C.sage} opacity={0.85} />
      <Wash small d="M22,74 C12,62 -4,64 -8,70 C0,80 14,82 22,74 Z" fill={C.sage} opacity={0.65} />
    </g>
  );
}

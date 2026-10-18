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

type HairStyle = "short" | "long" | "bun";
type FigureProps = {
  x: number;
  y: number;
  scale?: number;
  facing?: "left" | "right";
  skin?: string;
  hair?: string;
  hairStyle?: HairStyle;
  top?: string;
  bottom?: string;
  holding?: "notebook" | "cup" | null;
};

/** A seated person. Origin is the seat; knees point toward `facing`. */
export function SeatedFigure({
  x, y, scale = 1, facing = "right",
  skin = C.skin[0], hair = C.hair[0], hairStyle = "short",
  top = C.lav, bottom = C.ink, holding = null,
}: FigureProps) {
  const flip = facing === "left" ? -1 : 1;
  return (
    <g transform={`translate(${x} ${y}) scale(${flip * scale} ${scale})`} filter="url(#wc-sm)">
      {hairStyle === "long" && <path d="M-17,-96 C-21,-122 19,-122 17,-96 L18,-64 L-20,-64 Z" fill={hair} />}
      {/* lower leg and foot */}
      <path d="M34,-2 L47,-2 L49,48 L36,48 Z" fill={bottom} opacity="0.92" />
      <ellipse cx="49" cy="50" rx="13" ry="5" fill={C.ink} />
      {/* thigh */}
      <path d="M-20,-8 L40,-10 C50,-10 52,4 46,10 L-18,12 Z" fill={bottom} />
      {/* torso */}
      <path d="M-22,-4 C-27,-42 -20,-72 -3,-76 C12,-78 22,-62 19,-30 L17,-4 Z" fill={top} />
      {/* neck and head */}
      <rect x="-5" y="-84" width="10" height="10" rx="3" fill={skin} />
      <circle cx="1" cy="-94" r="15" fill={skin} />
      {hairStyle !== "long" && <path d="M-15,-95 C-17,-114 14,-116 16,-98 C10,-106 -2,-108 -15,-95 Z" fill={hair} />}
      {hairStyle === "long" && <path d="M-15,-96 C-16,-114 16,-115 16,-98 C8,-106 -4,-107 -15,-96 Z" fill={hair} />}
      {hairStyle === "bun" && <circle cx="-9" cy="-111" r="7" fill={hair} />}
      {/* arm resting toward the knee */}
      <path d="M-4,-66 C-10,-42 0,-22 26,-18" stroke={top} strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M-4,-66 C-10,-42 0,-22 26,-18" stroke={C.ink} strokeOpacity="0.08" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle cx="29" cy="-18" r="5.5" fill={skin} />
      {holding === "notebook" && <rect x="22" y="-34" width="18" height="22" rx="2" fill={C.gold} transform="rotate(-18 31 -23)" />}
      {holding === "cup" && <path d="M24,-30 h12 v10 a6,6 0 0 1 -12,0 Z" fill={C.white} stroke={C.lavDeep} strokeWidth="1.2" />}
    </g>
  );
}

/** A soft armchair to sit a SeatedFigure on. Same origin and facing. */
export function Armchair({ x, y, scale = 1, facing = "right", color = C.sage }: { x: number; y: number; scale?: number; facing?: "left" | "right"; color?: string }) {
  const flip = facing === "left" ? -1 : 1;
  return (
    <g transform={`translate(${x} ${y}) scale(${flip * scale} ${scale})`} filter="url(#wc-sm)">
      <path d="M-46,-100 C-46,-112 -26,-112 -26,-100 L-22,10 L-46,10 Z" fill={color} />
      <path d="M-46,-6 C-46,-14 -40,-16 -30,-16 L44,-16 C54,-16 58,-10 58,-2 L58,16 L-46,16 Z" fill={color} />
      <path d="M-46,16 L58,16 L58,24 L-46,24 Z" fill={color} opacity="0.75" />
      <path d="M-40,24 L-42,44 M52,24 L54,44" stroke={C.sageDeep} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
}

/** Head and shoulders. Origin is the centre of the shoulders' base. */
export function Bust({
  x, y, scale = 1, skin = C.skin[0], hair = C.hair[0], top = C.lav, hairStyle = "short",
}: { x: number; y: number; scale?: number; skin?: string; hair?: string; top?: string; hairStyle?: HairStyle }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} filter="url(#wc-sm)">
      {hairStyle === "long" && <path d="M-14,-30 C-17,-52 17,-52 14,-30 L16,-8 L-16,-8 Z" fill={hair} />}
      <path d="M-26,0 C-26,-18 -14,-24 0,-24 C14,-24 26,-18 26,0 Z" fill={top} />
      <rect x="-4" y="-30" width="8" height="8" rx="2" fill={skin} />
      <circle cx="0" cy="-38" r="12" fill={skin} />
      <path d="M-12,-39 C-14,-54 12,-55 13,-41 C8,-47 -2,-48 -12,-39 Z" fill={hair} />
      {hairStyle === "bun" && <circle cx="-6" cy="-52" r="5.5" fill={hair} />}
    </g>
  );
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

/** A small potted plant. Origin is the base of the pot. */
export function Plant({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} filter="url(#wc-sm)">
      <path d="M0,-30 C-4,-52 -22,-62 -30,-58 C-26,-44 -14,-34 0,-30 Z" fill={C.sage} />
      <path d="M2,-30 C6,-56 24,-66 32,-60 C28,-46 16,-34 2,-30 Z" fill={C.sageDeep} opacity="0.85" />
      <path d="M1,-32 C0,-60 8,-74 14,-78 C16,-62 10,-44 1,-32 Z" fill={C.sage} opacity="0.9" />
      <path d="M-14,-30 L14,-30 L10,0 L-10,0 Z" fill={C.gold} />
    </g>
  );
}

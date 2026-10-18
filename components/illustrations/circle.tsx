import { Armchair, Bust, C, Plant, SeatedFigure, Wash } from "./base";

/** Professionals in a circle of conversation, their ideas rising and meeting in a single lotus. */
export function CircleOfConversation({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 520" className={className} role="img" aria-label="Five mental-health professionals in conversation around a low table, their ideas rising to meet in a lotus">
      {/* washes */}
      <Wash d="M60,280 C40,150 160,60 300,62 C450,64 560,160 548,290 C536,420 420,494 290,490 C150,486 76,400 60,280 Z" fill={C.lav} opacity={0.26} />
      <Wash d="M40,440 C30,390 110,370 170,390 C230,410 220,480 160,500 C100,520 50,490 40,440 Z" fill={C.sage} opacity={0.3} />
      <Wash d="M440,80 C480,50 550,70 556,124 C562,176 510,196 476,176 C442,156 410,106 440,80 Z" fill={C.teal} opacity={0.12} />
      <ellipse cx="300" cy="476" rx="250" ry="24" fill={C.goldMist} filter="url(#wc)" />

      {/* the lotus where the conversation meets */}
      <g transform="translate(300 118)" filter="url(#wc-sm)">
        <path d="M0,30 C-16,10 -16,-26 0,-46 C16,-26 16,10 0,30 Z" fill={C.lav} opacity="0.85" />
        <path d="M0,30 C-28,24 -44,0 -46,-22 C-24,-14 -6,4 0,30 Z" fill={C.lav} opacity="0.6" />
        <path d="M0,30 C28,24 44,0 46,-22 C24,-14 6,4 0,30 Z" fill={C.lav} opacity="0.6" />
        <path d="M0,30 C-36,32 -60,18 -70,0 C-44,-2 -18,10 0,30 Z" fill={C.teal} opacity="0.3" />
        <path d="M0,30 C36,32 60,18 70,0 C44,-2 18,10 0,30 Z" fill={C.teal} opacity="0.3" />
        <path d="M-40,40 C-20,48 20,48 40,40" stroke={C.gold} strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* threads of thought rising from each person */}
      <g fill="none" stroke={C.lavDeep} strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" opacity="0.6">
        <path d="M150,250 C150,190 220,170 268,150" />
        <path d="M222,226 C226,190 260,170 284,156" />
        <path d="M300,214 C300,190 300,176 300,164" />
        <path d="M378,226 C374,190 340,170 316,156" />
        <path d="M450,250 C450,190 380,170 332,150" />
      </g>

      {/* three colleagues seated behind the table */}
      <Bust x={222} y={330} scale={1.2} skin={C.skin[2]} hair={C.hair[2]} top={C.sage} />
      <Bust x={300} y={318} scale={1.28} skin={C.skin[3]} hair={C.hair[0]} top={C.lavDeep} hairStyle="bun" />
      <Bust x={378} y={330} scale={1.2} skin={C.skin[0]} hair={C.hair[1]} top={C.gold} hairStyle="long" />

      {/* the low round table */}
      <g filter="url(#wc-sm)">
        <ellipse cx="300" cy="344" rx="132" ry="24" fill={C.white} stroke={C.line} strokeWidth="1.5" />
        <path d="M262,366 L254,440 M338,366 L346,440" stroke={C.gold} strokeWidth="5" strokeLinecap="round" />
        <path d="M244,330 h12 l-2,14 h-8 Z M346,330 h12 l-2,14 h-8 Z" fill={C.white} stroke={C.lavDeep} strokeWidth="1.2" />
        <rect x="372" y="330" width="26" height="16" rx="2" fill={C.goldMist} stroke={C.gold} strokeWidth="1" transform="rotate(-6 385 338)" />
      </g>
      <Plant x={300} y={344} scale={0.75} />

      {/* two colleagues in the foreground, turned toward the group */}
      <Armchair x={112} y={438} scale={1.05} facing="right" color={C.lav} />
      <SeatedFigure x={112} y={432} scale={1.05} facing="right" skin={C.skin[1]} hair={C.hair[0]} hairStyle="long" top={C.teal} bottom={C.ink} holding="notebook" />
      <Armchair x={488} y={438} scale={1.05} facing="left" color={C.sage} />
      <SeatedFigure x={488} y={432} scale={1.05} facing="left" skin={C.skin[2]} hair={C.hair[3]} hairStyle="short" top={C.lav} bottom={C.ink} holding="cup" />

      <Wash small d="M64,170 C74,154 96,154 102,162 C92,176 74,178 64,170 Z" fill={C.sage} opacity={0.8} />
      <Wash small d="M500,250 C510,234 532,236 536,244 C526,256 510,258 500,250 Z" fill={C.sage} opacity={0.7} />
      <circle cx="96" cy="250" r="4" fill={C.gold} opacity="0.8" />
    </svg>
  );
}

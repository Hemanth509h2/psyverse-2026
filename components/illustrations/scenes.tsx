import { Armchair, BrainArt, Bust, C, Plant, SeatedFigure, Wash } from "./base";

/** A therapist and client in conversation, a reflective brain above, a tablet resting quietly on the table. */
export function ConversationScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 560" className={className} role="img" aria-label="A therapist and a client talking in armchairs, with an abstract brain and growing leaves above them">
      {/* washes */}
      <Wash d="M90,250 C60,140 170,60 300,70 C440,78 560,150 540,290 C520,420 420,500 290,494 C150,488 110,380 90,250 Z" fill={C.lav} opacity={0.32} />
      <Wash d="M40,420 C30,360 110,330 180,350 C250,370 260,450 200,488 C140,520 50,490 40,420 Z" fill={C.sage} opacity={0.38} />
      <Wash d="M430,90 C470,60 540,80 548,140 C556,196 500,214 462,190 C424,166 400,116 430,90 Z" fill={C.gold} opacity={0.35} />
      <Wash d="M480,400 C510,380 560,396 556,440 C552,480 506,488 484,466 C462,444 456,416 480,400 Z" fill={C.lav} opacity={0.3} />

      {/* rug */}
      <ellipse cx="300" cy="478" rx="230" ry="26" fill={C.goldMist} filter="url(#wc)" />

      {/* connection from both people up to the brain */}
      <g fill="none" stroke={C.lavDeep} strokeWidth="1.6" strokeDasharray="2 7" strokeLinecap="round" opacity="0.7">
        <path d="M178,268 C190,210 230,190 262,176" />
        <path d="M422,268 C410,210 370,190 338,176" />
      </g>
      <BrainArt x={300} y={150} scale={1.05} />

      {/* small floating leaves */}
      <Wash small d="M150,140 C160,124 180,124 186,130 C178,142 162,146 150,140 Z" fill={C.sage} opacity={0.8} />
      <Wash small d="M452,236 C462,220 482,222 486,228 C478,240 462,242 452,236 Z" fill={C.sage} opacity={0.7} />
      <circle cx="120" cy="210" r="4" fill={C.gold} opacity="0.8" />
      <circle cx="488" cy="300" r="3" fill={C.lavDeep} opacity="0.6" />

      {/* therapist, left */}
      <Armchair x={150} y={398} scale={1.15} facing="right" color={C.sage} />
      <SeatedFigure x={150} y={392} scale={1.15} facing="right" skin={C.skin[1]} hair={C.hair[0]} hairStyle="bun" top={C.lavDeep} bottom={C.ink} holding="notebook" />

      {/* client, right */}
      <Armchair x={450} y={398} scale={1.15} facing="left" color={C.lav} />
      <SeatedFigure x={450} y={392} scale={1.15} facing="left" skin={C.skin[0]} hair={C.hair[1]} hairStyle="long" top={C.gold} bottom={C.sageDeep} holding="cup" />

      {/* side table with plant and tablet */}
      <g filter="url(#wc-sm)">
        <ellipse cx="300" cy="402" rx="46" ry="9" fill={C.white} stroke={C.line} />
        <path d="M296,410 L292,470 M304,410 L308,470" stroke={C.gold} strokeWidth="5" strokeLinecap="round" />
        <rect x="300" y="380" width="34" height="22" rx="4" fill={C.white} stroke={C.lavDeep} strokeWidth="1.6" transform="rotate(-8 317 391)" />
        <path d="M317,394 c-4,-4 -9,-1 -6,3 l6,5 l6,-5 c3,-4 -2,-7 -6,-3 Z" fill={C.lav} transform="rotate(-8 317 391)" />
      </g>
      <Plant x={276} y={398} scale={0.9} />
    </svg>
  );
}

/* ---------- Small stage illustrations (viewBox 160x120) ---------- */

export function StageTraditional() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true">
      <Wash d="M20,70 C14,36 60,18 100,24 C140,30 150,66 136,90 C118,112 40,112 20,70 Z" fill={C.goldMist} opacity={0.9} />
      <g filter="url(#wc-sm)">
        <path d="M28,78 C28,62 38,56 50,58 L112,64 C122,66 126,72 126,80 L126,88 L28,88 Z" fill={C.lav} />
        <path d="M28,70 C24,58 32,48 42,52 C44,60 40,70 28,70 Z" fill={C.lavDeep} />
        <ellipse cx="54" cy="62" rx="12" ry="6" fill={C.white} />
        <path d="M34,88 L32,96 M120,88 L122,96" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
      </g>
      <g fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" filter="url(#hand)">
        <path d="M134,40 L134,90" />
        <path d="M124,40 L144,40 L138,28 L130,28 Z" fill={C.gold} />
      </g>
    </svg>
  );
}

export function StageTechAssisted() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true">
      <Wash d="M20,66 C14,30 60,16 98,22 C140,28 150,62 138,88 C122,112 36,112 20,66 Z" fill={C.goldMist} opacity={1} />
      <g filter="url(#wc-sm)">
        <rect x="58" y="18" width="44" height="80" rx="9" fill={C.white} stroke={C.lavDeep} strokeWidth="2" />
        <rect x="66" y="32" width="28" height="10" rx="5" fill={C.lav} />
        <rect x="66" y="48" width="22" height="10" rx="5" fill={C.sage} />
        <rect x="66" y="64" width="26" height="10" rx="5" fill={C.lav} opacity="0.7" />
      </g>
      <Wash small d="M108,80 C112,62 128,56 138,60 C134,74 122,82 108,80 Z" fill={C.sage} opacity={0.9} />
      <Wash small d="M52,84 C44,70 30,68 24,72 C30,84 42,88 52,84 Z" fill={C.sage} opacity={0.7} />
    </svg>
  );
}

export function StageFuture() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true">
      <Wash d="M20,70 C12,34 58,16 98,22 C142,28 152,64 138,90 C120,114 36,112 20,70 Z" fill={C.lavMist} opacity={1} />
      <circle cx="80" cy="40" r="18" fill={C.gold} opacity="0.55" filter="url(#wc-sm)" />
      <g filter="url(#wc-sm)">
        <path d="M80,78 C80,64 80,56 80,48" stroke={C.sageDeep} strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M80,60 C70,48 56,50 54,56 C62,64 72,64 80,60 Z" fill={C.sage} />
        <path d="M80,54 C90,40 106,42 108,48 C100,58 88,58 80,54 Z" fill={C.sageDeep} opacity="0.85" />
        <path d="M40,86 C52,74 66,76 80,84 C94,76 108,74 120,86 C108,98 92,100 80,94 C68,100 52,98 40,86 Z" fill={C.skin[0]} />
        <path d="M40,86 C52,74 66,76 80,84 C94,76 108,74 120,86" fill="none" stroke={C.skin[1]} strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/* ---------- Why attend (viewBox 240x180, hand-drawn feel) ---------- */

export function WhyStudents() {
  return (
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <Wash d="M30,100 C20,50 80,20 130,24 C190,28 222,70 208,116 C194,160 120,170 74,156 C40,146 34,126 30,100 Z" fill={C.lavMist} opacity={1} />
      <Bust x={120} y={160} scale={1.7} skin={C.skin[3]} hair={C.hair[0]} top={C.sage} hairStyle="long" />
      <g filter="url(#wc-sm)">
        <path d="M84,150 C100,140 116,140 120,146 C124,140 140,140 156,150 L156,168 C140,160 124,160 120,166 C116,160 100,160 84,168 Z" fill={C.white} stroke={C.lavDeep} strokeWidth="1.6" />
      </g>
      <g fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" filter="url(#hand)">
        <path d="M52,52 l0,12 M46,58 l12,0" />
        <path d="M188,44 l0,10 M183,49 l10,0" />
        <path d="M196,96 l0,8 M192,100 l8,0" />
      </g>
      <Wash small d="M58,118 C62,100 78,94 88,98 C84,112 72,120 58,118 Z" fill={C.sage} opacity={0.9} />
    </svg>
  );
}

export function WhyProfessionals() {
  return (
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <Wash d="M26,96 C18,48 76,18 128,22 C188,26 224,66 212,112 C200,158 126,170 78,158 C42,148 30,124 26,96 Z" fill={C.sageMist} opacity={1} />
      <Bust x={80} y={162} scale={1.5} skin={C.skin[1]} hair={C.hair[2]} top={C.lavDeep} />
      <Bust x={164} y={162} scale={1.5} skin={C.skin[0]} hair={C.hair[3]} top={C.gold} hairStyle="bun" />
      <g filter="url(#wc-sm)">
        <path d="M70,34 h44 a10,10 0 0 1 10,10 v14 a10,10 0 0 1 -10,10 h-28 l-10,8 v-8 h-6 a10,10 0 0 1 -10,-10 v-14 a10,10 0 0 1 10,-10 Z" fill={C.lav} opacity="0.85" />
        <path d="M128,52 h44 a10,10 0 0 1 10,10 v14 a10,10 0 0 1 -10,10 h-6 v8 l-10,-8 h-28 a10,10 0 0 1 -10,-10 v-14 a10,10 0 0 1 10,-10 Z" fill={C.gold} opacity="0.75" />
      </g>
      <g stroke={C.white} strokeWidth="2.4" strokeLinecap="round" filter="url(#hand)">
        <path d="M82,48 h28 M82,56 h18" />
        <path d="M140,66 h28 M140,74 h18" />
      </g>
    </svg>
  );
}

export function WhyResearchers() {
  return (
    <svg viewBox="0 0 240 180" aria-hidden="true">
      <Wash d="M28,98 C20,50 78,20 130,24 C190,28 224,68 210,114 C196,158 124,170 76,158 C42,148 32,126 28,98 Z" fill={C.goldMist} opacity={1} />
      <Bust x={96} y={164} scale={1.6} skin={C.skin[2]} hair={C.hair[0]} top={C.lav} />
      <g filter="url(#wc-sm)">
        <path d="M134,30 C138,16 160,12 170,22 C182,12 204,20 202,36 C214,42 210,62 194,62 L146,62 C128,62 122,40 134,30 Z" fill={C.white} stroke={C.lavDeep} strokeWidth="1.6" />
        <circle cx="132" cy="76" r="5" fill={C.white} stroke={C.lavDeep} strokeWidth="1.4" />
        <circle cx="122" cy="90" r="3" fill={C.white} stroke={C.lavDeep} strokeWidth="1.2" />
      </g>
      <BrainArt x={170} y={41} scale={0.22} wash={false} />
      <g fill="none" stroke={C.sageDeep} strokeWidth="2.4" strokeLinecap="round" filter="url(#hand)">
        <circle cx="188" cy="126" r="14" />
        <path d="M198,136 L212,150" />
      </g>
    </svg>
  );
}

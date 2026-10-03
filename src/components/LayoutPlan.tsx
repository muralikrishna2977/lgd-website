/**
 * Stylised 70-acre layout illustration (self-contained SVG).
 * Schematic only — NOT the approved plan. Swap in the real master plan
 * via images.masterPlan once available.
 */

const NAVY = "#0F1F3D";

type Block = { x: number; y: number; cols: number; rows: number };

// Plot blocks arranged around the central avenue and the pond
const blocks: Block[] = [
  { x: 40, y: 40, cols: 8, rows: 2 },
  { x: 40, y: 98, cols: 8, rows: 2 },
  { x: 40, y: 156, cols: 8, rows: 2 },
  { x: 40, y: 214, cols: 5, rows: 2 },
  { x: 330, y: 40, cols: 9, rows: 2 },
  { x: 330, y: 98, cols: 4, rows: 2 },
  { x: 330, y: 270, cols: 9, rows: 2 },
];

const W = 22;
const H = 20;

const amenityPins = [
  { x: 470, y: 175, label: "3.5-acre Pond" },
  { x: 150, y: 290, label: "Sports Arena" },
  { x: 225, y: 230, label: "Play Area" },
  { x: 375, y: 160, label: "Nakshatra Vanam" },
  { x: 90, y: 252, label: "Rock Garden" },
];

export default function LayoutPlan() {
  return (
    <svg viewBox="0 0 600 420" className="h-auto w-full" role="img" aria-labelledby="layout-title">
      <title id="layout-title">Schematic layout of Golden Pride showing plots, central M30 avenue, pond and amenities</title>

      <rect width="600" height="420" fill="#13264A" />
      {/* Site boundary */}
      <rect x="20" y="20" width="560" height="320" rx="6" fill="#1A3058" stroke="#CFA95B" strokeOpacity="0.5" strokeDasharray="4 4" />

      {/* Plots */}
      {blocks.map((b, bi) =>
        Array.from({ length: b.rows }).flatMap((_, r) =>
          Array.from({ length: b.cols }).map((__, c) => (
            <rect
              key={`${bi}-${r}-${c}`}
              x={b.x + c * (W + 3)}
              y={b.y + r * (H + 3)}
              width={W}
              height={H}
              rx="1.5"
              fill="#E8DDBF"
              opacity={0.82 - ((r + c + bi) % 3) * 0.08}
            />
          )),
        ),
      )}

      {/* Green zones */}
      <rect x="40" y="270" width="230" height="58" rx="4" fill="#3F6B4B" opacity="0.85" />
      <rect x="168" y="214" width="96" height="44" rx="4" fill="#4C7A57" opacity="0.85" />
      <rect x="330" y="150" width="96" height="48" rx="4" fill="#4C7A57" opacity="0.85" />

      {/* Pond */}
      <path
        d="M440 140 C 470 120, 540 125, 555 160 C 568 195, 540 235, 495 238 C 450 241, 425 215, 428 185 C 430 165, 425 150, 440 140 Z"
        fill="#5E8DB3"
        stroke="#9CC0DC"
        strokeWidth="1.5"
      />
      <path d="M455 160 q 30 -10 60 4" stroke="#BFD8EA" strokeWidth="1" fill="none" opacity="0.7" />

      {/* Main M30 avenue */}
      <rect x="290" y="20" width="28" height="350" fill="#2B3B55" />
      <line x1="304" y1="24" x2="304" y2="366" stroke="#CFA95B" strokeWidth="1" strokeDasharray="6 6" />
      {/* Cross roads */}
      <rect x="20" y="86" width="270" height="9" fill="#2B3B55" />
      <rect x="20" y="144" width="270" height="9" fill="#2B3B55" />
      <rect x="20" y="202" width="270" height="9" fill="#2B3B55" />
      <rect x="318" y="86" width="110" height="9" fill="#2B3B55" />
      <rect x="318" y="255" width="262" height="9" fill="#2B3B55" />

      {/* LED light points along the avenue */}
      {Array.from({ length: 11 }).map((_, i) => (
        <circle key={i} cx={286} cy={40 + i * 30} r="2" fill="#F6EED8" />
      ))}

      {/* NH 44 */}
      <rect x="0" y="370" width="600" height="38" fill="#0A1428" />
      <line x1="0" y1="389" x2="600" y2="389" stroke="#F6EED8" strokeWidth="1.2" strokeDasharray="14 10" opacity="0.6" />
      <text x="20" y="394" fill="#DEC383" fontSize="11" fontFamily="Manrope" fontWeight="600" letterSpacing="2">
        NH 44 · BANGALORE NATIONAL HIGHWAY
      </text>

      {/* Entrance arch */}
      <rect x="282" y="340" width="44" height="30" fill={NAVY} stroke="#CFA95B" strokeWidth="1.5" />
      <text x="304" y="359" textAnchor="middle" fill="#DEC383" fontSize="8" fontFamily="Manrope" fontWeight="700">
        ENTRY
      </text>

      {/* Amenity pins */}
      {amenityPins.map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="6" fill="#CFA95B" stroke={NAVY} strokeWidth="2" />
          <rect x={p.x + 9} y={p.y - 9} width={p.label.length * 5.6 + 10} height="17" rx="2" fill={NAVY} opacity="0.88" />
          <text x={p.x + 14} y={p.y + 3} fill="#F6EED8" fontSize="9.5" fontFamily="Manrope" fontWeight="600">
            {p.label}
          </text>
        </g>
      ))}

      {/* North arrow */}
      <g transform="translate(556 50)">
        <circle r="14" fill="none" stroke="#DEC383" strokeOpacity="0.6" />
        <path d="M0 -10 L5 4 L0 1 L-5 4 Z" fill="#DEC383" />
        <text y="-17" textAnchor="middle" fill="#DEC383" fontSize="9" fontFamily="Manrope" fontWeight="700">N</text>
      </g>
    </svg>
  );
}

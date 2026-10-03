import { useState } from "react";
import { Briefcase, Building2, Factory, GraduationCap, MapPin, Navigation, Plane, type LucideIcon } from "lucide-react";
import { images } from "../assets/images";
import { project, proximity, type ProximityCategory, type ProximityPoint } from "../data/content";
import LayoutPlan from "./LayoutPlan";
import SectionHeading from "./ui/SectionHeading";
import SmartImage from "./ui/SmartImage";
import Reveal from "./ui/Reveal";

const categoryIcon: Record<ProximityCategory, LucideIcon> = {
  "IT Parks": Building2,
  Industries: Factory,
  SEZs: Briefcase,
  Education: GraduationCap,
  Connectivity: Navigation,
};

const iconFor = (p: ProximityPoint): LucideIcon => (/airport/i.test(p.name) ? Plane : categoryIcon[p.category]);

const categories: ("All" | ProximityCategory)[] = ["All", "IT Parks", "Industries", "SEZs", "Education", "Connectivity"];

// Golden Pride's position on the stylised map (% of width / height)
const SITE = { x: 54, y: 52 };

function StylisedMap({ points, hovered }: { points: ProximityPoint[]; hovered: string | null }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-navy-950 sm:aspect-[4/3]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        {/* subtle grid */}
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={i} stroke="#ffffff" strokeOpacity="0.04" strokeWidth="0.2">
            <line x1={(i + 1) * 10} y1="0" x2={(i + 1) * 10} y2="100" />
            <line x1="0" y1={(i + 1) * 10} x2="100" y2={(i + 1) * 10} />
          </g>
        ))}
        {/* Secondary roads */}
        <path d="M0 40 Q 30 44 52 50 T 100 62" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="0.6" fill="none" />
        <path d="M20 100 Q 30 70 44 46 T 40 0" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="0.5" fill="none" />
        {/* NH 44 — north (Hyderabad) to south (Bangalore) */}
        <path d="M60 -2 C 58 25, 56 40, 56.5 52 S 52 80, 48 102" stroke="#CFA95B" strokeWidth="1.6" fill="none" />
        <path
          d="M60 -2 C 58 25, 56 40, 56.5 52 S 52 80, 48 102"
          stroke="#0A1428"
          strokeWidth="0.35"
          strokeDasharray="1.5 1.5"
          fill="none"
        />
        {/* connectors from site to each point */}
        {points.map((p) => (
          <line
            key={p.name}
            x1={SITE.x}
            y1={SITE.y}
            x2={p.map.x}
            y2={p.map.y}
            stroke="#DEC383"
            strokeWidth={hovered === p.name ? 0.5 : 0.25}
            strokeOpacity={hovered === p.name ? 0.9 : 0.35}
            strokeDasharray="1 1"
          />
        ))}
      </svg>

      {/* Highway labels */}
      <span className="absolute left-[62%] top-[4%] text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300/80">
        ↑ Hyderabad
      </span>
      <span className="absolute bottom-[4%] right-[54%] text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300/80">
        Bangalore ↓
      </span>
      <span className="absolute left-[58%] top-[30%] rotate-[-84deg] text-[9px] font-bold tracking-[0.2em] text-gold-400/70">
        NH 44
      </span>

      {/* Points */}
      {points.map((p) => {
        const Icon = iconFor(p);
        const on = hovered === p.name;
        return (
          <div
            key={p.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
            style={{ left: `${p.map.x}%`, top: `${p.map.y}%`, transform: `translate(-50%,-50%) scale(${on ? 1.25 : 1})` }}
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors ${
                on ? "border-gold-300 bg-gold-400 text-navy-950" : "border-gold-400/60 bg-navy-800 text-gold-300"
              }`}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden />
            </span>
          </div>
        );
      })}

      {/* Golden Pride marker */}
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${SITE.x}%`, top: `${SITE.y}%` }}>
        <span className="absolute inset-0 animate-pulseRing rounded-full bg-gold-400 motion-reduce:animate-none" aria-hidden />
        <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 ring-4 ring-navy-950">
          <MapPin className="h-3 w-3 text-navy-950" aria-hidden />
        </span>
        <span className="absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gold-400 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-navy-950">
          {project.name}
        </span>
      </div>

      <p className="absolute bottom-2 right-3 text-[9px] uppercase tracking-wider text-white/30">Schematic · not to scale</p>
    </div>
  );
}

export default function LocationMap() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [hovered, setHovered] = useState<string | null>(null);
  const visible = filter === "All" ? proximity : proximity.filter((p) => p.category === filter);

  return (
    <section id="location" className="relative overflow-hidden bg-navy-900 py-16 sm:py-24 lg:py-32 text-white sm:py-32">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        {/* ── LAYOUT ─────────────────────────────── */}
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Layout & Location"
            title={`${project.acres} acres, thoughtfully planned`}
            intro={`${project.plots} villa plots set along a central M30 concrete avenue, opening onto NH 44 through a grand entrance arch — with a ${project.pondAcres}-acre pond and themed gardens woven through the layout.`}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-14 [&>*]:min-w-0 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="border border-gold-400/25 bg-navy-800 p-3">
            <div data-scroll-x className="-mx-3 overflow-x-auto px-3 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0">
              <div className="min-w-[600px] sm:min-w-0">
                <LayoutPlan />
              </div>
            </div>
            <p className="mt-3 px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-300 sm:hidden">
              ← Swipe to see the full layout →
            </p>
            <p className="mt-3 px-1 text-[11px] uppercase tracking-[0.16em] text-white/45">
              Illustrative layout · refer to the DTCP-approved plan for plot details
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <SmartImage image={images.layoutRender} tone="dark" className="h-full w-full object-cover" />
              <span className="absolute bottom-0 left-0 bg-navy-950/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-200">
                Aerial view · Entrance &amp; M30 road
              </span>
            </div>
            <SmartImage image={images.masterPlan} tone="dark" className="min-h-[140px] w-full flex-1" />
          </Reveal>
        </div>

        {/* ── LOCATION ───────────────────────────── */}
        <div className="mt-20 grid gap-8 sm:mt-28 [&>*]:min-w-0 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-12">
          <div className="contents lg:block">
            <Reveal className="order-1 min-w-0">
              <h3 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">
                Where the city is <em className="text-gold-300">heading next</em>
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/65">
                {project.location}. {project.highway}. Minutes from IT parks, industrial corridors, SEZs and colleges,
                with a straight run up the highway to Hyderabad’s airport.
              </p>
            </Reveal>

            <div className="order-3 min-w-0">
              <div data-scroll-x className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter places">
                {categories.map((c) => (
                  <button
                    key={c}
                    aria-pressed={filter === c}
                    onClick={() => setFilter(c)}
                    className={`shrink-0 border px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                      filter === c
                        ? "border-gold-400 bg-gold-400 text-navy-950"
                        : "border-white/20 text-white/70 hover:border-gold-300 hover:text-gold-200"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
                {visible.map((p) => {
                  const Icon = iconFor(p);
                  return (
                    <li key={p.name}>
                      <button
                        type="button"
                        onMouseEnter={() => setHovered(p.name)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(p.name)}
                        onClick={() => setHovered(p.name)}
                        aria-pressed={hovered === p.name}
                        className={`flex w-full items-center gap-4 py-4 text-left transition-colors hover:bg-white/[0.03] ${
                          hovered === p.name ? "bg-white/[0.05]" : ""
                        }`}
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold-400/40 text-gold-300">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="flex-1">
                          <span className="block text-[15px] font-medium text-white">{p.name}</span>
                          <span className="text-[11px] uppercase tracking-[0.14em] text-white/40">{p.category}</span>
                        </span>
                        <span className="text-right">
                          <span className="block font-serif text-2xl text-gold-300">{p.distance}</span>
                          {p.time && <span className="text-[11px] text-white/45">{p.time}</span>}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <Reveal delay={120} className="order-2 border border-gold-400/25 p-2 lg:sticky lg:top-28">
            <StylisedMap points={visible} hovered={hovered} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

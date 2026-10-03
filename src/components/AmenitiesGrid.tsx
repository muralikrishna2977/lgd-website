import {
  Baby,
  Droplets,
  Flower2,
  Landmark,
  Lightbulb,
  Mountain,
  Route,
  Sparkles,
  TreePine,
  Trees,
  Trophy,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { images } from "../assets/images";
import { amenities, type AmenityKey } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import SmartImage from "./ui/SmartImage";
import Watermark from "./ui/Watermark";
import Reveal from "./ui/Reveal";

const icons: Record<AmenityKey, LucideIcon> = {
  roads: Route,
  lights: Lightbulb,
  drainage: Droplets,
  pond: Waves,
  nakshatra: Sparkles,
  sports: Trophy,
  kids: Baby,
  rock: Mountain,
  panchavati: Flower2,
  gate: Landmark,
  avenue: TreePine,
  park: Trees,
};

export default function AmenitiesGrid() {
  return (
    <section id="amenities" className="relative overflow-hidden bg-ivory py-16 sm:py-24 lg:py-32">
      <Watermark position="right" />

      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Amenities"
              title="Infrastructure you can see. Nature you can feel."
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink/65">
              Strong foundations underneath — concrete roads, lighting and drainage — and open, green living above.
            </p>
          </Reveal>
        </div>

        {/* Feature images */}
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3">
          <Reveal className="relative aspect-[16/10] overflow-hidden sm:col-span-2">
            <SmartImage image={images.pond} className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-6">
              <p className="font-serif text-2xl text-white sm:text-3xl">The 3.5-acre pond</p>
              <p className="text-sm text-white/75">Walking paths, shaded seating and landscaped edges.</p>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
            <SmartImage image={images.lifestyle} className="h-full w-full object-cover object-top transition-transform duration-[1.5s] hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-6">
              <p className="font-serif text-2xl text-white">Evenings, outdoors</p>
            </div>
          </Reveal>
        </div>

        {/* Icon grid */}
        <ul className="mt-4 grid grid-cols-2 gap-px bg-navy-900/10 lg:grid-cols-4">
          {amenities.map((a, i) => {
            const Icon = icons[a.key];
            return (
              <li key={a.key} className="group bg-ivory">
                <Reveal delay={(i % 4) * 70} className="h-full p-4 transition-colors duration-300 group-hover:bg-white sm:p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12 bg-navy-900 text-gold-300 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-950">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-medium leading-tight text-navy-900 sm:mt-5 sm:text-[22px]">{a.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-ink/60 sm:text-sm sm:leading-relaxed">{a.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

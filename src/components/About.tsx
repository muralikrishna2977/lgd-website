import { images } from "../assets/images";
import { about, stats } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import SmartImage from "./ui/SmartImage";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-ivory py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-site items-center gap-12 px-5 sm:gap-16 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        {/* Image composition */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden">
            <SmartImage image={images.lifestyle} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-10 left-0 aspect-square w-[46%] overflow-hidden border-[6px] border-ivory shadow-xl">
            <SmartImage image={images.pond} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -left-2 top-10 hidden h-40 w-px bg-gold-400 sm:block" aria-hidden />
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          </Reveal>
          <div className="mt-8 space-y-5 text-[15px] leading-[1.85] text-ink/75">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={80 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {about.pillars.map((p, i) => (
              <Reveal key={p.title} delay={100 * i} className="border-t border-gold-400/60 pt-4">
                <h3 className="font-serif text-xl text-navy-900">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="mx-auto mt-20 max-w-site sm:mt-28 px-5 sm:px-8">
        <dl className="grid grid-cols-2 divide-navy-900/10 border-y border-navy-900/10 lg:grid-cols-4 lg:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-6 text-center sm:px-4 sm:py-8">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-serif text-4xl font-medium sm:text-5xl text-navy-900">{s.value}</span>
                {s.unit && <span className="ml-1.5 font-serif text-xl italic text-gold-500">{s.unit}</span>}
                <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

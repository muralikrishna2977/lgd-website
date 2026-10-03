import { images } from "../assets/images";
import { developer } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import SmartImage from "./ui/SmartImage";
import Watermark from "./ui/Watermark";
import Reveal from "./ui/Reveal";

export default function DeveloperProfile() {
  const { lgd, siriSampada: ss } = developer;

  return (
    <section id="developer" className="relative overflow-hidden bg-mist py-16 sm:py-24 lg:py-32">
      <Watermark position="left" />

      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={developer.eyebrow}
            title="Built on trust, rooted in tradition"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-2">
          {/* Lakshmi Gayathri Developers */}
          <Reveal className="flex flex-col overflow-hidden bg-navy-900 text-white">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <SmartImage image={images.lgdBoard} tone="dark" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold-300">The Developer</p>
              <h3 className="mt-1 font-serif text-3xl font-medium">{lgd.name}</h3>
              <p className="mt-6 text-[15px] leading-[1.85] text-white/70">{lgd.text}</p>
            </div>
          </Reveal>

          {/* Siri Sampada */}
          <Reveal delay={120} className="flex flex-col border border-navy-900/10 bg-white p-6 sm:p-10">
            <div className="flex items-center gap-4">
              <SmartImage image={images.siriSampadaLogo} className="h-14 w-24 shrink-0 object-contain" compact="Siri Sampada logo" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold-500">Instituted {ss.since}</p>
                <h3 className="font-serif text-3xl font-medium text-navy-900">{ss.name}</h3>
              </div>
            </div>

            <p className="mt-6 text-[15px] leading-[1.85] text-ink/70">{ss.text}</p>

            {/* Motto */}
            <div className="mt-8 grid grid-cols-3 border-y border-navy-900/10">
              {ss.motto.map((m, i) => (
                <div key={m} className={`px-1 py-5 text-center sm:py-6 ${i > 0 ? "border-l border-navy-900/10" : ""}`}>
                  <p className="font-serif text-lg italic text-navy-900 sm:text-2xl">{m}</p>
                </div>
              ))}
            </div>

            {/* Founders */}
            <div className="mt-auto pt-8">
              <p className="text-[11px] font-semibold uppercase tracking-luxe text-ink/45">Founders</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {ss.founders.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-serif text-lg text-gold-300">
                      {f
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <span className="font-serif text-xl text-navy-900">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { ChevronDown, ShieldCheck } from "lucide-react";
import { images } from "../assets/images";
import { project } from "../data/content";
import KeyholeLogo from "./ui/KeyholeLogo";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950">
      {/* Background: entrance gate at sunset */}
      {images.heroBg.src && (
        <img
          src={images.heroBg.src}
          alt=""
          aria-hidden
          loading="eager"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-[50%_70%]"
        />
      )}
      {/* Navy wash to keep text legible and on-brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-900/55 to-navy-950/90" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,20,40,0.6)_100%)]" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-site flex-col items-center px-5 pb-20 pt-28 text-center sm:px-8">
        {/* Primary graphic: keyhole logo */}
        <div className="animate-rise">
          <KeyholeLogo className="h-28 w-auto drop-shadow-[0_8px_30px_rgba(207,169,91,0.35)] sm:h-32" />
        </div>

        <p className="mt-6 animate-rise text-[13px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-gold-300 [animation-delay:120ms] sm:text-base sm:tracking-[0.2em]">
          <span className="block lg:inline">{project.location}</span>
          <span className="hidden lg:inline"> · </span>
          <span className="block text-balance lg:inline">Bangalore Highway Facing Venture</span>
        </p>

        <h1 className="mt-4 animate-rise font-serif text-5xl font-medium leading-none text-white [animation-delay:200ms] sm:text-7xl lg:text-[5rem]">
          {project.name}
        </h1>

        <p className="mt-5 max-w-xl animate-rise text-balance font-serif text-2xl italic text-gold-100 [animation-delay:300ms] sm:text-3xl">
          {project.tagline}
        </p>

        <p className="mt-4 animate-rise text-[15px] tracking-wide text-white/85 [animation-delay:380ms] sm:text-base">
          {project.acres} Acres &nbsp;·&nbsp; {project.plots} {project.plotType}
        </p>

        <div className="mt-8 flex animate-rise flex-wrap justify-center gap-3 [animation-delay:460ms] sm:gap-4">
          <a
            href="#contact"
            className="whitespace-nowrap bg-gold-400 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-950 transition hover:bg-gold-300 sm:px-9 sm:text-xs sm:tracking-[0.2em]"
          >
            Enquire Now
          </a>
          <a
            href="#location"
            className="whitespace-nowrap border border-white/40 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:border-gold-300 hover:text-gold-200 sm:px-9 sm:text-xs sm:tracking-[0.2em]"
          >
            View Layout
          </a>
        </div>

        <div className="mt-8 flex animate-rise flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-white/85 [animation-delay:540ms] sm:text-sm sm:tracking-[0.16em]">
          <span className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 shrink-0 text-gold-400" aria-hidden /> DTCP Approved
            </span>
            <span className="hidden sm:inline">·</span>
            <span>{project.approvals.dtcp}</span>
          </span>
          <span className="hidden h-4 w-px bg-white/30 lg:block" aria-hidden />
          <span>TS RERA No. {project.approvals.rera}</span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 transition hover:text-gold-300"
      >
        <ChevronDown className="h-7 w-7 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}

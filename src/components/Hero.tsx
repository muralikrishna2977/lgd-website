import { ChevronDown, ChevronsDown, ShieldCheck } from "lucide-react";
import { images } from "../assets/images";
import { project, whatsappUrl } from "../data/content";
import KeyholeLogo from "./ui/KeyholeLogo";
import WhatsAppIcon from "./ui/WhatsAppIcon";

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

      <div className="relative mx-auto flex w-full max-w-site flex-col items-center px-5 pb-20 pt-28 text-center sm:px-8 [@media(min-width:640px)_and_(max-height:760px)]:pt-24">
        {/* Primary graphic: keyhole logo */}
        <div className="animate-rise">
          <KeyholeLogo className="h-20 w-auto drop-shadow-[0_8px_30px_rgba(207,169,91,0.35)] sm:h-32 [@media(min-width:640px)_and_(max-height:760px)]:h-20" />
        </div>

        <p className="mt-6 animate-rise text-[15px] font-semibold uppercase leading-snug tracking-[0.14em] text-gold-300 [animation-delay:120ms] sm:text-lg sm:tracking-[0.18em] lg:text-xl">
          <span className="block lg:inline">{project.location}</span>
          <span className="hidden lg:inline"> · </span>
          <span className="block text-balance lg:inline">Bangalore Highway Facing Venture</span>
        </p>

        <h1 className="mt-4 animate-rise font-serif text-5xl font-medium leading-none text-white [animation-delay:200ms] sm:text-7xl lg:text-[5rem]">
          {project.name}
        </h1>

        {/* Primary action: most visitors won't scroll, so WhatsApp lives right here */}
        <div className="mt-9 flex animate-rise flex-col items-center [animation-delay:300ms]">
          <p className="text-[15px] font-semibold text-gold-200 sm:text-lg">Click here for price &amp; site-visit details</p>
          <ChevronsDown className="mt-1 h-7 w-7 animate-bounce text-gold-300 motion-reduce:animate-none" aria-hidden />
          <span className="wa-breathe relative mt-3 inline-flex">
            <span className="wa-ring absolute inset-0 rounded-full bg-[#25D366]" aria-hidden />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn inline-flex items-center gap-3 whitespace-nowrap rounded-full px-8 py-4 text-lg font-bold sm:px-11 sm:py-5 sm:text-2xl"
            >
              <WhatsAppIcon className="h-7 w-7 drop-shadow sm:h-9 sm:w-9" />
              Chat on WhatsApp
            </a>
          </span>
          <a
            href="#location"
            className="mt-2 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 underline-offset-4 transition hover:text-gold-200 hover:underline sm:text-xs"
          >
            View Layout
          </a>
        </div>

        <div className="mt-6 flex animate-rise flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-white/85 [animation-delay:540ms] sm:text-sm sm:tracking-[0.16em]">
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

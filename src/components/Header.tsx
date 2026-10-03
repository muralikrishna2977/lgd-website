import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, project } from "../data/content";
import KeyholeLogo from "./ui/KeyholeLogo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-navy-900/95 py-3 shadow-lg shadow-navy-950/20 backdrop-blur" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-5 sm:px-8">
        {/* Logo + title, left-aligned */}
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <KeyholeLogo className="h-11 w-auto" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-semibold tracking-wide text-white">{project.name}</span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-gold-300">
              by {project.developer}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.slice(1, -1).map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative text-[13px] font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold-400 after:transition-all ${
                active === l.id ? "text-gold-300 after:w-full" : "text-white/80 after:w-0 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-gold-400 bg-gold-400 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-950 transition hover:bg-transparent hover:text-gold-300"
          >
            Enquire Now
          </a>
        </nav>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-4" aria-label="Mobile">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`border-b border-white/10 py-3 font-serif text-xl ${
                active === l.id ? "text-gold-300" : "text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

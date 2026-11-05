import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { contact, whatsappUrl } from "../data/content";
import WhatsAppIcon from "./ui/WhatsAppIcon";

/**
 * Sticky Call / WhatsApp bar for phones (hidden from lg up).
 * Slides in once the visitor scrolls past the top of the hero.
 */
export default function MobileActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const item = "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em]";

  return (
    <nav
      aria-label="Quick contact"
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gold-400/30 bg-navy-950/95 pb-[env(safe-area-inset-bottom)] backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex">
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={`${item} text-white active:bg-white/10`}>
          <Phone className="h-5 w-5 text-gold-300" aria-hidden />
          Call
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} !flex-[2] bg-[#1DA851] text-white active:bg-[#178F45]`}
        >
          <WhatsAppIcon className="h-6 w-6" />
          Chat on WhatsApp
        </a>
      </div>
    </nav>
  );
}

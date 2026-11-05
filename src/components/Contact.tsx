import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contact, project, whatsappUrl } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import WhatsAppIcon from "./ui/WhatsAppIcon";
import Reveal from "./ui/Reveal";

const label = "text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-200/80";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy-950 py-16 sm:py-24 lg:py-32 text-white sm:py-32">
      {/* Phones: heading → WhatsApp → details. Desktop: heading + details left, WhatsApp right. */}
      <div className="mx-auto grid max-w-site gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-0">
        <div className="lg:col-start-1 lg:row-start-1">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Bookings & Site Visits"
              title="Reserve your golden address"
              intro={`Plots at ${project.name} are limited to ${project.plots}. Message us on WhatsApp for pricing, availability and a site-visit slot.`}
            />
          </Reveal>
        </div>

        {/* Details */}
        <div className="order-last lg:order-none lg:col-start-1 lg:row-start-2">
          <Reveal delay={100}>
            <ul className="space-y-7 lg:mt-12">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
                <div>
                  <p className={label}>Corporate Office</p>
                  <address className="mt-2 not-italic leading-relaxed text-white/80">
                    {contact.addressLines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
                <div>
                  <p className={label}>Project Site</p>
                  <p className="mt-2 text-white/80">{contact.siteAddress}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
                <div>
                  <p className={label}>Call</p>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-1 block py-1.5 text-lg text-white hover:text-gold-300">
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
                <div>
                  <p className={label}>Email</p>
                  <a href={`mailto:${contact.email}`} className="mt-1 block break-all py-1.5 text-white/80 hover:text-gold-300">
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
                <p className="text-white/80">{contact.hours}</p>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* WhatsApp */}
        <Reveal delay={150} className="-mx-5 border-y border-gold-400/25 bg-navy-900 px-5 py-12 sm:mx-0 sm:border-x sm:p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col items-center justify-center text-center"
          >
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none sm:h-28 sm:w-28">
              <WhatsAppIcon className="h-12 w-12 sm:h-14 sm:w-14" />
            </span>
            <span className="mt-7 font-serif text-3xl sm:text-4xl">Chat with us on WhatsApp</span>
            <span className="mt-3 max-w-sm text-balance text-[15px] leading-relaxed text-white/65">
              Tap to send us a message and our team will get back to you.
            </span>
            <span className="wa-breathe mt-8 inline-flex">
              <span className="wa-btn rounded-full px-9 py-4 text-base font-bold">
              Chat on WhatsApp
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

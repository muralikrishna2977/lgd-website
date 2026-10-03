import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { contact, project } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

type Fields = { name: string; phone: string; email: string; plotSize: string; visit: boolean; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = { name: "", phone: "", email: "", plotSize: contact.plotSizes[0], visit: true, message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(f.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit mobile number.";
  if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email address.";
  return e;
}

/**
 * Static site → no backend. On submit we currently simulate success.
 * To receive leads, POST `fields` to a form service (Formspree, Web3Forms,
 * Google Apps Script, etc.) inside handleSubmit.
 */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => setFields((f) => ({ ...f, [k]: v }));

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(fields);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    // TODO: replace with a real request, e.g.
    // await fetch("https://formspree.io/f/XXXX", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(fields) });
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
  }

  const input =
    "w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white placeholder:text-white/35 focus:border-gold-400 focus:outline-none focus:ring-0 transition-colors";
  const label = "text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-200/80";

  return (
    <section id="contact" className="bg-navy-950 py-16 sm:py-24 lg:py-32 text-white sm:py-32">
      {/* Phones: heading → form → details. Desktop: heading + details left, form right. */}
      <div className="mx-auto grid max-w-site gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-0">
        <div className="lg:col-start-1 lg:row-start-1">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Bookings & Site Visits"
              title="Reserve your golden address"
              intro={`Plots at ${project.name} are limited to ${project.plots}. Share your details and our team will call you with pricing, availability and a site-visit slot.`}
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
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-2 block text-white/80 hover:text-gold-300">
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
                <div>
                  <p className={label}>Email</p>
                  <a href={`mailto:${contact.email}`} className="mt-2 block text-white/80 hover:text-gold-300">
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

        {/* Form */}
        <Reveal delay={150} className="-mx-5 border-y border-gold-400/25 bg-navy-900 px-5 py-8 sm:mx-0 sm:border-x sm:p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {status === "sent" ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center" role="status">
              <CheckCircle2 className="h-14 w-14 text-gold-400" aria-hidden />
              <h3 className="mt-6 font-serif text-4xl">Thank you, {fields.name.split(" ")[0]}.</h3>
              <p className="mt-3 max-w-sm text-white/65">
                Our team will call you on {fields.phone} shortly{fields.visit ? " to schedule your site visit" : ""}.
              </p>
              <button
                onClick={() => {
                  setFields(initial);
                  setStatus("idle");
                }}
                className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 underline-offset-4 hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-7 sm:grid-cols-2">
              <h3 className="font-serif text-3xl sm:col-span-2">Enquire now</h3>

              <div className="sm:col-span-2">
                <label htmlFor="name" className={label}>Full name *</label>
                <input id="name" className={input} value={fields.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" aria-invalid={!!errors.name} />
                {errors.name && <p className="mt-1.5 text-xs text-red-300">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className={label}>Mobile *</label>
                <input id="phone" type="tel" inputMode="tel" className={input} placeholder="98765 43210" value={fields.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" aria-invalid={!!errors.phone} />
                {errors.phone && <p className="mt-1.5 text-xs text-red-300">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className={label}>Email</label>
                <input id="email" type="email" className={input} value={fields.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" aria-invalid={!!errors.email} />
                {errors.email && <p className="mt-1.5 text-xs text-red-300">{errors.email}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="plot" className={label}>Preferred plot size</label>
                <select id="plot" className={`${input} [&>option]:bg-navy-900`} value={fields.plotSize} onChange={(e) => set("plotSize", e.target.value)}>
                  {contact.plotSizes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={label}>Message</label>
                <textarea id="message" rows={3} className={`${input} resize-none`} value={fields.message} onChange={(e) => set("message", e.target.value)} />
              </div>

              <label className="flex cursor-pointer items-center gap-3 text-sm text-white/75 sm:col-span-2">
                <input type="checkbox" checked={fields.visit} onChange={(e) => set("visit", e.target.checked)} className="h-4 w-4 accent-gold-400" />
                I’d like to schedule a site visit
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-gold-400 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-navy-950 transition hover:bg-gold-300 disabled:opacity-60 sm:col-span-2"
              >
                {status === "sending" ? "Sending…" : "Request a call back"}
              </button>
              <p className="text-[11px] leading-relaxed text-white/40 sm:col-span-2">
                By submitting, you agree to be contacted by {project.developer} about {project.name}.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

import { images } from "../assets/images";
import { navLinks, project } from "../data/content";
import KeyholeLogo from "./ui/KeyholeLogo";
import SmartImage from "./ui/SmartImage";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-400/20 bg-navy-950 pb-20 text-white lg:pb-0">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr]">
        {/* Keyhole logo + legal block */}
        <div className="flex gap-5">
          <KeyholeLogo className="h-20 w-auto shrink-0" />
          <div>
            <p className="font-serif text-3xl">{project.name}</p>
            <p className="mt-1 font-serif italic text-gold-200/80">{project.tagline}</p>
            <dl className="mt-5 space-y-1.5 text-[12px] tracking-wide text-white/60">
              <div>
                <dt className="inline font-semibold text-gold-300">DTCP Approved · </dt>
                <dd className="inline">{project.approvals.dtcp}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-gold-300">TS RERA No. · </dt>
                <dd className="inline">{project.approvals.rera}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-gold-300">Location · </dt>
                <dd className="inline">{project.location}, facing NH 44</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Developer logos */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-luxe text-white/40">A project by</p>
          <div className="mt-5 flex items-center gap-4">
            <SmartImage image={images.lgdLogo} tone="dark" className="h-16 w-auto object-contain" compact="LGD logo" />
            <SmartImage image={images.siriSampadaLogo} tone="dark" className="h-16 w-28 object-contain" compact="Siri Sampada logo" />
          </div>
          <p className="mt-4 text-sm text-white/60">{project.developer}</p>
        </div>

        {/* Links */}
        <nav aria-label="Footer">
          <p className="text-[11px] font-semibold uppercase tracking-luxe text-white/40">Explore</p>
          <ul className="mt-5 grid grid-cols-2 gap-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-white/70 transition hover:text-gold-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-5 py-6 text-[11px] leading-relaxed text-white/40 sm:px-8 md:flex-row md:justify-between">
          <p>© {year} {project.developer}. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            Images are artistic impressions and the layout shown is illustrative. Refer to the DTCP-approved plan and
            TS RERA registration ({project.approvals.rera}) for authoritative details.
          </p>
        </div>
      </div>
    </footer>
  );
}

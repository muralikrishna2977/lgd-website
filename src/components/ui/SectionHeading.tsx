interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light" }: Props) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-luxe ${
          dark ? "text-gold-300" : "text-gold-500"
        } ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-current" aria-hidden />
        {eyebrow}
        {centered && <span className="h-px w-8 bg-current" aria-hidden />}
      </p>
      <h2
        className={`mt-4 font-serif text-4xl font-medium leading-[1.1] sm:text-5xl ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed ${dark ? "text-white/70" : "text-ink/70"}`}>{intro}</p>
      )}
    </div>
  );
}

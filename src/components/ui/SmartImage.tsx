import { ImageIcon } from "lucide-react";
import type { SiteImage } from "../../assets/images";

interface Props {
  image: SiteImage;
  className?: string;
  /** Placeholder styling for dark backgrounds. */
  tone?: "light" | "dark";
  loading?: "lazy" | "eager";
  /** For small logo slots: shows a short label; full description in the tooltip. */
  compact?: string;
}

/**
 * Renders the image if it has a src; otherwise a clearly labelled
 * placeholder naming the file that belongs in that slot.
 */
export default function SmartImage({ image, className = "", tone = "light", loading = "lazy", compact }: Props) {
  if (image.src) {
    return <img src={image.src} alt={image.alt} loading={loading} className={className} />;
  }

  const toneClasses =
    tone === "dark"
      ? "border-gold-300/50 bg-white/5 text-gold-200"
      : "border-navy-700/30 bg-mist text-navy-700";

  if (compact) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        title={`Placeholder: ${image.placeholder}`}
        className={`flex items-center justify-center border border-dashed text-center text-[9px] font-semibold uppercase leading-tight tracking-wider ${toneClasses} ${className}`}
      >
        {compact}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={image.alt}
      className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed p-3 text-center ${toneClasses} ${className}`}
    >
      <ImageIcon className="h-5 w-5 opacity-70" aria-hidden />
      <span className="text-[11px] font-semibold uppercase leading-tight tracking-wider">Placeholder</span>
      <span className="text-[11px] leading-snug opacity-80">{image.placeholder}</span>
    </div>
  );
}

import { images } from "../../assets/images";

interface Props {
  className?: string;
  /** Colour of the vector stand-in (ignored once the real logo is set). */
  color?: string;
}

/**
 * Golden Pride keyhole logo.
 *
 * PLACEHOLDER: until `images.keyholeLogo.src` is set (image_12.png),
 * a vector keyhole stand-in is drawn so layouts look right. In dev mode
 * it carries a small dashed outline so it can't be mistaken for final art.
 */
export default function KeyholeLogo({ className = "", color = "#CFA95B" }: Props) {
  const logo = images.keyholeLogo;

  if (logo.src) {
    return <img src={logo.src} alt={logo.alt} className={`object-contain ${className}`} />;
  }

  return (
    <svg
      viewBox="0 0 100 120"
      role="img"
      aria-label={logo.alt}
      className={`${className} ${import.meta.env.DEV ? "outline-dashed outline-1 outline-offset-4 outline-gold-400/60" : ""}`}
    >
      <title>{logo.placeholder}</title>
      {/* outer ring */}
      <circle cx="50" cy="50" r="46" fill="none" stroke={color} strokeWidth="2.5" />
      <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="0.8" opacity="0.6" />
      {/* keyhole */}
      <circle cx="50" cy="40" r="14" fill={color} />
      <path d="M42 48 H58 L63 82 H37 Z" fill={color} />
      {/* sun rays inside the keyhole */}
      <circle cx="50" cy="40" r="5" fill="#0F1F3D" opacity="0.35" />
      <path d="M30 104 H70" stroke={color} strokeWidth="1.5" />
      <path d="M38 112 H62" stroke={color} strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

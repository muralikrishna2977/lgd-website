import KeyholeLogo from "./KeyholeLogo";

interface Props {
  position?: "left" | "right";
  color?: string;
}

/** Large, very low-opacity keyhole logo behind a section. Parent must be `relative overflow-hidden`. */
export default function Watermark({ position = "right", color = "#0F1F3D" }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-1/2 hidden w-[520px] -translate-y-1/2 opacity-[0.045] lg:block ${
        position === "right" ? "-right-32" : "-left-32"
      }`}
    >
      <KeyholeLogo className="h-auto w-full !outline-none" color={color} />
    </div>
  );
}

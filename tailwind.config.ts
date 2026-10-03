import type { Config } from "tailwindcss";

/**
 * Golden Pride design tokens.
 * Navy is sampled from the LGD logo board; gold from the keyhole / sunrise marks.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A1428",
          900: "#0F1F3D",
          800: "#162B52",
          700: "#1F3A68",
          600: "#2C4C82",
        },
        gold: {
          100: "#F6EED8",
          200: "#EBDBAE",
          300: "#DEC383",
          400: "#CFA95B",
          500: "#B88F3F",
          600: "#977231",
        },
        ivory: "#F9F7F2",
        mist: "#EEF0F3",
        ink: "#1B2230",
      },
      fontFamily: {
        // Display serif for headings, humanist sans for body & UI
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
      },
      maxWidth: {
        site: "1240px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.6)", opacity: "0.8" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(.2,.7,.2,1) both",
        pulseRing: "pulseRing 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

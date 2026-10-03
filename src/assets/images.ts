/**
 * ─────────────────────────────────────────────────────────────
 *  IMAGE REGISTRY
 *  Every image on the site is referenced from here.
 *
 *  `src: null`  → a labelled placeholder box is rendered instead,
 *  telling you exactly which file belongs there. Drop the file into
 *  /public/logos or /public/images and set its path below, wrapped in
 *  asset("images/…") — no leading slash.
 * ─────────────────────────────────────────────────────────────
 */

/** Prefixes a /public path with Vite's base, so images work in a sub-folder (GitHub Pages) and at a domain root. */
const asset = (path: string) => import.meta.env.BASE_URL + path;

export interface SiteImage {
  src: string | null;
  alt: string;
  /** Shown inside the placeholder when src is null. */
  placeholder: string;
}

export const images = {
  // ── Logos ────────────────────────────────────────────────
  keyholeLogo: {
    src: asset("logos/lgd-mark.webp"), // LGD mark (sun + roof + Ganesha + LGD), no wordmark
    alt: "Golden Pride by Lakshmi Gayathri Developers logo",
    placeholder: "Project logo",
  },
  lgdLogo: {
    src: asset("logos/lgd-logo.webp"), // full LGD logo with "LAKSHMI GAYATHRI DEVELOPERS" wordmark (white text — dark backgrounds only)
    alt: "Lakshmi Gayathri Developers logo",
    placeholder: "LGD Ganesha / sunrise logo (transparent PNG)",
  },
  siriSampadaLogo: {
    src: null, // e.g. asset("logos/siri-sampada.png")
    alt: "Siri Sampada logo",
    placeholder: "Siri Sampada logo",
  },

  // ── Photography / renders (supplied) ─────────────────────
  heroBg: {
    src: asset("images/entrance-gate.webp"),
    alt: "Golden Pride entrance arch at sunset",
    placeholder: "Hero background — entrance gate",
  },
  lifestyle: {
    src: asset("images/hero-family-sunset.webp"),
    alt: "Family walking beside the pond at Golden Pride",
    placeholder: "Lifestyle photo",
  },
  pond: {
    src: asset("images/pond-walkway.webp"),
    alt: "Landscaped pond with walkway and bench",
    placeholder: "Pond photo",
  },
  layoutRender: {
    src: asset("images/layout-aerial-render.webp"),
    alt: "Aerial render of the Golden Pride layout with M30 road and amenities",
    placeholder: "70-acre layout render — image_6.png",
  },
  lgdBoard: {
    src: asset("images/lgd-logo-board.webp"),
    alt: "A project by Lakshmi Gayathri Developers",
    placeholder: "LGD logo board",
  },

  // ── Still needed ─────────────────────────────────────────
  masterPlan: {
    src: null, // e.g. asset("images/master-plan.webp") — the plotted layout drawing
    alt: "Golden Pride master plan",
    placeholder: "Master plan / plotted layout drawing (brochure)",
  },
} satisfies Record<string, SiteImage>;

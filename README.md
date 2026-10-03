# Golden Pride — Marketing Site

Static single-page site for **Golden Pride** by **Lakshmi Gayathri Developers**.
React 18 · Vite 5 · TypeScript · Tailwind CSS 3 · lucide-react icons.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs static files to /dist — deploy to Netlify, Vercel, S3, cPanel, etc.
```

## File structure

```
golden-pride/
├── index.html                 # fonts (Cormorant Garamond + Manrope), SEO meta
├── tailwind.config.ts         # brand colours, fonts, animations
├── public/
│   ├── favicon.svg            # temporary — replace with keyhole logo
│   ├── images/                # supplied photos (optimised WebP)
│   └── logos/                 # ← put keyhole / LGD / Siri Sampada logos here
└── src/
    ├── App.tsx                # section order
    ├── data/content.ts        # ALL copy, numbers, approvals, contact info
    ├── assets/images.ts       # ALL image paths + placeholder labels
    └── components/
        ├── Header.tsx         # fixed nav, keyhole logo left, scroll-spy, mobile menu
        ├── Hero.tsx           # full-screen gate photo, keyhole logo, tagline, CTAs
        ├── About.tsx          # project intro, 3 pillars, stats band
        ├── LocationMap.tsx    # layout + self-contained interactive location map
        ├── LayoutPlan.tsx     # stylised 70-acre layout SVG
        ├── AmenitiesGrid.tsx  # feature photos + 12-item icon grid (keyhole watermark)
        ├── DeveloperProfile.tsx # LGD + Siri Sampada (keyhole watermark)
        ├── ContactForm.tsx    # validated enquiry form + addresses
        ├── Footer.tsx         # keyhole logo + DTCP / RERA legal text, developer logos
        └── ui/                # SmartImage, KeyholeLogo, Watermark, SectionHeading, Reveal
```

## Images — where each one goes

Set `src` in `src/assets/images.ts`. Any image with `src: null` renders a dashed, labelled placeholder.

| Key | File to supply | Used in |
|---|---|---|
| `keyholeLogo` | **image_12.png** (transparent PNG/SVG) → `/logos/golden-pride-keyhole.png` | Header (left), Hero (centre), Footer, low-opacity watermark in Amenities & Developer. A vector stand-in is drawn until set. |
| `lgdLogo` | LGD Ganesha/sunrise mark, transparent → `/logos/lgd-mark.png` | Footer |
| `siriSampadaLogo` | Siri Sampada logo → `/logos/siri-sampada.png` | Developer card, Footer |
| `masterPlan` | Plotted layout drawing from brochure | Layout & Location |
| `heroBg` ✅ | entrance-gate.webp (supplied) | Hero background |
| `lifestyle` ✅ | hero-family-sunset.webp (supplied) | About, Amenities |
| `pond` ✅ | pond-walkway.webp (supplied) | About, Amenities |
| `layoutRender` ✅ | layout-aerial-render.webp (supplied) | Layout & Location |
| `lgdBoard` ✅ | lgd-logo-board.webp (supplied) | Developer card |

## Copy still to fill — search `TODO(brochure)` in `src/data/content.ts`

- Proximity points: only *Divitipally IT Park — 4 km* was available. Other names/distances show `TBC`.
  Each point also has an `map: {x, y}` position (%) for the stylised map.
- Corporate office address, phone, email.
- Plot sizes for the enquiry dropdown.
- Any extra amenities from the brochure amenity pages.

## Contact form

The site is static, so `ContactForm.tsx` validates and shows a success state but doesn't send anywhere yet.
Add a `fetch` to Formspree / Web3Forms / a Google Apps Script URL in `handleSubmit` (marked `TODO`).

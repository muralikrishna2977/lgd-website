/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE COPY LIVES HERE.
 *  Edit text in this file — components only read from it.
 *
 *  Anything marked  TODO(brochure)  could not be read from the
 *  materials supplied and must be filled from the brochure pages
 *  (image_0 … image_7) before launch. Do not publish guesses.
 * ─────────────────────────────────────────────────────────────
 */

export const project = {
  name: "Golden Pride",
  tagline: "Today’s Golden Address, Tomorrow’s Pride.",
  developer: "Lakshmi Gayathri Developers",
  developerShort: "LGD",
  location: "Jadcherla, Telangana",
  highway: "Facing NH 44 — Bangalore National Highway",
  acres: 70,
  plots: 628,
  plotType: "Residential Villa Plots",
  pondAcres: 3.5,
  approvals: {
    dtcp: "L.P. No. 96/2021/H Bhureddypalli",
    rera: "P01400003107",
  },
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "location", label: "Layout & Location" },
  { id: "amenities", label: "Amenities" },
  { id: "developer", label: "Developer" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  eyebrow: "The Project",
  title: "A golden address on the Bangalore highway",
  paragraphs: [
    `Golden Pride is a ${project.acres}-acre gated layout of ${project.plots} residential villa plots at Jadcherla, set directly on NH 44 — the Hyderabad–Bangalore National Highway. It is planned as a complete neighbourhood: wide concrete roads, underground utilities, and more open green space than built space.`,
    `At its heart is a ${project.pondAcres}-acre landscaped pond, ringed by walking paths, gardens and shaded seating. Around it sit a sports arena, children’s play areas and traditional green spaces such as Nakshatra Vanam and Panchavati Vatika.`,
    `Every plot is DTCP approved and TS RERA registered, so the land you buy today is clear, legal and ready to build on — an address that grows in value as the corridor around it grows.`,
  ],
  pillars: [
    { title: "Clear Title", text: "DTCP approved layout, TS RERA registered project." },
    { title: "Highway Frontage", text: "Direct access from NH 44 with a grand entrance arch." },
    { title: "Green by Design", text: "A 3.5-acre pond, themed gardens and tree-lined avenues." },
  ],
};

export const stats = [
  { value: "70", unit: "Acres", label: "Gated community" },
  { value: "628", unit: "Plots", label: "Residential villa plots" },
  { value: "3.5", unit: "Acres", label: "Landscaped pond" },
  { value: "M30", unit: "", label: "Concrete internal roads" },
];

export type ProximityCategory = "IT Parks" | "Industries" | "SEZs" | "Education" | "Connectivity";

export interface ProximityPoint {
  name: string;
  category: ProximityCategory;
  /** Display distance, e.g. "4 km". */
  distance: string;
  /** Optional drive time, e.g. "5 min". */
  time?: string;
  /** Position on the stylised map, in % of map width/height. */
  map: { x: number; y: number };
}

/**
 * Proximity points.
 * Only "Divitipally IT Park — 4 km" was given explicitly.
 * TODO(brochure): replace every "TBC" and every "[…]" name with the
 * exact wording and figures from the location map page.
 */
export const proximity: ProximityPoint[] = [
  { name: "Divitipally IT Park", category: "IT Parks", distance: "4 km", map: { x: 70, y: 40 } },
  { name: "[IT / Logistics Park — from brochure]", category: "IT Parks", distance: "TBC", map: { x: 82, y: 58 } },
  { name: "[Industrial Area — from brochure]", category: "Industries", distance: "TBC", map: { x: 28, y: 30 } },
  { name: "[Pharma / Manufacturing Unit — from brochure]", category: "Industries", distance: "TBC", map: { x: 22, y: 64 } },
  { name: "[SEZ — from brochure]", category: "SEZs", distance: "TBC", map: { x: 74, y: 76 } },
  { name: "[Engineering College — from brochure]", category: "Education", distance: "TBC", map: { x: 36, y: 82 } },
  { name: "Jadcherla Town", category: "Connectivity", distance: "TBC", map: { x: 44, y: 46 } },
  { name: "Rajiv Gandhi International Airport", category: "Connectivity", distance: "TBC", time: "TBC", map: { x: 58, y: 8 } },
];

export const amenities = [
  { key: "roads", title: "M30 Concrete Roads", text: "Wide internal roads built to M30 concrete grade." },
  { key: "lights", title: "LED Street Lighting", text: "Energy-efficient LED lights along every avenue." },
  { key: "drainage", title: "Underground Drainage", text: "Concealed drainage network across the layout." },
  { key: "pond", title: "3.5-Acre Pond", text: "A landscaped lake with walkways and seating." },
  { key: "nakshatra", title: "Nakshatra Vanam", text: "A grove of 27 star-trees from Vedic tradition." },
  { key: "sports", title: "Sports Arena", text: "Courts for basketball and outdoor games." },
  { key: "kids", title: "Children’s Play Area", text: "Safe, shaded play zones close to home." },
  { key: "rock", title: "Rock Garden", text: "Sculpted stone landscape for quiet evenings." },
  { key: "panchavati", title: "Panchavati Vatika", text: "Sacred garden of the five auspicious trees." },
  { key: "gate", title: "Grand Entrance Arch", text: "Gated entry with landscaped approach from NH 44." },
  { key: "avenue", title: "Avenue Plantation", text: "Tree-lined roads and green buffers throughout." },
  { key: "park", title: "Landscaped Parks", text: "Fountain gardens and lawns within the layout." },
  // TODO(brochure): add any remaining items from the amenities pages (image_4 / image_7).
] as const;

export type AmenityKey = (typeof amenities)[number]["key"];

export const developer = {
  eyebrow: "The Developers",
  lgd: {
    name: "Lakshmi Gayathri Developers",
    text: "Lakshmi Gayathri Developers brings Golden Pride to Jadcherla — a project founded on the belief that a home begins with land you can trust. Every plot is planned, approved and delivered with clarity, so families can build their future on firm ground.",
    // TODO(brochure): add LGD’s own background / leadership if the brochure includes it.
  },
  siriSampada: {
    name: "Siri Sampada",
    since: 2013,
    founders: ["Pradeep Maganti", "Raj Maganti"],
    motto: ["Trust", "Innovation", "Tradition"],
    text: "Instituted in 2013, Siri Sampada has grown into a leading name in plotted development, known for transparent dealings and layouts delivered as promised. Founded by Pradeep Maganti and Raj Maganti, the group combines modern planning with traditional values.",
  },
};

export const contact = {
  // TODO(brochure): replace with the exact address, phone and email from the brochure.
  addressLines: [
    "Lakshmi Gayathri Developers",
    "[Office address line 1]",
    "[Office address line 2]",
    "[City], Telangana – [PIN]",
  ],
  siteAddress: "Golden Pride, Bhureddypalli, Jadcherla, Telangana (on NH 44)",
  phone: "+91 00000 00000",
  // TODO(brochure): WhatsApp number — country code + number, digits only (e.g. "919876543210")
  whatsapp: "9346575927",
  email: "sales@example.com",
  hours: "Site visits: Daily, 9:00 AM – 6:00 PM",
  plotSizes: [
    "Any size",
    // TODO(brochure): replace with actual plot sizes in sq. yards
    "150 – 200 sq. yd",
    "200 – 300 sq. yd",
    "300+ sq. yd",
  ],
};

/**
 * Central source of truth for every business detail on the site.
 * Nothing below should be duplicated inside components.
 *
 * ---------------------------------------------------------------------------
 * TODO(client): VERIFY BEFORE LAUNCH
 * ---------------------------------------------------------------------------
 * The previous Squarespace site (zewdituwiring.com) has expired, so the phone
 * number and email address could not be recovered. Both are set to null below.
 * Every phone and email affordance on the site hides itself while these are
 * null, so nothing renders as a broken link. Fill them in and the call and
 * mail buttons appear automatically across the whole site.
 *
 * Also confirm with the client: the service list, the "21+ years of combined
 * experience" claim, and the licence number.
 * ---------------------------------------------------------------------------
 */

export type NullableString = string | null

export const business = {
  name: "Zewditu Electrical Services",
  legalName: "Zewditu Electrical Services, LLC",
  shortName: "Zewditu Electrical",
  motto: "Wired by Excellence, Powered by Knowledge",
  founded: 2021,
  owner: "C.J. Vielle",
  ownerTitle: "Owner",

  /** TODO(client): verify and fill in. Null hides every call affordance. */
  phone: null as NullableString,
  /** TODO(client): verify and fill in. Null hides every mail affordance. */
  email: null as NullableString,

  address: {
    street: "271 Division Street",
    city: "Amsterdam",
    state: "NY",
    zip: "12010",
    county: "Montgomery County",
  },

  hours: [
    { days: "Monday to Friday", time: "8:00 AM to 5:00 PM" },
    { days: "Saturday and Sunday", time: "Closed" },
  ],

  serviceArea:
    "Amsterdam and the greater Mohawk Valley, including Montgomery, Fulton, Schenectady, and Saratoga counties.",
} as const

export const addressLine = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.legalName}, ${addressLine}`,
)}`

/** Digits only, for tel: hrefs. Null when the number is not yet verified. */
export const telHref = business.phone
  ? `tel:${business.phone.replace(/[^\d+]/g, "")}`
  : null

export const mailHref = business.email ? `mailto:${business.email}` : null

/**
 * Federal and state registration data. These are public identifiers that
 * general contractors and agencies need when adding a subcontractor to a bid
 * package, which is why they get their own page.
 */
export const registrations = [
  { label: "UEI", value: "G1B4F2S8DQH9" },
  { label: "CAGE", value: "9EC84" },
  { label: "Primary NAICS", value: "238210" },
  { label: "NY DOS ID", value: "5968889" },
] as const

export const certifications = [
  {
    name: "Minority and Women Owned Business Enterprise",
    abbr: "M/WBE",
    detail:
      "Certified as both a minority owned and a woman owned business, which lets prime contractors count our scope toward M/WBE participation goals on public work.",
  },
  {
    name: "Woman Owned Small Business",
    abbr: "WOSB",
    detail:
      "Registered federally as a woman owned small business, active in the System for Award Management.",
  },
  {
    name: "Section 3 Business Concern",
    abbr: "Section 3",
    detail:
      "Qualified under HUD Section 3, so our labor hours count toward Section 3 benchmarks on federally assisted housing projects.",
  },
  {
    name: "Small Disadvantaged Business",
    abbr: "SDB",
    detail:
      "Self certified small disadvantaged business, and an African American owned firm.",
  },
] as const

export type ServiceCategory = "residential" | "commercial"

export type Service = {
  slug: string
  title: string
  summary: string
  detail: string
  category: ServiceCategory
  icon:
    | "panel"
    | "rewire"
    | "generator"
    | "ev"
    | "lighting"
    | "troubleshoot"
    | "turnover"
    | "maintenance"
    | "code"
    | "retrofit"
}

export const services: Service[] = [
  {
    slug: "panel-upgrades",
    title: "Panel upgrades and service changes",
    summary:
      "Replace an undersized or obsolete load center with a modern panel sized for how the building is actually used.",
    detail:
      "Older homes in the Mohawk Valley were wired for a fraction of the load they carry today. We size the service correctly, coordinate the utility disconnect and reconnect, install the new load center with a labeled circuit directory, and leave the work ready for inspection.",
    category: "residential",
    icon: "panel",
  },
  {
    slug: "rewiring",
    title: "Rewiring and old wiring replacement",
    summary:
      "Full or partial rewires, including knob and tube and deteriorated cloth wiring found in older housing stock.",
    detail:
      "We plan a rewire around the way you live in the building, staging the work so the house stays usable. Circuits are separated sensibly, grounding is brought up to current code, and every device is tested before we close walls back up.",
    category: "residential",
    icon: "rewire",
  },
  {
    slug: "generators",
    title: "Standby generator installation",
    summary:
      "Automatic standby systems and transfer switches so essential circuits stay live through an outage.",
    detail:
      "We help you decide which circuits genuinely need backup, install the transfer switch and generator pad, and commission the system so it exercises and transfers the way it should.",
    category: "residential",
    icon: "generator",
  },
  {
    slug: "ev-charging",
    title: "EV charger installation",
    summary:
      "Level 2 home charging installed on a dedicated circuit, with the panel capacity checked first.",
    detail:
      "Charger installs go wrong when nobody checks the existing service. We run a load calculation before quoting, then install on a properly sized dedicated circuit with the disconnect and protection the code requires.",
    category: "residential",
    icon: "ev",
  },
  {
    slug: "lighting-devices",
    title: "Lighting, outlets, and switches",
    summary:
      "Fixture work, added circuits, additional outlets, dimmers, fans, and device replacement.",
    detail:
      "The everyday work that makes a building easier to live in. Added kitchen circuits, exterior and security lighting, bath fans vented properly, and outlets where you actually need them.",
    category: "residential",
    icon: "lighting",
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting and repair",
    summary:
      "Tracking down the cause of a breaker that keeps tripping, a dead circuit, or intermittent power.",
    detail:
      "We diagnose before we replace. That means finding the actual fault rather than swapping parts until the symptom goes away, then repairing it so it stays fixed.",
    category: "residential",
    icon: "troubleshoot",
  },
  {
    slug: "unit-turnovers",
    title: "Unit turnovers and housing authority work",
    summary:
      "Fast, documented electrical turnovers for housing authorities and property managers.",
    detail:
      "Turnovers live or die on scheduling and paperwork. We work to the unit turnover window, document what was found and what was corrected, and keep units moving back into occupancy.",
    category: "commercial",
    icon: "turnover",
  },
  {
    slug: "maintenance-contracts",
    title: "Maintenance and repair contracts",
    summary:
      "Ongoing electrical maintenance for multi building portfolios and public properties.",
    detail:
      "Recurring inspection and repair on a schedule you set, with consistent reporting so the same issue does not get logged four times across four buildings.",
    category: "commercial",
    icon: "maintenance",
  },
  {
    slug: "code-corrections",
    title: "Code corrections and violation removal",
    summary:
      "Correcting cited electrical deficiencies and getting the property back into compliance.",
    detail:
      "We read the citation, scope exactly what it requires, correct it, and give you documentation that holds up on reinspection.",
    category: "commercial",
    icon: "code",
  },
  {
    slug: "lighting-retrofits",
    title: "Energy efficient lighting retrofits",
    summary:
      "LED retrofits and controls that lower operating cost across common areas and exteriors.",
    detail:
      "Retrofits are measured in the utility bill, not the fixture count. We look at run hours, controls, and light levels together so the savings are real and the spaces stay well lit.",
    category: "commercial",
    icon: "retrofit",
  },
]

export const residentialServices = services.filter((s) => s.category === "residential")
export const commercialServices = services.filter((s) => s.category === "commercial")

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" },
] as const

export const siteUrl = "https://www.zewdituwiring.com"

export const novus = {
  label: "Made by Novus",
  href: "https://novusnyc.org",
} as const

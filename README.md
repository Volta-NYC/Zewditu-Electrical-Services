# Zewditu Electrical Services

Website for **Zewditu Electrical Services, LLC**, a woman owned and minority owned
electrical contractor in Amsterdam, New York.

Live domain: `zewdituwiring.com` (currently expired, see *Open items* below)

---

## Overview

The site serves two distinct audiences, and the architecture reflects that:

1. **Homeowners** in the Mohawk Valley who need panel upgrades, rewiring,
   generators, EV charging, and repair work.
2. **General contractors, property managers, and housing authorities** who need a
   certified M/WBE and Section 3 electrical subcontractor for publicly funded
   work.

That second audience is the real differentiator, so the certifications get a
dedicated `/credentials` route built as a reference document an estimator can
pull numbers from.

---

## Art direction

**Industrial craft meets civic trust.** The visual idea is a well organised load
center: numbered rows, thin rules, labeled circuits, and copper conductor lines
connecting one section to the next.

| Role | Token | Value |
| --- | --- | --- |
| Canvas | `paper` | `#F4F1EC` |
| Dark canvas | `ink` | `#14161A` |
| Primary action | `copper` | `#B45F2B` |
| Small copper text | `copper-deep` | `#96491E` |
| Accent | `amber` | `#E2A33C` |
| Muted text | `slate-muted` | `#5C6672` |

Type: **Archivo** for display, **IBM Plex Sans** for body, **IBM Plex Mono** for
technical labels such as registration numbers and circuit indices. The mono face
is doing real work here, not decoration: it marks the data an electrical
contractor is actually judged on.

No client photography was supplied, so rather than padding the site with stock
images the imagery is drawn: a single line schematic backdrop in the hero and a
set of line icons in the same language. See *Open items*.

---

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Hosted on Vercel

---

## Project structure

```
src/app                    Routes: /, /services, /about, /credentials, /contact
src/app/icon.svg           Favicon
src/app/apple-icon.png     App icon
src/lib/site.ts            Single source of truth for every business detail
src/lib/components         Navbar, footer, reveal, UI primitives, schematic, icons
```

Every business fact lives in `src/lib/site.ts`. Nothing is hard coded in a page.

---

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

---

## Open items before launch

These need the client's input. They are called out with `TODO(client)` comments
in the code as well.

- [ ] **Phone number and email address.** The previous Squarespace site expired
      before this rebuild, so neither could be recovered, and inventing contact
      details for a real business is not acceptable. Both are set to `null` in
      `src/lib/site.ts`. Every call and email affordance across the site hides
      itself while they are null, so nothing renders as a broken link. Fill them
      in and the buttons appear everywhere automatically. **This is the one
      blocker for launch.**
- [ ] **Contact form destination.** Set `NEXT_PUBLIC_CONTACT_ENDPOINT` in the
      Vercel project. Until it is set the form validates and then directs the
      visitor to call or email instead of silently failing.
- [ ] **Service list sign off.** The ten services were assembled from the
      client's verified trade description (panel upgrades, generator
      installation, rewiring, green energy) plus the three headings on the old
      site. Confirm the list matches what the shop actually takes on.
- [ ] **Founder story and a portrait.** The strongest thing the About page could
      carry is C.J. Vielle's own account of starting the company. The page is
      built to receive it.
- [ ] **Real project photography.** Panels, installs, the crew, the shop. This
      is the single biggest upgrade available to the site.
- [ ] **Licence number** and any insurance details worth publishing.
- [ ] **"21+ years of combined experience"** carried over from the old site.
      Confirm it is still accurate.

### Verified source material

Business facts used here were confirmed against public records rather than
guessed: NY Department of State filing (ID 5968889, formed March 22, 2021,
Montgomery County), SAM registration (UEI G1B4F2S8DQH9, CAGE 9EC84, NAICS
238210, WOSB and minority owned), a construction directory listing (271 Division
Street, owner C.J. Vielle, motto "Wired by Excellence, Powered by Knowledge"),
and a local listing for the business hours.

---

## Standard

This site is built against the Volta Website Build Standard in `AGENTS.md` and
`CLAUDE.md`, which are canonical mirrors of each other.

Documented exception to the standard: the checklist requires verified phone
numbers and emails. Those could not be verified because the source site is
offline, so instead of publishing a guess the components degrade gracefully and
the gap is tracked above.

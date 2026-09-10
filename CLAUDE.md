# demo-plantcare — Understory Plant Co. (WebVybe portfolio demo)

**This is not a real business.** Understory Plant Co. is a fictional
interior plant care and plantscaping service invented to showcase
WebVybe's local-service client-site template. Do not present anything
here as a real operating business (no fabricated review counts, no fake
press logos, no claim of a real physical presence beyond the demo copy).

## Why this vertical

Picked from the "Leads — San Diego Metro" Notion database using the same
logic as the salon and bakery demos: with Salon/Spa (4 leads) and
Restaurant/Cafe (2 leads) now built, Retail and Service are tied at 1 lead
each (Sunflower Boutique; Plantopia — an interior/office plant maintenance
service). No Automotive or Art leads exist in the database at all — same
gap noted in both prior decisions.

The tie was broken on the same secondary criteria used before:

- **Design benchmark fit.** `design-benchmarks.md` has an entry for both —
  Retail (Rifle Paper Co.) and Local Service/Contractor (Len The Plumber)
  — but the file's own note on the retail entry warns that a full
  retail/boutique demo risks pulling toward e-commerce/catalog scope,
  which both prior demos deliberately avoided. The Service entry (Len The
  Plumber) is a *functional* benchmark — phone + CTA in the header, a
  literal response-time promise, a clustered trust stack (insurance,
  certification, years in business) — that maps directly onto a
  maintenance/recurring-visit business without implying any commerce
  scope at all.
- **Build complexity.** A plant-care service needs maintenance plans +
  a request-a-walkthrough contact form, the same complexity ceiling as
  the salon's "Book Now" and the bakery's "Order for Pickup" — no cart,
  inventory, or checkout, which a real Retail/boutique demo would
  eventually invite even if scoped down at first.

**Result:** Service, not Retail. The fictional business is *not* named
after the real lead (Plantopia) — same pattern as the salon and bakery
demos, which didn't reuse Angel Nails UTC's or Shanghai Cafe's names
either. It exists to show the vertical, not to rebrand a specific
prospect.

## Stack

- Vite + React 19 + TypeScript + Tailwind v4 (matches `webvybe/agency-site`,
  `webvybe/demo-salon`, and `webvybe/demo-bakery` conventions — same
  `.btn`/`.nav-link`/`.eyebrow`/`.badge` component classes, same `@theme`
  token pattern in `src/index.css`).
- `react-router-dom` v7 for routing.
- No backend. The contact form (`src/pages/Contact.tsx`) shows a success
  state client-side only — it does not send anywhere.
- Deployed to Cloudflare Pages as a static build (`npm run build` → `dist/`).

## Design tokens

Brand palette lives in `src/index.css` under `@theme` (`--color-fern`,
`--color-fern-deep`, `--color-moss`, `--color-brass`, `--color-brass-deep`,
`--color-canvas`, `--color-mist`, `--color-slate`, `--color-ink`) — deep
forest green carries the page as the *dominant* color (not just an accent,
the way pine is only an accent on the salon demo), paired with a warm
brass accent. Deliberately distinct from WebVybe's own blue/green brand,
from Salt & Stone Wellness's clay/terracotta/pine palette (terracotta-
dominant), and from Wildflour Bakehouse's crust/wheat/berry palette
(brown-dominant) — this is this client's own identity. No hardcoded hex
values outside that token block.

## Content

All plant-care-specific copy (plans, pricing, hours, address, FAQs) lives
in `src/content/plantco.ts` as a single source of truth — edit there, not
inline in components.

## Header nav

`src/components/Header.tsx` intentionally does **not** include a
"Contact" entry in its `links` array — the header's CTA button
("Get a Free Walkthrough") already routes to `/contact`. The salon and
bakery demos both shipped with a redundant "Contact" nav link alongside
that same CTA and had to be fixed after the fact; this repo starts without
the bug.

## Known placeholders (flagged, not hidden)

- Gallery/hero imagery is CSS gradient art (`src/components/DecorPanel.tsx`),
  explicitly labeled as placeholder, not real photography.
- `robots.txt` disallows all crawling — this demo should not get indexed.

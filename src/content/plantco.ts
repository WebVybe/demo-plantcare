// Understory Plant Co. -- a fictional interior plant care and plantscaping
// service created for WebVybe's portfolio demo. There is no real business
// behind this content; it exists to show how WebVybe would build a real
// local-service client site. Keep prices and copy internally consistent if
// this file is edited.

export const plantco = {
  name: 'Understory Plant Co.',
  tagline: 'Interior plant care for homes and offices that actually keeps plants alive.',
  neighborhood: 'Golden Hill, San Diego',
  address: '2814 Broadway, Suite 4, San Diego, CA 92102',
  phone: '(619) 555-0173',
  phoneHref: 'tel:+16195550173',
  email: 'hello@understoryplantco.com',
  instagram: '@understoryplantco',
  founderName: 'Delia Ocampo',
  founded: 2019,
  // Borrowed from the Local Service/Contractor benchmark (Len The Plumber)
  // in design-benchmarks.md: state the response-time promise as a literal
  // headline, not something implied.
  responsePromise: 'Free walkthrough within 48 hours, most weeks sooner.',
}

// "Hours" here means when walkthroughs and one-time visits can be booked --
// most maintenance visits happen on a fixed weekday route regardless.
export const hours = [
  { day: 'Monday', time: '8:00am – 5:00pm' },
  { day: 'Tuesday', time: '8:00am – 5:00pm' },
  { day: 'Wednesday', time: '8:00am – 5:00pm' },
  { day: 'Thursday', time: '8:00am – 5:00pm' },
  { day: 'Friday', time: '8:00am – 5:00pm' },
  { day: 'Saturday', time: 'By request' },
  { day: 'Sunday', time: 'Closed' },
]

export type ServiceItem = {
  name: string
  duration: string
  price: string
  description: string
  badge?: string
}

export type ServiceCategory = {
  id: string
  title: string
  /** Short benefit-first label shown next to the category title -- what
      this category does for you, not just what it's called. */
  benefit: string
  intro: string
  items: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'maintenance',
    title: 'Maintenance Plans',
    benefit: 'Never think about watering again',
    intro:
      'A technician visits on a fixed schedule to water, feed, prune, rotate for light, and swap anything that stops thriving.',
    items: [
      {
        name: 'Monthly Plan',
        duration: 'up to 15 plants',
        price: 'from $99/mo',
        description: 'Watering, feeding, dusting, and a health check once a month -- built for slower-growing collections.',
      },
      {
        name: 'Biweekly Plan',
        duration: 'up to 15 plants',
        price: 'from $159/mo',
        description: 'Every other week -- the right cadence for most home collections and small office corners.',
        badge: 'Most Popular',
      },
      {
        name: 'Weekly Plan',
        duration: 'up to 15 plants',
        price: 'from $249/mo',
        description: 'Weekly visits for lobbies, storefronts, and offices where plants are part of what clients see.',
      },
      {
        name: 'Additional Plants',
        duration: 'per plant, any plan',
        price: '+$4/mo',
        description: 'Collections over 15 plants are priced per additional plant, added to any plan above.',
      },
    ],
  },
  {
    id: 'styling',
    title: 'Styling & Installation',
    benefit: 'A living, considered space',
    intro: 'One-time visits to choose, place, and pot plants for a room, corner, or whole office.',
    items: [
      {
        name: 'Home Plant Consultation',
        duration: '60 min',
        price: '$95',
        description: 'A walkthrough of your space with light readings and a written plant-and-placement plan.',
      },
      {
        name: 'Office Corner Refresh',
        duration: '2–3 hrs',
        price: 'from $450',
        description: 'Plants, pots, and placement for a lobby, reception desk, or single meeting room.',
      },
      {
        name: 'Full Office Install',
        duration: 'half-day',
        price: 'custom quote',
        description: 'A full plant plan across multiple rooms or floors, quoted after a walkthrough.',
      },
      {
        name: 'Seasonal Rotation',
        duration: '90 min',
        price: '$180',
        description: 'Swap in blooming or seasonal plants for an event, open house, or change of season.',
      },
    ],
  },
  {
    id: 'travel',
    title: 'Vacation & Travel Care',
    benefit: 'Come home to living plants, not dead ones',
    intro: 'Short-term coverage while you are away, priced separately from an ongoing plan.',
    items: [
      {
        name: 'One-Time Vacation Visit',
        duration: 'single visit',
        price: '$65',
        description: 'One watering and check-in visit for a trip under a week, up to 15 plants.',
      },
      {
        name: 'Extended Trip Care',
        duration: '2+ weeks',
        price: 'from $55/visit',
        description: 'Recurring visits on your travel dates, scheduled around your itinerary, for longer trips.',
      },
    ],
  },
  {
    id: 'workshops',
    title: 'Workshops & Events',
    benefit: 'A hands-on afternoon',
    intro: 'Small-group sessions for team offsites, private parties, or anyone who wants to build something.',
    items: [
      {
        name: 'Terrarium Building Workshop',
        duration: '90 min, up to 12 people',
        price: '$45/person',
        description: 'Everyone builds and takes home a closed terrarium -- all materials included.',
      },
      {
        name: 'Office Lunch & Learn',
        duration: '45 min',
        price: '$350 flat',
        description: 'A short plant-care basics talk for teams, plus a live Q&A on your office plants specifically.',
      },
    ],
  },
]

// Three named, tiered maintenance plans shown side by side -- replaces a
// single undifferentiated "signature plan" banner. Priced per month (not
// per visit), each with its own explicit inclusions, and the middle tier
// visually emphasized as the recommended default. The "no long-term
// contract" reassurance applies to every tier, not just one.
export type CarePlanTier = {
  id: string
  name: string
  price: string
  cadence: string
  recommended?: boolean
  bullets: string[]
}

export const carePlans: CarePlanTier[] = [
  {
    id: 'basic',
    name: 'Basic Care',
    price: '$99/mo',
    cadence: 'Monthly visit -- up to 15 plants',
    bullets: [
      'One visit a month: watering, feeding, dusting, health check',
      'Text update with photos after every visit',
      'Dead or dying plants swapped at cost, not full replacement price',
      'No long-term contract -- pause or cancel with two weeks notice',
    ],
  },
  {
    id: 'signature',
    name: 'Signature Care',
    price: '$159/mo',
    cadence: 'Every other week -- up to 15 plants',
    recommended: true,
    bullets: [
      'A technician on the same day every other week, rain or shine',
      'Dead or dying plants swapped at cost, not full replacement price',
      'Text-based updates with photos after every visit',
      'No long-term contract -- pause or cancel with two weeks notice',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Care',
    price: '$249/mo',
    cadence: 'Weekly visit -- up to 15 plants',
    bullets: [
      'Weekly visits -- built for lobbies, storefronts, and client-facing offices',
      'Priority scheduling for seasonal rotations and events',
      'Dead or dying plants swapped at cost, not full replacement price',
      'No long-term contract -- pause or cancel with two weeks notice',
    ],
  },
]

// Cluster of credibility signals, grouped in one place -- borrowed from the
// Local Service/Contractor benchmark (Len The Plumber) in
// design-benchmarks.md: license, insurance, years in business, and
// certifications shown together, not scattered across the page. The
// access/entry pillar is specific to this category -- a stranger entering
// a private home or office, a trust problem food/wellness sites never
// have to solve.
export const trustPoints = [
  { label: 'Insured & bonded', detail: 'Full coverage for work in homes and offices, certificate on request' },
  { label: 'IPM-Certified', detail: 'Integrated Pest Management certified -- no blanket chemical spraying' },
  { label: '6 years in San Diego', detail: `${plantco.founderName} has run routes across the city since ${plantco.founded}` },
  { label: 'Same technician every visit', detail: 'You get to know one person, not a rotating crew' },
  {
    label: 'We work around your access',
    detail:
      'Lockbox, entry code, key hand-off, or a scheduled time when you are home -- confirmed before the first visit, with background-checked technicians either way.',
  },
]

// What actually happens between a first inquiry and an ongoing plan --
// framed around access and trust logistics specific to letting someone
// into a home or office, not a spa's first-visit-comfort framing.
export const howItWorks = [
  {
    step: '01',
    title: 'We confirm access -- lockbox, code, or you are home',
    body: 'Settled before the first visit is scheduled, not figured out on your doorstep. Your choice, and it stays the same every visit after.',
  },
  {
    step: '02',
    title: 'First visit is a walkthrough, no commitment',
    body: 'We look at your space and your plants and recommend a real plan -- you are not signing anything before you have actually met us.',
  },
  {
    step: '03',
    title: 'After that, same technician every time',
    body: 'One person who knows your locks, your layout, and your plants -- not a rotating crew relearning your space from scratch.',
  },
]

// Named neighborhoods, shown as an explicit self-qualifier rather than a
// single line of prose buried in copy -- lets someone confirm in one
// glance whether they're in range before they fill out a form.
export const serviceAreas = [
  'Golden Hill',
  'North Park',
  'South Park',
  'Downtown',
  'Bankers Hill',
  'Hillcrest',
  'Mission Hills',
]

// Structural proof of the "same technician every visit" claim -- named
// people with a photo placeholder, years on route, a personal detail, and
// vetting language, instead of just asserting continuity in copy.
export type TeamMember = {
  name: string
  role: string
  years: string
  detail: string
  variant: 1 | 2 | 3 | 4 | 5
}

export const team: TeamMember[] = [
  {
    name: plantco.founderName,
    role: 'Founder & Lead Technician',
    years: '6 years on route',
    detail: 'Keeps a handwritten log of every plant she has personally revived -- past 300 and still counting.',
    variant: 1,
  },
  {
    name: 'Marcus Whitfield',
    role: 'Technician',
    years: '3 years on route',
    detail: 'Started as a client before joining the team -- still owns the fiddle-leaf fig that got him hooked.',
    variant: 3,
  },
]

export const teamVettingNote =
  'Every technician passes a background check and signs an access agreement before their first solo route. The same person who visits you will not change without you knowing in advance.'

// Before/after pairs -- the primary conversion asset for this category
// (lawn-care research: before/after converts 2-3x vs. single-state shots).
// Same CSS-gradient placeholder-art approach as DecorPanel, paired and
// clearly labeled Before/After, disclosed as placeholder art like the rest
// of the site's imagery.
export type BeforeAfterExample = {
  id: string
  transformation: string
  detail: string
  beforeVariant: 1 | 2 | 3 | 4 | 5
  afterVariant: 1 | 2 | 3 | 4 | 5
}

export const beforeAfterExamples: BeforeAfterExample[] = [
  {
    id: 'home-revival',
    transformation: 'Neglected home collection, revived',
    detail: '12 plants, root-bound and light-starved -- 8 weeks into the Biweekly Plan.',
    beforeVariant: 5,
    afterVariant: 1,
  },
  {
    id: 'office-lobby',
    transformation: 'Bare lobby corner, styled and planted',
    detail: 'Office Corner Refresh -- empty planters to a full install in one afternoon.',
    beforeVariant: 5,
    afterVariant: 2,
  },
  {
    id: 'office-desk',
    transformation: 'Dying reception-desk plants, back to full health',
    detail: 'Switched from no plan to the Weekly Plan after months of missed watering.',
    beforeVariant: 5,
    afterVariant: 3,
  },
  {
    id: 'seasonal',
    transformation: 'Post-holiday storefront, seasonal refresh',
    detail: 'A Seasonal Rotation swapped tired blooms for a fresh seasonal display.',
    beforeVariant: 5,
    afterVariant: 4,
  },
]

export const faqs = [
  {
    q: 'Do you provide the plants, or just take care of what we already have?',
    a: 'Both. Most maintenance clients start with their existing plants; Styling & Installation is a separate one-time service if you want us to also choose and place new plants.',
  },
  {
    q: 'What happens if a plant is beyond saving?',
    a: "We will always try to nurse a struggling plant back first. If one is genuinely beyond saving, we tell you honestly and swap it at our cost on a maintenance plan, not full retail replacement price.",
  },
  {
    q: 'Do you serve homes, or only offices?',
    a: "Both -- roughly half of our routes are homes and half are offices and storefronts. The visit cadence is the same either way; office and lobby plants just tend to sit on the Weekly Plan.",
  },
  {
    q: 'How is pricing actually determined?',
    a: 'Plan price is set by plant count and visit frequency, quoted after a free walkthrough -- the numbers on the Services page are typical starting points, not the final word until we have actually seen your space.',
  },
  {
    q: 'Is there a contract?',
    a: 'No long-term contract on any maintenance plan. Two weeks notice to pause or cancel, so we can plan the route.',
  },
  {
    q: 'What is your service area?',
    a: `We currently serve ${serviceAreas.join(', ')}. Ask if you are just outside that -- we sometimes extend routes for standing clients.`,
  },
  {
    q: 'Can you do a one-time cleanup with no ongoing plan?',
    a: 'Yes -- book a Home Plant Consultation or Office Corner Refresh with no commitment to a maintenance plan afterward.',
  },
]

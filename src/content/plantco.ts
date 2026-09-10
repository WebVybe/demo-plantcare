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

// A signature recurring plan, priced and explained the same way a
// membership works on the salon demo -- built for people who want this to
// be a habit, not a one-off.
export const carePlan = {
  name: 'The Standing Visit',
  price: '$159/month',
  bullets: [
    'A technician on the same day every other week, rain or shine',
    'Dead or dying plants swapped at cost, not full replacement price',
    'Text-based updates with photos after every visit',
    'No long-term contract -- pause or cancel with two weeks notice',
  ],
}

// Cluster of credibility signals, grouped in one place -- borrowed from the
// Local Service/Contractor benchmark (Len The Plumber) in
// design-benchmarks.md: license, insurance, years in business, and
// certifications shown together, not scattered across the page.
export const trustPoints = [
  { label: 'Insured & bonded', detail: 'Full coverage for work in homes and offices, certificate on request' },
  { label: 'IPM-Certified', detail: 'Integrated Pest Management certified -- no blanket chemical spraying' },
  { label: '6 years in San Diego', detail: `${plantco.founderName} has run routes across the city since ${plantco.founded}` },
  { label: 'Same technician every visit', detail: 'You get to know one person, not a rotating crew' },
]

// What actually happens between a first inquiry and an ongoing plan --
// mirrors the "first visit" walkthrough pattern on the salon demo, adapted
// to a quote-then-route service business.
export const howItWorks = [
  {
    step: '01',
    title: 'Free walkthrough, fast',
    body: 'We come look at your space and your plants within 48 hours of a request, most weeks sooner.',
  },
  {
    step: '02',
    title: 'We recommend a plan',
    body: 'Based on plant count, light, and how often things need attention -- no plan is oversized on purpose.',
  },
  {
    step: '03',
    title: 'Regular visits, real accountability',
    body: 'Same technician, same day, every time -- with a photo update after each visit so you can see what changed.',
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
    a: 'Golden Hill outward through North Park, South Park, Downtown, and Bankers Hill. Ask if you are just outside that -- we sometimes extend routes for standing clients.',
  },
  {
    q: 'Can you do a one-time cleanup with no ongoing plan?',
    a: 'Yes -- book a Home Plant Consultation or Office Corner Refresh with no commitment to a maintenance plan afterward.',
  },
]

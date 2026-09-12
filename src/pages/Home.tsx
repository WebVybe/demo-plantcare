import { NavLink } from 'react-router-dom'
import BeforeAfter from '../components/BeforeAfter'
import CarePlans from '../components/CarePlans'
import DecorPanel from '../components/DecorPanel'
import HowItWorks from '../components/HowItWorks'
import ServiceArea from '../components/ServiceArea'
import TrustStrip from '../components/TrustStrip'
import { beforeAfterExamples, faqs, plantco, serviceCategories } from '../content/plantco'
// Photo credits (Pexels license: free for commercial use, no attribution required):
import heroRoute from '../assets/images/hero-route.jpg' // Kevin Malik
import highlightStyling from '../assets/images/highlight-styling.jpg' // Dan Gold
import highlightTravel from '../assets/images/highlight-travel.jpg' // Anna Nekrashevich

const secondaryHighlightImages: Record<string, string> = {
  styling: highlightStyling,
  travel: highlightTravel,
}

// The other two service categories, shown as compact cards alongside the
// before/after revival highlight -- maintenance is the recurring habit,
// these two are the one-time/short-term jobs.
const secondaryHighlights = serviceCategories.slice(1, 3).map((c) => ({
  id: c.id,
  title: c.title,
  blurb: c.intro,
  from: c.items[0].price,
  image: secondaryHighlightImages[c.id],
}))

const pillars = [
  {
    title: plantco.responsePromise,
    body: 'No waiting a week for a quote. We look at your space and your plants, then recommend a real plan.',
  },
  {
    title: 'No long-term contract',
    body: 'Every plan, whether Basic, Signature, or Premium, pauses or cancels with two weeks notice, priced per month.',
  },
  {
    title: 'Same technician every visit',
    body: 'You get to know one person who knows your plants, not a rotating crew learning your space from scratch.',
  },
]

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-4">{plantco.neighborhood}</p>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
              {plantco.tagline}
            </h1>
            <p className="mt-5 max-w-md text-base text-slate">
              Maintenance plans, styling, and vacation care for <span className="font-semibold text-fern">homes and offices</span> across
              Golden Hill and the surrounding neighborhoods, with <span className="font-semibold text-fern">one technician, one relationship</span>, visit after visit.
            </p>
            <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-black/5 bg-white px-4 py-3 sm:flex-row sm:items-center sm:gap-3">
              <div className="flex items-center gap-3">
                <span className="badge">Response Promise</span>
                <span className="text-sm font-semibold text-ink">{plantco.responsePromise}</span>
              </div>
            </div>

            {/* Fork the CTA into the two buyer types this business actually
                has -- recurring maintenance vs. a one-time job -- instead
                of one undifferentiated pair that confuses both. */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-fern/15 bg-white p-4">
                <p className="eyebrow mb-2 text-fern">Ongoing care</p>
                <NavLink to="/services#maintenance" className="btn-primary w-full !px-4 justify-center text-center">
                  See Maintenance Plans
                </NavLink>
                <p className="mt-2 text-xs text-slate">Recurring visits, same technician every time.</p>
              </div>
              <div className="rounded-2xl border border-brass-deep/25 bg-white p-4">
                <p className="eyebrow mb-2 text-brass-deep">Just this once</p>
                <NavLink
                  to="/contact?service=One-Time%20Vacation%20Visit"
                  className="btn-secondary w-full !px-4 justify-center text-center !border-brass-deep !text-brass-deep hover:!bg-brass/10"
                >
                  Request a One-Time Visit
                </NavLink>
                <p className="mt-2 text-xs text-slate">Styling, a move, or vacation care: no plan required.</p>
              </div>
            </div>
          </div>

          <DecorPanel
            className="h-72 w-full sm:h-96 lg:h-[26rem]"
            src={heroRoute}
            alt="A technician watering potted houseplants by a sunny window"
          />
        </div>
      </section>

      {/* Objection-handling strip */}
      <section className="border-y border-black/5 bg-mist">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <p className="font-serif text-lg text-fern">{p.title}</p>
              <p className="mt-2 text-sm text-slate">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust/credibility cluster -- includes the access/entry pillar
          specific to letting someone into a private home or office. */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow mb-3">Why locals choose us</p>
        <TrustStrip />
      </section>

      {/* Service highlights -- before/after is the lead conversion asset
          for the recurring maintenance/revival category, not a flat card. */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3">What we offer</p>
            <h2 className="font-serif text-3xl text-ink">See the difference regular care makes</h2>
          </div>
          <NavLink to="/services" className="text-sm font-semibold text-brass-deep hover:underline">
            View full plans & pricing →
          </NavLink>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <BeforeAfter example={beforeAfterExamples[0]} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {secondaryHighlights.map((h) => (
              <div key={h.id} className="rounded-2xl border border-black/5 bg-white p-6">
                <DecorPanel className="mb-5 h-24 w-full" src={h.image} alt={h.title} />
                <h3 className="font-serif text-xl text-ink">{h.title}</h3>
                <p className="mt-2 text-sm text-slate">{h.blurb}</p>
                <p className="mt-4 text-sm font-semibold text-brass-deep">From {h.from}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiered maintenance plans -- three named plans instead of one
          undifferentiated signature-plan banner, middle tier emphasized. */}
      <section className="border-y border-black/5 bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="eyebrow mb-3">Maintenance Plans</p>
          <h2 className="font-serif text-3xl text-ink">Pick a cadence, not a commitment</h2>
          <p className="mt-3 max-w-xl text-sm text-slate">
            Every tier below is priced per month, confirmed after a free walkthrough, and pauses or cancels with two
            weeks notice.
          </p>
          <CarePlans className="mt-10" />
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <HowItWorks />
      </section>

      {/* Service area self-qualifier */}
      <section className="border-y border-black/5 bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="eyebrow mb-3">Service Area</p>
          <ServiceArea />
        </div>
      </section>

      {/* FAQ preview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-3">Good to know</p>
        <h2 className="mb-8 font-serif text-3xl text-ink">A few things people ask before booking</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {faqs.slice(0, 4).map((f) => (
            <div key={f.q} className="rounded-2xl border border-black/5 bg-white p-6">
              <p className="font-medium text-ink">{f.q}</p>
              <p className="mt-2 text-sm text-slate">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-mist px-8 py-14 text-center">
          <h2 className="font-serif text-3xl text-ink">Ready for a free walkthrough?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate">
            Tell us about your space and we'll come look within 48 hours, most weeks sooner, with no obligation to
            start a plan afterward.
          </p>
          <NavLink to="/contact" className="btn-primary mt-7 inline-flex">
            Get a Free Walkthrough
          </NavLink>
        </div>
      </section>
    </div>
  )
}

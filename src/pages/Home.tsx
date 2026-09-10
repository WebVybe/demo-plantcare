import { NavLink } from 'react-router-dom'
import DecorPanel from '../components/DecorPanel'
import HowItWorks from '../components/HowItWorks'
import TrustStrip from '../components/TrustStrip'
import { carePlan, faqs, plantco, serviceCategories } from '../content/plantco'

const highlights = serviceCategories.slice(0, 3).map((c) => ({
  id: c.id,
  title: c.title,
  blurb: c.intro,
  from: c.items[0].price,
}))

const pillars = [
  {
    title: plantco.responsePromise,
    body: 'No waiting a week for a quote -- we look at your space and your plants, then recommend a real plan.',
  },
  {
    title: 'No long-term contract',
    body: `${carePlan.name} is ${carePlan.price}, cancel with two weeks notice -- built as a habit, not a lock-in.`,
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
              Golden Hill and the surrounding neighborhoods -- <span className="font-semibold text-fern">one technician, one relationship</span>, visit after visit.
            </p>
            <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-black/5 bg-white px-4 py-3 sm:flex-row sm:items-center sm:gap-3">
              <div className="flex items-center gap-3">
                <span className="badge">Response Promise</span>
                <span className="text-sm font-semibold text-ink">{plantco.responsePromise}</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <NavLink to="/contact" className="btn-primary">
                Get a Free Walkthrough
              </NavLink>
              <NavLink to="/services" className="btn-secondary">
                See Plans & Pricing
              </NavLink>
            </div>
          </div>

          <DecorPanel variant={1} className="h-72 w-full sm:h-96 lg:h-[26rem]" label="Route glimpse — placeholder art, real photography pending" />
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

      {/* Trust/credibility cluster */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow mb-3">Why locals choose us</p>
        <TrustStrip />
      </section>

      {/* Service highlights */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3">What we offer</p>
            <h2 className="font-serif text-3xl text-ink">Care, styling, and coverage while you travel</h2>
          </div>
          <NavLink to="/services" className="text-sm font-semibold text-brass-deep hover:underline">
            View full plans & pricing →
          </NavLink>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <div key={h.id} className="rounded-2xl border border-black/5 bg-white p-6">
              <DecorPanel variant={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5} className="mb-5 h-36 w-full" />
              <h3 className="font-serif text-xl text-ink">{h.title}</h3>
              <p className="mt-2 text-sm text-slate">{h.blurb}</p>
              <p className="mt-4 text-sm font-semibold text-brass-deep">From {h.from}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature recurring plan */}
      <section className="border-y border-black/5 bg-fern">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-3 text-mist">Signature plan</p>
            <h2 className="font-serif text-3xl text-canvas">
              {carePlan.name} — {carePlan.price}
            </h2>
            <p className="mt-4 max-w-md text-sm text-mist/90">
              Built for people who want plant care to be a habit, not a project. No initiation fee, no long-term
              commitment.
            </p>
            <NavLink to="/contact" className="btn-primary mt-6 !bg-brass hover:!bg-brass-deep">
              Ask About This Plan
            </NavLink>
          </div>
          <ul className="space-y-3">
            {carePlan.bullets.map((b) => (
              <li key={b} className="flex gap-3 rounded-xl bg-white/5 p-4 text-sm text-mist/95">
                <span className="mt-0.5 text-brass">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <HowItWorks />
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
            Tell us about your space and we'll come look within 48 hours, most weeks sooner -- no obligation to
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

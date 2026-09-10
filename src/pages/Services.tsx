import { NavLink } from 'react-router-dom'
import CarePlans from '../components/CarePlans'
import ServiceArea from '../components/ServiceArea'
import { plantco, serviceCategories } from '../content/plantco'

export default function Services() {
  return (
    <div className="page-transition mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow mb-3">Plans & Pricing</p>
      <h1 className="font-serif text-4xl text-ink">Every plan we offer</h1>
      <p className="mt-4 max-w-xl text-slate">
        Prices below are typical starting points for a plant count of 15 or fewer -- every plan is confirmed after a
        free walkthrough, not sold sight-unseen.
      </p>
      <p className="mt-3 max-w-xl text-sm text-slate/80">{plantco.responsePromise}</p>

      <nav
        aria-label="Jump to a plan category"
        className="sticky top-16 z-30 -mx-6 mt-8 flex gap-2 overflow-x-auto border-y border-black/5 bg-canvas/95 px-6 py-3 backdrop-blur-md"
      >
        {serviceCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="shrink-0 rounded-full border border-black/10 px-4 py-1.5 text-sm font-medium text-slate transition-colors hover:border-brass-deep hover:text-ink"
          >
            {cat.title}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-16">
        {serviceCategories.map((cat) => (
          <div key={cat.id} id={cat.id} className="scroll-mt-32">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-serif text-2xl text-fern">{cat.title}</h2>
              <span className="eyebrow text-brass-deep/80">{cat.benefit}</span>
            </div>
            <p className="mt-2 max-w-2xl text-sm text-slate">{cat.intro}</p>

            <div className="mt-6 divide-y divide-black/5 rounded-2xl border border-black/5 bg-white">
              {cat.items.map((item) => (
                <div key={`${item.name}-${item.duration}`} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div>
                    <p className="flex flex-wrap items-center gap-2 font-medium text-ink">
                      {item.name} <span className="text-slate">· {item.duration}</span>
                      {item.badge && <span className="badge">{item.badge}</span>}
                    </p>
                    <p className="mt-1 text-sm text-slate">{item.description}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-1.5">
                    <p className="font-serif text-lg text-brass-deep">{item.price}</p>
                    <NavLink
                      to={`/contact?service=${encodeURIComponent(item.name)}`}
                      className="text-xs font-semibold text-fern underline-offset-2 hover:underline"
                    >
                      Ask about this →
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <p className="eyebrow mb-2 text-brass-deep">Maintenance Plans, compared</p>
        <h2 className="font-serif text-2xl text-ink">Pick a cadence, not a commitment</h2>
        <p className="mt-2 max-w-xl text-sm text-slate">
          Every tier is priced per month, confirmed after a free walkthrough, and pauses or cancels with two weeks
          notice.
        </p>
        <CarePlans className="mt-8" />
      </div>

      <div className="mt-16 rounded-3xl bg-mist px-8 py-10">
        <p className="eyebrow mb-2">Service Area</p>
        <ServiceArea />
      </div>

      <div className="mt-12 text-center">
        <NavLink to="/contact" className="btn-primary inline-flex">
          Get a Free Walkthrough
        </NavLink>
      </div>
    </div>
  )
}

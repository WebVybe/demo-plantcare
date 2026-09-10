import { type FormEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ServiceArea from '../components/ServiceArea'
import { carePlans, faqs, hours, plantco, serviceCategories } from '../content/plantco'

// Single list of bookable items derived from the same source of truth as
// the Services page, so an "Ask about this" link there always matches an
// option here -- no separately hand-typed dropdown to fall out of sync.
const serviceOptions = [
  ...new Set(serviceCategories.flatMap((cat) => cat.items.map((item) => item.name))),
  ...carePlans.map((tier) => tier.name),
  'Not sure yet',
]

export default function Contact() {
  const [params] = useSearchParams()
  const preselect = params.get('service') ?? ''
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState(serviceOptions.includes(preselect) ? preselect : '')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Demo only: this form has no real backend. A live client build would
    // wire this to the same request-a-walkthrough pipeline as other
    // WebVybe client sites (see CLAUDE.md / new-client-site skill).
    setSubmitted(true)
  }

  return (
    <div className="page-transition mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow mb-3">Contact</p>
      <h1 className="font-serif text-4xl text-ink">Get a free walkthrough</h1>
      <p className="mt-4 max-w-xl text-slate">
        Tell us about your space and plants -- we'll reach out within one business day to schedule a free
        walkthrough. {plantco.responsePromise} For anything urgent, call us directly.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-start gap-3 py-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-fern text-canvas">✓</span>
              <h2 className="font-serif text-2xl text-ink">Request received</h2>
              <p className="max-w-sm text-slate">
                Thanks{service ? ` — we'll follow up about ${service.toLowerCase()}` : ''}. We'll reach out within
                one business day to schedule your walkthrough.
              </p>
              <p className="max-w-sm text-xs text-slate/70">
                This is a portfolio demo: nothing was actually sent anywhere. A live client build would connect this
                form to a real inbox/scheduling pipeline.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-secondary mt-2"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">First name</span>
                  <input
                    required
                    type="text"
                    name="firstName"
                    className="w-full rounded-lg border border-black/10 bg-canvas px-3.5 py-2.5 text-ink outline-none focus:border-brass-deep"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">Last name</span>
                  <input
                    required
                    type="text"
                    name="lastName"
                    className="w-full rounded-lg border border-black/10 bg-canvas px-3.5 py-2.5 text-ink outline-none focus:border-brass-deep"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-lg border border-black/10 bg-canvas px-3.5 py-2.5 text-ink outline-none focus:border-brass-deep"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-lg border border-black/10 bg-canvas px-3.5 py-2.5 text-ink outline-none focus:border-brass-deep"
                  />
                </label>
              </div>

              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">What are you asking about?</span>
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-lg border border-black/10 bg-canvas px-3.5 py-2.5 text-ink outline-none focus:border-brass-deep"
                >
                  <option value="">Select an option</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>

              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Space & plants, or preferred days/times</span>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="e.g. Home with ~12 plants, weekday mornings work best"
                  className="w-full rounded-lg border border-black/10 bg-canvas px-3.5 py-2.5 text-ink outline-none focus:border-brass-deep"
                />
              </label>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Request
              </button>
            </form>
          )}
        </div>

        <div className="space-y-8">
          <div>
            <p className="eyebrow mb-2">Call or Email</p>
            <p className="text-slate">
              <a href={plantco.phoneHref} className="hover:text-ink">
                {plantco.phone}
              </a>
            </p>
            <p className="mt-1 text-slate">
              <a href={`mailto:${plantco.email}`} className="hover:text-ink">
                {plantco.email}
              </a>
            </p>
          </div>
          <div>
            <p className="eyebrow mb-2">Address</p>
            <p className="text-slate">{plantco.address}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Office Hours</p>
            <ul className="space-y-1 text-sm text-slate">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-2">Service Area</p>
            <ServiceArea />
          </div>
        </div>
      </div>

      {/* Full FAQ, bundled on the page where people are about to send a
          request -- the way a stronger local-service site keeps objections
          answered right next to the decision, not scattered elsewhere. */}
      <div className="mt-20">
        <p className="eyebrow mb-3">Before you reach out</p>
        <h2 className="font-serif text-3xl text-ink">Questions & policies</h2>
        <div className="mt-8 divide-y divide-black/5 rounded-2xl border border-black/5 bg-white">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium text-ink">{f.q}</span>
                  <span className={`shrink-0 text-brass-deep transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm text-slate">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

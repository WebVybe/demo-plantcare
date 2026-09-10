import { NavLink } from 'react-router-dom'
import BeforeAfter from '../components/BeforeAfter'
import DecorPanel from '../components/DecorPanel'
import { beforeAfterExamples } from '../content/plantco'

// A few single-state shots that genuinely don't have a before/after pair
// (a workshop, the route van) -- kept separate from the transformation
// pairs above rather than mixed into the same grid.
const singleShots: { variant: 1 | 2 | 3 | 4 | 5; label: string }[] = [
  { variant: 4, label: 'Terrarium workshop' },
  { variant: 3, label: 'Route van, plant crates' },
]

export default function Gallery() {
  return (
    <div className="page-transition mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow mb-3">Gallery</p>
      <h1 className="font-serif text-4xl text-ink">Before & after</h1>
      <p className="mt-4 max-w-2xl text-slate">
        This is a portfolio demo, so there's no real route or client sites to photograph yet -- every panel below is
        intentional gradient/texture art standing in for photography, not real photos of a real location or plants.
        Real before/after photography or licensed stock would replace these before any actual launch.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {beforeAfterExamples.map((example) => (
          <BeforeAfter key={example.id} example={example} />
        ))}
      </div>

      <div className="mt-14">
        <p className="eyebrow mb-3">Other glimpses</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {singleShots.map((p, i) => (
            <DecorPanel key={`${p.label}-${i}`} variant={p.variant} label={p.label} className="h-40 w-full" />
          ))}
        </div>
      </div>

      <div className="mt-14 text-center">
        <p className="text-slate">Prefer to just get a walkthrough scheduled?</p>
        <NavLink to="/contact" className="btn-primary mt-4 inline-flex">
          Get a Free Walkthrough
        </NavLink>
      </div>
    </div>
  )
}

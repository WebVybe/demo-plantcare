import { NavLink } from 'react-router-dom'
import BeforeAfter from '../components/BeforeAfter'
import DecorPanel from '../components/DecorPanel'
import { beforeAfterExamples } from '../content/plantco'
// Photo credits (Pexels license: free for commercial use, no attribution required):
import terrariumImg from '../assets/images/gallery-terrarium.jpg' // Karola G.
import vanCratesImg from '../assets/images/gallery-van-crates.jpg' // Mat Reding

// A few single-state shots that genuinely don't have a before/after pair
// (a workshop, the route van) -- kept separate from the transformation
// pairs above rather than mixed into the same grid.
const singleShots: { label: string; src: string }[] = [
  { label: 'Terrarium workshop', src: terrariumImg },
  { label: 'Route van, plant crates', src: vanCratesImg },
]

export default function Gallery() {
  return (
    <div className="page-transition mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow mb-3">Gallery</p>
      <h1 className="font-serif text-4xl text-ink">Before & after</h1>
      <p className="mt-4 max-w-2xl text-slate">
        This is a portfolio demo, so there's no real route or client sites to photograph yet. The before/after pairs
        below use real, licensed stock photography, but they're representative examples, not documented photos of
        one specific job: a genuine matched before/after of the same plants doesn't exist as off-the-shelf stock, so
        each pair substitutes a well-matched "struggling plant" / "thriving plant" photo instead. The "other
        glimpses" below them are licensed stock photography too.
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
            <DecorPanel key={`${p.label}-${i}`} label={p.label} src={p.src} alt={p.label} className="h-40 w-full" />
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

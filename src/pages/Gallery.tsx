import { NavLink } from 'react-router-dom'
import DecorPanel from '../components/DecorPanel'

const panels: { variant: 1 | 2 | 3 | 4 | 5; label: string; span?: string }[] = [
  { variant: 2, label: 'Office lobby install', span: 'sm:col-span-2 sm:row-span-2' },
  { variant: 1, label: 'Home consultation' },
  { variant: 3, label: 'Maintenance visit' },
  { variant: 4, label: 'Terrarium workshop' },
  { variant: 5, label: 'Seasonal rotation' },
  { variant: 3, label: 'Route van, plant crates' },
]

export default function Gallery() {
  return (
    <div className="page-transition mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow mb-3">Gallery</p>
      <h1 className="font-serif text-4xl text-ink">A feel for the work</h1>
      <p className="mt-4 max-w-2xl text-slate">
        This is a portfolio demo, so there's no real route or client sites to photograph yet -- the panels below are
        intentional gradient/texture art standing in for photography, not real photos of a real location. Real
        photography or licensed stock would replace these before any actual launch.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:[grid-template-rows:repeat(3,10rem)]">
        {panels.map((p, i) => (
          <DecorPanel
            key={`${p.label}-${i}`}
            variant={p.variant}
            label={p.label}
            className={`h-40 w-full sm:h-full ${p.span ?? ''}`}
          />
        ))}
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

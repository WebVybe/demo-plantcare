import DecorPanel from './DecorPanel'
import type { BeforeAfterExample } from '../content/plantco'

type BeforeAfterProps = {
  example: BeforeAfterExample
  className?: string
}

// Paired before/after placeholder-art panels -- the primary conversion
// asset for this category (lawn-care research: before/after converts 2-3x
// vs. single-state shots). Same CSS-gradient-placeholder-art approach as
// DecorPanel for each side, clearly labeled and disclosed as placeholder
// art, not real photography.
export default function BeforeAfter({ example, className = '' }: BeforeAfterProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-black/5 bg-white ${className}`}>
      <div className="grid grid-cols-2 gap-px bg-black/5">
        <div className="relative">
          <DecorPanel variant={example.beforeVariant} className="h-40 w-full sm:h-48" />
          <span className="absolute left-3 top-3 rounded-full bg-slate px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Before
          </span>
        </div>
        <div className="relative">
          <DecorPanel variant={example.afterVariant} className="h-40 w-full sm:h-48" />
          <span className="absolute left-3 top-3 rounded-full bg-brass px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            After
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="font-serif text-lg text-ink">{example.transformation}</p>
        <p className="mt-1 text-sm text-slate">{example.detail}</p>
        <p className="mt-3 text-xs text-slate/70">Placeholder gradient art standing in for real before/after photography.</p>
      </div>
    </div>
  )
}

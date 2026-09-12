import DecorPanel from './DecorPanel'
import type { BeforeAfterExample } from '../content/plantco'

// Photo credits (Pexels license: free for commercial use, no attribution
// required). These are NOT a literal before/after of the same plants at two
// points in time -- a matched pair like that doesn't exist as off-the-shelf
// stock. Each pair below is a well-matched illustrative substitute: a
// genuinely struggling/neglected houseplant photo as "before" and a
// genuinely lush/thriving one as "after", loosely matched to the plant type
// implied by the copy. The "Representative example" caption on each card
// (below) discloses this, so the pairing reads as illustrative rather than
// as documentation of a specific job.
import homeBefore from '../assets/images/beforeafter-home-before.jpg' // Syn Gor
import homeAfter from '../assets/images/beforeafter-home-after.jpg' // Madison Inouye
import lobbyBefore from '../assets/images/beforeafter-lobby-before.jpg' // Molnár Tamás Photography™
import lobbyAfter from '../assets/images/beforeafter-lobby-after.jpg' // RDNE Stock project
import deskBefore from '../assets/images/beforeafter-desk-before.jpg' // Alex Quezada
import deskAfter from '../assets/images/beforeafter-desk-after.jpg' // Ann poan
import seasonalBefore from '../assets/images/beforeafter-seasonal-before.jpg' // Ángel Ramírez Flores
import seasonalAfter from '../assets/images/beforeafter-seasonal-after.jpg' // Ekaterinna Popgeorgieva

const pairs: Record<string, { before: string; after: string }> = {
  'home-revival': { before: homeBefore, after: homeAfter },
  'office-lobby': { before: lobbyBefore, after: lobbyAfter },
  'office-desk': { before: deskBefore, after: deskAfter },
  seasonal: { before: seasonalBefore, after: seasonalAfter },
}

type BeforeAfterProps = {
  example: BeforeAfterExample
  className?: string
}

// Paired before/after panels -- the primary conversion asset for this
// category (lawn-care research: before/after converts 2-3x vs. single-state
// shots). Resolved from the prior pass's disclosed CSS-gradient placeholder
// art (see git history) to real, licensed stock photography: since a
// genuine matched before/after of the same plants doesn't exist as
// off-the-shelf stock, and no image-generation tool was available to stage
// one, each pair here is an illustrative "struggling plant" / "thriving
// plant" substitute instead, labeled as a representative example rather
// than implied documentation of one specific job. DecorPanel still falls
// back to its CSS-gradient variant if a given id has no photo pair.
export default function BeforeAfter({ example, className = '' }: BeforeAfterProps) {
  const pair = pairs[example.id]
  return (
    <div className={`overflow-hidden rounded-2xl border border-black/5 bg-white ${className}`}>
      <div className="grid grid-cols-2 gap-px bg-black/5">
        <div className="relative">
          <DecorPanel
            variant={example.beforeVariant}
            src={pair?.before}
            alt="Representative example of a struggling, neglected houseplant"
            className="h-40 w-full sm:h-48"
          />
          <span className="absolute left-3 top-3 rounded-full bg-slate px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Before
          </span>
        </div>
        <div className="relative">
          <DecorPanel
            variant={example.afterVariant}
            src={pair?.after}
            alt="Representative example of a lush, thriving houseplant"
            className="h-40 w-full sm:h-48"
          />
          <span className="absolute left-3 top-3 rounded-full bg-brass px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            After
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="font-serif text-lg text-ink">{example.transformation}</p>
        <p className="mt-1 text-sm text-slate">{example.detail}</p>
        <p className="mt-3 text-xs text-slate/70">
          Representative example: illustrative stock photography of a similar plant type, not a documented photo
          record of this specific job.
        </p>
      </div>
    </div>
  )
}

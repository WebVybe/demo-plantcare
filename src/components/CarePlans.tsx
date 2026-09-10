import { NavLink } from 'react-router-dom'
import { carePlans } from '../content/plantco'

// Three named, tiered plans side by side instead of one undifferentiated
// "signature plan" banner -- per-month framing, explicit inclusions per
// tier, and the middle tier visually emphasized as the recommended
// choice. The "no long-term contract" reassurance is repeated per tier.
export default function CarePlans({ className = '' }: { className?: string }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-3 ${className}`}>
      {carePlans.map((tier) => (
        <div
          key={tier.id}
          className={`flex flex-col rounded-2xl p-6 ${
            tier.recommended
              ? 'border-2 border-brass bg-fern text-canvas shadow-xl sm:-translate-y-3'
              : 'border border-black/5 bg-white text-ink'
          }`}
        >
          {tier.recommended && <span className="badge mb-3 inline-flex w-fit">Most Popular</span>}
          <p className={`font-serif text-xl ${tier.recommended ? 'text-canvas' : 'text-fern'}`}>{tier.name}</p>
          <p className={`mt-1 font-serif text-3xl ${tier.recommended ? 'text-brass' : 'text-brass-deep'}`}>
            {tier.price}
          </p>
          <p className={`mt-1 text-sm ${tier.recommended ? 'text-mist/90' : 'text-slate'}`}>{tier.cadence}</p>
          <ul className="mt-5 flex-1 space-y-2.5 text-sm">
            {tier.bullets.map((b) => (
              <li key={b} className={`flex gap-2 ${tier.recommended ? 'text-mist/95' : 'text-slate'}`}>
                <span className={tier.recommended ? 'text-brass shrink-0' : 'text-brass-deep shrink-0'}>✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <NavLink
            to={`/contact?service=${encodeURIComponent(tier.name)}`}
            className={
              tier.recommended
                ? 'btn-primary mt-6 inline-flex w-full justify-center !bg-brass hover:!bg-brass-deep'
                : 'btn-secondary mt-6 inline-flex w-full justify-center'
            }
          >
            Ask About {tier.name}
          </NavLink>
        </div>
      ))}
    </div>
  )
}

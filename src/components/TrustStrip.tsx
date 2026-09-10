import { trustPoints } from '../content/plantco'

// Credibility signals clustered together in one visible strip rather than
// scattered across the page/footer -- borrowed from the Local
// Service/Contractor benchmark (Len The Plumber) in design-benchmarks.md:
// insurance, certification, years in business, and a continuity promise,
// all at once.
export default function TrustStrip({ className = '' }: { className?: string }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {trustPoints.map((t) => (
        <div key={t.label} className="rounded-2xl border border-black/5 bg-white p-5">
          <p className="font-serif text-base text-fern">{t.label}</p>
          <p className="mt-1.5 text-sm text-slate">{t.detail}</p>
        </div>
      ))}
    </div>
  )
}

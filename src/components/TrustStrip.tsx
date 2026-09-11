import { trustPoints } from '../content/plantco'

// Credibility signals clustered together in one visible strip rather than
// scattered across the page/footer -- borrowed from the Local
// Service/Contractor benchmark (Len The Plumber) in design-benchmarks.md:
// insurance, certification, years in business, and a continuity promise,
// all at once.
export default function TrustStrip({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
      {trustPoints.map((t) => (
        <div
          key={t.label}
          className="w-full rounded-2xl border border-black/5 bg-white p-5 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
        >
          <p className="font-serif text-base text-fern">{t.label}</p>
          <p className="mt-1.5 text-sm text-slate">{t.detail}</p>
        </div>
      ))}
    </div>
  )
}

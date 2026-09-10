import { howItWorks } from '../content/plantco'

// Addresses first-inquiry anxiety directly -- what actually happens between
// a request and an ongoing plan, spelled out as concrete steps instead of
// left implicit, the way a stronger local-service site would.
export default function HowItWorks({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <p className="eyebrow mb-3">New here?</p>
      <h2 className="font-serif text-3xl text-ink">What actually happens, step by step</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {howItWorks.map((s) => (
          <div key={s.step}>
            <p className="font-serif text-3xl text-brass-deep/70">{s.step}</p>
            <p className="mt-2 font-medium text-ink">{s.title}</p>
            <p className="mt-1.5 text-sm text-slate">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

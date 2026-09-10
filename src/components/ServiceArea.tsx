import { serviceAreas } from '../content/plantco'

// Explicit self-qualifier -- a named neighborhood list someone can check
// at a glance, instead of a single line of prose buried elsewhere in copy.
export default function ServiceArea({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <p className="font-medium text-ink">We currently serve:</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {serviceAreas.map((area) => (
          <span key={area} className="rounded-full bg-mist px-3.5 py-1.5 text-sm font-medium text-fern">
            {area}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate">
        Just outside this list? Ask -- we sometimes extend routes for standing clients.
      </p>
    </div>
  )
}

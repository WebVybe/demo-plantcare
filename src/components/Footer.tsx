import { Link } from 'react-router-dom'
import { hours, plantco } from '../content/plantco'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-serif text-lg font-medium text-fern">{plantco.name}</p>
            <p className="mt-2 max-w-[220px] text-sm text-slate">{plantco.tagline}</p>
          </div>

          <div className="text-sm text-slate">
            <p className="eyebrow mb-3 text-fern">Reach Us</p>
            <p>{plantco.address}</p>
            <p className="mt-2">
              <a href={plantco.phoneHref} className="hover:text-ink">
                {plantco.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${plantco.email}`} className="hover:text-ink">
                {plantco.email}
              </a>
            </p>
          </div>

          <div className="text-sm text-slate">
            <p className="eyebrow mb-3 text-fern">Office Hours</p>
            <ul className="space-y-1">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-slate">
            <p className="eyebrow mb-3 text-fern">Explore</p>
            <ul className="space-y-1">
              <li>
                <Link to="/services" className="hover:text-ink">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-ink">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-ink">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-slate/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {plantco.name}. All rights reserved.</p>
          <p>
            Portfolio demo built by{' '}
            <a href="https://webvybe.app" className="underline hover:text-ink">
              WebVybe
            </a>{' '}
            — a fictional business created to showcase the local-service site template.
          </p>
        </div>
      </div>
    </footer>
  )
}

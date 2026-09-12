import { NavLink } from 'react-router-dom'
import DecorPanel from '../components/DecorPanel'
import ServiceArea from '../components/ServiceArea'
import TrustStrip from '../components/TrustStrip'
import { hours, plantco, team, teamVettingNote } from '../content/plantco'
// Photo credits (Pexels license: free for commercial use, no attribution required):
import aboutRoute from '../assets/images/about-route.jpg' // Sasha Kim
import teamFounder from '../assets/images/team-founder.jpg' // Nguyễn Tiến Thành
import teamMarcus from '../assets/images/team-marcus.jpg' // Tima Miroshnichenko

// Indexed to match the `team` array order in content/plantco.ts (founder, then Marcus).
const teamPhotos = [teamFounder, teamMarcus]

export default function About() {
  return (
    <div className="page-transition">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h1 className="font-serif text-4xl text-ink">Why {plantco.name} exists</h1>
            <p className="mt-5 text-slate">
              {plantco.founderName} started {plantco.name} in {plantco.founded} after years managing plant
              collections for hotels and offices that outsourced care to whoever showed up cheapest that quarter:
              a different, unfamiliar face every visit, with no real accountability when something died.
            </p>
            <p className="mt-4 text-slate">
              The model here is simple: the same technician learns your specific plants, your specific light, and
              your specific habits, and comes back on the same schedule instead of a rotating roster. Golden Hill
              was never a business-plan decision. {plantco.founderName.split(' ')[0]} has lived in the
              neighborhood since before the first route existed.
            </p>
            <p className="mt-6 font-serif text-lg text-fern">{plantco.founderName}, founder</p>
          </div>
          <DecorPanel
            className="h-72 w-full sm:h-96"
            src={aboutRoute}
            alt="A technician misting indoor houseplants near a window"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <TrustStrip />
      </section>

      {/* Named-technician bio block -- proves the "same technician every
          visit" claim structurally with a photo placeholder, name, years,
          a personal detail, and explicit vetting language, instead of
          just asserting continuity elsewhere in copy. */}
      <section className="border-y border-black/5 bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="eyebrow mb-3">Meet the team</p>
          <h2 className="font-serif text-3xl text-ink">The people who actually show up</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate">
            Photos below are stock photography standing in for real headshots, not actual photos of real
            employees, disclosed the same way as the rest of this demo's imagery.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {team.map((member, i) => (
              <div key={member.name} className="flex gap-5 rounded-2xl border border-black/5 bg-white p-6">
                <DecorPanel className="h-24 w-24 shrink-0" src={teamPhotos[i]} alt={`${member.name}, ${member.role}`} />
                <div>
                  <p className="font-serif text-xl text-ink">{member.name}</p>
                  <p className="text-sm font-medium text-brass-deep">{member.role}</p>
                  <p className="mt-1 text-sm text-slate">{member.years}</p>
                  <p className="mt-2 text-sm text-slate">{member.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-slate">{teamVettingNote}</p>
        </div>
      </section>

      <section className="border-y border-black/5 bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Reach Us</p>
            <p className="text-slate">{plantco.address}</p>
            <p className="mt-2 text-slate">
              <a href={plantco.phoneHref} className="hover:text-ink">
                {plantco.phone}
              </a>
            </p>
            <p className="mt-1 text-slate">
              <a href={`mailto:${plantco.email}`} className="hover:text-ink">
                {plantco.email}
              </a>
            </p>
            <div className="mt-5">
              <ServiceArea />
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">Office Hours</p>
            <ul className="space-y-1 text-slate">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 border-b border-black/5 py-1.5 text-sm last:border-0">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-ink">Ready to see what a plan would look like?</h2>
        <NavLink to="/contact" className="btn-primary mt-6 inline-flex">
          Get a Free Walkthrough
        </NavLink>
      </section>
    </div>
  )
}

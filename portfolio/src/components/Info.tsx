import { experience, links, services, testimonials, text } from '../content'
import { Icon } from './Icons'
import Section from './Section'
import Tag from './Tag'

// Three columns side by side on desktop: Services, Experience and Testimonials.
export default function Info() {
  return (
    <Section id="info">
      <div className="grid gap-14 lg:grid-cols-3 lg:gap-0">
        {/* Services */}
        <div id="services" className="scroll-mt-24 lg:pr-8">
          <Tag icon="wrench">{text.services.tag}</Tag>
          <h2 className="mt-4 font-display text-2xl font-semibold">{text.services.heading}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {services.map((s) => (
              <li key={s.title} className="card p-4 transition-colors hover:border-violet/60">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-violet/15 text-violet-300">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-[13px] font-semibold leading-snug">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-mute">{s.text}</p>
              </li>
            ))}
          </ul>
          <a href={links.fiverr} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-6">
            {text.services.cta} <Icon name="arrowRight" className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Experience */}
        <div id="experience" className="scroll-mt-24 lg:border-x lg:border-white/10 lg:px-8">
          <Tag icon="calendar">{text.experience.tag}</Tag>
          <h2 className="mt-4 font-display text-2xl font-semibold">{text.experience.heading}</h2>
          <ol className="relative mt-6 space-y-6">
            <span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-violet to-volt/20" />
            {experience.map((e) => (
              <li key={e.title} className="relative grid grid-cols-[88px_1fr] gap-3 pl-6">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 h-[11px] w-[11px] rounded-full border-2 border-violet bg-[#060818] shadow-[0_0_12px_#6d3df0]"
                />
                <span className="text-xs font-semibold text-volt">{e.date}</span>
                <div>
                  <h3 className="text-[13px] font-semibold leading-snug">{e.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-mute">{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="scroll-mt-24 lg:pl-8">
          <Tag icon="heart">{text.testimonials.tag}</Tag>
          <h2 className="mt-4 font-display text-2xl font-semibold">{text.testimonials.heading}</h2>
          <ul className="mt-6 space-y-3">
            {testimonials.map((t, i) => (
              <li key={i} className="card p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[13px] leading-relaxed text-ink/90">“{t.quote}”</p>
                  {t.placeholder && (
                    <span className="shrink-0 rounded-full border border-amber-300/40 bg-amber-300/10 px-2 py-0.5 text-[10px] font-semibold text-amber-200">
                      {text.testimonials.sample}
                    </span>
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet to-volt text-xs font-semibold">
                      {t.name.slice(0, 1)}
                    </span>
                    <div>
                      <p className="text-xs font-semibold leading-none">{t.name}</p>
                      <p className="mt-1 text-[11px] leading-none text-mute">{t.source}</p>
                    </div>
                  </div>
                  {!t.placeholder && (
                    <span className="flex gap-0.5 text-amber-400" aria-label={text.testimonials.stars}>
                      {[0, 1, 2, 3, 4].map((n) => (
                        <Icon key={n} name="star" className="h-3.5 w-3.5" />
                      ))}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

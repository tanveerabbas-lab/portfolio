import { about, coreValues, images, links, profile, skills, text } from '../content'
import { Icon } from './Icons'
import Section from './Section'
import SmartImage, { asset } from './SmartImage'
import Tag from './Tag'

// Shown until you add public/images/profile.jpg.
function PhotoFallback() {
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
  return (
    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-[#241a6e] via-[#12154a] to-[#0b2a6b]">
      <span className="font-display text-5xl font-bold text-white/80">{initials}</span>
    </div>
  )
}

export default function AboutSkills() {
  return (
    <Section id="about-skills">
      <div className="grid gap-14 xl:grid-cols-[1.55fr_1fr] xl:gap-0">
        {/* About */}
        <div id="about" className="scroll-mt-24 xl:border-r xl:border-white/10 xl:pr-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_170px_minmax(0,0.8fr)]">
            <div className="md:col-span-2 xl:col-span-1">
              <Tag icon="users">{text.about.tag}</Tag>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-snug sm:text-[1.7rem]">{about.heading}</h2>
              <p className="mt-4 text-[13.5px] leading-relaxed text-mute">{about.text}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                {links.cv && (
                  <a href={asset(links.cv)} download className="btn btn-primary">
                    {text.about.downloadCv} <Icon name="download" className="h-4 w-4" />
                  </a>
                )}
                <a href="#experience" className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-white">
                  {text.about.more} <Icon name="arrowRight" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-2xl border border-violet/50 shadow-[0_0_44px_-10px_rgba(99,102,241,0.8)] md:max-w-none">
              <SmartImage
                src={asset(images.profile)}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover"
                fallback={<PhotoFallback />}
              />
            </div>

            <div className="card p-5">
              <h3 className="font-display text-sm font-semibold">{text.about.valuesTitle}</h3>
              <ul className="mt-4 space-y-3.5">
                {coreValues.map((v) => (
                  <li key={v.name} className="flex items-center gap-3 text-[13px] text-mute">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-violet/15 text-violet-300">
                      <Icon name={v.icon} className="h-4 w-4" />
                    </span>
                    {v.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div id="skills" className="scroll-mt-24 xl:pl-10">
          <Tag icon="code">{text.skills.tag}</Tag>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-snug sm:text-[1.7rem]">{text.skills.heading}</h2>
          <ul className="mt-7 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3">
            {skills.map((s) => (
              <li key={s.name} className="group flex flex-col items-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] shadow-[0_8px_30px_-12px_rgba(99,102,241,0.8)] transition duration-300 group-hover:-translate-y-1 group-hover:border-violet/60">
                  <Icon name={s.icon} className="h-8 w-8" />
                </span>
                <span className="mt-2.5 text-sm font-semibold">{s.name}</span>
                <span className="mt-0.5 text-[11px] leading-tight text-mute">{s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

import { links, projects, stackColors, text } from '../content'
import { Icon } from './Icons'
import ProjectArt from './ProjectArt'
import Section from './Section'
import SmartImage, { asset } from './SmartImage'
import Tag from './Tag'

export default function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Tag icon="projects">{text.projects.tag}</Tag>
          <h2 className="mt-4 font-display text-2xl font-semibold sm:text-[1.7rem]">{text.projects.heading}</h2>
        </div>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-white"
        >
          {text.projects.viewAll} <Icon name="arrowRight" className="h-4 w-4" />
        </a>
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((p) => (
          <li key={p.name} className="flex">
            <article className="card group flex w-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-violet/60 hover:shadow-[0_24px_60px_-26px_rgba(124,58,237,0.9)]">
              <div className="relative aspect-[5/2] overflow-hidden border-b border-white/10">
                <SmartImage
                  src={p.image ? asset(p.image) : undefined}
                  alt={`${p.name} ${text.projects.previewSuffix}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  fallback={<ProjectArt name={p.name} device={p.device} />}
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-base font-semibold">{p.name}</h3>
                <p className="mt-0.5 text-xs text-mute">{p.kind}</p>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <li key={s} className="chip-sm">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: stackColors[s] ?? '#8b5cf6' }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-[13px] leading-relaxed text-mute">{p.blurb}</p>

                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                      {text.projects.demo}
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                      {text.projects.github}
                    </a>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}

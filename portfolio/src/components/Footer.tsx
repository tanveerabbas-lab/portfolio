import { contact, footerNavIds, nav, profile, socials, text } from '../content'
import { Icon } from './Icons'
import Section from './Section'

const footerLinks = nav.filter((n) => footerNavIds.includes(n.id)).map((n) => ({ label: n.label, href: `#${n.id}` }))

export default function Footer() {
  const rows = [
    { icon: 'mail', label: text.contact.emailLabel, value: contact.email, href: `mailto:${contact.email}` },
    { icon: 'phone', label: text.contact.phoneLabel, value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: 'pin', label: text.contact.locationLabel, value: contact.location, href: undefined },
  ]

  return (
    <footer>
      <Section id="contact" pad="pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_1.2fr_0.8fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-semibold">{text.contact.heading}</h2>
            <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-mute">
              {text.contact.text}
            </p>
            <a href={`mailto:${contact.email}`} className="btn btn-primary btn-sm mt-5">
              {text.contact.button}
            </a>
          </div>

          <ul className="space-y-4">
            {rows.map((r) => (
              <li key={r.label} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet/15 text-violet-300">
                  <Icon name={r.icon} className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold">{r.label}</p>
                  {r.href ? (
                    <a href={r.href} className="block truncate text-[13px] text-mute transition-colors hover:text-white">
                      {r.value}
                    </a>
                  ) : (
                    <p className="text-[13px] text-mute">{r.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div>
            <h3 className="font-display text-sm font-semibold">{text.contact.followTitle}</h3>
            <div className="mt-4 flex items-center gap-4">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-ink transition-colors hover:text-violet-300">
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
              <a href={`mailto:${contact.email}`} aria-label={text.contact.emailLabel} className="text-ink transition-colors hover:text-violet-300">
                <Icon name="mail" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2 md:justify-end">
            <p className="-rotate-6 font-hand text-3xl leading-tight text-violet-300">
              {text.contact.tagline[0]}
              <br />
              {text.contact.tagline[1]}
            </p>
            <svg className="mt-8 h-9 w-9 text-violet-300" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M6 6c18 0 28 10 26 26m0 0-6-6m6 6 6-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-mute">
          <p>
            © {profile.year} {profile.name}. {text.footer.rights}
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#home"
                aria-label={text.footer.backToTop}
                className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet to-volt text-white"
              >
                <Icon name="chevronUp" className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </footer>
  )
}

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../gsap'
import { images, profile, socials, stats, text } from '../content'
import { reducedMotion } from '../motion'
import HeroGlow from './HeroGlow'
import { Icon } from './Icons'
import Section from './Section'
import SmartImage, { asset } from './SmartImage'

// Numbers count up once when the page loads.
function Count({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(reducedMotion ? to : 0)

  useEffect(() => {
    if (reducedMotion) return
    const o = { v: 0 }
    const tween = gsap.to(o, {
      v: to,
      duration: 1.6,
      delay: 0.9,
      ease: 'power2.out',
      onUpdate: () => setN(Math.round(o.v)),
    })
    return () => {
      tween.kill()
    }
  }, [to])

  return (
    <>
      {n}
      {suffix}
    </>
  )
}

// Shown until you add public/images/hero.webp (your photo or 3D avatar).
function HeroFallback() {
  return (
    <div className="absolute inset-[16%] grid place-items-center rounded-full border border-white/15 bg-gradient-to-br from-violet/30 via-[#1b1f6b]/40 to-volt/30 shadow-[0_0_80px_-10px_rgba(99,102,241,0.8)]">
      <span className="font-mono text-5xl font-semibold text-white/90 sm:text-6xl">{'</>'}</span>
    </div>
  )
}

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)

  // The one orchestrated moment on the page: the hero content rises in, one piece after another.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.h-fade', { opacity: 0, y: 18, duration: 0.9, ease: 'power3.out', stagger: 0.09, delay: 0.1 })
      gsap.from('#hero-anchor', { opacity: 0, scale: 0.94, duration: 1.3, ease: 'power3.out', delay: 0.2 })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <Section id="home" pad="pt-28 pb-10 md:pt-32" divider={false}>
      <div ref={root} className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <span className="h-fade inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-medium text-ink">
            <Icon name="code" className="h-3.5 w-3.5 text-violet-300" />
            {text.hero.greeting}
          </span>

          <h1 className="h-fade mt-4 bg-gradient-to-r from-[#a78bfa] via-[#7c6cff] to-[#4f8bff] bg-clip-text font-display text-5xl font-bold leading-[1.05] text-transparent sm:text-6xl">
            {profile.name}
          </h1>

          <h2 className="h-fade mt-3 font-display text-xl font-semibold sm:text-2xl">{profile.role}</h2>

          <p className="h-fade mt-5 max-w-md text-[15px] leading-relaxed text-mute">{profile.intro}</p>

          <div className="h-fade mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              {text.hero.projects} <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {text.hero.contact}
            </a>
          </div>

          <div className="h-fade mt-7 flex items-center gap-5 text-ink">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="transition-colors hover:text-violet-300">
                <Icon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>

          <ul className="h-fade mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-mute">
            {profile.heroTags.map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                <span className={i === 0 ? 'font-medium text-ink' : ''}>{t}</span>
                {i < profile.heroTags.length - 1 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-mute/60" />}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          {/* Your hero picture already has its own glow. The drawn ring shows only if the picture is missing. */}
          <div id="hero-anchor" className="relative aspect-square w-full">
            <SmartImage
              src={asset(images.hero)}
              alt={`${profile.name}, ${profile.role}`}
              className="absolute inset-0 h-full w-full object-contain"
              fallback={
                <>
                  <HeroGlow />
                  <HeroFallback />
                </>
              }
            />
          </div>

          <div className="pointer-events-none absolute left-[1%] top-[10%] w-[36%] animate-float">
            <div
              className="glass rounded-xl p-3 font-display text-[clamp(0.85rem,2.2vw,1.2rem)] font-semibold leading-tight text-[#cfe0ff] sm:p-4"
              style={{ transform: 'perspective(600px) rotateY(16deg) rotateZ(-6deg)' }}
            >
              {profile.heroCard.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div className="h-fade glass mt-4 rounded-2xl p-4 lg:absolute lg:-right-3 lg:top-[2%] lg:mt-0 lg:w-[215px]">
            <ul className="divide-y divide-white/10">
              {stats.map((s) => (
                <li key={s.label} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-violet/40 bg-violet/10 text-violet-300">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold leading-none">
                      <Count to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-[11px] text-mute">{s.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <a href="#about" className="h-fade mx-auto mt-8 flex w-fit items-center gap-2 text-sm text-mute transition-colors hover:text-white">
        <span className="grid h-6 w-6 animate-nudge place-items-center rounded-full border border-white/25">
          <Icon name="chevronDown" className="h-3.5 w-3.5" />
        </span>
        {text.hero.scroll}
      </a>
    </Section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { links, nav as items, profile, text } from '../content'
import { Gem } from './Icons'

export default function Nav() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const lockUntil = useRef(0)

  useEffect(() => {
    let queued = false

    const update = () => {
      queued = false
      setSolid(window.scrollY > 24)

      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--p', (max > 0 ? window.scrollY / max : 0).toFixed(4))

      if (performance.now() < lockUntil.current) return

      // The active link is the last section whose top has passed 35% of the screen.
      const line = window.innerHeight * 0.35
      let best = 'home'
      let bestTop = -Infinity
      for (const it of items) {
        const el = document.getElementById(it.id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= line && top > bestTop) {
          best = it.id
          bestTop = top
        }
      }
      if (max > 0 && window.scrollY >= max - 4) best = 'contact'
      setActive(best)
    }

    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // After a click, keep the clicked link highlighted while the page is still scrolling to it.
  const go = (id: string) => {
    setActive(id)
    setOpen(false)
    lockUntil.current = performance.now() + 900
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? 'border-b border-white/10 bg-[#060818]/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label={text.nav.ariaLabel} className="relative mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:px-8">
        <a href="#home" onClick={() => go('home')} className="flex items-center gap-2 font-display text-lg font-semibold">
          <Gem className="h-7 w-7" />
          {profile.brand}
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={() => go(it.id)}
                aria-current={active === it.id ? 'true' : undefined}
                className={`relative py-2 text-[13px] font-medium transition-colors ${
                  active === it.id ? 'text-white' : 'text-mute hover:text-white'
                }`}
              >
                {it.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-violet to-volt transition-opacity ${
                    active === it.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={links.fiverr} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm !rounded-full !px-4">
            {text.nav.hire}
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? text.nav.closeMenu : text.nav.openMenu}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 xl:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-px w-4 bg-white transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 h-px w-4 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-px w-4 bg-white transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>

        <span
          aria-hidden="true"
          className="absolute -bottom-px left-5 right-5 h-px origin-left bg-gradient-to-r from-violet to-volt md:left-8 md:right-8"
          style={{ transform: 'scaleX(var(--p, 0))' }}
        />
      </nav>

      {open && (
        <ul className="mx-5 mb-3 rounded-2xl border border-white/10 bg-[#0a0c24]/95 p-2 xl:hidden">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={() => go(it.id)}
                className={`block rounded-xl px-4 py-3 text-base hover:bg-white/10 ${
                  active === it.id ? 'text-white' : 'text-mute'
                }`}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

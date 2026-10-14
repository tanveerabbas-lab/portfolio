// Builds the whole page from content.js. No libraries, no build step.
const $ = (s, r = document) => r.querySelector(s)
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches

function icon(name, cls = '') {
  const d = ICONS[name]
  if (!d) return ''
  const o = d[1] === 'o'
  const attrs = o ? 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"' : ''
  return `<svg class="${cls}" viewBox="${d[0]}" ${attrs} aria-hidden="true">${d[2]}</svg>`
}
const ext = 'target="_blank" rel="noopener noreferrer"'
const tag = (ic, label) => `<span class="tag"><i>${icon(ic)}</i>${label}</span>`
const img = (src, alt, fb) => `<img src="${src}" alt="${alt}" loading="lazy" data-fb="${fb}">`

// Show a built-in drawing when an image file is missing.
document.addEventListener('error', (e) => {
  const t = e.target
  if (t.tagName !== 'IMG' || !t.dataset.fb) return
  const d = document.createElement('div')
  d.className = 'fb'
  d.textContent = t.dataset.fb
  t.replaceWith(d)
}, true)

const initials = profile.name.split(' ').map((w) => w[0]).join('').slice(0, 2)
const footerLinks = nav.filter((n) => footerNavIds.includes(n.id))

const navHtml = `
<header id="top"><nav aria-label="${text.nav.ariaLabel}">
  <a class="brand" href="#home">${icon('gem')}${profile.brand}</a>
  <ul class="menu">${nav.map((n) => `<li><a href="#${n.id}" data-id="${n.id}">${n.label}</a></li>`).join('')}</ul>
  <div class="right">
    <a class="btn sm pri" href="${links.fiverr}" ${ext}>${text.nav.hire}</a>
    <button class="burger" id="burger" type="button" aria-expanded="false" aria-label="${text.nav.openMenu}">☰</button>
  </div>
  <span class="progress" aria-hidden="true"></span>
</nav>
<ul class="drawer" id="drawer">${nav.map((n) => `<li><a href="#${n.id}" data-id="${n.id}">${n.label}</a></li>`).join('')}</ul></header>`

const heroHtml = `
<section id="home"><div class="wrap">
  <div class="hero">
    <div>
      <span class="pill rise" style="--i:0">${icon('code')}${text.hero.greeting}</span>
      <h1 class="rise" style="--i:1">${profile.name}</h1>
      <h2 class="rise" style="--i:2">${profile.role}</h2>
      <p class="intro rise" style="--i:3">${profile.intro}</p>
      <div class="row g12 rise" style="--i:4;margin-top:28px">
        <a class="btn pri" href="#projects">${text.hero.projects} ${icon('arrowRight')}</a>
        <a class="btn ghost" href="#contact">${text.hero.contact}</a>
      </div>
      <div class="row g20 soc rise" style="--i:5;margin-top:28px">
        ${socials.map((s) => `<a href="${s.href}" ${ext} aria-label="${s.name}">${icon(s.icon)}</a>`).join('')}
      </div>
      <ul class="row hero-tags rise" style="--i:6">${profile.heroTags.map((t) => `<li>${t}</li>`).join('')}</ul>
    </div>
    <div class="art">
      <div class="hero-img rise" style="--i:3">${img(images.hero, `${profile.name}, ${profile.role}`, '</>')}</div>
      <div class="float"><div class="glass">${profile.heroCard.map((l) => `<span>${l}</span>`).join('')}</div></div>
      <div class="glass stats rise" style="--i:5"><ul>${stats.map((s) => `
        <li><span class="iconbox">${icon(s.icon, 'ico')}</span>
        <div><b><span data-count="${s.value}" data-suffix="${s.suffix}">${s.value}${s.suffix}</span></b><small>${s.label}</small></div></li>`).join('')}
      </ul></div>
    </div>
  </div>
  <a class="scroll rise" style="--i:7" href="#about"><i>${icon('chevronDown')}</i>${text.hero.scroll}</a>
</div></section>`

const aboutHtml = `
<section id="about-skills"><div class="wrap two">
  <div id="about" class="about" style="scroll-margin-top:96px">
    <div class="about-grid">
      <div>
        ${tag('users', text.about.tag)}
        <h2 class="h2">${about.heading}</h2>
        <p>${about.text}</p>
        <div class="row g20" style="margin-top:24px">
          ${links.cv ? `<a class="btn pri" href="${links.cv}" download>${text.about.downloadCv} ${icon('download')}</a>` : ''}
          <a class="link" href="#experience">${text.about.more} ${icon('arrowRight')}</a>
        </div>
      </div>
      <div class="photo">${img(images.profile, `Portrait of ${profile.name}`, initials)}</div>
      <div class="card values"><h3 class="disp">${text.about.valuesTitle}</h3>
        <ul>${coreValues.map((v) => `<li><span class="iconbox">${icon(v.icon)}</span>${v.name}</li>`).join('')}</ul></div>
    </div>
  </div>
  <div id="skills" style="scroll-margin-top:96px">
    ${tag('code', text.skills.tag)}
    <h2 class="h2">${text.skills.heading}</h2>
    <ul class="skills">${skills.map((s) => `<li><span class="box">${icon(s.icon)}</span><b>${s.name}</b><small>${s.note}</small></li>`).join('')}</ul>
  </div>
</div></section>`

const projectsHtml = `
<section id="projects"><div class="wrap">
  <div class="head"><div>${tag('projects', text.projects.tag)}<h2 class="h2">${text.projects.heading}</h2></div>
    <a class="link" href="${links.github}" ${ext}>${text.projects.viewAll} ${icon('arrowRight')}</a></div>
  <ul class="projects">${projects.map((p) => `
    <li><article class="card proj">
      <div class="shot">${p.image ? img(p.image, `${p.name} ${text.projects.previewSuffix}`, p.name) : `<div class="fb">${p.name}</div>`}</div>
      <div class="pbody"><h3 class="disp">${p.name}</h3><p class="kind">${p.kind}</p>
        <ul>${p.stack.map((s) => `<li class="chip"><i style="background:${stackColors[s] || '#8b5cf6'}"></i>${s}</li>`).join('')}</ul>
        <p>${p.blurb}</p>
        <div class="row" style="gap:8px">
          ${p.demo ? `<a class="btn sm pri" href="${p.demo}" ${ext}>${text.projects.demo}</a>` : ''}
          ${p.github ? `<a class="btn sm ghost" href="${p.github}" ${ext}>${text.projects.github}</a>` : ''}
        </div></div></article></li>`).join('')}</ul>
</div></section>`

const infoHtml = `
<section id="info"><div class="wrap three">
  <div id="services" style="scroll-margin-top:96px">
    ${tag('wrench', text.services.tag)}<h2 class="h2 h2s">${text.services.heading}</h2>
    <ul class="services">${services.map((s) => `<li class="card"><span class="iconbox">${icon(s.icon, 'ico')}</span><h3>${s.title}</h3><p>${s.text}</p></li>`).join('')}</ul>
    <a class="btn sm pri" style="margin-top:24px" href="${links.fiverr}" ${ext}>${text.services.cta} ${icon('arrowRight')}</a>
  </div>
  <div id="experience" style="scroll-margin-top:96px">
    ${tag('calendar', text.experience.tag)}<h2 class="h2 h2s">${text.experience.heading}</h2>
    <ol class="timeline">${experience.map((e) => `<li><time>${e.date}</time><div><h3>${e.title}</h3><p>${e.text}</p></div></li>`).join('')}</ol>
  </div>
  <div id="testimonials" style="scroll-margin-top:96px">
    ${tag('heart', text.testimonials.tag)}<h2 class="h2 h2s">${text.testimonials.heading}</h2>
    <ul class="quotes">${testimonials.map((t) => `
      <li class="card"><div class="top"><q>“${t.quote}”</q>${t.placeholder ? `<span class="badge">${text.testimonials.sample}</span>` : ''}</div>
      <div class="who"><div><span class="av">${t.name.slice(0, 1)}</span><span><b>${t.name}</b><small>${t.source}</small></span></div>
      ${t.placeholder ? '' : `<span class="stars" aria-label="${text.testimonials.stars}">${icon('star').repeat(5)}</span>`}</div></li>`).join('')}</ul>
  </div>
</div></section>`

const rows = [
  { icon: 'mail', label: text.contact.emailLabel, value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'phone', label: text.contact.phoneLabel, value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { icon: 'pin', label: text.contact.locationLabel, value: contact.location },
]
const footerHtml = `
<footer><section id="contact"><div class="wrap">
  <div class="contact">
    <div><h2 class="disp">${text.contact.heading}</h2><p>${text.contact.text}</p>
      <a class="btn sm pri" style="margin-top:20px" href="mailto:${contact.email}">${text.contact.button}</a></div>
    <ul class="crow">${rows.map((r) => `<li><span class="iconbox">${icon(r.icon)}</span><div style="min-width:0"><b>${r.label}</b>${r.href ? `<a href="${r.href}">${r.value}</a>` : `<span>${r.value}</span>`}</div></li>`).join('')}</ul>
    <div class="follow"><h3 class="disp">${text.contact.followTitle}</h3><div class="row">
      ${socials.map((s) => `<a href="${s.href}" ${ext} aria-label="${s.name}">${icon(s.icon)}</a>`).join('')}
      <a href="mailto:${contact.email}" aria-label="${text.contact.emailLabel}">${icon('mail')}</a></div></div>
    <div class="hand"><p>${text.contact.tagline[0]}<br>${text.contact.tagline[1]}</p>
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M6 6c18 0 28 10 26 26m0 0-6-6m6 6 6-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
  </div>
  <div class="bottom"><p>© ${profile.year} ${profile.name}. ${text.footer.rights}</p>
    <ul>${footerLinks.map((l) => `<li><a href="#${l.id}">${l.label}</a></li>`).join('')}
    <li><a class="top" href="#home" aria-label="${text.footer.backToTop}">${icon('chevronUp')}</a></li></ul></div>
</div></section></footer>`

$('#app').innerHTML = navHtml + '<main>' + heroHtml + aboutHtml + projectsHtml + infoHtml + '</main>' + footerHtml
document.title = `${profile.name} | ${profile.role}`

// Numbers count up once on load.
document.querySelectorAll('[data-count]').forEach((el) => {
  const to = +el.dataset.count
  if (reduced) return
  const start = performance.now() + 900
  const tick = (now) => {
    const k = Math.min(Math.max((now - start) / 1600, 0), 1)
    el.textContent = Math.round(to * (1 - Math.pow(1 - k, 2))) + el.dataset.suffix
    if (k < 1) requestAnimationFrame(tick)
  }
  el.textContent = '0' + el.dataset.suffix
  requestAnimationFrame(tick)
})

// Menu: solid bar, progress line, active link, mobile drawer.
const header = $('#top'), burger = $('#burger'), drawer = $('#drawer')
let lock = 0, queued = false
const setActive = (id) => document.querySelectorAll('[data-id]').forEach((a) => a.classList.toggle('on', a.dataset.id === id))
function update() {
  queued = false
  header.classList.toggle('solid', scrollY > 24 || drawer.classList.contains('open'))
  const max = document.documentElement.scrollHeight - innerHeight
  document.documentElement.style.setProperty('--p', (max > 0 ? scrollY / max : 0).toFixed(4))
  if (performance.now() < lock) return
  let best = 'home', bestTop = -Infinity
  for (const n of nav) {
    const el = document.getElementById(n.id)
    if (!el) continue
    const top = el.getBoundingClientRect().top
    if (top <= innerHeight * 0.35 && top > bestTop) { best = n.id; bestTop = top }
  }
  if (max > 0 && scrollY >= max - 4) best = 'contact'
  setActive(best)
}
addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(update) } }, { passive: true })
addEventListener('resize', update)
document.querySelectorAll('[data-id]').forEach((a) => a.addEventListener('click', () => {
  setActive(a.dataset.id); lock = performance.now() + 900
  drawer.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.textContent = '☰'; burger.setAttribute('aria-label', text.nav.openMenu)
}))
burger.addEventListener('click', () => {
  const open = drawer.classList.toggle('open')
  burger.setAttribute('aria-expanded', open); burger.textContent = open ? '✕' : '☰'
  burger.setAttribute('aria-label', open ? text.nav.closeMenu : text.nav.openMenu); update()
})
update()

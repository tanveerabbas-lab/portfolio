# Developer Portfolio

React + TypeScript + Tailwind CSS + GSAP, built with Vite. A single page: Hero, About, Skills,
Projects, Services, Experience, Testimonials and Contact.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, then write ./dist
npm run preview  # serve ./dist
```

## Everything is a constant: edit `src/content.ts`

All text, headings, button labels, menu items, social links, project data and image paths live in
one file. The components only display what is defined there.

| Export | Controls |
|---|---|
| `profile`, `stats`, `links`, `contact` | name, role, numbers, social/CV links, email, phone, location |
| `about`, `coreValues`, `skills` | About and Skills sections |
| `projects`, `stackColors` | project cards |
| `services`, `experience`, `testimonials` | Services, Experience, Testimonials |
| `nav`, `footerNavIds`, `socials` | menu, footer links, social icons |
| `images` | hero and portrait file paths |
| `text` | every fixed label and heading (buttons, section titles, footer text) |

Search for `TODO` in that file to find values you must replace. Replace the sample testimonials with
real reviews, then delete `placeholder: true`.

Only `index.html` (page title and SEO description) is outside `content.ts`; edit it by hand.

## Images (`public/images`)

`hero.webp`, `profile.jpg`, `servaza.webp`, `ecommerce.webp`, `portfolio.webp`, `taskmanager.webp`.
Replace them with your own files, or change the paths in `images` / `projects` inside `content.ts`.
A missing image is replaced by a built-in drawing, so the site never breaks.
CV: put `cv.pdf` in `public/` and set `cv: 'cv.pdf'` in `links`.

## Deploy on GitHub Pages

Push to `main`, then Settings → Pages → Source: **GitHub Actions**. The workflow in
`.github/workflows/deploy.yml` builds and publishes automatically.

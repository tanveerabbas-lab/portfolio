// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE. Everything shown on the site comes from here:
// every text, heading, button label, link, menu item and image path.
// Search for "TODO" to find the values you must check or replace.
// ─────────────────────────────────────────────────────────────

const profile = {
  name: 'Tanveer Abbas', // TODO: your real name
  brand: 'TanveerStudio', // TODO: short name shown in the menu bar
  role: 'Flutter & Web Developer',
  intro:
    'I turn ideas into beautiful, high-performance mobile apps and websites. Using Flutter, Supabase, and Firebase, I build seamless digital experiences that are fast, reliable, and designed around your users.',
  heroTags: ['Flutter', 'Dart', 'Node.js', 'Supabase', 'Firebase'],
  heroCard: ['Turning', 'Ideas Into', 'Reality'],
  year: new Date().getFullYear(),
}

// TODO: make sure these numbers are true for you before you publish.
const stats = [
  { value: 5, suffix: '+', label: 'Projects Completed', icon: 'projects' },
  { value: 2, suffix: '+', label: 'Years Experience', icon: 'calendar' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: 'heart' },
]

const links = {
  fiverr: 'https://www.fiverr.com/tanveer_eng?public_mode=true', // TODO
  github: 'https://github.com/tanveerabbas-lab', // TODO
  linkedin: 'https://www.linkedin.com/in/tanveer-abbas-696204374', // TODO
  cv: '', // TODO: put your CV in the "public" folder, then write its name here, e.g. 'cv.pdf'. Empty hides the button.
}

const contact = {
 email: 'tanveerabbas92@yahoo.com', // TODO
  phone: '+92 000 000 0000', // TODO
  location: 'Islamabad, Pakistan', // TODO
}

const about = {
  heading: 'Let’s Build Something Amazing Together',
  text: 'I’m a developer who focuses on Flutter and modern web technologies. I enjoy solving problems, designing clean and friendly interfaces, and building products that make a real difference. My goal is to work on exciting projects, keep learning, and help businesses grow through technology.',
}

const coreValues = [
  { name: 'Clean Code', icon: 'code' },
  { name: 'User Focused Design', icon: 'eye' },
  { name: 'Continuous Learning', icon: 'book' },
  { name: 'Team Collaboration', icon: 'users' },
  { name: 'Delivering Results', icon: 'target' },
]

const skills = [
  { name: 'Flutter', note: 'Mobile App Development', icon: 'flutter' },
  { name: 'Dart', note: 'Programming Language', icon: 'dart' },
  { name: 'Node.js', note: 'Backend Development', icon: 'node' },
  { name: 'Supabase', note: 'Database & Auth', icon: 'supabase' },
  { name: 'Firebase', note: 'Cloud & Notifications', icon: 'firebase' },
  { name: 'Git & GitHub', note: 'Version Control', icon: 'github' },
]

// TODO: replace the links. Add a screenshot in public/images and set `image` to show it.
const projects = [
  {
    name: 'Servaza',
    kind: 'Business Solution Platform',
    blurb: 'A modern business platform to connect users with services. Built with Flutter and Supabase.',
    stack: ['Flutter', 'Supabase', 'Dart'],
    device: 'mobile',
    image: 'images/servaza.png',
    github: 'https://github.com/your-username/servaza',
    demo: 'https://example.com',
  },
  {
    name: 'E-Commerce Website',
    kind: 'Shopping Website',
    blurb: 'A complete e-commerce website with cart, payments and order verification.',
    stack: ['HTML', 'CSS', 'javascript', 'Node.js'],
    device: 'mobile',
    image: 'images/ecommerce_my.png',
    github: 'https://github.com/your-username/ecommerce-app',
    demo: 'https://example.com',
  },
  {
    name: 'Portfolio Website',
    kind: 'Personal Portfolio',
    blurb: 'A modern portfolio website with smooth animations and a clean, responsive design.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    device: 'web',
    image: 'images/portfolio_my.png',
    github: 'https://github.com/your-username/portfolio',
    demo: 'https://your-username.github.io',
  },
  {
  name: 'Budget Tracker',
  kind: 'Finance App',
  blurb: 'An offline Android app to track income and expenses, manage loans person by person, set monthly budget limits, and share PDF reports.',
  stack: ['Flutter', 'Dart', 'SQLite', 'Provider'],
  device: 'mobile',
  image: 'images/budget-tracker.png',
  github: 'https://github.com/your-username/budget-tracker',
  demo: '',
},
  {
    name: 'Task Manager',
    kind: 'Productivity App',
    blurb: 'A full-stack task management app with real-time updates and authentication.',
    stack: ['React', 'Node.js', 'MongoDB'],
    device: 'web',
    image: 'images/taskmanager.png',
    github: 'https://github.com/your-username/task-manager',
    demo: 'https://example.com',
  },
]

const stackColors = {
  Flutter: '#47c5fb',
  Dart: '#2bb7f6',
  Supabase: '#3ecf8e',
  Firebase: '#ffca28',
  React: '#61dafb',
  TypeScript: '#3178c6',
  Tailwind: '#38bdf8',
  'Node.js': '#6cc24a',
  MongoDB: '#47a248',
}

const services = [
  { title: 'Mobile App Development', text: 'Flutter apps for iOS & Android with clean UI/UX.', icon: 'mobile' },
  { title: 'Web Development', text: 'Fast, modern and responsive web applications.', icon: 'web' },
  { title: 'API Integration', text: 'Connect your app with third-party services.', icon: 'api' },
  { title: 'UI/UX Design', text: 'Beautiful and user-friendly designs.', icon: 'pen' },
  { title: 'Backend Development', text: 'Secure and scalable server-side solutions.', icon: 'database' },
  { title: 'Maintenance & Support', text: 'Keep your project running smoothly.', icon: 'wrench' },
]

// TODO: rewrite these four entries so they match your real story.
const experience = [
 {
    date: '2025 – Present',
    title: 'Freelance Developer (Fiverr)',
    text: 'Building mobile and web applications for clients around the world.',
  },
  {
    date: '2024 – 2025',
    title: 'Flutter Developer',
    text: 'Worked on real-world projects and improved app performance and UI.',
  },
  {
    date: '2023 – 2024',
    title: 'Self Learning & Personal Projects',
    text: 'Built several personal projects to sharpen my skills and gain experience.',
  },
  {
    date: '2024 – 2028',
    title: 'Bachelor’s Degree (BS Software Engineering)',
    text: 'Focused on programming, data structures and problem solving.',
  },
]

// IMPORTANT: replace these three with REAL reviews from your Fiverr profile
// (copy the text and the client's first name). Entries with `placeholder: true`
// show a "Sample" badge and no stars. Remove `placeholder` once the text is real.
const testimonials = [
  {
    quote: 'Excellent work! He understood my requirements and delivered exactly what I needed. Highly recommended!',
    name: 'James Anderson',
    source: 'Client',
    placeholder: true,
  },
  {
    quote: 'This was a great experience. The seller listened and executed perfectly.',
    name: 'Frendra',
    source: 'Fiverr client',
    placeholder: true,
  },
  {
    quote: 'Great experience working with him. Professional, reliable, and very skilled!',
    name: 'Thomas Walker',
    source: 'Client',
    placeholder: true,
  },
]

// ─── Images (files inside public/images) ─────────────────────
const images = {
  hero: 'images/hero.webp', // square, transparent WebP or PNG is best
  profile: 'images/profile.jpg', // portrait for the About section
}

// ─── Menu (top bar). `id` must match a section id on the page ─
const nav = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Experience', id: 'experience' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
]

// Which menu items are repeated in the footer.
const footerNavIds = ['home', 'about', 'projects', 'skills', 'services', 'contact']

// Social icons shown in the hero and the footer.
const socials = [
  { name: 'GitHub', icon: 'github', href: links.github },
  { name: 'LinkedIn', icon: 'linkedin', href: links.linkedin },
  { name: 'Fiverr', icon: 'fiverr', href: links.fiverr },
]

// ─── Every fixed text on the page ────────────────────────────
const text = {
  nav: {
    hire: 'Hire Me',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    ariaLabel: 'Main',
  },
  hero: {
    greeting: 'Hi, I’m',
    projects: 'View My Projects',
    contact: 'Contact Me',
    scroll: 'Scroll Down',
  },
  about: {
    tag: 'About Me',
    downloadCv: 'Download CV',
    more: 'More About Me',
    valuesTitle: 'My Core Values',
  },
  skills: {
    tag: 'My Skills',
    heading: 'Technologies I Work With',
  },
  projects: {
    tag: 'Featured Projects',
    heading: 'My Recent Work',
    viewAll: 'View All Projects',
    demo: 'Live Demo',
    github: 'GitHub',
    previewSuffix: 'preview',
  },
  services: {
    tag: 'Services',
    heading: 'What I Offer',
    cta: 'Hire Me on Fiverr',
  },
  experience: {
    tag: 'My Journey',
    heading: 'Experience & Education',
  },
  testimonials: {
    tag: 'What Clients Say',
    heading: 'Trusted by Clients Worldwide',
    sample: 'Sample',
    stars: '5 out of 5 stars',
  },
  contact: {
    heading: 'Get In Touch',
    text: 'Have a project in mind or want to work together? Feel free to contact me.',
    button: 'Contact Me',
    followTitle: 'Follow Me',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    tagline: ['Let’s build', 'something great!'],
  },
  footer: {
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
}

import type { ReactElement, ReactNode } from 'react'

type P = { className?: string }
type IconFn = (p: P) => ReactElement

// Outline icons share one wrapper so they all look like the same family.
const outline =
  (children: ReactNode): IconFn =>
  ({ className = 'h-5 w-5' }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )

export const ArrowRight = outline(<path d="M5 12h14m-5-5 5 5-5 5" />)
export const Download = outline(<path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />)
export const ChevronUp = outline(<path d="m6 15 6-6 6 6" />)
export const ChevronDown = outline(<path d="m6 9 6 6 6-6" />)
export const Code = outline(<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />)
export const Eye = outline(
  <>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </>,
)
export const Book = outline(
  <>
    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
    <path d="M4 19V5M9 7h6" />
  </>,
)
export const Users = outline(
  <>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M17 14c2.5 0 4.5 2 4.5 4.5" />
  </>,
)
export const Target = outline(
  <>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r=".8" fill="currentColor" />
  </>,
)
export const Projects = outline(
  <>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="m9 13 2 2 4-4" />
  </>,
)
export const Calendar = outline(
  <>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M8 3v4M16 3v4M3.5 10h17" />
    <path d="m9.5 15 2 2 3.5-3.5" />
  </>,
)
export const Heart = outline(<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />)
export const Mobile = outline(
  <>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 18.5h2" />
  </>,
)
export const Web = outline(
  <>
    <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
    <path d="M3 9h18" />
    <circle cx="6.5" cy="6.8" r=".6" fill="currentColor" />
  </>,
)
export const Api = outline(
  <>
    <rect x="3" y="4" width="7" height="7" rx="1.5" />
    <rect x="14" y="13" width="7" height="7" rx="1.5" />
    <path d="M10 7.5h3a3 3 0 0 1 3 3V13" />
  </>,
)
export const Pen = outline(
  <>
    <path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19z" />
    <path d="m14 7 3 3" />
  </>,
)
export const Database = outline(
  <>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </>,
)
export const Wrench = outline(
  <path d="M21 7.5a5 5 0 0 1-6.7 4.7L7 19.5 4.5 17l7.3-7.3A5 5 0 0 1 16.5 3L13.8 5.7l.5 2.3 2.3.5z" />,
)
export const Phone = outline(
  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />,
)
export const Pin = outline(
  <>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </>,
)
export const Mail = outline(
  <>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </>,
)

export const Star: IconFn = ({ className = 'h-4 w-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
  </svg>
)

export const GitHub: IconFn = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

export const LinkedIn: IconFn = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

// Simple "fi" mark in a ring, so the Fiverr link is recognizable without using their logo artwork.
export const Fiverr: IconFn = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <text x="12" y="16" textAnchor="middle" fontSize="10.5" fontWeight="700" fontFamily="Poppins, Arial, sans-serif" fill="currentColor">
      fi
    </text>
  </svg>
)

// Simplified technology marks (not the official artwork). Swap in official SVGs if you prefer.
const Flutter: IconFn = ({ className = 'h-8 w-8' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#54c5f8" d="M13.2 2h6.3L8.2 13.3 5 10.1z" />
    <path fill="#54c5f8" d="m13.2 12.7 2.6-2.6h3.7l-6.3 6.3z" opacity=".85" />
    <path fill="#01579b" d="m11.2 14.8 2.4 2.4-3.6 3.6-2.4-2.4z" />
    <path fill="#29b6f6" d="m13.6 17.2 2.5 2.5-2.1 2.1-2.5-2.5z" />
  </svg>
)

const Dart: IconFn = ({ className = 'h-8 w-8' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#0175c2" d="M4.5 8.2 8.2 4.5h8l3.3 3.3v8L16 19.5H8.2L4.5 15.8z" />
    <path fill="#2bb7f6" d="M8.2 4.5 4.5 8.2l2.6 2.6 6.9-6.3z" />
    <path fill="#8fe0ff" d="m7.1 10.8 8.6 8.7H8.2L4.5 15.8V8.2z" opacity=".6" />
  </svg>
)

const TypeScript: IconFn = ({ className = 'h-8 w-8' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="3.5" fill="#3178c6" />
    <text x="12" y="18" textAnchor="middle" fontSize="11.5" fontWeight="700" fontFamily="Poppins, Arial, sans-serif" fill="#fff">
      TS
    </text>
  </svg>
)

const NodeJs: IconFn = ({ className = 'h-8 w-8' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2 20.5 7v10L12 22 3.5 17V7z" fill="#12301c" stroke="#6cc24a" strokeWidth="1.5" strokeLinejoin="round" />
    <text x="12" y="15.2" textAnchor="middle" fontSize="7.5" fontWeight="700" fontFamily="Poppins, Arial, sans-serif" fill="#6cc24a">
      JS
    </text>
  </svg>
)

const Supabase: IconFn = ({ className = 'h-8 w-8' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#3ecf8e" d="M13.5 2 4.5 13.2h6.3L10.5 22l9-11.2h-6.3z" />
  </svg>
)

const Firebase: IconFn = ({ className = 'h-8 w-8' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#ffa000" d="M5.2 17.8 7.6 3.3c.1-.6.8-.7 1.1-.2L11 7.5z" />
    <path fill="#f57c00" d="M13.7 10.7 11 7.5 5.2 17.8z" />
    <path fill="#ffca28" d="m5.2 17.8 7 3.9c.3.2.6.2.9 0l6.1-3.4L17.3 5.9c-.1-.5-.8-.6-1-.1l-2.6 4.9L11 7.5z" />
  </svg>
)

export const Gem: IconFn = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="gem" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8b5cf6" />
        <stop offset="1" stopColor="#2f8bff" />
      </linearGradient>
    </defs>
    <path d="M32 6 54 20v24L32 58 10 44V20z" stroke="url(#gem)" strokeWidth="5" strokeLinejoin="round" />
    <path d="M32 6v52M10 20l44 24M54 20 10 44" stroke="url(#gem)" strokeWidth="2.5" opacity=".6" />
  </svg>
)

const ICONS: Record<string, IconFn> = {
  arrowRight: ArrowRight,
  download: Download,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  code: Code,
  eye: Eye,
  book: Book,
  users: Users,
  target: Target,
  projects: Projects,
  calendar: Calendar,
  heart: Heart,
  mobile: Mobile,
  web: Web,
  api: Api,
  pen: Pen,
  database: Database,
  wrench: Wrench,
  phone: Phone,
  pin: Pin,
  mail: Mail,
  star: Star,
  github: GitHub,
  linkedin: LinkedIn,
  fiverr: Fiverr,
  flutter: Flutter,
  dart: Dart,
  typescript: TypeScript,
  node: NodeJs,
  supabase: Supabase,
  firebase: Firebase,
}

// Look up an icon by the string name used in content.ts.
export function Icon({ name, className }: { name: string; className?: string }) {
  const C = ICONS[name]
  return C ? <C className={className} /> : null
}

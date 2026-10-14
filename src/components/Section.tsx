import type { ReactNode } from 'react'

// Every section can show a thin divider line on top, like the reference design.
export default function Section({
  id,
  children,
  pad = 'py-14',
  divider = true,
}: {
  id: string
  children: ReactNode
  pad?: string
  divider?: boolean
}) {
  return (
    <section
      id={id}
      data-section
      className={`relative z-10 scroll-mt-20 ${pad} ${divider ? 'border-t border-white/[0.07]' : ''}`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">{children}</div>
    </section>
  )
}

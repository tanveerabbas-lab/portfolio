// Preview drawn in CSS. It is shown until you add a real screenshot for the project.
export default function ProjectArt({ name, device }: { name: string; device: 'mobile' | 'web' }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#1b1259] via-[#0e1033] to-[#0a1d52]">
      <div aria-hidden="true" className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-violet/35 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-12 -left-6 h-36 w-36 rounded-full bg-volt/25 blur-3xl" />

      {device === 'mobile' ? (
        <div className="relative flex items-end gap-3" aria-hidden="true">
          {[0, 1].map((i) => (
            <div
              key={i}
              className={`h-28 w-14 rounded-2xl border border-white/25 bg-[#0b0d2a] p-1.5 shadow-[0_10px_30px_-8px_rgba(124,58,237,.7)] ${
                i ? '-translate-y-2' : 'translate-y-2'
              }`}
            >
              <div className="h-8 rounded-lg bg-gradient-to-br from-violet to-volt" />
              <div className="mt-1.5 h-2 rounded bg-white/30" />
              <div className="mt-1 h-2 w-2/3 rounded bg-white/15" />
              <div className="mt-1.5 h-6 rounded-lg bg-white/10" />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="relative h-24 w-40 rounded-xl border border-white/25 bg-[#0b0d2a] p-1.5 shadow-[0_10px_30px_-8px_rgba(59,130,246,.7)]"
          aria-hidden="true"
        >
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="mt-1.5 grid grid-cols-[1fr_2fr] gap-1.5">
            <div className="h-16 rounded bg-white/10" />
            <div className="space-y-1.5">
              <div className="h-5 rounded bg-gradient-to-r from-violet to-volt" />
              <div className="h-2 rounded bg-white/25" />
              <div className="h-2 w-2/3 rounded bg-white/15" />
              <div className="h-2 w-1/2 rounded bg-white/15" />
            </div>
          </div>
        </div>
      )}

      <span className="absolute bottom-2 left-3 font-display text-sm font-semibold text-white/90">{name}</span>
    </div>
  )
}

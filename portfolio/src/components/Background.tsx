// Fixed page background: deep navy, soft purple and blue glows, and faint stars.
// It is pure CSS, so it is light and works on every device.
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(62rem 40rem at 76% 6%, rgba(99,60,255,0.30), transparent 62%), radial-gradient(46rem 36rem at -4% 46%, rgba(47,139,255,0.13), transparent 62%), radial-gradient(40rem 30rem at 100% 80%, rgba(124,58,237,0.11), transparent 62%)',
        }}
      />
      <div className="bg-stars absolute inset-0 opacity-60" />
      <div className="bg-stars-tint absolute inset-0 animate-twinkle" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(120% 80% at 50% 40%, transparent 55%, rgba(3,4,14,0.55) 100%)' }}
      />
    </div>
  )
}

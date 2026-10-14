// Glowing ring and floating crystals drawn behind the hero picture, like the reference design.
const crystals = [
  { left: '3%', top: '24%', size: 26, delay: '0s' },
  { left: '90%', top: '16%', size: 30, delay: '1.2s' },
  { left: '83%', top: '68%', size: 22, delay: '2.1s' },
  { left: '9%', top: '76%', size: 20, delay: '0.6s' },
  { left: '56%', top: '2%', size: 16, delay: '1.7s' },
]

export default function HeroGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-[-6%]">
      <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="heroRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4f8bff" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="heroBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* soft halo */}
        <circle cx="200" cy="205" r="150" fill="none" stroke="url(#heroRing)" strokeWidth="14" opacity="0.4" filter="url(#heroBlur)" />
        {/* main arch over the head */}
        <path d="M 77 291 A 150 150 0 1 1 341 256" fill="none" stroke="url(#heroRing)" strokeWidth="5" strokeLinecap="round" />
        {/* thin outer arch */}
        <path d="M 42 262 A 168 168 0 1 1 367 220" fill="none" stroke="#8b5cf6" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
        {/* faint inner ring */}
        <circle cx="200" cy="205" r="128" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 7" opacity="0.6" />
      </svg>

      {crystals.map((c, i) => (
        <span
          key={i}
          className="absolute animate-float"
          style={{
            left: c.left,
            top: c.top,
            width: c.size,
            height: c.size * 1.25,
            animationDelay: c.delay,
            background: 'linear-gradient(160deg, #a99bff 0%, #6d4cff 45%, #2c1fb0 100%)',
            clipPath: 'polygon(50% 0, 100% 35%, 80% 100%, 20% 100%, 0 35%)',
            filter: 'drop-shadow(0 0 8px rgba(124,92,255,0.9))',
          }}
        />
      ))}
    </div>
  )
}

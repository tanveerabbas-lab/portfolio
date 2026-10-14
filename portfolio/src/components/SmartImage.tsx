import { useState } from 'react'
import type { ReactNode } from 'react'

// Resolve a file inside /public so it works on localhost and on GitHub Pages.
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\.?\//, '')}`

// Shows your image if the file exists, and a built-in drawing if it does not.
export default function SmartImage({
  src,
  alt,
  className,
  fallback,
}: {
  src?: string
  alt: string
  className?: string
  fallback: ReactNode
}) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return <>{fallback}</>
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />
}

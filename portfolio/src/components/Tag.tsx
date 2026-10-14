import type { ReactNode } from 'react'
import { Icon } from './Icons'

// Small pill that introduces a section, like "ABOUT ME".
export default function Tag({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <span className="tag">
      <span className="tag-icon">
        <Icon name={icon} className="h-3 w-3" />
      </span>
      {children}
    </span>
  )
}

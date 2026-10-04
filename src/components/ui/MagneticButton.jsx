import { useRef } from 'react'
import { cn } from '../../lib/cn.js'

export function MagneticButton({
  as: Tag = 'button',
  className,
  children,
  strength = 12,
  ...props
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const moveX = (x / rect.width) * strength
    const moveY = (y / rect.height) * strength

    el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0, 0, 0)'
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        'transition-transform duration-300 ease-out will-change-transform',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
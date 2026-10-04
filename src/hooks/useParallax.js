import { useEffect, useRef } from 'react'

export function useParallax(speed = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const offset = (center - viewportCenter) * speed
      el.style.transform = `translate3d(0, ${offset}px, 0)`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return ref
}
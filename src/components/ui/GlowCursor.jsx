import { useEffect, useRef } from 'react'

export function GlowCursor() {
  const glowRef = useRef(null)
  const posRef = useRef({ x: -500, y: -500 })
  const targetRef = useRef({ x: -500, y: -500 })

  useEffect(() => {
    // Skip di device touch
    if (window.matchMedia('(hover: none)').matches) return

    const glow = glowRef.current
    if (!glow) return

    const onMove = (e) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
    }

    let raf
    const animate = () => {
      // Lerp: interpolasi posisi (semakin kecil, semakin lambat/lembut)
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15

      if (glow) {
        glow.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`
      }

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        width: '320px',
        height: '320px',
        borderRadius: '9999px',
        background:
          'radial-gradient(circle, rgba(20, 184, 166, 0.18) 0%, rgba(20, 184, 166, 0.06) 40%, transparent 70%)',
        mixBlendMode: 'multiply',
        filter: 'blur(20px)',
        willChange: 'transform',
      }}
    />
  )
}
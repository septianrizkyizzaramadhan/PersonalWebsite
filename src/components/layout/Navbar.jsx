import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { cn } from '../../lib/cn.js'
import { profile } from '../../data/profile.js'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'bg-paper/85 backdrop-blur-md border-b border-line'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="relative flex items-center justify-center">
              <span className="absolute w-2.5 h-2.5 rounded-full bg-accent opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
              <span className="relative w-2 h-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-sm tracking-tight text-ink">
              {profile.handle}
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline text-sm text-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex h-9 items-center px-4 text-sm font-medium rounded bg-ink text-paper hover:bg-accent hover:text-ink transition-colors"
          >
            Hire me
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 -mr-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden border-t border-line py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm text-muted hover:text-ink transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 items-center px-4 text-sm font-medium rounded bg-ink text-paper"
                >
                  Hire me
                </a>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}
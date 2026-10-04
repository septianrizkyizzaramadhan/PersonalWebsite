import { ArrowRight } from 'lucide-react'
import { Container } from '../components/ui/Container.jsx'
import { profile } from '../data/profile.js'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Grid pattern background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-pattern opacity-60"
      />

      {/* Big teal blob — right side */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -translate-y-1/2 -right-40 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(20,184,166,0.18) 0%, rgba(20,184,166,0.04) 45%, transparent 70%)',
        }}
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-10 items-center">
          {/* LEFT — content */}
          <div>
            <span className="block h-px w-12 bg-accent mb-6" />

            <p className="label-accent mb-4">{profile.location}</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.02] tracking-tight text-ink max-w-3xl">
              Septian Rizky Izza
              <br />
              <span className="text-muted">Ramadhan</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
              {profile.bio}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 h-12 px-6 text-sm font-medium rounded bg-ink text-paper hover:bg-accent hover:text-ink transition-colors"
              >
                Lihat Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 h-12 px-6 text-sm font-medium rounded border border-ink/20 text-ink hover:border-accent hover:text-accent transition-colors"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* RIGHT — typographic visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Vertical REPHY text */}
              <p
                className="font-display text-[180px] xl:text-[220px] font-bold leading-none tracking-tighter select-none"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  color: 'rgba(20,184,166,0.18)',
                  letterSpacing: '-0.05em',
                }}
              >
                REPHY
              </p>
              {/* Small accent square */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-accent" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-accent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
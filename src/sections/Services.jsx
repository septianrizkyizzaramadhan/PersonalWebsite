import { Layout, Code2, Wrench, Check } from 'lucide-react'
import { Container } from '../components/ui/Container.jsx'
import { Section } from '../components/ui/Section.jsx'
import { services } from '../data/profile.js'

const ICONS = {
  layout: Layout,
  code: Code2,
  wrench: Wrench,
}

export function Services() {
  return (
    <Section id="services" className="section-dark">
      <Container>
        <div className="grid md:grid-cols-[180px_1fr] gap-10 md:gap-16">
          <div className="reveal">
            <p className="label">Services</p>
          </div>

          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-paper max-w-2xl leading-tight mb-12">
              Apa yang bisa saya <span className="text-accent">bantu?</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => {
                const Icon = ICONS[service.icon] || Layout
                return (
                  <article
                    key={service.title}
                    className="group relative flex flex-col p-6 border border-paper/10 rounded-lg hover:border-accent/60 hover:bg-paper/[0.02] transition-colors"
                  >
                    {/* Number */}
                    <span className="absolute top-6 right-6 font-mono text-xs text-paper/30 group-hover:text-accent transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div className="w-11 h-11 flex items-center justify-center rounded-md bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-ink transition-colors">
                      <Icon size={20} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-paper mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-sm text-paper/60 leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Bullets */}
                    <ul className="mt-auto space-y-2.5">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-xs text-paper/70"
                        >
                          <Check
                            size={13}
                            className="text-accent shrink-0 mt-0.5"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>

            {/* CTA below */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <p className="text-sm text-paper/60">
                Butuh sesuatu yang belum ada di list?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-paper transition-colors link-underline"
              >
                Diskusi kebutuhan lo
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
import { Container } from '../components/ui/Container.jsx'
import { Section } from '../components/ui/Section.jsx'
import { profile } from '../data/profile.js'

export function About() {
  return (
    <Section id="about" className="border-t border-line">
      <Container>
        <div className="grid md:grid-cols-[180px_1fr] gap-10 md:gap-16">
          <p className="label reveal">About</p>
          <div className="max-w-2xl space-y-5">
            {profile.longBio.map((paragraph, i) => (
              <p
                key={i}
                className="reveal text-base sm:text-lg leading-relaxed text-ink"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
import { Container } from '../components/ui/Container.jsx'
import { Section } from '../components/ui/Section.jsx'
import { TechIcon } from '../components/ui/TechIcon.jsx'
import { profile } from '../data/profile.js'

const CATEGORY_LABELS = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
}

export function Skills() {
  return (
    <Section id="skills" className="border-t border-line">
      <Container>
        <div className="grid md:grid-cols-[180px_1fr] gap-10 md:gap-16">
          <p className="label reveal">Skills</p>

          <div className="space-y-12">
            {Object.entries(profile.skills).map(([category, items], idx) => (
              <div
                key={category}
                className="reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <h3 className="label-accent mb-6">
                  {CATEGORY_LABELS[category]}
                </h3>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="group flex items-center gap-3 px-4 py-3 border border-line rounded hover:border-accent hover:bg-accent/5 transition-colors"
                    >
                      <span className="shrink-0 transition-transform group-hover:scale-110">
                        <TechIcon name={item.icon} size={20} />
                      </span>
                      <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors truncate">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
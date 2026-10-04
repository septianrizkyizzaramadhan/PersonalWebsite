import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/ui/Container.jsx'
import { Section } from '../components/ui/Section.jsx'
import { BrowserMockup } from '../components/ui/BrowserMockup.jsx'
import { ProjectPreview } from '../components/ui/ProjectPreview.jsx'
import { projects } from '../data/projects.js'

export function Projects() {
  return (
    <Section id="projects" className="section-dark">
      <Container>
        <div className="grid md:grid-cols-[180px_1fr] gap-10 md:gap-16">
          <p className="label reveal">Projects</p>

          <div className="space-y-16">
            {projects.map((project, i) => (
              <article
                key={project.id}
                className="reveal group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Meta row */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-paper/15" />
                  <span className="font-mono text-xs text-paper/50">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-paper mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base text-paper/60 leading-relaxed max-w-2xl mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 font-mono text-xs text-paper/70 border border-paper/15 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Browser mockup preview */}
                <div className="relative mb-8 group-hover:scale-[1.01] transition-transform duration-500">
                  <BrowserMockup url={project.url}>
                    <ProjectPreview variant={project.preview} />
                  </BrowserMockup>
                  {/* Glow under mockup */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-8 -bottom-4 h-16 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 h-11 px-5 text-sm font-medium rounded bg-paper text-ink hover:bg-accent transition-colors"
                    >
                      Kunjungi Website
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-11 px-5 text-sm font-medium rounded border border-paper/20 text-paper hover:border-accent hover:text-accent transition-colors"
                    >
                      Lihat Source
                    </a>
                  )}
                </div>
              </article>
            ))}

            {/* More coming */}
            <div className="pt-8 border-t border-paper/10">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-paper/40">
                More projects coming soon
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
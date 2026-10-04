import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/ui/Container.jsx'
import { Section } from '../components/ui/Section.jsx'
import { profile } from '../data/profile.js'

export function Contact() {
  const channels = [
    profile.email && {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    profile.whatsapp && {
      label: 'WhatsApp',
      value: `+${profile.whatsapp}`,
      href: `https://wa.me/${profile.whatsapp}`,
    },
    profile.socials.github && {
      label: 'GitHub',
      value: profile.socials.github.replace('https://', ''),
      href: profile.socials.github,
    },
    profile.socials.instagram && {
      label: 'Instagram',
      value: `@${profile.socials.instagram.split('/').pop()}`,
      href: profile.socials.instagram,
    },
    profile.socials.linkedin && {
      label: 'LinkedIn',
      value: profile.socials.linkedin.replace('https://', ''),
      href: profile.socials.linkedin,
    },
  ].filter(Boolean)

  return (
    <Section id="contact" className="border-t border-line">
      <Container>
        <div className="grid md:grid-cols-[180px_1fr] gap-10 md:gap-16">
          <p className="label reveal">Contact</p>
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink max-w-xl leading-tight">
              Punya project? <span className="text-accent">Diskusi dulu.</span>
            </h2>

            <ul className="mt-10 divide-y divide-line border-t border-line max-w-xl">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={
                      channel.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted group-hover:text-accent transition-colors">
                      {channel.label}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm text-ink group-hover:text-accent transition-colors">
                      {channel.value}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
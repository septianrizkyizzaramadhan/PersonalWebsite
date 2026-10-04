import { Container } from '../ui/Container.jsx'
import { profile } from '../../data/profile.js'

export function Footer() {
  return (
    <footer className="bg-ink border-t border-ink">
      <Container>
        <div className="py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-xs text-paper/50">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs text-paper/50">
            Built with React · Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  )
}
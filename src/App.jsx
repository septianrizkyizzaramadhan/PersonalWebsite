import { Navbar } from './components/layout/Navbar.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Hero } from './sections/Hero.jsx'
import { Marquee } from './components/ui/Marquee.jsx'
import { About } from './sections/About.jsx'
import { Skills } from './sections/Skills.jsx'
import { Projects } from './sections/Projects.jsx'
import { Services } from './sections/Services.jsx'
import { Contact } from './sections/Contact.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
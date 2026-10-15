import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import './index.css'
import About from './components/About'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const startedAt = performance.now()
    let fallbackTimer

    const finishLoading = () => {
      const elapsed = performance.now() - startedAt
      const remaining = Math.max(0, 650 - elapsed)

      window.setTimeout(() => setIsLoading(false), remaining)
    }

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading, { once: true })
    }

    fallbackTimer = window.setTimeout(() => setIsLoading(false), 1400)

    return () => {
      window.removeEventListener('load', finishLoading)
      window.clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <main className="app-shell" id="top" aria-label="Shivam Naik portfolio">
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      {!isLoading && <Navbar />}
      <Hero />
      <Marquee />
      <Projects />
      <Timeline />
      <About />
      <Skills />
      <CTA />
      <Contact />
      <Footer />
      <Cursor />
    </main>
  )
}

export default App

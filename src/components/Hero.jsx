import { motion, useReducedMotion } from 'motion/react'

const headingLines = ['Software', 'Developer']

function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = (delay) => ({
    duration: shouldReduceMotion ? 0 : 0.8,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1],
  })

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__rule" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__meta">
          <motion.p className="metadata" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={reveal(0.1)}>
            ( 01 / 04 )
          </motion.p>
          <motion.p className="metadata hero__location" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={reveal(0.18)}>
            Maharashtra, India / 2026
          </motion.p>
        </div>

        <div className="hero__main">
          <h1 className="hero__title" id="hero-title">
            {headingLines.map((line, index) => (
              <motion.span
                className="hero__title-line"
                key={line}
                initial={{ opacity: 0, y: 64 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reveal(0.22 + index * 0.1)}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero__name"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reveal(0.46)}
          >
            SHIVAM NAIK
          </motion.p>

          <motion.div
            className="hero__details"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reveal(0.58)}
          >
            <p className="hero__description">
              Computer Science graduate and Software Developer building scalable web applications, responsive interfaces, and practical real-time systems.
            </p>
            <p className="hero__status"><span aria-hidden="true">●</span> OPEN TO OPPORTUNITIES</p>
          </motion.div>
        </div>

        <motion.div
          className="hero__footer"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reveal(0.72)}
        >
          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#work">VIEW WORK <span aria-hidden="true">↗</span></a>
            <a className="hero__button" href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Shivam Naik resume in a new tab">RESUME <span aria-hidden="true">↓</span></a>
          </div>
          <a className="hero__scroll" href="#work" aria-label="Scroll to view work">
            <span>Scroll to explore</span>
            <i aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

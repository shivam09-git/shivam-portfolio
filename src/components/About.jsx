import { motion, useReducedMotion } from 'motion/react'

const focusAreas = [
  'Full-stack web development',
  'Backend development',
  'Java',
  'React.js',
  'PHP',
  'Node.js',
  'MySQL',
  'Real-time applications',
]

function About() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = (delay = 0) => ({
    duration: shouldReduceMotion ? 0 : 0.7,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1],
  })

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__topline">
          <p className="metadata">( 03 / 04 ) About</p>
          <p className="metadata">Built with curiosity / grounded in use</p>
        </div>

        <motion.h2
          className="about__title"
          id="about-title"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reveal(0.05)}
        >
          I BUILD<br />DIGITAL<br /><em>PRODUCTS.</em>
        </motion.h2>

        <div className="about__grid">
          <motion.div
            className="about__copy"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={reveal(0.15)}
          >
            <p>I&apos;m Shivam Naik, a Software Developer with experience across full-stack web development, backend systems, Java, React.js, PHP, Node.js, MySQL, and real-time application development.</p>
            <p>I focus on creating dependable, responsive digital products and backend services that work well in fast-moving team environments.</p>
            <a className="about__resume" href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Shivam Naik resume in a new tab">
              Read my resume <span aria-hidden="true">↓</span>
            </a>
          </motion.div>

          <motion.div
            className="about__focus"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={reveal(0.25)}
          >
            <p className="metadata">Areas of focus</p>
            <ul>
              {focusAreas.map((area, index) => (
                <li key={area}><span>0{index + 1}</span>{area}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

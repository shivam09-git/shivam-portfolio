import { motion, useReducedMotion } from 'motion/react'

function CTA() {
  const shouldReduceMotion = useReducedMotion()
  const transition = {
    duration: shouldReduceMotion ? 0 : 0.75,
    ease: [0.16, 1, 0.3, 1],
  }

  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container">
        <p className="metadata">Let&apos;s make something useful</p>
        <motion.h2
          className="cta__title"
          id="cta-title"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition}
        >
          Have an idea?<br /><span>Let&apos;s<br />build it.</span>
        </motion.h2>
        <motion.div
          className="cta__footer"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.15 }}
        >
          <p>Let&apos;s create something useful, interesting and technically solid.</p>
          <a className="cta__button" href="#contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

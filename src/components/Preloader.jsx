import { motion, useReducedMotion } from 'motion/react'

function Preloader() {
  const shouldReduceMotion = useReducedMotion()
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.16, 1, 0.3, 1] }

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      aria-label="Loading Shivam Naik portfolio"
      role="status"
    >
      <div className="preloader__content">
        <motion.p
          className="preloader__name"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.08 }}
        >
          SHIVAM NAIK
        </motion.p>
        <div className="preloader__progress" aria-hidden="true">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: 'easeInOut' }}
          />
        </div>
        <p className="preloader__label">Preparing digital space</p>
      </div>
    </motion.div>
  )
}

export default Preloader

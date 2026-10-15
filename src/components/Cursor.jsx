import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

function Cursor() {
  const shouldReduceMotion = useReducedMotion()
  const [mode, setMode] = useState('default')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 700, damping: 38, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 700, damping: 38, mass: 0.2 })

  useEffect(() => {
    if (shouldReduceMotion) return undefined

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 48.01rem)')
    if (!finePointer.matches) return undefined

    document.body.classList.add('custom-cursor-enabled')

    const updateMode = (target) => {
      if (!(target instanceof Element)) {
        setMode('default')
        return
      }

      if (target.closest('.project__visual')) setMode('project')
      else if (target.closest('button')) setMode('button')
      else if (target.closest('a')) setMode('link')
      else setMode('default')
    }

    const handlePointerMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
      updateMode(event.target)
    }

    const handlePointerLeave = () => {
      setMode('default')
      x.set(-100)
      y.set(-100)
    }

    document.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('pointerleave', handlePointerLeave, { passive: true })

    return () => {
      document.body.classList.remove('custom-cursor-enabled')
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [shouldReduceMotion, springX, springY, x, y])

  if (shouldReduceMotion) return null

  return (
    <motion.div className={`custom-cursor custom-cursor--${mode}`} style={{ x: springX, y: springY }} aria-hidden="true">
      {mode === 'project' && <span>View</span>}
      {mode === 'button' && <span>↗</span>}
    </motion.div>
  )
}

export default Cursor

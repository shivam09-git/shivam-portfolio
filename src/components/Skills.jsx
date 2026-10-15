import { motion, useReducedMotion } from 'motion/react'

const categories = [
  { number: '01', label: 'Languages', skills: ['Java', 'JavaScript', 'SQL'] },
  { number: '02', label: 'Frontend', skills: ['HTML', 'CSS', 'React.js'] },
  { number: '03', label: 'Backend', skills: ['PHP', 'Node.js', 'JDBC'] },
  { number: '04', label: 'Databases', skills: ['MySQL', 'MongoDB'] },
  { number: '05', label: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Firebase'] },
]

function Skills() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = (delay = 0) => ({
    duration: shouldReduceMotion ? 0 : 0.65,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1],
  })

  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills__topline">
          <p className="metadata">( 04 / 04 ) Skills</p>
          <p className="metadata">Tools for turning ideas into systems</p>
        </div>

        <motion.h2
          className="skills__title"
          id="skills-title"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={reveal(0.05)}
        >
          Technical<br /><em>skills.</em>
        </motion.h2>

        <div className="skills__categories">
          {categories.map((category, categoryIndex) => (
            <motion.article
              className="skill-category"
              key={category.label}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={reveal(0.12 + categoryIndex * 0.06)}
            >
              <div className="skill-category__heading">
                <span className="skill-category__number metadata">{category.number}</span>
                <h3>{category.label}</h3>
              </div>
              <ul className="skill-category__list">
                {category.skills.map((skill) => (
                  <motion.li key={skill} whileHover={{ x: shouldReduceMotion ? 0 : 8, color: '#d8f36a' }} whileTap={{ color: '#d8f36a' }} transition={{ duration: 0.25 }}>
                    <span>{skill}</span>
                    <b aria-hidden="true">↗</b>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

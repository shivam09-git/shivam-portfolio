import { motion, useReducedMotion } from 'motion/react'

const experienceResponsibilities = [
  'Developed and maintained backend modules using Core Java, JDBC and MySQL.',
  'Optimized SQL queries to improve application response time.',
  'Applied object-oriented design principles including encapsulation, inheritance and modular class structures.',
  'Debugged backend issues across JDBC connections and Java service layers.',
  'Collaborated with senior developers and peers in a fast-paced environment.',
  'Worked toward sprint deadlines through communication and task ownership.',
]

const educationEntries = [
  {
    institution: 'Shivaji University',
    degree: 'B.Tech',
    stream: 'Computer Science & Engineering',
    years: '2021 – 2025',
    detail: 'Dr D Y Patil, Kolhapur, India',
    extra: 'CGPA: 7.42',
  },
  {
    institution: 'RPD Junior College',
    degree: 'HSC',
    stream: '2021',
    years: 'Percentage: 78.15%',
    detail: '',
    extra: '',
  },
  {
    institution: 'Milagris High School',
    degree: 'SSC',
    stream: '2019',
    years: 'Percentage: 77%',
    detail: '',
    extra: '',
  },
]

function Timeline() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="timeline" id="experience" aria-labelledby="timeline-title">
      <div className="container">
        <div className="timeline__topline">
          <p className="metadata">( 05 / 05 ) Experience</p>
          <p className="metadata">Education / professional work</p>
        </div>

        <motion.h2
          className="timeline__title"
          id="timeline-title"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          Experience &<br /><em>education.</em>
        </motion.h2>

        <div className="timeline__track">
          <motion.article
            className="timeline__entry timeline__entry--experience"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="timeline__year">01</p>
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <p className="metadata">Kiran Academy</p>
              <h3>KIRAN ACADEMY</h3>
              <p className="timeline__role">Java Developer Intern</p>
              <p className="timeline__meta">Pune, India</p>
              <p className="timeline__meta">Jun 2025 – Jul 2025</p>
              <ul className="timeline__responsibilities">
                {experienceResponsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.article>

          {educationEntries.map((entry, index) => (
            <motion.article
              className="timeline__entry"
              key={`${entry.institution}-${entry.degree}`}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.18 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="timeline__year">{String(index + 2).padStart(2, '0')}</p>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <p className="metadata">{entry.institution}</p>
                <h3>{entry.degree}</h3>
                <p>{entry.stream}</p>
                {entry.years && <p className="timeline__meta">{entry.years}</p>}
                {entry.detail && <p className="timeline__meta">{entry.detail}</p>}
                {entry.extra && <span className="timeline__detail">{entry.extra}</span>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

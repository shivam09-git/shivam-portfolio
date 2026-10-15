import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { projects } from '../data/projects'

function ProjectVisual({ project }) {
  const [hasImage, setHasImage] = useState(Boolean(project.image))

  return (
    <motion.div className="project__visual" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.992 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
      {hasImage ? (
        <img src={project.image} alt={`${project.title} project interface`} loading="lazy" onError={() => setHasImage(false)} />
      ) : (
        <div className="project__placeholder" aria-label={`${project.title} project image unavailable`}>
          <span>{project.number} / PROJECT VISUAL</span>
        </div>
      )}
      <span className="project__overlay" aria-hidden="true" />
      <span className="project__visual-index" aria-hidden="true">{project.number}</span>
    </motion.div>
  )
}

function ProjectLink({ project }) {
  if (!project.url) {
    return <span className="project__link project__link--inactive" aria-disabled="true">View project <span aria-hidden="true">↗</span></span>
  }

  return (
    <a className="project__link" href={project.url} target="_blank" rel="noreferrer">
      View project <span aria-hidden="true">↗</span>
    </a>
  )
}

function Projects() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="projects" id="work" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects__header">
          <p className="metadata">( 02 / 04 ) Selected work</p>
          <h2 id="projects-title">Selected<br /><em>projects.</em></h2>
          <p className="projects__intro">A selection of practical products built around useful ideas, clear interfaces and dependable systems.</p>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <motion.article
              className={`project ${index % 2 === 1 ? 'project--reverse' : ''}`}
              key={project.number}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="project__heading">
                <span className="project__number metadata">{project.number}</span>
                <motion.h3 whileHover={{ x: shouldReduceMotion ? 0 : 8 }} transition={{ duration: 0.25 }}>{project.title}</motion.h3>
              </div>
              <ProjectVisual project={project} />
              <div className="project__details">
                <p className="project__description">{project.description}</p>
                <div className="project__technologies">
                  <span className="metadata">Technologies</span>
                  <ul>
                    {project.technologies.map((technology) => (
                      <motion.li key={technology} whileHover={{ color: '#d8f36a', y: -2 }} whileTap={{ color: '#d8f36a' }} transition={{ duration: 0.25 }}>
                        {technology}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <ProjectLink project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

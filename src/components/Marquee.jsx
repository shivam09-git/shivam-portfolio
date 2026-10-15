const technologies = [
  'React',
  'JavaScript',
  'PHP',
  'Node.js',
  'MySQL',
  'MongoDB',
  'Flutter',
  'Dart',
  'Git',
  'GitHub',
]

function Marquee() {
  return (
    <section className="marquee" aria-label="Technologies">
      <div className="marquee__track">
        <div className="marquee__group">
          {technologies.map((technology) => (
            <span className="marquee__item" key={technology}>
              {technology}
              <b aria-hidden="true">•</b>
            </span>
          ))}
        </div>
        <div className="marquee__group" aria-hidden="true">
          {technologies.map((technology) => (
            <span className="marquee__item" key={`${technology}-duplicate`}>
              {technology}
              <b aria-hidden="true">•</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marquee

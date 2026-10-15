import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const sections = ['hero', 'work', 'about', 'experience', 'skills', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5, 0.75] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <motion.header
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <a className="navbar__logo" href="#top" aria-label="Shivam Naik home">
          <span className="navbar__monogram" aria-hidden="true">SN</span>
          <span>SHIVAM NAIK</span>
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {links.map((link) => (
            <a className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`} href={link.href} key={link.href} aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}>
              {link.label}
            </a>
          ))}
          <a className="navbar__link" href="https://www.linkedin.com/in/shivam-naik9/" target="_blank" rel="noopener noreferrer" aria-label="Open Shivam Naik LinkedIn profile in a new tab">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a className="navbar__link navbar__resume" href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Shivam Naik resume in a new tab">
            Resume <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          className="navbar__menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
          <span className="navbar__menu-icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-navigation"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-navigation__top">
              <span className="metadata">Navigation / 01</span>
              <button className="mobile-navigation__close" type="button" onClick={closeMenu} aria-label="Close navigation menu">
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <nav className="mobile-navigation__links" aria-label="Mobile primary navigation">
              {links.map((link, index) => (
                <motion.a
                  href={link.href}
                  key={link.href}
                  className={activeSection === link.href.slice(1) ? 'mobile-navigation__link--active' : ''}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.45 }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>{link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://www.linkedin.com/in/shivam-naik9/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.45 }}
              >
                <span>06</span>LinkedIn <b aria-hidden="true">↗</b>
              </motion.a>
              <motion.a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.38, duration: 0.45 }}
              >
                <span>07</span>Resume <b aria-hidden="true">↗</b>
              </motion.a>
            </nav>
            <p className="mobile-navigation__footer metadata">Software Developer / Shivam Naik</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__topline">
          <p className="metadata">End of transmission / 2026</p>
          <a className="footer__top-link" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>

        <div className="footer__main">
          <div>
            <p className="footer__name">Shivam Naik</p>
            <p className="footer__role">Software Developer</p>
          </div>
          <nav className="footer__socials" aria-label="Social links">
            <a href="https://github.com/shivam09-git" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/shivam-naik9/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="mailto:shivamnaik637@gmail.com">Email <span aria-hidden="true">↗</span></a>
          </nav>
        </div>

        <div className="footer__bottomline">
          <p className="metadata">© 2026 Shivam Naik</p>
          <p className="metadata">Built with React / Motion</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

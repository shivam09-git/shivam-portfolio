import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const initialForm = { name: '', email: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const shouldReduceMotion = useReducedMotion()

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
    setStatus('idle')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!emailPattern.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`)
    const body = encodeURIComponent(`Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`)
    setStatus('success')
    window.location.href = `mailto:shivamnaik637@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__topline">
          <p className="metadata">Contact / Open channel</p>
          <p className="metadata">Shivam Naik / Software Developer</p>
        </div>

        <motion.h2
          className="contact__title"
          id="contact-title"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Contact<br /><em>Let&apos;s talk.</em>
        </motion.h2>

        <div className="contact__grid">
          <motion.div
            className="contact__details"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <a href="mailto:shivamnaik637@gmail.com">
              <span className="metadata">Email</span>
              shivamnaik637@gmail.com
            </a>
            <a href="tel:+919422782086">
              <span className="metadata">Phone</span>
              +91 9422782086
            </a>
            <a href="https://github.com/shivam09-git" target="_blank" rel="noreferrer">
              <span className="metadata">GitHub</span>
              github.com/shivam09-git
            </a>
            <a href="https://www.linkedin.com/in/shivam-naik9/" target="_blank" rel="noopener noreferrer">
              <span className="metadata">LinkedIn</span>
              linkedin.com/in/shivam-naik9
            </a>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.18 }}
          >
            <div className="contact__field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} required />
              {errors.name && <span className="contact__error" id="contact-name-error">{errors.name}</span>}
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} required />
              {errors.email && <span className="contact__error" id="contact-email-error">{errors.email}</span>}
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="5" value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} required />
              {errors.message && <span className="contact__error" id="contact-message-error">{errors.message}</span>}
            </div>
            <button className="contact__submit" type="submit">Send message <span aria-hidden="true">↗</span></button>
            <p className={`contact__status contact__status--${status}`} role="status" aria-live="polite">
              {status === 'error' && 'Please review the highlighted fields.'}
              {status === 'success' && 'Your email app is opening with this message prepared. Nothing was sent from the site.'}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

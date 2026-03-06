import { useState } from 'react'
import { motion } from 'framer-motion'
import { CONTACT } from '../constants'

/* ── Social icon components ── */
function DiscordIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
    )
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
    )
}

function EmailIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 7 10-7" />
        </svg>
    )
}

const TOPICS = ['Backend Dev', 'Full-Stack', 'Open Source', 'Freelance', 'Other']

export default function Contact() {
    const [activeTopic, setActiveTopic] = useState(0)
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    function handleChange(e) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSent(true)
    }

    return (
        <section id="contact" className="relative w-full py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
            {/* Ambient glow */}
            <div className="contact-glow" />

            <div className="w-full">
                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="contact-card"
                >

                    {/* ── Left pane — abstract / branding ── */}
                    <div className="contact-left">
                        <div className="contact-left-glow" />
                        <div className="contact-left-content">
                            <h2 className="contact-left-title">{CONTACT.leftTitle}</h2>
                            <p className="contact-left-sub">{CONTACT.leftSub}</p>

                            {/* Social links */}
                            <div className="contact-socials">
                                <a target="_blank" rel="noreferrer" className="contact-social-chip" aria-label="Discord">
                                    <DiscordIcon />
                                    <span>rip_phantom8835</span>
                                </a>
                                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="contact-social-chip" aria-label="Instagram">
                                    <InstagramIcon />
                                    <span>akrishnarijal</span>
                                </a>
                            </div>

                            {/* Email highlight */}
                            <a href={`mailto:${CONTACT.email}`} className="contact-email-chip">
                                <EmailIcon />
                                <span>{CONTACT.email}</span>
                            </a>
                        </div>
                    </div>

                    {/* ── Right pane — form ── */}
                    <div className="contact-right">
                        <h3 className="contact-form-title">{CONTACT.formTitle}</h3>
                        <p className="contact-form-sub">{CONTACT.formSub}</p>

                        {/* Topic pills */}
                        <div className="contact-topics">
                            {TOPICS.map((t, i) => (
                                <button
                                    key={t}
                                    onClick={() => setActiveTopic(i)}
                                    className={`contact-topic-pill ${activeTopic === i ? 'contact-topic-pill--active' : ''}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>

                        {sent ? (
                            <div className="contact-success">
                                <span>🚀</span>
                                <p>{CONTACT.successMsg}</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form-row">
                                    <div className="contact-field">
                                        <label>{CONTACT.nameLabel}</label>
                                        <input
                                            name="name"
                                            placeholder={CONTACT.namePlaceholder}
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-field contact-field--message">
                                        <label>{CONTACT.messageLabel}</label>
                                        <textarea
                                            name="message"
                                            placeholder={CONTACT.messagePlaceholder}
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="contact-field">
                                    <label>{CONTACT.emailLabel}</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder={CONTACT.emailPlaceholder}
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="contact-submit">
                                    {CONTACT.submitText}
                                    <span className="contact-submit-arrow">↗</span>
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

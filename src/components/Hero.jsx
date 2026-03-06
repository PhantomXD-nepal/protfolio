import { motion } from 'framer-motion'
import { HERO } from '../constants'

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] w-full flex flex-col items-center justify-center px-6 text-center pt-40 pb-32 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="max-w-3xl flex flex-col items-center gap-6"
            >

                {/* ── Main Headline ── */}
                <motion.h1 variants={itemVariants} className="hero-headline">
                    {HERO.headlineParts.map((part, i) =>
                        part.accent
                            ? <span key={i} className="text-accent">{part.text}</span>
                            : <span key={i}>{part.text}</span>
                    )}
                </motion.h1>

                {/* ── Tagline ── */}
                <motion.p variants={itemVariants} className="hero-tagline">
                    <span className="text-white/90">{HERO.taglinePart1}</span>
                    {' '}
                    <span className="text-white/90">{HERO.taglinePart2}</span>
                    <br />
                    {HERO.taglinePart3}
                </motion.p>

                {/* ── CTA Button ── */}
                <motion.a
                    variants={itemVariants}
                    href="#contact"
                    className="hero-cta"
                >
                    {HERO.ctaText}
                    <span className="hero-cta-arrow">↗</span>
                </motion.a>
            </motion.div>

            {/* ── Scroll Indicator ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">{HERO.scrollLabel}</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
        </section>
    )
}

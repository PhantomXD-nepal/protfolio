import { SKILLS, TECH_STACK } from '../constants'

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

function TechCard({ tech }) {
    const isLarge = tech.size === 'large'
    const isWide = tech.size === 'wide'

    return (
        <motion.div
            variants={itemVariants}
            className={`bento-card ${isLarge ? 'bento-large' : ''} ${isWide ? 'bento-wide' : ''}`}
            style={{ '--accent': tech.accent }}
        >
            <div className="bento-glow" style={{ background: `radial-gradient(circle at 30% 30%, ${tech.accent}22 0%, transparent 65%)` }} />

            <div className="bento-content">
                <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="bento-icon"
                    style={{
                        width: '48px',
                        height: '48px',
                        objectFit: 'contain',
                        filter: tech.id === 'expressjs' ? 'invert(1)' : 'none'
                    }}
                />

                <div className="bento-text">
                    <div className="bento-label">{tech.label}</div>
                    <div className="bento-name" style={{ color: tech.accent }}>{tech.name}</div>
                    {(isLarge || isWide) && (
                        <div className="bento-desc">{tech.description}</div>
                    )}
                </div>
            </div>

            {/* Corner accent */}
            <div className="bento-corner" style={{ background: `linear-gradient(135deg, ${tech.accent}40, transparent 60%)` }} />
        </motion.div>
    )
}

export default function Skills() {
    return (
        <section id="skills" className="relative w-full py-24 px-6 md:px-10 lg:px-16 overflow-hidden h-full">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-8 w-full max-w-[1600px] mx-auto"
            >
                {/* ── Left: Headline ── */}
                <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[38%] shrink-0 z-10">
                    <p className="text-white/35 text-[10px] tracking-[0.35em] uppercase mb-4">
                        {SKILLS.label}
                    </p>
                    <h2 className="font-headline text-white text-[clamp(3rem,8vw,7rem)] leading-none">
                        {SKILLS.headlineLine1}
                        <br />
                        <span className="text-accent">{SKILLS.headlineLine2}</span>
                    </h2>
                    <p className="mt-6 text-white/45 text-sm leading-relaxed max-w-xs">
                        {SKILLS.subtext}
                    </p>
                </motion.div>

                {/* ── Right: Bento Grid ── */}
                <div className="relative lg:w-[58%] w-full z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bento-grid"
                    >
                        {TECH_STACK.map((tech) => (
                            <TechCard key={tech.id} tech={tech} />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll Down</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
            </div>
        </section>
    )
}

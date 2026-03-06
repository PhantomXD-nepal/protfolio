import { motion } from 'framer-motion'

const services = [
    {
        id: 'frontend',
        title: 'Animated & 3D Websites',
        description: 'Creating smooth, animated, and immersive 3D landing and marketing pages that captivate your audience and elevate your business brand.',
        tech: ['React', 'Framer Motion', 'Spline', 'Three.js'],
        accent: '#7C69D7' // purple
    },
    {
        id: 'backend',
        title: 'Custom Backend Solutions',
        description: 'Building robust, scalable, and secure custom backends tailored to your needs using modern frameworks and databases.',
        tech: ['Golang', 'Express', 'PostgreSQL', 'PocketBase'],
        accent: '#22c55e' // green
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function Services() {
    return (
        <section id="services" className="relative w-full py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <p className="text-white/35 text-[10px] tracking-[0.35em] uppercase mb-4">
                        What I Do
                    </p>
                    <h2 className="font-headline text-white text-[clamp(2.5rem,6vw,5rem)] leading-none">
                        SERVICES I <span className="text-accent">PROVIDE</span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10"
                >
                    {services.map((service) => (
                        <motion.div 
                            key={service.id} 
                            variants={itemVariants}
                            className="relative bento-card flex flex-col justify-between h-full p-8 lg:p-12 group"
                            style={{ '--accent': service.accent }}
                        >
                            {/* Glow blob */}
                            <div className="bento-glow" style={{ background: `radial-gradient(circle at 30% 30%, ${service.accent}22 0%, transparent 65%)` }} />

                            <div className="relative z-10">
                                <h3 className="font-headline text-[2rem] lg:text-[2.5rem] leading-tight mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                                    {service.description}
                                </p>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
                                {service.tech.map((tech) => (
                                    <span 
                                        key={tech} 
                                        className="text-xs font-medium tracking-wide px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Corner accent */}
                            <div className="bento-corner" style={{ background: `linear-gradient(135deg, ${service.accent}40, transparent 60%)` }} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
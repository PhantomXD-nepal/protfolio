import { motion } from 'framer-motion'

const brands = [
    'GITHUB',
    'SPLINE',
]

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function BrandStrip() {
    return (
        <section className="w-full border-t border-white/5 pt-16 pb-10 px-6 md:px-10">
            <div className="max-w-[1600px] mx-auto">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-white/30 text-[10px] tracking-[0.3em] uppercase text-center mb-8"
                >
                    Tools & Platforms
                </motion.p>

                {/* Brand Logos (text-based) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16"
                >
                    {brands.map((brand) => (
                        <motion.span
                            key={brand}
                            variants={itemVariants}
                            className="text-white/50 text-xs md:text-sm tracking-[0.25em] uppercase font-light transition-colors duration-300 hover:text-accent cursor-default"
                        >
                            {brand}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

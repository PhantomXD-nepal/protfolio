import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../constants'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section id="projects" className="relative w-full py-24 px-6 md:px-10 lg:px-16">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <p className="text-white/35 text-[10px] tracking-[0.35em] uppercase mb-4">
                        Featured Work
                    </p>
                    <h2 className="font-headline text-white text-[clamp(2.5rem,6vw,5rem)] leading-none">
                        SELECTED <span className="text-accent">PROJECTS</span>
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            onClick={() => setSelectedProject(project)} 
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    )
}

function ProjectCard({ project, onClick }) {
    return (
        <motion.div 
            layoutId={`card-${project.id}`}
            onClick={onClick}
            className="bento-card group cursor-pointer h-[400px] flex flex-col"
            style={{ '--accent': project.accent }}
        >
            <div className="bento-glow" style={{ background: `radial-gradient(circle at 30% 30%, ${project.accent}15 0%, transparent 60%)` }} />
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                    <span className="text-[10px] tracking-widest uppercase text-white/40 mb-2 block">
                        Project
                    </span>
                    <h3 className="font-headline text-3xl group-hover:text-[var(--accent)] transition-colors duration-300">
                        {project.title}
                    </h3>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/60">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/60">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>

            <div className="bento-corner" style={{ background: `linear-gradient(135deg, ${project.accent}30, transparent 60%)` }} />
            
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
            </div>
        </motion.div>
    )
}

function ProjectModal({ project, onClose }) {
    const [activeTab, setActiveTab] = useState(project.tabs[0].id)

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
                layoutId={`card-${project.id}`}
                className="relative w-full max-w-4xl bg-[#0C0C0C] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[600px]"
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </button>

                {/* Left Side - Project Info */}
                <div className="w-full md:w-2/5 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                         style={{ background: `radial-gradient(circle at 0% 0%, ${project.accent}, transparent 70%)` }} />
                    
                    <div className="relative z-10">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 block">
                            Featured Project
                        </span>
                        <h2 className="font-headline text-5xl mb-6">
                            {project.title}
                        </h2>
                        <p className="text-white/60 text-sm leading-relaxed mb-8">
                            {project.description}
                        </p>
                        
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase py-3 px-6 bg-white text-black rounded-full hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                            style={{ '--accent': project.accent }}
                        >
                            View Live Project
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-7h7v7m-10 3L21 3"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Side - Tabs content */}
                <div className="w-full md:w-3/5 flex flex-col bg-[#080808]">
                    {/* Tabs Header */}
                    <div className="flex border-b border-white/10 px-4 pt-4">
                        {project.tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-4 text-[10px] tracking-widest uppercase font-semibold transition-all relative ${
                                    activeTab === tab.id ? 'text-white' : 'text-white/30 hover:text-white/60'
                                }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div 
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)]"
                                        style={{ '--accent': project.accent }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tabs Content */}
                    <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="h-full flex flex-col"
                            >
                                <h4 className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-4">
                                    Implementation Details
                                </h4>
                                <p className="text-white/80 text-base leading-relaxed mb-8">
                                    {project.tabs.find(t => t.id === activeTab)?.content}
                                </p>
                                
                                <div className="mt-auto">
                                    <h4 className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-4">
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tabs.find(t => t.id === activeTab)?.tech.map(t => (
                                            <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

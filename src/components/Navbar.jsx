import { useState } from 'react'

const navLinks = ['HOME', 'SKILLS', 'SERVICES', 'CONTACT']

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-5 flex items-center justify-between">
            {/* Left — Brand */}
            <a
                href="#home"
                className="text-white text-sm md:text-base font-medium tracking-widest uppercase font-[var(--font-inter)] flex items-center gap-1.5 animate-fade-in-up"
            >
                <span className="text-accent text-lg">💫</span>
                <span>Ansu K Rijal</span>
            </a>

            {/* Center — Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 animate-fade-in-up animate-delay-2">
                {navLinks.map((link) => (
                    <li key={link}>
                        <a
                            href={`#${link.toLowerCase()}`}
                            className="text-white/70 text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-accent"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Right — Hire Me Button */}
            <div className="flex items-center gap-4 animate-fade-in-up animate-delay-3">
                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white flex flex-col gap-1.5 w-6"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
                    <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
                </button>

                {/* Hire Me */}
                <a
                    href="#contact"
                    className="hidden md:flex items-center gap-3 group"
                >
                    <span className="text-white/70 text-xs tracking-[0.2em] uppercase group-hover:text-accent transition-colors duration-300">
                        HIRE ME
                    </span>
                    <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            className="transition-colors duration-300 group-hover:[&_path]:stroke-black"
                        >
                            <path
                                d="M1 11L11 1M11 1H3M11 1V9"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-300 group-hover:stroke-black"
                            />
                        </svg>
                    </span>
                </a>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {navLinks.map((link, i) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-2xl tracking-[0.25em] uppercase font-light transition-colors duration-300 hover:text-accent"
                        style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
                    >
                        {link}
                    </a>
                ))}
                <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="mt-4 flex items-center gap-3 group"
                >
                    <span className="text-white/70 text-sm tracking-[0.2em] uppercase group-hover:text-accent transition-colors duration-300">
                        HIRE ME
                    </span>
                    <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M1 11L11 1M11 1H3M11 1V9"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-300 group-hover:stroke-black"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </nav>
    )
}

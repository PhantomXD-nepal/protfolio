import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Services from './components/Services'
import Contact from './components/Contact'
import BrandStrip from './components/BrandStrip'

function App() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="page-shell">
            <div className="bg-radial-glow bg-grid page-frame">
                <Navbar />

                <Hero />

                <div className="section-gap mt-4">
                    <Skills />
                </div>

                <div className="section-gap mt-4">
                    <Services />
                </div>

                <div className="section-gap mt-10">
                    <BrandStrip />
                </div>

                <div className="section-gap mt-5 pb-20">
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default App

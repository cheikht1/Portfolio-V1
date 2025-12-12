import { ProfileProvider } from './contexts/ProfileContext';
import { LocaleProvider } from './contexts/LocaleContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experiences from './components/sections/Experiences';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ProfileProvider>
      <LocaleProvider>
        <div className="min-h-screen pt-16">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Experiences />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </LocaleProvider>
    </ProfileProvider>
  );
}

export default App;

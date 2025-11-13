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

function App() {
  return (
    <ProfileProvider>
      <LocaleProvider>
        <div className="min-h-screen pt-16">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
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

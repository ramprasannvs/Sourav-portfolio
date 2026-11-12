import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Tools from './components/Tools';
import EducationStrengths from './components/EducationStrengths';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-navy-950 text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Tools />
        <EducationStrengths />
        <Contact />
      </main>
    </div>
  );
}

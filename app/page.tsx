
import Navbar from './../components/Navbar';
import Hero from '@/pages/Hero';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Project from '@/pages/Project';
import Education from '@/pages/Education';
import Contact from '@/pages/Contact';
import Footer from '@/pages/Footer';




export default function Home() {
  return (
      <div className="relative min-h-screen w-screen overflow-x-hidden ">
          <Navbar/>
          <main className="space-y-8">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Project />
            <Contact />
          </main>
          <Footer/>
      </div>
  );
}

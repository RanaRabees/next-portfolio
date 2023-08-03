import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

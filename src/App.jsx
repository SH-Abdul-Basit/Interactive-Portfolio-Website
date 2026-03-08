import Navebar from "./components/Navbar" 
import Hero from "./sections/Hero"
import About from "./sections/About"
import Certifications from "./sections/Certifications"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import "./App.css"

function App() {

  return (
    <>
      <Navebar />
      <Hero />
      <About />
      <Certifications />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App

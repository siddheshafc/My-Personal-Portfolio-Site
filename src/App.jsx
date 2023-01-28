import React from "react"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Sidenav from "./components/Sidenav"
import Skills from "./components/Skills"

function App() {
  
  return (
    <div>
      <Sidenav/>
      <Home/>
      <Education />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  )
}

export default App

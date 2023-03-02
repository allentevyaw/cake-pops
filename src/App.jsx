import { useState } from "react"
import About from "./sections/About"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Social from "./sections/Social"

function App() {

  return (
    <div >
      <Navbar />
      <Hero />
      <Social />
      <About />
    </div>
  )
}

export default App

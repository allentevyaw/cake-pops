import React from 'react'
import Hero from '../sections/Hero'
import Navbar from '../sections/Navbar'
import Social from '../sections/Social'
import About from "../sections/About"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Social />
    </div>
  )
}

export default Home

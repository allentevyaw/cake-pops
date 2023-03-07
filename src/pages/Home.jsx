import React from 'react'
import Hero from '../sections/Hero'
import Navbar from '../sections/Navbar'
import Social from '../sections/Social'
import About from "../sections/About"
import Gallery from '../sections/Gallery'


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <Social />
    </div>
  )
}

export default Home

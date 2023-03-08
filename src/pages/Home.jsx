import React from 'react'
import Hero from '../sections/Hero'
import Navbar from '../sections/Navbar'
import Social from '../sections/Social'
import About from "../sections/About"
import Photos from '../sections/photos'


const Home = () => {
  return (
    <div>
      <Hero />
      <Social />
      <Photos />
      <About />
    </div>
  )
}

export default Home

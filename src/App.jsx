import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from "./sections/Navbar"
import Footer from "./sections/Footer"
import Contact from "./pages/Contact"


function App() {

  return (
    <div >
      <Navbar />
      <Home />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

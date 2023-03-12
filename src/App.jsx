import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from "./sections/Navbar"
import Footer from "./sections/Footer"
import Contact from "./pages/Contact"


function App() {

  return (
    <div >
      <Navbar />
  <BrowserRouter >
    <Routes>
      <Route path='/cake-pops/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App

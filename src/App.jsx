import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from "./sections/Navbar"
import Footer from "./sections/Footer"
import Contact from "./pages/Contact"
import Menu from './pages/Menu'


function App() {

  return (
    <div >
  <BrowserRouter >
      <Navbar />
        <Routes>
            <Route path='/cake-pops/' element={<Home />} />
            <Route path='/cake-pops/menu' element={<Menu />} />
            <Route path='/cake-pops/contact' element={<Contact />} />
        </Routes>
      <Footer />
  </BrowserRouter>
    </div>
  )
}

export default App

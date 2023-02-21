import Home from '@/pages/home/home'
import About from '@/pages/about/about'
import Contact from '@/pages/contact/contact'
import Gallery from '@/pages/gallery/gallery'
import Plans from '@/pages/plans/plans'
import Trainers from '@/pages/trainers/trainers'
import NotFound from '@/pages/notFound/notFound'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/Navbar'

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
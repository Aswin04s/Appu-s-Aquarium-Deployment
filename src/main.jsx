// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
// import SpeciesCatalog from './SpeciesCatalog.jsx'
import ContactAndBooking from './ContactAndBooking.jsx'
import ServicesShop from './ServicesShop.jsx'
import ProductsPage from './ProductsPage.jsx'
import ConservationPage from './ConservationPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            {/* <SpeciesCatalog /> */}
            <ServicesShop />
            <ContactAndBooking />
          </>
        } />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/conservation" element={<ConservationPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
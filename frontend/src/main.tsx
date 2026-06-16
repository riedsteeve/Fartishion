import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Landingpage/header.tsx'
import Hero from './Components/Landingpage/hero.tsx'
import Discover from './Components/Landingpage/discover.tsx'
import WhyChooseUs from './Components/Landingpage/whyChooseUs.tsx'
import Footer from './Components/Landingpage/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen px-3 sm:px-5 w-full">
      <Navbar />
      <Hero />
      <Discover />
      <WhyChooseUs />
    </div>
    <Footer />
  </StrictMode>,
)

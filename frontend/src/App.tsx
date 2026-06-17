// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Landingpage/Home.tsx'
import About from './Components/Landingpage/About.tsx'
import Footer from './Components/Composables/footer.tsx'

function App() {
  return (
    <BrowserRouter>
       <div className="min-h-screen px-3 sm:px-5 w-full">
        <Routes>
           <Route path="/" element={<LandingPage />} />
          
           <Route path="/about" element={<About />} />
        </Routes>
      </div>
              <Footer />

    </BrowserRouter>
  )
}

export default App
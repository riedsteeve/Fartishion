// src/App.tsx
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import LandingPage from './components/Landingpage/Home.tsx'
import About from './components/Landingpage/About.tsx'
import Header from './components/Composables/header.tsx'
import Footer from './components/Composables/footer.tsx'
import Signup from './app/pages/Auth/signup.tsx'
import Login from './app/pages/Auth/login.tsx'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/a-propos" element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login/>}  />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
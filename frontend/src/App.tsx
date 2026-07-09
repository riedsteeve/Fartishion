import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import LandingPage from './components/Landing Pages/Home'
import About from './components/Landing Pages/About'
import Header from './components/atoms/header'
import Footer from './components/atoms/footer'
import Signup from './pages/public/signup'
import Login from './pages/public/login'
import Partitions from './pages/public/Partitions/partitions'
import Legal from './pages/Legacy/legal'
import Privacy from './pages/Legacy/privacy'
import Contact from './pages/public/contact'
import Dashboard_layout from './pages/Private/Dashboard_layout'
import Partition_View from './components/atoms/private_components/partition_view'

// 1. Layout Public 
const PublicLayout = () => {
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
        
        {/* 2. ROUTES PUBLIQUES : Elles partagent toutes le Header et Footer vitrine */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/a-propos" element={<About />} />
          <Route path='/partitions' element={<Partitions />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login/>}  />
          <Route path='/legal' element={<Legal />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

        {/* 3. ROUTE PRIVÉE : Totalement en dehors du PublicLayout !*/}
        <Route path='/dashboard' element={<Dashboard_layout />} />
        <Route path='/partitions_view' element={<Partition_View />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
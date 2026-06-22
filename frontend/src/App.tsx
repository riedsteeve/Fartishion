// src/App.tsx
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import LandingPage from './Components/Landingpage/Home.tsx'
import About from './Components/Landingpage/About.tsx'
import Header from './Components/Composables/header.tsx'
import Footer from './Components/Composables/footer.tsx'

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
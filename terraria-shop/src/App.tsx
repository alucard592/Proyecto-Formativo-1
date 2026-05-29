import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAppSelector } from './hooks'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'

function AppContent() {
  const isDark = useAppSelector((s) => s.theme.isDark)

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/nosotros" element={<About />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>⚔️ Terraria Shop — Proyecto Formativo React + Redux</p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

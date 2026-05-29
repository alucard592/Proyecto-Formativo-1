import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import { toggleTheme } from '../features/theme/themeSlice'
import type { CartItem } from '../features/cart/cartSlice'

export default function Navbar() {
  const dispatch = useAppDispatch()
  const isDark = useAppSelector((s) => s.theme.isDark)
  const cartCount = useAppSelector((s) =>
    s.cart.items.reduce((acc: number, i: CartItem) => acc + i.quantity, 0)
  )
  const { pathname } = useLocation()

  const navLink = (to: string, label: string) => (
    <Link to={to} className={`nav-link ${pathname === to ? 'active' : ''}`}>
      {label}
    </Link>
  )

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">⚔️</span>
        <span className="brand-name">Terraria Shop</span>
      </div>
      <div className="navbar-links">
        {navLink('/', 'Inicio')}
        {navLink('/productos', 'Productos')}
        {navLink('/carrito', 'Carrito')}
        {navLink('/nosotros', 'Nosotros')}
      </div>
      <div className="navbar-actions">
        <label className="theme-switch" title="Cambiar tema">
          <input type="checkbox" checked={isDark} onChange={() => dispatch(toggleTheme())} />
          <span className="slider">
            <span className="icon">{isDark ? '🌙' : '☀️'}</span>
          </span>
        </label>
        <Link to="/carrito" className="cart-btn">
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  )
}

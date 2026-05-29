import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks'
import type { Product } from '../features/products/productsSlice'

export default function Home() {
  const products = useAppSelector((s) => s.products) as Product[]
  const categories = [...new Set(products.map((p) => p.category))]

  return (
    <div className="page home-page">
      <section className="hero">
        <h1 className="hero-title">⚔️ Terraria Shop</h1>
        <p className="hero-subtitle">
          Los mejores ítems de Terraria, desde armas endgame hasta materiales raros.
        </p>
        <Link to="/productos" className="btn-primary">Ver Productos</Link>
      </section>
      <section className="features">
        <h2>¿Qué encontrarás aquí?</h2>
        <div className="features-grid">
          {categories.map((cat) => (
            <div key={cat as string} className="feature-card">
              <span className="feature-icon">
                {cat === 'Armas' ? '⚔️' : cat === 'Armaduras' ? '🛡️' : cat === 'Accesorios' ? '💎' : '🔩'}
              </span>
              <h3>{cat as string}</h3>
              <p>{products.filter((p) => p.category === cat).length} productos</p>
            </div>
          ))}
        </div>
      </section>
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="featured-list">
          {products.slice(0, 3).map((p) => (
            <div key={p.id} className="featured-item">
              <span className="fi-name">{p.name}</span>
              <span className="fi-price">${p.price.toLocaleString('es-CO')}</span>
            </div>
          ))}
        </div>
        <Link to="/productos" className="btn-secondary">Ver todos →</Link>
      </section>
    </div>
  )
}

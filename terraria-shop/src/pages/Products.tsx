import { useState } from 'react'
import { useAppSelector } from '../hooks'
import ProductCard from '../components/ProductCard'
import type { Product } from '../features/products/productsSlice'

export default function Products() {
  const products = useAppSelector((s) => s.products) as Product[]
  const categories: string[] = ['Todos', ...new Set(products.map((p) => p.category))]
  const [active, setActive] = useState<string>('Todos')
  const [search, setSearch] = useState<string>('')

  const filtered = products.filter((p) => {
    const matchCat = active === 'Todos' || p.category === active
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="page products-page">
      <h1>Catálogo de Productos</h1>
      <div className="filters">
        <input
          className="search-input"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab ${active === cat ? 'tab-active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? (
        <p className="empty-msg">No se encontraron productos.</p>
      ) : (
        <div className="products-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}

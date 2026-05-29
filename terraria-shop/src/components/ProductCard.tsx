import type { Product } from '../features/products/productsSlice'
import { addToCart } from '../features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../hooks'

interface Props { product: Product }

export default function ProductCard({ product }: Props) {
  const dispatch = useAppDispatch()
  const inCart = useAppSelector((s) =>
    s.cart.items.some((i: { id: number }) => i.id === product.id)
  )

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={`/src/assets/images/products/${product.imageName}`}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            const placeholder = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
            if (placeholder) placeholder.style.display = 'flex';
          }}
        />
        <div className="product-placeholder" style={{ display: 'none' }}>
          <span className="placeholder-icon">🖼️</span>
          <span className="placeholder-text">Sin imagen</span>
          <code className="placeholder-code">{product.imageName}</code>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toLocaleString('es-CO')}</span>
          <button
            className={`btn-add ${inCart ? 'in-cart' : ''}`}
            onClick={() => dispatch(addToCart(product))}
          >
            {inCart ? '✓ Agregado' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  )
}

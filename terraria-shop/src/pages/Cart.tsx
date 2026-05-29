import { useAppDispatch, useAppSelector } from '../hooks'
import { removeFromCart, increaseQty, decreaseQty, clearCart } from '../features/cart/cartSlice'
import type { CartItem } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const dispatch = useAppDispatch()
  const items = useAppSelector((s) => s.cart.items) as CartItem[]
  const total = items.reduce((acc: number, i: CartItem) => acc + i.price * i.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="page cart-page empty-cart">
        <h1>🛒 Tu Carrito</h1>
        <p>El carrito está vacío.</p>
        <Link to="/productos" className="btn-primary">Ver Productos</Link>
      </div>
    )
  }

  return (
    <div className="page cart-page">
      <h1>🛒 Tu Carrito</h1>
      <div className="cart-list">
        {items.map((item: CartItem) => (
          <div key={item.id} className="cart-item">
            <div className="ci-info">
              <h3 className="ci-name">{item.name}</h3>
              <span className="ci-category">{item.category}</span>
            </div>
            <div className="ci-qty">
              <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            </div>
            <span className="ci-price">
              ${(item.price * item.quantity).toLocaleString('es-CO')}
            </span>
            <button className="ci-remove" onClick={() => dispatch(removeFromCart(item.id))}>✕</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal ({items.reduce((a: number, i: CartItem) => a + i.quantity, 0)} items)</span>
          <span>${total.toLocaleString('es-CO')}</span>
        </div>
        <div className="summary-actions">
          <button className="btn-danger" onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
          <button className="btn-primary">Comprar ahora</button>
        </div>
      </div>
    </div>
  )
}

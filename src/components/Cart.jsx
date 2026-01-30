import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: '/images/products/IPS Monitor-500x500 1.png',
    },
    {
      id: 2,
      name: 'H1 Gamepad',
      price: 550,
      quantity: 2,
      image: '/images/products/g92-2-500x500 1.png',
    },
  ]);

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      alert('Quantity must be at least 1');
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    if (window.confirm('Remove this item from cart?')) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item),
      0,
    );
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>Cart</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link to="/" className="return-btn">
              Return To Shop
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Table */}
            <div className="cart-table">
              <div className="cart-header">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="cart-row">
                  <div className="product-info">
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                      title="Remove item"
                    >
                      ×
                    </button>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                  <div className="price">${item.price}</div>
                  <div className="quantity-control">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value) || 1;
                        updateQuantity(item.id, value);
                      }}
                      min="1"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                  <div className="subtotal">${calculateSubtotal(item)}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="cart-actions">
              <Link to="/" className="return-btn">
                Return To Shop
              </Link>
              <button className="update-btn">Update Cart</button>
            </div>

            {/* Coupon and Total */}
            <div className="cart-bottom">
              <div className="coupon-section">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className="apply-btn">Apply Coupon</button>
              </div>

              <div className="cart-total">
                <h3>Cart Total</h3>
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="total-row">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="total-row total-final">
                  <span>Total:</span>
                  <span>${calculateTotal()}</span>
                </div>
                <button className="checkout-btn">
                  <Link to="/checkout" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Procees to checkout
                  </Link>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

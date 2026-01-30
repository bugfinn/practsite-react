import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [couponCode, setCouponCode] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);
  
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    emailAddress: ''
  });

  // Cart items from Cart component
  const cartItems = [
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
      price: 1100,
      quantity: 1,
      image: '/images/products/g92-2-500x500 1.png',
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0; // Free
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Handle order placement logic
    console.log('Order placed:', { billingDetails, paymentMethod, cartItems });
    alert('Order placed successfully!');
  };

  const handleApplyCoupon = () => {
    // Handle coupon logic
    console.log('Applying coupon:', couponCode);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Account</Link>
          <span>/</span>
          <Link to="/account">My Account</Link>
          <span>/</span>
          <Link to="/cart">Product</Link>
          <span>/</span>
          <Link to="/cart">View Cart</Link>
          <span>/</span>
          <span>CheckOut</span>
        </div>

        <h1 className="checkout-title">Billing Details</h1>

        <div className="checkout-content">
          {/* Left Side - Billing Form */}
          <div className="billing-form">
            <form onSubmit={handlePlaceOrder}>
              <div className="form-group">
                <label>First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={billingDetails.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={billingDetails.companyName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Street Address*</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={billingDetails.streetAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Apartment, floor, etc. (optional)</label>
                <input
                  type="text"
                  name="apartment"
                  value={billingDetails.apartment}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Town/City*</label>
                <input
                  type="text"
                  name="city"
                  value={billingDetails.city}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number*</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={billingDetails.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address*</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={billingDetails.emailAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="save-info">
                <input
                  type="checkbox"
                  id="saveInfo"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                />
                <label htmlFor="saveInfo">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Right Side - Order Summary */}
          <div className="order-summary">
            {/* Cart Items */}
            <div className="cart-items-summary">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="item-info">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                  <span className="item-price">${item.price}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="summary-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="total-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="total-row total-final">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="payment-methods">
              <div className="payment-option">
                <input
                  type="radio"
                  id="bank"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="bank">Bank</label>
                <div className="payment-icons">
                  <img src="/images/icons/Bkash.png" alt="Bkash" />
                  <img src="/images/icons/Visa.png" alt="Visa" />
                  <img src="/images/icons/Mastercard.png" alt="Mastercard" />
                  <img src="/images/icons/Nagad.png" alt="Nagad" />
                </div>
              </div>

              <div className="payment-option">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="cod">Cash on delivery</label>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="coupon-section">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="apply-coupon-btn" onClick={handleApplyCoupon}>
                Apply Coupon
              </button>
            </div>

            {/* Place Order Button */}
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
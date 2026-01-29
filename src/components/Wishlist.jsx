import '../styles/Wishlist.css';
import { Link } from 'react-router-dom';

function Wishlist() {
  //  wishlist data
  const wishlistItems = [
    {
      id: 1,
      name: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160,
      discount: '-35%',
      image: '/images/products/gucci-bag.png',
    },
    {
      id: 2,
      name: 'RGB liquid CPU Cooler',
      price: 1960,
      image: '/images/products/speaker.png',
    },
    {
      id: 3,
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      image: '/images/products/controller.png',
    },
    {
      id: 4,
      name: 'Quilted Satin Jacket',
      price: 750,
      image: '/images/products/jacket.png',
    },
  ];

  // Sample "Just For You" data
  const recommendedItems = [
    {
      id: 5,
      name: 'ASUS FHD Gaming Laptop',
      price: 960,
      originalPrice: 1160,
      discount: '-35%',
      rating: 5,
      reviews: 65,
      image: '/images/products/laptop.png',
    },
    {
      id: 6,
      name: 'IPS LCD Gaming Monitor',
      price: 1160,
      rating: 5,
      reviews: 65,
      image: '/images/products/IPS Monitor-500x500 1.png',
    },
    {
      id: 7,
      name: 'HAVIT HV-G92 Gamepad',
      price: 560,
      rating: 5,
      reviews: 65,
      badge: 'NEW',
      image: '/images/products/g92-2-500x500 1.png',
    },
    {
      id: 8,
      name: 'AK-900 Wired Keyboard',
      price: 200,
      rating: 5,
      reviews: 65,
      image: '/images/products/ak-900-01-500x500 1.png',
    },
  ];

  return (
    <div className="wishlist-container">
      {/* Wishlist Header */}
      <div className="wishlist-header">
        <h3 className="header-name">Wishlist (4)</h3>
        <button className="bag-btn">Move All to Bag</button>
      </div>

      {/* Wishlist Items Grid */}
      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-card">
            {item.discount && (
              <span className="discount-badge">{item.discount}</span>
            )}
            <button className="delete-btn">
              <img src="/images/icons/delete.png" />
            </button>

            <div className="card-image">
              <img src={item.image} alt={item.name} />
              <button className="add-to-cart-btn">🛒 Add to Cart</button>
            </div>

            <div className="card-info">
              <h4>{item.name}</h4>
              <div className="price-section">
                <span className="current-price">${item.price}</span>
                {item.originalPrice && (
                  <span className="original-price">${item.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Just For You Section */}
      <div className="just-for-you-section">
        <div className="section-header">
          <div className="header-title">
            <span className="red-bar"></span>
            <h3>Just For You</h3>
          </div>
          <button className="see-all-btn">See All</button>
        </div>

        {/* Recommended Items Grid */}
        <div className="recommended-grid">
          {recommendedItems.map((item) => (
            <div key={item.id} className="recommended-card">
              {item.discount && (
                <span className="discount-badge">{item.discount}</span>
              )}
              {item.badge && <span className="new-badge">{item.badge}</span>}
              <button className="eye-btn">
                <img src="/images/icons/Fill Eye.png" />
              </button>

              <div className="card-image">
                <img src={item.image} alt={item.name} />
                <button className="add-to-cart-btn">🛒 Add to Cart</button>
              </div>

              <div className="card-info">
                <h4>{item.name}</h4>
                <div className="price-section">
                  <span className="current-price">${item.price}</span>
                  {item.originalPrice && (
                    <span className="original-price">
                      ${item.originalPrice}
                    </span>
                  )}
                </div>
                <div className="rating">
                  <img src="/images/icons/Five star.png" />
                  <span className="reviews">({item.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;

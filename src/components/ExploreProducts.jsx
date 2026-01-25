import '../styles/ExploreProducts.css';

const exploreProductsData =[

{
  id:1,
  name:'Breed Dry Dog Food',
  price:100,
  image: "/images/products/dogfood.jpg",
  ratingCount:35,
  isNew: false
},
{
  id:2,
  name:'CANON EOS DSLR Camera',
  price:360,
  image: "/images/products/camera.png",
  ratingCount:95,
  isNew: false
},
{
  id:3,
  name:'ASUS FHD Gaming Laptop',
  price:700,
  image: "/images/products/laptop.png",
  ratingCount:325,
  isNew: false
},
{
  id:4,
  name:'Curology Product Set ',
  price:600,
  image: "/images/products/skin-products.png",
  ratingCount:145,
  isNew: false
},
{
  id:5,
  name:'Kids Electric Car',
  price:960,
  image: "/images/products/car.png",
  ratingCount:65,
  isNew: true,
    colors: ['#FF0000', '#000000']
},
{
  id:6,
  name:'Jr. Zoom Soccer Cleats',
  price:1160,
  image: "/images/products/shoes.png",
  ratingCount:55,
  isNew: false,
    colors: ['#FFCC00', '#FF6B00']
},
{
  id:7,
  name:'GP11 Shooter USB Gamepad',
  price:660,
  image: "/images/products/controller.png",
  ratingCount:55,
  isNew: true,
    colors: ['#000000', '#FF0000']
  
},
{
  id:8,
  name:'Quilted Satin Jacket',
  price:660,
  image: "/images/products/jacket.png",
  ratingCount:55,
  isNew: false,
    colors: ['#1A4D2E', '#FF0000']
}
  
];
function ExploreProducts() {
 return (
    <section className="explore-products">
      <div className="explore-container">
        <div className="explore-header">
          <div className="explore-indicator">
            <div className="red-rectangle"></div>
            <span className="explore-subtitle">Our Products</span>
          </div>
        </div>

        <div className="explore-title-row">
          <h2 className="explore-title">Explore Our Products</h2>
          <div className="navigation-arrows">
            <button className="nav-arrow prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 5L4 12L11 19M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="nav-arrow next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 5L20 12L13 19M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="explore-products-grid">
          {exploreProductsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-btn">View All Products</button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="explore-product-card">
      <div className="explore-product-image-container">
        {product.isNew && <span className="new-badge">NEW</span>}
        <img src={product.image} alt={product.name} className="explore-product-image" />
        <div className="explore-product-actions">
          <button className="explore-action-btn">
            <img src="/images/icons/Wishlist.png" alt="Wishlist" />
          </button>
          <button className="explore-action-btn">
            <img src="/images/icons/Fill Eye.png" alt="View" />
          </button>
        </div>
        <button className="add-to-cart-btn">Add To Cart</button>
      </div>

      <div className="explore-product-details">
        <h3 className="explore-product-name">{product.name}</h3>
        <div className="explore-price-container">
          <span className="explore-current-price">${product.price}</span>
        </div>
        <div className="explore-rating-container">
          <img src="/images/icons/Five star.png" alt="Rating" />
          <span className="explore-rating-count">({product.ratingCount})</span>
        </div>
        {product.colors && (
          <div className="color-options">
            {product.colors.map((color, index) => (
              <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default ExploreProducts;


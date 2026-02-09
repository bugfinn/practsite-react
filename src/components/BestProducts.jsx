import'../styles/BestProducts.css';

const bestSellingProducts = [
{
id : 1,
name: "The north coat",
currentPrice: 260,
originalPrice: 360,
image: "/images/products/coat.png",
ratingCount: 65
},
{
id : 2,
name: "Gucci duffle bag",
currentPrice: 960,
originalPrice: 1160,
image: "/images/products/gucci-bag.png",
ratingCount: 65
},
{
id : 3,
name: "RGB liquid CPU Cooler",
currentPrice: 160,
originalPrice: 170,
image: "/images/products/speaker.png",
ratingCount: 65
},
{
id : 4,
name: "Small BookSelf",
currentPrice: 360,
image: "/images/products/table.png",
ratingCount: 65

}

  ];

function BestProduct (){
 return (
<>
<section className='product-all'>
<div className="product-header">
          <div className="product-indicator">
            <div className="redd-rectangle"> </div>
            <span className="product-subtitle">This Month</span>
          </div>
        </div>
        <div className="product-title-row">
          <h2 className="product-title">Best Selling Products</h2>
          <button className="view-all">View All</button>
          </div>
        
<div className="best-products-grid">
  {bestSellingProducts.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
  

</section>

</>
 );
}
function ProductCard({product}) {
return (
    <div className="best-product-card">
      <div className="best-product-image-container">
        <img src={product.image} alt={product.name} className="best-product-image" />
        <div className="best-product-actions">
          <button className="best-action-btn">
             <img src="/images/icons/Fill Eye.png" alt="View" />
          </button>
          <button className="best-action-btn">
          
             <img src="/images/icons/Fill Heart.png" alt="Wishlist" />
          </button>
        </div>
      </div>
      
      <div className="best-product-details">
        <h3 className="best-product-name">{product.name}</h3>
        <div className="best-price-container">
          <span className="best-current-price">${product.currentPrice}</span>
          {product.originalPrice && (
            <span className="best-original-price">${product.originalPrice}</span>
          )}
        </div>
        <div className="best-rating-container">
          <img src="/images/icons/Five star.png" alt="Rating" />
          <span className="best-rating-count">({product.ratingCount})</span>
        </div>
      </div>
    </div>
  );
}















export default BestProduct;
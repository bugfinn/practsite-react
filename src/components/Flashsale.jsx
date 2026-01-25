import { useState,useEffect }  from 'react'
import '../styles/Home.css'
// In Flashsale.jsx
const flashSaleProducts = [
  {
    id: 1,
    name: "HAVIT HV-G92 GAMEPAD",
    currentPrice: 120,
    originalPrice: 160,
    image: "/images/products/g92-2-500x500 1.png",
    ratingCount: 88
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard", 
    currentPrice: 960,
    originalPrice: 1160,
    image: "/images/products/ak-900-01-500x500 1.png",
    ratingCount: 75
  },
  {
 id: 3,
 name: "IPS LCD Gaming Monitor",
 currentPrice: 370,
 originalPrice: 400,
 image: "/images/products/IPS Monitor-500x500 1.png",
 ratingCount: 99
  },
  {
 id: 4,
 name: "S-Series Comfort Chair",
 currentPrice: 375,
 originalPrice: 400,
 image: "/images/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
 ratingCount: 99
  }
  // Add more products...
]
function Flashsale() {
  const [targetDate, setTargetDate] = useState(() => {
    const date = new Date()
    date.setDate(date.getDate() + 3)
    return date
  })

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        // Reset to new 3-day countdown when timer reaches zero
        const newTarget = new Date()
        newTarget.setDate(newTarget.getDate() + 3)
        setTargetDate(newTarget)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <>
      <section className="flash-sales">
        <div className="flash-sales-container">
          {/* ...existing code... */}
          <div className="section-header">
            <div className="section-indicator">
              <div className="red-rectangle"></div>
              <span className="section-subtitle">Today's</span>
            </div>
          </div>

          <div className="section-title-row">
            <h2 className="section-title">Flash Sales</h2>

            <div className="countdown-timer">
              <div className="timer-group">
                <span className="timer-label">Days</span>
                <span className="timer-value">{String(timeLeft.days).padStart(2, '0')}</span>
              </div>
              <span className="timer-separator">:</span>

              <div className="timer-group">
                <span className="timer-label">Hours</span>
                <span className="timer-value">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span className="timer-separator">:</span>

              <div className="timer-group">
                <span className="timer-label">Minutes</span>
                <span className="timer-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span className="timer-separator">:</span>

              <div className="timer-group">
                <span className="timer-label">Seconds</span>
                <span className="timer-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>

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

          <div className="products-grid">
            {flashSaleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className='view-all-container'>
          <button className='view-btn'>View All Product</button>
        </div>
      </section>
    </>
  )
}

//  ProductCard component
function ProductCard({ product }) {
  return (
  
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-actions">
          <button className="action-btn">
            <img src="/images/icons/Fill Eye.png" alt="View" />
          </button>
          <button className="action-btn">
            <img src="/images/icons/Fill Heart.png" alt="Wishlist" />
          </button>
        </div>
      </div>
      
      <div className="product-details">
        <h4 className="product-name">{product.name}</h4>
        <div className="price-container">
          <span className="current-price">${product.currentPrice}</span>
          <span className="original-price">${product.originalPrice}</span>
        </div>
        <div className="rating-container">
          <img src="/images/icons/Five star.png" alt="Rating" />
          <span className="rating-count">({product.ratingCount})</span>
        </div>
      </div>
      
    </div>
    
       
  )
  
}



export default Flashsale
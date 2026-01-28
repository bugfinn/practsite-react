import { useState, useEffect } from 'react';
import '../styles/Home.css';

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;

  // Auto-advance carousel dots only
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-main">
      <div className="hero-content">
        <div className="hero-text">
          <div className="brand-info">
            <img
              src="/images/icons/1200px-Apple_gray_logo 1.png"
              alt="Apple"
              className="apple-logo"
            />
            <span className="product-line">iPhone 14 Series</span>
          </div>

          <h1 className="hero-title">Up to 10% off Voucher</h1>
          <a href="#shop" className="hero-cta">
            Shop Now
            <img
              src="/images/icons/icons arrow-right.png"
              alt="Arrow"
              className="arrow-icon"
            />
          </a>
        </div>
        <div className="hero-image">
          <img
            src="/images/products/hero_endframe__cvklg0xk3w6e_large 2.png"
            alt="iPhone 14"
            className="iphone-img"
          />
        </div>
      </div>

      <div className="carousel-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Hero;

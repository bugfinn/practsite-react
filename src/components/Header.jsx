import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import searchIcon from '/images/icons/search button.png';
import wishlistIcon from '/images/icons/Wishlist.png';
import cartIcon from '/images/icons/Cart1 with buy.png';
import menuIcon from '/images/icons/icons8-menu-50.png';
import closeIcon from '/images/icons/icons8-close-50.png';
import UserDropdown from './UserDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="top-header">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <a href="#">ShopNow</a>
        </p>
      </div>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h2>Exclusive</h2>
          </div>

          {/* Overlay */}
          <div 
            className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={closeMenu}
          ></div>

          {/* Side Menu */}
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button className="menu-close" onClick={closeMenu}>
              <img src={closeIcon} alt="Close" />
            </button>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/signup" onClick={closeMenu}>Sign Up</Link>
          </nav>

          <div className="header-right">
            <div className="searching-box">
              <input
                type="text"
                className="search-input"
                placeholder="what are you looking for?"
              />
              <button className="search-btn">
                <img src={searchIcon} alt="Search" />
              </button>
            </div>

            <div className="header-icons">
              <button className="icon-btn wishlist-btn">
                <img src={wishlistIcon} alt="Wishlist" />
              </button>
              <button className="icon-btn cart-btn" onClick={() => navigate('/cart')}>
                <img src={cartIcon} alt="Cart" />
                <span className="badge">2</span>
              </button>
              <UserDropdown />
            </div>
          </div>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'hidden' : ''}`} 
            onClick={toggleMenu}
          >
            <img src={menuIcon} alt="Menu" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
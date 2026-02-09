import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Header.css'
import UserDropdown from './UserDropdown';

function Header(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

return (
<>
<div className="top-header">
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a href="shop" className="shop-link">ShopNow</a>
      </p>
    </div>

  {/*  Main Header      */}
    <nav className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Exclusive</h2>
        </div>
         {/* Navigation      */}
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/signUp" onClick={closeMenu}>Sign Up</NavLink>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className="header-right">
          <div className="searching-box">
            <input
              type="text"
              className="search-input"
              placeholder="what are you looking for?"
            />
            <button className="search-btn">
              <img
                src="/images/icons/search button.png"
                alt="Search"
              />
            </button>
          </div>

          <div className="header-icons">
            <Link to="/wishlist" className="icon-btn wishlist-btn">
              <img
                src="/images/icons/Wishlist.png"
                alt="Wishlist"
              />
            </Link>
            <Link to="/cart" className="icon-btn">
              <img src="/images/icons/Cart1 with buy.png" alt="Cart" />
              <span className="badge">2</span>
            </Link>
            <UserDropdown />
          </div>
        </div>
      </div>
    </nav>

</>
)
}
export default Header
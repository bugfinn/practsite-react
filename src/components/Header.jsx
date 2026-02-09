import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css'
import UserDropdown from './UserDropdown';

function Header(){

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
        <div className="nav-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/signUp">Sign Up</NavLink>
        </div>
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
import '../styles/Header.css'

function Header(){

return (
<>
<div className="top-header">
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a href="shop" className="shop-link">ShopNow</a>
      </p>
    </div>

  
    <nav className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Exclusive</h2>
        </div>
        <div className="nav-menu">
          <a href="home" className="active">Home</a>
          <a href="home">Contact</a>
          <a href="home">About</a>
          <a href="home">Sign Up</a>
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
            <button className="icon-btn wishlist-btn">
              <img
                src="/images/icons/Wishlist.png"
                alt="Wishlist"
              />
            </button>
            <button className="icon-btn cart-btn">
              <img
                src="/images/icons/Cart1 with buy.png"
                alt="Cart"
              />
            </button>
            <button className="icon-btn user-btn">
              <img src="/images/icons/user.png" alt="User account" />
            </button>
          </div>
        </div>
      </div>
    </nav>

</>
)
}
export default Header
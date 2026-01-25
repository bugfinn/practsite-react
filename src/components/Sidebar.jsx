import '../styles/Home.css'  // Updated path

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#womens-fashion">Woman's Fashion <img src="/images/icons/DropDown.png" alt="dropdown" className="dropdown-icon" /></a></li>
        <li><a href="#mens-fashion">Men's Fashion <img src="/images/icons/DropDown.png" alt="dropdown" className="dropdown-icon" /></a></li>
        <li><a href="#medicine">Medicine</a></li>
        <li><a href="#electronics">Electronics</a></li>
        <li><a href="#sports-toys">Sports & Toys</a></li>
        <li><a href="#baby-toys">Baby's Toys</a></li>
        <li><a href="#home-lifestyle">Home & Lifestyle</a></li>
        <li><a href="#groceries-pets">Groceries & Pets</a></li>
        <li><a href="#health-beauty">Health & beauty</a></li>
      </ul>
    </div>
  )
}

export default Sidebar
import '../styles/Category.css';

function Category() {
  return (
    <>
      <section className="category-all">
        <div className="category-header">
          <div className="category-indicator">
            <div className="redd-rectangle"> </div>
            <span className="category-subtitle">Categories</span>
          </div>
        </div>
        <div className="section-title-row">
          <h2 className="section-title">Browse By Category</h2>

          {/* navigation arrows  */}
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
        <div className="category-container">
          <div className="phone-categ">
            <img src="/images/icons/Category-CellPhone.png" alt="PHONE" />
            <span className="categories-names">Phones</span>
          </div>
          <div className="phone-categ">
            <img src="/images/icons/Category-Computer.png" alt="COMPUTER" />
            <span className="categories-names">Computers</span>
          </div>
          <div className="phone-categ">
            <img src="/images/icons/Category-SmartWatch.png" alt="SMARTWATCH" />
            <span className="categories-names">SmartWatch</span>
          </div>
          <div className="phone-categ">
            <img src="/images/icons/Category-Camera.png" alt="CAMERA" />
            <span className="categories-names">Camera</span>
          </div>
          <div className="phone-categ">
            <img src="/images/icons/Category-Headphone.png" alt="HEADPHONE" />
            <span className="categories-names">HeadPhones</span>
          </div>
          <div className="phone-categ">
            <img src="/images/icons/Category-Gamepad.png" alt="GAMING" />
            <span className="categories-names">Gaming</span>
          </div>
        </div>
      </section>
    </>
  );
}
export default Category;

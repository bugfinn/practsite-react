import '../styles/NewArrival.css';

function NewArrival() {
  return (
    <section className="new-arrival">
      <div className="arrival-container">
        <div className="arrival-header">
          <div className="red-rectangle"></div>
          <span className="arrival-subtitle">Featured</span>
        </div>
        <div className="arrival-title-row">
          <h2 className="arrival-title">New Arrival</h2>
        </div>

        {/* Grid layout  */}
        <div className="arrival-grid">
          {/* ps5-large left  */}
          <div className="arrival-card ps5">
            <img src="/images/products/ps5.png" alt="playStation 5" />

            <div className="card-content">
              <h3>PlayStation 5</h3>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>

          {/* women collection right top  */}

          <div className="arrival-card women">
            <img src="/images/products/woman.jpg" alt="Women's Collection" />
            <div className="card-content">
              <h3>Women’s Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <button className="shop-btn">Show Now</button>
            </div>
          </div>

          {/* speakers- Bottom left  */}
          <div className='bottom-right'>
          <div className="arrival-card sepaker">
            <img src="/images/products/bigspeaker.png" alt="Sepeakers" />
            <div className="card-content">
              <h3>Speakers</h3>
              <p>Amazon wireless speakers</p>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>
          {/* perfume- Bottom right  */}

          <div className="arrival-card perfume">
            <img src="/images/products/gucci.png" alt="Perfume" />
            <div className="card-content">
              <h3>Perfume</h3>
              <p>GUCCI INTENSE OUD EDP</p>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewArrival;

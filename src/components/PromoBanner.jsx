import '../styles/PromoBanner.css'

function PromoBanner () {

  return (
<section className='promo-banner'>
  <div className='promo-container'>
    <div className='promo-content'>
      <span className='promo-category'>Category</span>
      <h2 className='promo-title'>Enhance your Music Experience</h2>
      <div className='promo-timer'>
        <div className='time-circle'>
          <span className='time-value'>23</span>
          <span className='time-label'>Hours</span>
        </div>
         <div className='time-circle'>
          <span className='time-value'>05</span>
          <span className='time-label'>Days</span>
        </div>
         <div className='time-circle'>
          <span className='time-value'>59</span>
          <span className='time-label'>Minutes</span>
        </div>
        <div className='time-circle'>
          <span className='time-value'>35</span>
          <span className='time-label'>Seconds</span>
        </div>
      </div>

      <button className='promo-btn'>Buy Now</button>
     
    </div>
    <div className='promo-image'>
      <img src='/images/products/big-speaker.png' alt='JBL Speaker' />
  </div>
  </div>
</section>


  )
}
export default PromoBanner;
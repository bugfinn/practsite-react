import '../styles/Footer.css'



function Footer (){


return (

<>
<footer className='footer-container'>
<div className='footer-content'>

{/*  Exclusive content   */}
<div className='footer-section footer-exclusive'>

<h2 className='footer-title'>Exclusive</h2>
<h4 className='footer-subtitile'>Subcription</h4>
<p className='footer-text'>Get 10% off your first order</p>
<div className='input-area' >
<input

type='email'
className='footer-input'
placeholder='Enter your email'

/> 
<button className='subscribe-btn'>
<img src='/images/icons/send.png'alt='send' />

</button>
</div>
</div>

{/* Support Section   */}

 <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <p className="footer-address">New in Dev, Punjab,<br />Y 21u, Pakistan.</p>
          <p className="footer-contact">exclusive@gmail.com</p>
          <p className="footer-contact">+88015-88888-9999</p>
        </div>

  {/* Account Section */}
        <div className="footer-section">
          <h3 className="footer-title">Account</h3>
          <ul className="footer-links">
            <li><a href="#account">My Account</a></li>
            <li><a href="#login">Login / Register</a></li>
            <li><a href="#cart">Cart</a></li>
            <li><a href="#wishlist">Wishlist</a></li>
            <li><a href="#shop">Shop</a></li>
          </ul>
        </div>
 {/* Quick Link Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Link</h3>
          <ul className="footer-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms Of Use</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
 {/* Download App Section */}
        <div className="footer-section">
          <h3 className="footer-title">Download App</h3>
          <p className="app-subtitle">Save $3 with App New User Only</p>
          <div className="app-download">
            <div className="qr-code">
              <img src="/images/icons/Qr Code.png" alt="QR Code" />
            </div>
            <div className="app-links">
              <img src="/images/icons/google-play.png" alt="Google Play" />
              <img src="/images/icons/download-appstore.png" alt="App Store" />
            </div>
          </div>
          <div className="social-links">
            <a href="#facebook"><img src="/images/icons/Icon-Facebook.png" alt="Facebook" /></a>
            <a href="#twitter"><img src="/images/icons/Icon-Twitter.png" alt="Twitter" /></a>
            <a href="#instagram"><img src="/images/icons/Group.png" alt="Instagram" /></a>
            <a href="#linkedin"><img src="/images/icons/Vector (1).png" alt="LinkedIn" /></a>
          </div>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. All right reserved</p>

</div>
</footer>
</>
)
}

export default Footer
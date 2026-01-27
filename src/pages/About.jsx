import '../styles/About.css'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import { useState } from 'react'
import Services from '../components/Services'

function About() {
  const [activeSlide, setActiveSlide] = useState(2);
  const totalSlides = 5;

  return(
    <main className='About-page'>
      <div className='container'>
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>About</span>
        </div>

        {/* About content */}
        <div className='about-content'>
         <div className='about-story-section'>
    {/* Left side-about us para */}
    <div className='about-detail'>
      <h2 className='about-title'>Our Story</h2>
      <p className='about-first'>Launced in 2015, Exclusive is South 
        Asia's premier online shopping makterplace with an active presense in Bangladesh. 
        Supported by wide range of tailored marketing, data and service solutions,
        Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
      <p className='about-second'>Exclusive has more than 1 Million products to offer, growing at a very fast.
        Exclusive offers a diverse assotment in categories ranging from consumer.</p>
    </div>

    {/* right side-img */}
    <div className='right-img'>
      <img src='/images/products/african-woman.jpg' alt='African-woman' />
    </div>
  </div>

          {/* results of our sales */}
          <div className="result-container">
            {/* result cards */}
            <div className="service-categ">
              <img src="/images/icons/Services.png" alt="Shops" />
              <h2 className="result-names">10.5k</h2>
              <p className='result-descr'>Sallers active our site</p>
            </div>
            <div className="service-categ">
              <img src="/images/icons/Services (1).png" alt="Sale" />
              <h2 className="result-names">33k</h2>
              <p className='result-descr'>Mopnthly Produduct Sale</p>
            </div>
            <div className="service-categ">
              <img src="/images/icons/Services (2).png" alt="Customer" />
              <h2 className="result-names">45.5k</h2>
              <p className='result-descr'>Customer active in our site</p>
            </div>
            <div className="service-categ">
              <img src="/images/icons/Services (3).png" alt="Annual sale" />
              <h2 className="result-names">25k</h2>
              <p className='result-descr'>Anual gross sale in our site</p>
            </div>
          </div>

          {/* founder section */}
          <div className='founder-section'>
            <div className='founder-card'>
              <div className='founder-img'>
                <img src='/images/products/img-1.png' alt='Tom Cruise' />
              </div>
              <h3 className='founder-name'>Tom Cruise</h3>
              <p className='founder-detail'>Founder & Chairman</p>
              <div className='founder-icons'>
                <Twitter size={20} />
                <Instagram size={20} />
                <Linkedin size={20} />
              </div>
            </div>

            <div className='founder-card'>
              <div className='founder-img'>
                <img src='/images/products/img-2.png' alt='Emma Watson' />
              </div>
              <h3 className='founder-name'>Emma Watson</h3>
              <p className='founder-detail'>Managing Director</p>
              <div className='founder-icons'>
                <Twitter size={20} />
                <Instagram size={20} />
                <Linkedin size={20} />
              </div>
            </div>

            <div className='founder-card'>
              <div className='founder-img'>
                <img src='/images/products/img-3.png' alt='Will Smith' />
              </div>
              <h3 className='founder-name'>Will Smith</h3>
              <p className='founder-detail'>Product Designer</p>
              <div className='founder-icons'>
                <Twitter size={20} />
                <Instagram size={20} />
                <Linkedin size={20} />
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className='pagination-dots'>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Services Section */}
          <Services />

        </div>
      </div>
    </main>
  )
}

export default About

import { Phone, Mail } from 'lucide-react'
import '../styles/Contact.css'

function Contact() {
  return (
    <main className="contact-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>Contact</span>
        </div>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            {/* Call To Us Card */}
            <div className="info-card">
              <div className="icon-wrapper">
                <Phone size={24} />
              </div>
              <h3>Call To Us</h3>
              <p>We are available 24/7, 7 days a week.</p>
              <p className="contact-detail">Phone: +8801611122222</p>
            </div>

            <div className="divider"></div>

            {/* Write To Us Card */}
            <div className="info-card">
              <div className="icon-wrapper">
                <Mail size={24} />
              </div>
              <h3>Write To US</h3>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className="contact-detail">Emails: customer@exclusive.com</p>
              <p className="contact-detail">Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <form>
              <div className="form-row">
                <input type="text" placeholder="Your Name *" required />
                <input type="email" placeholder="Your Email *" required />
                <input type="tel" placeholder="Your Phone *" required />
              </div>
              <textarea 
                placeholder="Your Message" 
                rows="8"
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
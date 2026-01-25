import '../styles/Services.css';



function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">
            <div className="icon-circle">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 28H6.83333C5.91286 28 5.16667 27.2538 5.16667 26.3333V13.1667C5.16667 12.2462 5.91286 11.5 6.83333 11.5H12.1667C13.0871 11.5 13.8333 12.2462 13.8333 13.1667V17.8333C13.8333 18.7538 14.5795 19.5 15.5 19.5H20.1667C21.0871 19.5 21.8333 20.2462 21.8333 21.1667V26.3333C21.8333 27.2538 21.0871 28 20.1667 28H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h3 className="service-title">FREE AND FAST DELIVERY</h3>
          <p className="service-description">Free delivery for all orders over $140</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <div className="icon-circle">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M13.3333 13.3335C13.3333 15.1025 14.0357 16.7971 15.286 18.0474C16.5362 19.2976 18.2319 20.0002 20 20.0002C21.7681 20.0002 23.4638 19.2976 24.714 18.0474C25.9643 16.7971 26.6667 15.1025 26.6667 13.3335C26.6667 11.5654 25.9643 9.8698 24.714 8.61955C23.4638 7.36931 21.7681 6.66683 20 6.66683C18.2319 6.66683 16.5362 7.36931 15.286 8.61955C14.0357 9.8698 13.3333 11.5654 13.3333 13.3335Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 31.6668C10 29.103 11.0179 26.6444 12.8058 24.8565C14.5937 23.0686 17.0522 22.0508 19.616 22.0508H20.384C22.9478 22.0508 25.4063 23.0686 27.1942 24.8565C28.9821 26.6444 30 29.103 30 31.6668" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h3 className="service-title">24/7 CUSTOMER SERVICE</h3>
          <p className="service-description">Friendly 24/7 customer support</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <div className="icon-circle">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M8.33398 19.9998L16.6673 28.3332L31.6673 11.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h3 className="service-title">MONEY BACK GUARANTEE</h3>
          <p className="service-description">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
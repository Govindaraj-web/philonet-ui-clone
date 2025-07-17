import React from 'react';
import './index.css'; // Make sure your CSS is imported

const Body = () => {
  const clientLogos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
    'logo6.png',
    'logo7.png'
  ];

  const serviceTitles = [
    'Membership Organisations',
    'National Associations',
    'Clubs And Groups'
  ];

  const serviceIcons = [
    '/icon1.png',
    '/icon2.png',
    '/icon3.png'
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2>
              Lessons and insights <br />
              <span>from 8 years</span>
            </h2>
            <p>Where to grow your business as a photographer: site or social media?</p>
            <button className="register">Register</button>
          </div>
          <img src="Body.png" alt="Hero" className="hero-img" />
        </div>

        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h3 className="clients-title">Our Clients</h3>
        <p className="clients-subtitle">We have been working with some Fortune 500+ clients</p>
        <div className="client-logos">
          {clientLogos.map((src, idx) => (
            <img key={idx} src={src} alt={`Client ${idx + 1}`} className="client-logo" />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h3>
          Manage your entire community <br />
          in a single system
        </h3>
        <p className="sub">Who is Philonet suitable for?</p>
        <div className="cards">
          {serviceTitles.map((title, idx) => (
            <div key={idx} className="card">
              <img src={serviceIcons[idx]} alt={title} className="icon" />
              <h4>{title}</h4>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;

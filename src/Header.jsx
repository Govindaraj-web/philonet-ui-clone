import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="right-section">
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Community</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
        </nav>
        <button className="register-btn">Register Now →</button>
      </div>
    </header>
  );
};

export default Header;

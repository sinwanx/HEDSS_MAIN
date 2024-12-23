import React from 'react';
import './Header.css';  // Ensure you're importing the correct CSS

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
      <div className="header-center">
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      </div>
      <div className="header-right">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;

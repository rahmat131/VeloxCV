import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo and Description */}
        <div className="footer-about">
          <h3>Velox CV</h3>
          <p>Create a professional CV quickly and easily with our CV Builder.</p>
        </div>
        
        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/get-your-cv">Get Your CV</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: rahmatdevs131@gmail.com</p>
          <p>Phone: +4915112300786</p>
          <p>Location: Jüdenstraße 13A, Göttingen</p>
        </div>
        
        {/* Social Media Links */}
        <div className="footer-social">
          <h4>See More</h4>
          <div className="social-icons">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> */}
            <a href="https://github.com/rahmat131/VeloxCV" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/syedrahmatullah/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Velox CV. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

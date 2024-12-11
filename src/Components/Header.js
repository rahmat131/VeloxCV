import React from 'react';
import { Link } from 'react-router-dom'; // Corrected the import
import './Header.css'
import logo from "./logo/cvlogo.png";

function Header() {  // Capitalize the component name
  return (
    <div>
      <header>
        <nav>
          <div className='navL'>
            <Link to="/"className='nav-link'>
            <img src={logo} alt="My Image" />
            </Link>
          </div>
          <div className='navM'>
            <ul>
              <li><Link to="/"className='nav-link'>Home</Link></li>
              <li><Link to="/about"className='nav-link'>About</Link></li>
              <li><Link to="/contact"className='nav-link'>Contact</Link></li>
            </ul>
          </div>
          <div className='navR'>
            <div className='GYCV'>
              <Link to="/get-your-cv"className='nav-link'>Get Your CV!</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;

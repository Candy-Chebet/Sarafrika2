import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logoWhite.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (event, targetPath, sectionId = null) => {
    event.preventDefault();
    // setDropdownOpen(false); // Close dropdown after clicking

    if (location.pathname === targetPath) {
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(targetPath);
      if (sectionId) {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="/"><img src={logo} alt="Logo" /></a>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><a href="/#background" onClick={(e) => handleNavigation(e, '/', 'background')}>Background</a></p>
          <p><a href="/products" onClick={(e) => handleNavigation(e, '/products')}>Products</a></p>
          <p><a href="/commitment" onClick={(e) => handleNavigation(e, '/commitment')}>Our Commitment</a></p>
          <p><a href="/team" onClick={(e) => handleNavigation(e, '/team')}>Team</a></p>

          {/* Dropdown Menu */}
          {/* <div
            className="navbar-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button type="button" className="navbar-dropdown-button">More</button>
            {dropdownOpen && (
              <div className="navbar-dropdown-menu">
                <button type="button" onClick={(e) => handleNavigation(e, '/elimika')}>Elimika</button>
                <button type="button" onClick={(e) => handleNavigation(e, '/bff')}>BFF</button>
                <button type="button" onClick={(e) => handleNavigation(e, '/eneza')}>Eneza</button>
                <button type="button" onClick={(e) => handleNavigation(e, '/shop')}>Shop</button>
                <button type="button" onClick={(e) => handleNavigation(e, '/nimeahidi')}>Nimeahidi</button>
                <button type="button" onClick={(e) => handleNavigation(e, '/events')}>Events</button>
              </div>
            )}
          </div> */}
        </div>
      </div>

      {/* <div className="gpt3__navbar-sign">
        <a href="/#blog" onClick={(e) => handleNavigation(e, '/', 'blog')}>
          <button type="button">Get Started</button>
        </a>
      </div> */}

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><Link to="/">Home</Link></p>
              <p><a href="/#background" onClick={(e) => handleNavigation(e, '/', 'background')}>Background</a></p>
              <p><a href="/#apps" onClick={(e) => handleNavigation(e, '/', 'apps')}>Products</a></p>
              <p><a href="/commitment" onClick={(e) => handleNavigation(e, '/commitment')}>Our Commitment</a></p>
              <p><a href="/team" onClick={(e) => handleNavigation(e, '/team')}>Team</a></p>

              {/* Dropdown in Mobile Menu */}
              {/* <div className="navbar-dropdown">
                <button type="button" className="navbar-dropdown-button">More</button>
                <div className="navbar-dropdown-menu">
                  <button type="button" onClick={(e) => handleNavigation(e, '/elimika')}>Elimika</button>
                  <button type="button" onClick={(e) => handleNavigation(e, '/bff')}>BFF</button>
                  <button type="button" onClick={(e) => handleNavigation(e, '/eneza')}>Eneza</button>
                  <button type="button" onClick={(e) => handleNavigation(e, '/shop')}>Shop</button>
                  <button type="button" onClick={(e) => handleNavigation(e, '/nimeahidi')}>Nimeahidi</button>
                  <button type="button" onClick={(e) => handleNavigation(e, '/events')}>Events</button>
                </div>
              </div> */}
            </div>
            {/* <div className="gpt3__navbar-sign">
              <a href="/#blog" onClick={(e) => handleNavigation(e, '/', 'blog')}>
                <button type="button">Get Started</button>
              </a>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

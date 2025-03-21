import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logoWhite.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // Programmatic navigation

  // Function to handle navigation
  const handleNavigation = (event, targetPath, sectionId = null) => {
    event.preventDefault();

    if (location.pathname === targetPath) {
      // If already on the correct page, scroll to the section
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to the page first, then scroll after loading
      navigate(targetPath);
      if (sectionId) {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Short delay ensures the section exists before scrolling
      }
    }
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><a href="/#background" onClick={(e) => handleNavigation(e, '/', 'background')}>Background</a></p>
          <p><a href="/#apps" onClick={(e) => handleNavigation(e, '/', 'apps')}>Products</a></p>
          <p><a href="/about" onClick={(e) => handleNavigation(e, '/about')}>Our Commitment</a></p>
          <p><a href="/team" onClick={(e) => handleNavigation(e, '/team')}>Team</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="/#blog" onClick={(e) => handleNavigation(e, '/', 'blog')}>
          <button type="button">Get Started</button>
        </a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><Link to="/">Home</Link></p>
            <p><a href="/#background" onClick={(e) => handleNavigation(e, '/', 'background')}>Background</a></p>
            <p><a href="/#apps" onClick={(e) => handleNavigation(e, '/', 'apps')}>Products</a></p>
            <p><a href="/about" onClick={(e) => handleNavigation(e, '/about')}>Our Commitment</a></p>
            <p><a href="/team" onClick={(e) => handleNavigation(e, '/team')}>Team</a></p>
          </div>
          <div className="gpt3__navbar-sign">
            <a href="/#blog" onClick={(e) => handleNavigation(e, '/', 'blog')}>
              <button type="button">Get Started</button>
            </a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

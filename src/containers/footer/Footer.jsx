
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logoWhite.png';
import './footer.css';

// import './footer.css';
// import logo from './assets/Logo02.png'; // Dark mode logo
// import logo2 from './assets/Logo01.png'; // Light mode logo
function Footer() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  // Listen for theme changes from other components
  useEffect(() => {
    const handleThemeChange = (event) => {
      setDarkMode(event.detail.darkMode);
    };

    window.addEventListener('themeChange', handleThemeChange);

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/focus">Our Focus</Link></li>
            {/* <li><Link to="/blog">News - Blog Page, History</Link></li> */}
            <li><Link to="/leadership">Sarafrika Leadership</Link></li>
            {/* <li><Link to="/careers">Career Opportunities</Link></li> */}
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Education</h3>
          <ul>
            <li><Link to="/elimika">Courses</Link></li>
            {/* <li><Link to="/gift-classes">Gift Classes</Link></li> */}
            {/* <li><Link to="/gift-courses">Gift Courses</Link></li> */}
            <li><Link to="/elimika">Become Instructor</Link></li>
            {/* <li><Link to="/training-centre">Training Centre</Link></li> */}
            {/* <li><Link to="/affiliate">Affiliate</Link></li> */}
            {/* <li><Link to="/coupons">Coupons</Link></li> */}
            <li><Link to="/school-training">School Training Program</Link></li>
            <li><Link to="/elimika">Buy Courses</Link></li>
            <li><Link to="/elimika">Upload Courses</Link></li>
            <li><Link to="/elimika">Start Learning</Link></li>
            {/* <li><Link to="/bootcamps">Bootcamps</Link></li> */}
            <li><Link to="/elimika">Classes</Link></li>
            {/* <li><Link to="/edu-support">Support</Link></li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Entertainment</h3>
          <ul>
            <li><Link to="/events">Music</Link></li>
            <li><Link to="/events">VideoEvents</Link></li>
            <li><Link to="/events">Tickets</Link></li>
            {/* <li><Link to="/gift-tickets">Gift Tickets</Link></li>
            <li><Link to="/buy-tickets">Buy Tickets</Link></li> */}
            {/* <li><Link to="/entertainment-support">Support</Link></li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Store</h3>
          <ul>
            <li><Link to="/school-equipment">School Equipment Scheme</Link></li>
            <li><Link to="/lease">Lease to own</Link></li>
            <li><Link to="/student-equipment">Students Equipment</Link></li>
            <li><Link to="/deals">Deals</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/gift-items">Gift Items</Link></li>
            <li><Link to="/refurbished">Refurbished</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/elimika">Elimika</Link></li>
            <li><Link to="/nimeahidi">Nimeahidi</Link></li>
            <li><Link to="/bff">Bound For Fame</Link></li>
            <li><Link to="/eneza">Eneza</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/culture-heritage">Culture & Heritage</Link></li>
            <li><Link to="/rhythm-dance">Rhythm and Dance</Link></li>
            <li><Link to="/apps">Apps</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>For Business</h3>
          <ul>
            <li><Link to="/sponsorship">Partnership</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            {/* <li><Link to="/funding">Apply For Funding</Link></li> */}
            <li><Link to="/advertise">Advertise</Link></li>
            <li><Link to="support@sarafrica.com">Enterprise</Link></li>
            <li><Link to="support@sarafrica.com">Affiliate Programs</Link></li>
            <li><Link to="support@sarafrica.com">Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="legal-links">
          <Link to="/">
            <img
              src={logo}
              alt="Sarafrika Logo"
              className="Flogo-image"
            />
          </Link>
          <span className="separator">|</span>
          {/* <Link to="/terms">Terms of Use</Link>
          <span className="separator">|</span> */}
          <Link to="/privacy">Privacy Policy</Link>
          {/* <span className="separator">|</span>
          <Link to="/sitemap">Site map</Link> */}
        </div>
        <div className="copyright">
          © 2025 Sarafrika. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

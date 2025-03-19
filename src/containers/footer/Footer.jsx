import React from 'react';
import gpt3Logo from '../../logoWhite.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Sarit Center, Nairobi, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Our Products</p>
        <p>Social Media</p>
        <p>FAQs</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Sarit Center, Nairobi</p>
        <p>0700000000</p>
        <p>info@sarafrika.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2025 Sarafrika. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

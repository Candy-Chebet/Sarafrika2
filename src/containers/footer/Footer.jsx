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
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p><a href="./terms">Privacy Policy</a></p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Don Bosco Savio, S2, Upperhill</p>
        <p>Nairobi Kenya, 14158 00800</p>
        <p>+254 732 259259 /
          +254 717 000 059
        </p>
        <p>info@sarafrika.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2025 Sarafrika. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

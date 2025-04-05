import React from 'react';
import './eneza.css';
/* eslint-disable arrow-body-style */

const Eneza = () => {
  return (
    <div className="eneza-container">
      <div className="eneza-content">
        <header className="eneza-header">
          <h1>ENEZA</h1>
          <div className="header-underline" />
        </header>

        <main>
          <section className="hero-section">
            <h2>Talent Booking Platform</h2>
            <p className="tagline">Redefining Entertainment Through Seamless Connections</p>
            <button type="button" className="cta-button">Get Started</button>
          </section>

          <section className="vision-section">
            <h2>Our Vision</h2>
            <div className="vision-content">
              <div className="vision-text">
                <p>Eneza defines how we engage audiences, consume media, and share content by connecting consumers, celebrities, and brands through live experiences.</p>
                <p>Understanding that todays cohort interacts, engages, and follows a new generation of role models who define todays culture, the Eneza platform changes how they interact with fans, followers, and brands.</p>
              </div>
              <div className="vision-image">
                <img
                  src="https://img.freepik.com/free-photo/singers-singing-studio_107420-96139.jpg?t=st=1743756418~exp=1743760018~hmac=f9ddb84f320483b37053f4ff47f4a6f6486d9b909f38c5206c111198bce1c10c&w=1380"
                  alt="Vision concept illustration"
                />
              </div>
            </div>
          </section>

          <section className="challenge">
            <h2>The Challenge</h2>
            <div className="challenge-content">
              <img
                className="challenge-image"
                src="https://img.freepik.com/free-vector/abstract-music-soundwave-banner-design_1048-16745.jpg?t=st=1743753426~exp=1743757026~hmac=841986e83877d9eb468e917d71d31cff704e6020647928b313ee258bb13e7661&w=1800"
                alt="Sound wave visualization"
              />
              <div className="challenge-text">
                <p>Recorded music revenue is under pressure—artists seek new ways of earning revenue as the music industry business model has been disrupted.</p>
                <p>Live bookings are the fastest-growing segment of the entertainment industry. With rising ticket prices and increasing attendance, fans seek more meaningful connections to talent through live events and social media.</p>
                <p>However, the live industry is broken—accessing talent is a mystifying, inefficient, and inconsistent process. There is no platform that allows buyers to connect with talent through one platform, submit offers, negotiate, and process payments end-to-end.</p>
                <button type="button" className="learn-more-button">Discover More</button>
              </div>
            </div>
          </section>
          <section>
            <h2>Our Solution</h2>
            <p>Eneza removes the friction of securing talent.</p>
            <p>ENEZA is a global entertainment marketplace that helps venues, brands, and qualified private buyers book talent for live performances, appearances, and paid social posts through one consistent and easy digital platform.</p>
            <p>Since launching in May 2024, thousands of offers representing tens of millions of dollars in performances and appearances have been made and accepted with ENEZA.</p>
          </section>

          <section>
            <h2>Talent Network</h2>
            <div className="talent-categories">
              <span className="talent-tag">Musicians</span>
              <span className="talent-tag">Artists</span>
              <span className="talent-tag">Athletes</span>
              <span className="talent-tag">Models</span>
              <span className="talent-tag">Influencers</span>
              <span className="talent-tag">Celebrities</span>
              <span className="talent-tag">Speakers</span>
              <span className="talent-tag">DJs</span>
            </div>
          </section>

          <section>
            <h2 style={{ paddingTop: '50px' }}>The Platform</h2>
            <div className="product-features">
              <div className="eature-card">
                <h3>For Buyers</h3>
                <p>Quickly submit and negotiate offers and finalize payments with talent in one seamless platform.</p>
              </div>
              <div className="eature-card">
                <h3>For Talent</h3>
                <p>Evaluate, negotiate, and accept offers while managing your availability and brand partnerships effortlessly.</p>
              </div>
              <div className="eature-card">
                <h3>For Everyone</h3>
                <p>More bookings and meaningful connections between talent and buyers than ever before possible.</p>
              </div>
            </div>
            <p>Within the ENEZA Platform, we streamline the booking process for buyers, facilitating more transactions with less friction.</p>
            <p>ENEZA is the first end-to-end platform for talent booking. Buyers submit and negotiate offers, sign contracts, and finalize payments all within one integrated ecosystem.</p>
            <p>We have built a communication and integrated payments platform to remove pain points from the booking process and enhance efficiency on both sides of the deal.</p>
            <button type="button" className="contact-button">Contact Us</button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Eneza;

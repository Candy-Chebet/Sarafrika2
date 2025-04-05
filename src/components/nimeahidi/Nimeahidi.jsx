import React from 'react';
import './nimeahidi.css';
import { Calendar, MapPin, Music } from 'lucide-react';

/* eslint-disable arrow-body-style */

const Nimeahidi = () => {
  return (
    <div className="festival-container">
      {/* Title with animation */}
      <h1 className="festival-title">
        <span className="festival-highlight">Nimeahidi</span> Festival 2025
      </h1>

      {/* Left side content */}
      <div className="left-content">
        <div className="festival-card info-card">
          <p className="info-item">
            <Calendar className="info-icon" />
            <span>Event Date: 16th August 2025</span>
          </p>
          <p className="info-item">
            <MapPin className="info-icon" />
            <span>Location: Uhuru Gardens</span>
          </p>
        </div>

        <button type="button" className="festival-button">
          Get Tickets / Learn More
        </button>
      </div>

      {/* Right side content */}
      <div className="right-content">
        <div className="festival-card description-card">
          <p className="festival-description">
            Join us for an unforgettable experience at <span className="festival-highlight-text">Nimeahidi</span>, where music, art, food, and culture come together in a vibrant celebration!
            Whether you are here for the electrifying performances, immersive art installations, or delicious culinary delights, there is something for everyone.
          </p>
        </div>

        <div className="festival-card feature-card">
          <Music className="feature-icon" />
          <span className="feature-text">A Symphony of 1000 Musicians</span>
        </div>
      </div>
    </div>
  );
};

export default Nimeahidi;

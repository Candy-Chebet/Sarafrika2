import React from 'react';
import './events.css';

/* eslint-disable arrow-body-style */

const Events = () => {
  return (
    <div className="events-container">
      <div className="events-content">
        {/* Hero Section */}
        <div className="events-hero">
          <h1 className="events-title">Seamlessly Plan, Manage, and Sell Tickets for Your Events</h1>
          <h2 className="events-subtitle">The Ultimate Event Ticketing & Management Solution</h2>
          <p className="events-intro">
            Hosting an event? Whether it is a concert, conference, festival, or private gathering,
            our powerful event ticketing and management platform makes it easy to plan, promote,
            and sell tickets—all in one place.
          </p>
        </div>

        {/* Why Choose Section */}
        <section className="events-section">
          <h3 className="section-title">Why Choose Sarafrika Events?</h3>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <div className="feature-content">
                <h4 className="feature-title">Hassle-Free Ticketing</h4>
                <p className="feature-description">Sell tickets online with a user-friendly interface and multiple payment options.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <div className="feature-content">
                <h4 className="feature-title">Effortless Event Management</h4>
                <p className="feature-description">Create, customize, and manage events in minutes.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <div className="feature-content">
                <h4 className="feature-title">Secure & Reliable</h4>
                <p className="feature-description">Ensure smooth entry with QR code ticket scanning and fraud prevention.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <div className="feature-content">
                <h4 className="feature-title">Real-Time Insights</h4>
                <p className="feature-description">Track ticket sales, attendee analytics, and revenue reports instantly.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">05</div>
              <div className="feature-content">
                <h4 className="feature-title">Marketing Made Easy</h4>
                <p className="feature-description">Promote your event with built-in email campaigns, social media integrations, and discount codes.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">06</div>
              <div className="feature-content">
                <h4 className="feature-title">Seamless Check-In Experience</h4>
                <p className="feature-description">Speed up entry with our mobile check-in tools and guest list management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="events-section how-it-works">
          <h3 className="section-title">How It Works</h3>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <h4 className="step-title">Create Your Event</h4>
              <p className="step-description">Set up your event details, ticket types, and pricing in just a few clicks.</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h4 className="step-title">Sell Tickets Online</h4>
              <p className="step-description">Share your event page and start selling tickets instantly.</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h4 className="step-title">Manage Attendees</h4>
              <p className="step-description">Track registrations, send updates, and provide seamless check-in.</p>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h4 className="step-title">Analyze & Improve</h4>
              <p className="step-description">Get detailed insights into ticket sales and attendee behavior.</p>
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="events-section">
          <h3 className="section-title">Perfect for Any Event Type</h3>
          <div className="event-types-grid">
            <div className="event-type-item">
              <div className="event-type-icon">✦</div>
              <div className="event-type-name">Concerts & Festivals</div>
            </div>
            <div className="event-type-item">
              <div className="event-type-icon">✦</div>
              <div className="event-type-name">Conferences & Seminars</div>
            </div>
            <div className="event-type-item">
              <div className="event-type-icon">✦</div>
              <div className="event-type-name">Sports Events</div>
            </div>
            <div className="event-type-item">
              <div className="event-type-icon">✦</div>
              <div className="event-type-name">Corporate Gatherings</div>
            </div>
            <div className="event-type-item">
              <div className="event-type-icon">✦</div>
              <div className="event-type-name">Private Parties</div>
            </div>
            <div className="event-type-item">
              <div className="event-type-icon">✦</div>
              <div className="event-type-name">Charity Fundraisers</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="events-section cta-section">
          <h3 className="section-title">Get Started Today!</h3>
          <p className="cta-text">
            Join thousands of event organizers who trust our platform to deliver unforgettable experiences.
            <span className="cta-highlight"> Sign up now and start selling tickets in minutes!</span>
          </p>
          <button type="button" className="cta-button">Create Your Event</button>
        </section>
      </div>
    </div>
  );
};

export default Events;

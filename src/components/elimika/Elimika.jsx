import React, { useState } from 'react';
import './elimika.css';

const Elimika = () => {
  const [activeTab, setActiveTab] = useState('learners');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="elimika-container" id="elimika">
      {/* <header className="elimika-header">
        <div className="logo">ELIMIKA</div>
        <nav className="main-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#instructors">Instructors</a></li>
            <li><a href="#training-centres">Training Centres</a></li>
            <li><a href="#learners">Learners</a></li>
            <li><button type="button" className="sign-up-btn">Sign Up</button></li>
          </ul>
        </nav>
      </header> */}

      <section className="hero-section">
        <div className="hero-content">
          <h1>Connect, Learn, Succeed!</h1>
          <p>Achieve your academic goals with personalized, one-on-one and group tutoring from top experts in the field and Succeed!</p>
          <div className="cta-buttons">
            <button type="button" className="primary-btn">Start Learning</button>
            <button type="button" className="secondary-btn">Become Instructor</button>
          </div>
        </div>
        <div className="hero-image">
          {/* <img src="/api/placeholder/600/400" alt="Students learning" /> */}
        </div>
      </section>

      <section className="features-tabs">
        <div className="tab-navigation">
          <button
            type="button"
            className={activeTab === 'learners' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => handleTabChange('learners')}
          >
            For Learners
          </button>
          <button
            type="button"
            className={activeTab === 'instructors' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => handleTabChange('instructors')}
          >
            For Instructors
          </button>
          <button
            type="button"
            className={activeTab === 'centres' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => handleTabChange('centres')}
          >
            For Training Centres
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'learners' && (
            <div className="learners-content">
              <div className="atures-grid">
                <div className="ture-card">
                  <div className="ature-icon">🔍</div>
                  <h3>Find Your Perfect Instructor</h3>
                  <p>Easily recruit preferred instructor based on your course needs</p>
                </div>
                <div className="ture-card">
                  <div className="ature-icon">📝</div>
                  <h3>Flexible Scheduling</h3>
                  <p>Create any type of schedule and find instructors</p>
                </div>
                <div className="ture-card">
                  <div className="ature-icon">📊</div>
                  <h3>Track Your Learning</h3>
                  <p>Monitor your progress in real-time</p>
                </div>
                <div className="ture-card">
                  <div className="ature-icon">🏆</div>
                  <h3>Discover Thousands of Courses</h3>
                  <p>Thousands of verified inspiring Music, Sports, Arts and Computer courses to choose from</p>
                </div>
              </div>
              <div className="cta-container">
                <button type="button" className="primary-btn">Start Learning Today</button>
              </div>
            </div>
          )}
          {activeTab === 'instructors' && (
            <div className="instructors-content">
              <div className="atures-grid">
                <div className="ture-card">
                  <div className="ature-icon">💰</div>
                  <h3>Instant Payment</h3>
                  <p>Receive payment to your wallet immediately after class training</p>
                </div>
                <div className="ture-card">
                  <div className="ature-icon">🔍</div>
                  <h3>Find Students</h3>
                  <p>Grow your business by easily finding interested students</p>
                </div>
                <div className="ture-card">
                  <div className="ature-icon">📚</div>
                  <h3>Create & Sell Courses</h3>
                  <p>Make money by creating and selling your own courses at the marketplace</p>
                </div>
                <div className="ture-card">
                  <div className="ature-icon">📊</div>
                  <h3>Assessment Rubrics</h3>
                  <p>Create your own assessment criteria to effectively communicate course expectations</p>
                </div>
              </div>
              <div className="cta-container">
                <button type="button" className="primary-btn">Become an Instructor</button>
              </div>
            </div>
          )}

          {activeTab === 'centres' && (
            <div className="centres-content">
              <div className="atures-grid">
                <div className="ture-card">
                  <div className="ature-icon">⏱️</div>
                  <h3>Save Time</h3>
                  <p>Streamline registration, scheduling, tracking attendance, inventories, reporting and monitoring</p>
                </div>
                <div className="ture-card">
                  <div className="ature-icon">📋</div>
                  <h3>Easy Reporting</h3>
                  <p>Easily create student progress reports, training reports and inventories</p>
                </div>
                <div className="ture-card">
                  <div className="ature-icon">📆</div>
                  <h3>Flexible Scheduling</h3>
                  <p>Create any type of class schedule and share with parents for auto class placement</p>
                </div>
                <div className="ture-card">
                  <div className="ature-icon">🔄</div>
                  <h3>Instructor Management</h3>
                  <p>Easily replace instructors without interfering with student learning</p>
                </div>
              </div>
              <div className="cta-container">
                <button type="button" className="primary-btn">Register Your Centre</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Choose Elimika?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Flexible Payment Plans</h3>
            <p>Choose from various payment options that suit your budget</p>
          </div>
          <div className="benefit-item">
            <h3>Real-time Progress Tracking</h3>
            <p>Monitor learning progress as it happens</p>
          </div>
          <div className="benefit-item">
            <h3>Multiple Class Formats</h3>
            <p>Online, in-person, group and private classes available</p>
          </div>
          <div className="benefit-item">
            <h3>Easy Enrollment</h3>
            <p>Discover and enroll in thousands of inspiring classes</p>
          </div>
        </div>
      </section>

      {/* <footer className="elimika-footer">
        <div className="footer-content">
          <div className="footer-logo">ELIMIKA</div>
          <div className="footer-tagline">Connect, Learn, Succeed!</div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <div className="footer-copyright">© 2025 Elimika. All rights reserved.</div>
        </div>
      </footer> */}
    </div>
  );
};

export default Elimika;

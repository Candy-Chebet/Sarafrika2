import React from 'react';
import './bff.css';

const BFF = () => (
  <div className="bff-container">
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Bound For Fame</h1>
        <p className="hero-subtitle">It is Your Time!</p>
        <div className="hero-buttons">
          <button type="button" className="btn btn-primary">Apply Now</button>
          <button type="button" className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Placeholder for hero image */}
      </div>
    </section>

    {/* Navigation bar - Added for better UX */}
    <nav className="main-nav">
      <div className="container">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#why-join">Why Join</a></li>
          <li><a href="#auditions">Auditions</a></li>
          <li><a href="#prizes">Prizes</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    {/* About the Show Section */}
    <section className="about-show" id="bff">
      <div className="container">
        <h2 className="section-title">About the Show</h2>
        <p className="show-description">
          Step into the drama, excitement, and raw emotions of Bound For Fame, the ultimate reality TV experience that keeps you on the edge of your seat! Watch as contestants face unexpected twists, jaw-dropping eliminations, fierce school&apos;s bands, choirs, and dancers challenges, and personal transformations in their quest to launch young talent Business into the market.
        </p>

        <div className="features-grid">
          <div className="ature-card">
            <div className="feature-icon">🎭</div>
            <h3>Meet the Contestants</h3>
            <p>Bold personalities, fierce competitors, and larger-than-life stories. Who will rise to the top?</p>
          </div>

          <div className="ature-card">
            <div className="feature-icon">🔥</div>
            <h3>Drama & Challenges</h3>
            <p>High stakes, intense rivalries, and unpredictable turns. Every episode is packed with surprises!</p>
          </div>

          <div className="ature-card">
            <div className="feature-icon">🏆</div>
            <h3>Only One Winner</h3>
            <p>Alliances will form, friendships will be tested, shocking elimination, new artists released and only the strongest will make it to the end.</p>
          </div>
        </div>

        <div className="premiere-info">
          <h3>Premiere Date: <span className="highlight">1st November 2025</span></h3>
          <div className="action-links">
            <a href="#watch" className="action-link">Watch Now</a> |
            <a href="#stream" className="action-link">Stream Anytime</a> |
            <a href="#vote" className="action-link">Vote for Your Favorite</a> |
            <a href="#auditions" className="action-link">Auditions</a>
          </div>
        </div>
      </div>
    </section>

    {/* Why Join & Prizes Combined Section - Logically grouped incentives */}
    <section className="participation-section">
      <div className="container">
        {/* Why Join subsection */}
        <div className="why-join" id="why-join">
          <h2 className="section-title">Why Join?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Massive Exposure</h3>
              <p>Gain nationwide recognition and a chance to build your fanbase.</p>
            </div>

            <div className="benefit-card">
              <h3>Exciting Challenges</h3>
              <p>Compete in unique and adrenaline-pumping tasks.</p>
            </div>

            <div className="benefit-card">
              <h3>Life-Changing Prize</h3>
              <p>Win cash prizes, recording opportunities, and the title of Bound For Fame.</p>
            </div>

            <div className="benefit-card">
              <h3>Unforgettable Experience</h3>
              <p>Meet like-minded individuals and create lifelong memories.</p>
            </div>
          </div>
        </div>

        {/* Prizes subsection */}
        <div className="prizes" id="prizes">
          <h2 className="section-title">Awards & Prizes</h2>

          <div className="prizes-container">
            <div className="prize-category">
              <h3>Bands</h3>

              <div className="prize-item first-prize">
                <h4>1st Prize</h4>
                <ul>
                  <li>Cash prize of Kshs 1,000,000</li>
                  <li>A video production for their selected performances</li>
                </ul>
              </div>

              <div className="prize-item">
                <h4>Runners Up</h4>
                <ul>
                  <li>A cash Prize of Kshs 500,000</li>
                  <li>A video Production of selected Performance</li>
                </ul>
              </div>

              <div className="prize-item">
                <h4>2nd Runners up</h4>
                <ul>
                  <li>A cash Price of Kshs 250,000</li>
                  <li>A video Production of this favourite performance</li>
                </ul>
              </div>
            </div>

            <div className="prize-category">
              <h3>Instructors</h3>

              <div className="prize-item">
                <h4>1st Prize</h4>
                <p>Kshs 500,000</p>
              </div>

              <div className="prize-item">
                <h4>Runners Up</h4>
                <p>Kshs 250,000</p>
              </div>

              <div className="prize-item">
                <h4>2nd Runners up</h4>
                <p>Kshs 100,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How to Audition Section - Prominent call to action */}
    <section className="how-to-audition" id="auditions">
      <div className="container">
        <h2 className="section-title">How to Audition</h2>
        <p className="audition-intro">Think you have what it takes? Follow these simple steps to apply:</p>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Fill Out the Application</h3>
            <p>Click the &apos;Apply Now&apos; button and complete the online form with your details, talent, and motivation for joining.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Submit an Audition Video</h3>
            <p>Upload a short video showcasing your skills, personality, and why you deserve a spot in the competition.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Attend a Casting Call</h3>
            <p>If selected, you&apos;ll be invited to an exclusive audition round where you&apos;ll compete for a chance to be on the show.</p>
          </div>
        </div>

        <div className="eligibility">
          <h3>Eligibility Requirements</h3>
          <ul className="eligibility-list">
            <li>All band/choir/dance/solo contestants must be 5 years or older.</li>
            <li>All contestants must be legal residents of Kenya.</li>
            <li>Must be representing an institution / school.</li>
            <li>Must be available for filming during the specified dates.</li>
            <li>Must comply with all rules and conditions of the show.</li>
          </ul>
        </div>

        <div className="deadline-info">
          <h3>Deadline to Apply: <span className="highlight">1st October 2025</span></h3>
          <p className="deadline-cta">Don&apos;t Miss Your Chance! This is your moment to rise to fame and prove you have what it takes to be the next big star.</p>
          <button type="button" className="apply-btn">Apply Now</button>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="faq-accordion">
          {/* Converted grid to accordion for better UX */}
          <div className="faq-item">
            <h3 className="faq-question">Who is eligible to participate?</h3>
            <div className="faq-answer">
              <p>The contestants can be either Pop Band, dance marching Band, Choir, and Solo Artists or combination of all. The competition is open to all schools.</p>
            </div>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Will the show provide food and accommodation?</h3>
            <div className="faq-answer">
              <p>Food and Costumes will be provided from stage 2.</p>
            </div>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">How many participants are allowed in a band?</h3>
            <div className="faq-answer">
              <p>A band can have a maximum of 25 members.</p>
            </div>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">How many items are allowed per school?</h3>
            <div className="faq-answer">
              <p>Each school is allowed to present one item.</p>
            </div>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Can a school present own choice or composition?</h3>
            <div className="faq-answer">
              <p>Yes.</p>
            </div>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Who will provide Transport?</h3>
            <div className="faq-answer">
              <p>Transport and accommodation will only be provided to the last 12 participants.</p>
            </div>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">What&apos;s the criteria of determining the winner?</h3>
            <div className="faq-answer">
              <p>Each week a band will be eliminated from stage 3. The show Viewers at home will vote for their favourite contestant. The Band with the lowest votes will exit competition. Bands will perform infront of a panel of Judges made up of industrial musicians and live audience.</p>
            </div>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Is there a participation fee?</h3>
            <div className="faq-answer">
              <p>Yes. Kshs 15,000.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p>For any inquiries, contact us at <a href="mailto:boundforfame@sarafrika.com">boundforfame@sarafrika.com</a> or follow us on social media for updates and behind-the-scenes sneak peeks!</p>

        <div className="social-links">
          <a href="https://facebook.com" className="social-link">Facebook</a>
          <a href="https://instagram.com" className="social-link">Instagram</a>
          <a href="https://twitter.com" className="social-link">Twitter</a>
          <a href="https://youtube.com" className="social-link">YouTube</a>
        </div>
      </div>
    </section>

    {/* Footer - Added for completeness */}
  </div>
);

export default BFF;

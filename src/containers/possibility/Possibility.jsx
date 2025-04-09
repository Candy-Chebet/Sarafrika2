import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Purpose</h1>
      <p>Offer a structure, network, community, environment and district for the stimulation, growth, promotion and creative use of a music, sports,  aesthetic, sensibility and culture that draws from the vast, rich and diverse Eastern African realities and experiences for purposes of personal, community, national and regional transformation.  </p>
      <h1 className="gradient__text">Our Mission</h1>
      <p>Sarafrika provides affordable education, music, sports, and technology services in Eastern Africa. EAM&MH trains youth, marginalized groups, and special needs individuals, fosters music education, and promotes regional fusions. It builds global partnerships, organizes events, develops media programs, and advocates for funding. Sarafrika also supports social development through music, sports, and technology.</p>
      <a href="/products"><h4>Join Today</h4></a>
    </div>
  </div>
);

export default Possibility;

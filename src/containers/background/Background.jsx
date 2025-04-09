import React from 'react';
import Feature from '../../components/feature/Feature';
import './background.css';

const Background = () => (
  <div className="gpt3__Background section__margin" id="background">
    <div className="gpt3__Background-feature">
      <Feature title="Background" text="Sarafrika also known as Eastern Africa Music, sports, Technology & Media Hub (EAM&MH) was established in 2010 in Nairobi Kenya as a talent training schools with programs in schools, and a team-based learning approach that cuts across all age groups from school going children to adults of all ages. " />
    </div>
    <div className="gpt3__Background-heading">
      <h1 className="gradient__text">A platform that offers structure, network, and community.</h1>
      <p>Explore Our Products</p>
    </div>
    <div className="gpt3__Background-container">
      <Feature title="Curation" text="After an extensive landscape scoping and gap mapping, the Hub developed a robust program that not only identifies and refines talents but also involves linkage to industry, and from industry to market in East Africa." />
      <Feature title="Aim" text="Sarafrika’s vision is to create a huge platform and network for stimulation, growth, and promotion of talent to better the livelihood and income of East Africans especially those in low resource settings." />
      <Feature title="Growth" text="Since inception, the Hub has horned and natured, through experiential and project-based learning, several budding artists, musicians, Sportsmen and Women, Administrators and IT expert." />
    </div>
  </div>
);

export default Background;

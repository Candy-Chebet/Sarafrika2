import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Training',
    text: 'Training, Continuing Education',
  },
  {
    title: 'Partnership',
    text: 'Partnerships and Network development ',
  },
  {
    title: 'Advocacy',
    text: 'Enhanced Public value of sports, music and the arts',
  },
  {
    title: 'Opportunity',
    text: 'Entrepreneurship and creative economy development',
  },
  {
    title: 'Repository',
    text: 'Cultural music knowledge repository and usage',
  },
  {
    title: 'Sustainabiity',
    text: 'Sustainable and restorative social development with and through Sports and arts (Peace, Environment, Health, Cultural Confidence and Economic)',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Our Commitment</h1>
      <p>A Future for Art, Culture and Sports that draws from the vast, rich and diverse Eastern African realities and experiences.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

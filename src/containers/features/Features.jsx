import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Training',
    text: '- Providing access to high quality music knowledge and experiences to a wide regional demographic with a special attention to youth, children and those with special needs.',
  },
  {
    title: 'Partnership',
    text: 'Sharing music industry information, resources and research, and nurture connections with local and regional arts organisations and enterprises.',
  },
  {
    title: 'Advocacy',
    text: 'We Work with the regional media to develop and produce music programming formats.',
  },
  {
    title: 'Opportunity',
    text: 'Providing music and sports  practitioners with training in communication, business administration, finance and technical skills.',
  },
  {
    title: 'Repository',
    text: 'In conjunction with selected institutions, we work to develop a repository of regional music, sports, culture, practice, norms, record of instruments for public record and access purposes.',
  },
  {
    title: 'Sustainabiity',
    text: 'Support distinct community initiatives seeking to develop micro-economies through the arts.',
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

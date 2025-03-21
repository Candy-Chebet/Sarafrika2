import React from 'react';
import people from '../../assets/people.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Sarafrika</h1>
      <p>Providing access to high</p>
      <p>quality Artistic knowledge, opportunities,</p>
      <p>and experiences.</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="gpt3__header-content__people">
        <img src={people} alt="People" />
        <p>1,600 visited in the last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img
        src="https://img.freepik.com/free-vector/leader-concept-illustration_114360-23671.jpg?t=st=1742350414~exp=1742354014~hmac=e8620f716d871d14040ff77d935fd4a9c9f1334942e5ce1a83f0359cafbddf52&w=1380"
        alt="Leader Illustration"
        style={{ borderRadius: '390px' }}
      />
    </div>
  </div>
);

export default Header;

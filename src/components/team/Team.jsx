import React, { useState } from 'react';
import './Team.css';
import willie from '../../assets/willie.jpg';
import John from '../../assets/John.jpg';
import Raphael from '../../assets/Raphael.JPG';
import Raph from '../../assets/Raph.PNG';
import Viola from '../../assets/Viola.PNG';
import winnie from '../../assets/winnie.jpg';

const Team = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="services">
        <div className="service" onClick={() => setShowModal1(true)}>
          <img
            src={Raphael}
            alt="Mr. Raphael Njuguna"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top', /* Adjust this to control which part of the image to focus on */
              // width: '250px',
              // height: '250px',
            }}
          />
          <h3>Mr. Raphael Njuguna</h3>
          <h4>Managing & Founding Director</h4>
        </div>
        <div className="service" onClick={() => setShowModal2(true)}>
          <img src={Raph} alt="John" />
          <h3>Raphael Mahulo</h3>
          <h4>Operations manager</h4>
        </div>
        <div className="service" onClick={() => setShowModal5(true)}>
          <img src={Viola} alt="Viola" />
          <h3>Viola Karuri</h3>
          <h4>Operations manager</h4>
        </div>

        <div className="service" onClick={() => setShowModal3(true)}>
          <img
            src={John}
            alt="John"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top', /* Adjust this to control which part of the image to focus on */
              // width: '250px',
              // height: '450px',
            }}
          />
          <h3>John Waithaka</h3>
          <h4>Operations manager</h4>
        </div>
        <div className="service" onClick={() => setShowModal4(true)}>
          <img
            src={willie}
            alt="Willie"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top', /* Adjust this to control which part of the image to focus on */
              // width: '450px',
              // height: '450px',
            }}
          />
          <h3>Wilfred Njuguna</h3>
          <h4>Software Engineer</h4>
        </div>
        <div className="service" onClick={() => setShowModal6(true)}>
          <img
            src={winnie}
            alt="Winnie"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top', /* Adjust this to control which part of the image to focus on */
              // width: '450px',
              // height: '450px',
            }}
          />
          <h3>Winnie Mandela</h3>
          <h4>Software Engineer</h4>
        </div>
      </div>

      {showModal1 && (
        <div className="modal-overlay" onClick={() => setShowModal1(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={Raphael} alt="Raphael Njuguna" />
            <h3>Raphael Njuguna</h3>
            <h4>Managing & Founding Director</h4>
            <p />
            <button className="close-button" type="button" onClick={() => setShowModal1(false)}>×</button>
          </div>
        </div>
      )}

      {showModal2 && (
        <div className="modal-overlay" onClick={() => setShowModal2(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={Raph} alt="Mr. Raphael Njuguna" />
            <h3>Raphael Mahulo</h3>
            <h4>Director</h4>
            <p />
            <button className="close-button" type="button" onClick={() => setShowModal2(false)}>×</button>
          </div>
        </div>
      )}

      {showModal3 && (
        <div className="modal-overlay" onClick={() => setShowModal3(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={John}
              alt="John"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top', /* Adjust this to control which part of the image to focus on */
                width: '30%',
                height: '30%',
              }}
            />
            <h3>John Waithaka</h3>
            <h4>Teacher</h4>
            <p>Graduate  in B.com logistics, accomplished pianist with over 10 years experience in training.
              Currently  working  as Elimika manager. I am hard working, a team player, aggressive,
              perfection and someone who ensures whatever is planned  is effectively implemented ..
            </p>
            <button className="close-button" type="button" onClick={() => setShowModal3(false)}>×</button>
          </div>
        </div>
      )}

      {showModal4 && (
        <div className="modal-overlay" onClick={() => setShowModal4(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={willie}
              alt="Wilfred"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top', /* Adjust this to control which part of the image to focus on */
                width: '30%',
                height: '30%',
              }}
            />
            <h3>Wilfred Njuguna</h3>
            <h4>Software Engineer</h4>
            <p>
              Wilfred Njuguna is an accomplished software engineer with extensive experience in
              system development and infrastructure operations.He has played a pivotal role in building and optimizing mission-critical systems,
              demonstrating a unique ability to align technology with business goals. His leadership
              in technical strategy, systems design, and team collaboration has contributed significantly
              to organizational growth and operational excellence.
            </p>
            <button className="close-button" type="button" onClick={() => setShowModal4(false)}>×</button>
          </div>
        </div>
      )}

      {showModal5 && (
        <div className="modal-overlay" onClick={() => setShowModal5(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={Viola} alt="Viola" />
            <h3>Viola Karuri</h3>
            <h4>Director</h4>
            <p>
              HUGUY
            </p>
            <button className="close-button" type="button" onClick={() => setShowModal5(false)}>×</button>
          </div>
        </div>
      )}

      {showModal6 && (
        <div className="modal-overlay" onClick={() => setShowModal6(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={winnie} alt="Viola" />
            <h3>Winnie Mandela</h3>
            <h4>Software Engineer</h4>
            <p>
              Mandela is a software engineer with design sprinkles always finding the connection between software and design.
              With experience from system design and  architecture  , Mandela  enables development of solutions  in Angular and Next js.
              In addition to this ,  she  is  good in  automation testing  and product design ( Figma )
            </p>
            <button className="close-button" type="button" onClick={() => setShowModal6(false)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;

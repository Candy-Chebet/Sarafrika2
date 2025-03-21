import React, { useState } from 'react';
import './Team.css';

const Team = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="services">
        <div className="service" onClick={() => setShowModal1(true)}>
          <img src="https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg?t=st=1742585002~exp=1742588602~hmac=e7aa36c9f921607e85afd6b556fef4b7347aa5058bbd3248333ac8a58b251882&w=1380" alt="Winnie Joyce" />
          <h3>Winnie Joyce</h3>
          <h4>Artist</h4>
        </div>
        <div className="service" onClick={() => setShowModal2(true)}>
          <img src="https://img.freepik.com/free-photo/smiling-elegant-businessman_23-2147626595.jpg?t=st=1742584783~exp=1742588383~hmac=8d9ef1eeefd6c9b5c6bb8be145fd45ccaada789140fe168ccfd1b67228188ea2&w=1380" alt="Mr. Raphael Njuguna" />
          <h3>Mr. Raphael Njuguna</h3>
          <h4>C.E.O Sarafrika</h4>
        </div>
        <div className="service" onClick={() => setShowModal3(true)}>
          <img src="https://img.freepik.com/free-photo/happy-successful-business-leader_74855-2306.jpg?t=st=1742585178~exp=1742588778~hmac=a61cde58cb13402bfc0c5953f6849c9e0886d55ece1e2d460291c7993d7688bc&w=1380" alt="Yuna Lama" />
          <h3>Yuna Lama</h3>
          <h4>Teacher</h4>
        </div>
      </div>

      {showModal1 && (
        <div className="modal-overlay" onClick={() => setShowModal1(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg?t=st=1742585002~exp=1742588602~hmac=e7aa36c9f921607e85afd6b556fef4b7347aa5058bbd3248333ac8a58b251882&w=1380" alt="Winnie Joyce" />
            <h3>Winnie Joyce</h3>
            <h4>Artist</h4>
            <p>
              Winnie Joyce joins Medic’s People Ops Team as Senior People Operations Generalist,
              bringing on board over 20 years of professional experience and expertise in operations,
              human resource management, and administration.
            </p>
            <button className="close-button" type="button" onClick={() => setShowModal1(false)}>×</button>
          </div>
        </div>
      )}

      {showModal2 && (
        <div className="modal-overlay" onClick={() => setShowModal2(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="https://img.freepik.com/free-photo/smiling-elegant-businessman_23-2147626595.jpg?t=st=1742584783~exp=1742588383~hmac=8d9ef1eeefd6c9b5c6bb8be145fd45ccaada789140fe168ccfd1b67228188ea2&w=1380" alt="Mr. Raphael Njuguna" />
            <h3>Mr. Raphael Njuguna</h3>
            <h4>C.E.O Sarafrika</h4>
            <p>
              Dykki Settle joined Medic in 2024 and currently serves as Interim CEO, based remotely in Seattle, USA.
              Dykki brings more than 30 years of experience in leadership and development of digital technology, data systems,
              and their environments in more than 20 countries and global organizations.
            </p>
            <button className="close-button" type="button" onClick={() => setShowModal2(false)}>×</button>
          </div>
        </div>
      )}

      {showModal3 && (
        <div className="modal-overlay" onClick={() => setShowModal3(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="https://img.freepik.com/free-photo/happy-successful-business-leader_74855-2306.jpg?t=st=1742585178~exp=1742588778~hmac=a61cde58cb13402bfc0c5953f6849c9e0886d55ece1e2d460291c7993d7688bc&w=1380" alt="Yuna Lama" />
            <h3>Yuna Lama</h3>
            <h4>Teacher</h4>
            <p>
              Yuna holds a Master’s Degree in Operations Management and has spent more than ten years honing her skills in
              administration, procurement, and Human Resource systems and processes.
            </p>
            <button className="close-button" type="button" onClick={() => setShowModal3(false)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;

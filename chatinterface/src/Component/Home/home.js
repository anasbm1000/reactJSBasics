import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Home = ({ setContact }) => {
  const event = (name) => {
    setContact(name);
  };

  return (
    <div className="home">
      <h2>Contact List</h2>
      <div className="contact-list">
        <Link to="/background" className="contact-item" onClick={() => event('Riss Technologies')}>
          Riss Technologies
        </Link>
        <Link to="/background" className="contact-item" onClick={() => event('Anas bin Malik')}>
          Anas bin Malik
        </Link>
        <Link to="/background" className="contact-item" onClick={() => event('Amal')}>
          Amal
        </Link>
      </div>
    </div>
  );
};

export default Home;

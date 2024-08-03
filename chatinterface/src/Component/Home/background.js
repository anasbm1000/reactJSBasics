import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer';

const Background = ({ contactName }) => {
  return (
    <div>
      <div className="nav">
        <div className="fHeading">
          <Link to="/">
            <img src="./left.png" height={20} alt="Back" />
          </Link>
          <img src="./dp.png" height={25} alt="Profile" />
          <h4 id="welcometag">{contactName}</h4>
        </div>
        <div className="links">
          <Link to="/">
            <img src="./videocall.png" height={20} alt="Video Call" />
          </Link>
          <Link to="/">
            <img src="./voicecall.png" height={20} alt="Voice Call" />
          </Link>
          <Link to="/">
            <img src="./search.png" height={20} alt="Search" />
          </Link>
        </div>
      </div>
      <div className="background-div"></div>
      <Footer />
    </div>
  );
};

export default Background;

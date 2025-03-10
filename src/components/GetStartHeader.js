import React from 'react';
import './GetStartHeader.css';
import Logo from '../assets/Logo.png'
import Signup from '../pages/Signup';

const GetStartHeader = () => {
  return (
    <header className="simplified-header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <img src={Logo} alt="Skilloop Logo" className="logo-image" />
          </div>
          <div className="cta-container">
            <a href="/Signup" className="get-started-btn">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GetStartHeader;
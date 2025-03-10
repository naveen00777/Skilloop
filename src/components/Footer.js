import React from 'react';
import './Footer.css';
import Youtube from '../assets/youtube.png'
import Facebook from '../assets/Facebook.png'
import Linkedin from '../assets/Linkedin.png'
import Instagram from '../assets/Instagram.png'
import Logo from '../assets/Logo.png'


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {/* Logo and brand section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="brand-container">
              <img src={Logo} alt="SKILLOOP Logo" className="footer-logo" />
              <div className="logo-text">SKILLOOP</div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0 footer-nav">
            <a href="/Home">Home</a>
            <a href="/Exploreskills">Explore Skills</a>
            <a href="/Myskills">My Skills</a>
            <a href="/Workshop">Work Shop</a>
            <a href="/Community">Community</a>
            <a href="/Message">Message</a>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0 footer-nav">
            <a href="/">Home</a>
            <a href="/explore-skills">Explore Skills</a>
            <a href="/my-skills">My Skills</a>
            <a href="/workshop">Work Shop</a>
            <a href="/community">Community</a>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0 footer-nav">
            <a href="/">Home</a>
            <a href="/explore-skills">Explore Skills</a>
            <a href="/my-skills">My Skills</a>
            <a href="/workshop">Work Shop</a>
            <a href="/community">Community</a>
          </div>

          {/* Join us section */}
         <div className="col-lg-3 col-md-6 mb-4 mb-md-0 join-us">
           <h4>Join us</h4>
           <div className="social-icons">
             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
               <img src={Youtube} alt="YouTube" className="social-icon-img" />
             </a>
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
               <img src={Facebook} alt="Facebook" className="social-icon-img" />
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
               <img src={Linkedin} alt="LinkedIn" className="social-icon-img" />
             </a>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
               <img src={Instagram} alt="Instagram" className="social-icon-img" />
             </a>
           </div>
         </div>
         </div>
         </div>


      <div className="container">
        <div className="footer-divider"></div>
        <div className="copyright">
          © All rights reserved 2025 | SKILLOOP
        </div>
      </div>
    </div>
  );
};

export default Footer;
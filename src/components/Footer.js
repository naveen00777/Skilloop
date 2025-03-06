import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {/* Logo and brand section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="brand-container">
              <img src="/logo.png" alt="SKILLOOP Logo" className="footer-logo" />
              <div className="logo-text">SKILLOOP</div>
            </div>
          </div>

          {/* Navigation columns */}
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
               <img src="/youtube-icon.png" alt="YouTube" className="social-icon-img" />
             </a>
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
               <img src="/facebook-icon.png" alt="Facebook" className="social-icon-img" />
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
               <img src="/linkedin-icon.png" alt="LinkedIn" className="social-icon-img" />
             </a>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
               <img src="/instagram-icon.png" alt="Instagram" className="social-icon-img" />
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
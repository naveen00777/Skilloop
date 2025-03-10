import React, { useState, useRef, useEffect } from 'react';
import './Headerall.css';
import Logo from '../assets/Logo.png';
import Profile from '../assets/Profile.png';
import Home from '../pages/Home';
import Myskills from '../pages/Myskills';
import Exploreskills from '../pages/Exploreskills';
import Workshop from '../pages/Workshop';
import Community from '../pages/Community';
import Message from '../pages/Message';
import Getstarted from '../pages/Getstarted';

const Headerall = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef(null);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const navigateTo = (page) => {
    // You can customize this function to handle navigation
    console.log('Navigating to ' + page);
    alert('Navigating to: ' + page);
    // Actual navigation would be:
    // window.location.href = '/' + page;
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

 const handleProfileOption = (option) => {
   if (option === 'Profile') {
     window.location.href = '/Profile'; // Redirect to the Settings page
   }
   if (option === 'Settings') {
     window.location.href = '/Settings'; // Redirect to the Settings page
   }
   if (option === 'Logout') {
     window.location.href = '/Getstarted'; // Redirect to the Settings page
   }
   // e.preventDefault(); // Uncomment if you want to stop default navigation
 };


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Skilloop Logo" />
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Buttons */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <div className="navbar-nav mx-auto">
            <ul className="nav-list">
              <li><a href="/Home" className="nav-btn">Home</a></li>
              <li><a href="/Exploreskills" className="nav-btn">Explore Skills</a></li>
              <li><a href="/Myskills" className="nav-btn">My Skills</a></li>
              <li><a href="/Workshop" className="nav-btn">Workshop</a></li>
              <li><a href="/Community" className="nav-btn">Community</a></li>
              <li><a href="/Message" className="nav-btn">Message</a></li>
            </ul>
          </div>

          {/* Profile Button with Dropdown */}
          <div className="profile-container" ref={profileMenuRef}>
            <button className="profile-icon" onClick={toggleProfileMenu}>
              <img src={Profile} alt="Profile" />
            </button>

            {showProfileMenu && (
              <div className="profile-dropdown">
                <ul>
                   <li onClick={() => handleProfileOption('Profile')}>View Profile</li>
                  <li onClick={() => handleProfileOption('Settings')}>Settings</li>
                  <li onClick={() => handleProfileOption('Logout')}>Log Out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Headerall;
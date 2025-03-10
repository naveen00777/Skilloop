import React, { useState } from 'react';
import './Settings.css';
import Logo from '../assets/Logo.png';
import Profile from '../assets/Profile.png';
import Getstarted from '../pages/Getstarted'
import Home from '../pages/Home'

const Settings = () => {
  // State for active sidebar and settings tab
  const [activeSidebarItem, setActiveSidebarItem] = useState('settings-link');
  const [activeSettingsTab, setActiveSettingsTab] = useState('account');

  // State for profile image
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/120');

  // Handle sidebar navigation
  const handleSidebarClick = (linkId, e) => {
    e.preventDefault();
    setActiveSidebarItem(linkId);

    // Handle sign out
  if (linkId === 'signout-link') {
    if (window.confirm('Are you sure you want to sign out?')) {
      alert('You have been signed out successfully.');
      window.location.href = '/getstarted'; // Redirect to Get Started page
    }
  }

  if (linkId === 'dashboard-link') {
      window.location.href = '/Home'; // Redirect to the Home page
    }

  if (linkId === 'profiles-link') {
          window.location.href = '/Profile'; // Redirect to the Home page
   }
  if (linkId === 'lessons-link') {
          window.location.href = '/Myskills'; // Redirect to the Home page
   }
  if (linkId === 'studyguides-link') {
         window.location.href = '/Exploreskills'; // Redirect to the Home page
  }
  };

  // Handle settings menu navigation
  const handleSettingsTabClick = (tabId) => {
    setActiveSettingsTab(tabId);
  };

  // Handle profile image edit
  const handleEditPhoto = () => {
    document.getElementById('photo-upload').click();
  };

  // Handle profile image file change
  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Handle profile image removal
  const handleRemovePhoto = () => {
    if (window.confirm('Are you sure you want to remove your profile photo?')) {
      setProfileImage('https://via.placeholder.com/120');
    }
  };

  // Handle account settings save
  const handleSaveSettings = (e) => {
    e.preventDefault();
    alert('Account settings saved successfully!');
  };

  // Handle password reset
  const handleResetPassword = (e) => {
    e.preventDefault();
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const retypePassword = document.getElementById('retypePassword').value;

    if (!currentPassword) {
      alert('Please enter your current password.');
    } else if (!newPassword) {
      alert('Please enter a new password.');
    } else if (newPassword !== retypePassword) {
      alert('Passwords do not match!');
    } else if (newPassword.length < 6) {
      alert('Password must be at least 6 characters long!');
    } else {
      alert('Password reset successfully!');
      document.getElementById('currentPassword').value = '';
      document.getElementById('newPassword').value = '';
      document.getElementById('retypePassword').value = '';
    }
  };

  // Handle notification preferences save
  const handleSaveNotifications = (e) => {
    e.preventDefault();
    alert('Notification preferences saved successfully!');
  };

  // Handle 2FA setup
  const handleSetup2FA = (e) => {
    e.preventDefault();
    if (document.getElementById('twoFactorAuth').checked) {
      alert('Please follow the instructions sent to your email to complete two-factor authentication setup.');
    } else {
      alert('Please enable two-factor authentication first.');
    }
  };

  // Handle logout from all devices
  const handleLogoutAll = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to log out from all devices?')) {
      alert('You have been logged out from all devices successfully.');
    }
  };

  // Toggle notifications dropdown
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = (e) => {
    e.stopPropagation();
    setShowNotifications(!showNotifications);
  };

  // Close notifications on outside click
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.notification-icon')) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value.trim();
    setSearchQuery(query);

    if (query.length > 0) {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  // Sample search results
  const searchResults = [
    { title: 'Python Basics', type: 'Skill' },
    { title: 'JavaScript Advanced', type: 'Skill' },
    { title: 'Data Structures and Algorithms', type: 'Skill' },
    { title: 'Emeka Bonnma', type: 'User' },
  ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid p-0 d-flex">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="logo mb-4">
            <img src={Logo} alt="Skilloop" height="32" />
          </div>

          <a href="#"
             className={`sidebar-item mb-2 ${activeSidebarItem === 'dashboard-link' ? 'active' : ''}`}
             onClick={(e) => handleSidebarClick('dashboard-link', e)}>
            <i className="bi bi-grid"></i> Home
          </a>

          <a href="#"
             className={`sidebar-item mb-2 ${activeSidebarItem === 'profiles-link' ? 'active' : ''}`}
             onClick={(e) => handleSidebarClick('profiles-link', e)}>
            <i className="bi bi-person"></i> Profile
          </a>

          <a href="#"
             className={`sidebar-item mb-2 ${activeSidebarItem === 'lessons-link' ? 'active' : ''}`}
             onClick={(e) => handleSidebarClick('lessons-link', e)}>
            <i className="bi bi-journal-text"></i> My skills
          </a>

          <a href="#"
             className={`sidebar-item mb-2 ${activeSidebarItem === 'studyguides-link' ? 'active' : ''}`}
             onClick={(e) => handleSidebarClick('studyguides-link', e)}>
            <i className="bi bi-book"></i> Explore Skills
          </a>

          <div className="mt-5">
            <a href="#"
               className={`sidebar-item mb-2 ${activeSidebarItem === 'settings-link' ? 'active' : ''}`}
               onClick={(e) => handleSidebarClick('settings-link', e)}>
              <i className="bi bi-sliders"></i> Settings
            </a>

            <a href="#"
               className={`sidebar-item mb-2 ${activeSidebarItem === 'signout-link' ? 'active' : ''}`}
               onClick={(e) => handleSidebarClick('signout-link', e)}>
              <i className="bi bi-box-arrow-right"></i> Sign Out
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content flex-grow-1">
            <div className="container-fluid">
            {/* Top navigation */}
            <div className="row py-3 border-bottom">
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text bg-transparent border-0">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 search-bar"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  {showSearchResults && (
                    <div className="position-absolute bg-white shadow rounded w-100" style={{top: '40px', zIndex: 1000}}>
                      {searchResults.length > 0 ? (
                        searchResults.map((result, index) => (
                          <div key={index} className="p-2 border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>{result.title}</span>
                              <small className="text-muted">{result.type}</small>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-2 text-muted">No results found.</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 text-end">
                <div className="d-flex align-items-center justify-content-end">
                  {/* Notification icon with dropdown */}
                  <div className="notification-icon me-4">
                    <i className="bi bi-bell fs-5" onClick={toggleNotifications}></i>
                    <span className="notification-badge">3</span>

                    {/* Notification dropdown menu */}
                    <div className={`notification-dropdown ${showNotifications ? 'show' : ''}`}>
                      <div className="p-2 border-bottom">
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="mb-0">Notifications</h6>
                          <span className="badge bg-primary rounded-pill">3 New</span>
                        </div>
                      </div>

                      <div className="notification-item">
                        <div className="notification-content">
                          <div className="notification-icon-box">
                            <i className="bi bi-star"></i>
                          </div>
                          <div className="notification-text">
                            <p className="mb-1">You've completed the Python Basics skill!</p>
                            <div className="notification-time">5 minutes ago</div>
                          </div>
                        </div>
                      </div>

                      <div className="notification-item">
                        <div className="notification-content">
                          <div className="notification-icon-box">
                            <i className="bi bi-chat-dots"></i>
                          </div>
                          <div className="notification-text">
                            <p className="mb-1">Alex commented on your project submission</p>
                            <div className="notification-time">2 hours ago</div>
                          </div>
                        </div>
                      </div>

                      <div className="notification-item">
                        <div className="notification-content">
                          <div className="notification-icon-box">
                            <i className="bi bi-award"></i>
                          </div>
                          <div className="notification-text">
                            <p className="mb-1">You've earned the Quick Learner badge!</p>
                            <div className="notification-time">Yesterday</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-2 text-center border-top">
                        <a href="#" className="text-decoration-none">View all notifications</a>
                      </div>
                    </div>
                  </div>

                  {/* User name and profile image */}
                  <div className="header-profile">
                    <span className="me-2">Prabhas</span>
                    <img src={Profile} alt="Profile" className="header-profile-image" />
                  </div>
                </div>
              </div>
            </div>

            {/* Settings content */}
            <div className="row mt-4">
              <div className="col-12">
                <h4 className="mb-4">Settings</h4>
              </div>
            </div>

            <div className="row">
              {/* Settings menu */}
              <div className="col-md-3 settings-menu">
                <a
                  className={`settings-link ${activeSettingsTab === 'account' ? 'active' : ''}`}
                  onClick={() => handleSettingsTabClick('account')}>
                  Account
                </a>
                <a
                  className={`settings-link ${activeSettingsTab === 'email' ? 'active' : ''}`}
                  onClick={() => handleSettingsTabClick('email')}>
                  Email & Notification
                </a>
                <a
                  className={`settings-link ${activeSettingsTab === 'verification' ? 'active' : ''}`}
                  onClick={() => handleSettingsTabClick('verification')}>
                  Verification
                </a>
                <a
                  className={`settings-link ${activeSettingsTab === 'security' ? 'active' : ''}`}
                  onClick={() => handleSettingsTabClick('security')}>
                  Security
                </a>
              </div>

              {/* Settings form */}
              <div className="col-md-9 ps-4">
                {/* Account settings */}
                <div className={`settings-content ${activeSettingsTab === 'account' ? 'active' : ''}`}>
                  {/* Profile image section */}
                  <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                    <div className="profile-image-buttons">
                      <button className="btn btn-outline-primary btn-sm" onClick={handleEditPhoto}>
                        <i className="bi bi-pencil me-1"></i> Edit Photo
                      </button>
                      <button className="btn btn-outline-danger btn-sm" onClick={handleRemovePhoto}>
                        <i className="bi bi-trash me-1"></i> Remove
                      </button>
                    </div>
                    <input type="file" id="photo-upload" accept="image/*" style={{display: 'none'}} onChange={handlePhotoUpload} />
                  </div>

                  <div className="form-section">
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="fullName" defaultValue="Emeka Bonnma" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="email" defaultValue="emeka@example.com" />
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="timezone" className="form-label">Timezone</label>
                        <select className="form-select" id="timezone">
                          <option selected>GMT +01</option>
                          <option>GMT +00</option>
                          <option>GMT +02</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="language" className="form-label">Language</label>
                        <select className="form-select" id="language">
                          <option selected>English</option>
                          <option>French</option>
                          <option>Spanish</option>
                        </select>
                      </div>
                    </div>

                    <button className="btn btn-primary" onClick={handleSaveSettings}>Save</button>
                  </div>

                  <hr />

                  {/* Password change section */}
                  <div className="form-section">
                    <div className="row mb-3">
                      <div className="col-md-4">
                        <label htmlFor="currentPassword" className="form-label">Current Password</label>
                        <input type="password" className="form-control" id="currentPassword" />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="newPassword" />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="retypePassword" className="form-label">Retype Password</label>
                        <input type="password" className="form-control" id="retypePassword" />
                      </div>
                    </div>

                    <button className="btn btn-primary" onClick={handleResetPassword}>Reset Password</button>
                  </div>
                </div>

                {/* Email & Notification settings */}
                <div className={`settings-content ${activeSettingsTab === 'email' ? 'active' : ''}`}>
                  <h5 className="mb-4">Email & Notification Settings</h5>

                  <div className="form-section">
                    <div className="mb-4">
                      <label className="form-label fw-bold">Email Notifications</label>

                      <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" id="emailCourseUpdates" defaultChecked />
                        <label className="form-check-label" htmlFor="emailCourseUpdates">Course updates</label>
                      </div>

                      <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" id="emailAssignmentReminders" defaultChecked />
                        <label className="form-check-label" htmlFor="emailAssignmentReminders">Assignment reminders</label>
                      </div>

                      <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" id="emailFeedback" />
                        <label className="form-check-label" htmlFor="emailFeedback">Feedback on submissions</label>
                      </div>

                      <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" id="emailPromotions" />
                        <label className="form-check-label" htmlFor="emailPromotions">Promotional emails</label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-bold">In-App Notifications</label>

                      <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" id="appMessages" defaultChecked />
                        <label className="form-check-label" htmlFor="appMessages">Messages</label>
                      </div>

                      <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" id="appComments" defaultChecked />
                        <label className="form-check-label" htmlFor="appComments">Comments on your posts</label>
                      </div>

                      <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" id="appMentions" defaultChecked />
                        <label className="form-check-label" htmlFor="appMentions">Mentions</label>
                      </div>
                    </div>

                    <button className="btn btn-primary" onClick={handleSaveNotifications}>Save Preferences</button>
                  </div>
                </div>

                {/* Verification settings */}
                <div className={`settings-content ${activeSettingsTab === 'verification' ? 'active' : ''}`}>
                  <h5 className="mb-4">Account Verification</h5>

                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-envelope-check fs-4 me-3 text-success"></i>
                        <div>
                          <h6 className="mb-1">Email Verification</h6>
                          <p className="text-muted mb-0">Your email has been verified</p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-phone fs-4 me-3 text-warning"></i>
                        <div>
                          <h6 className="mb-1">Phone Verification</h6>
                          <p className="text-muted mb-0">Add and verify your phone number for additional security</p>
                        </div>
                        <button className="btn btn-sm btn-outline-primary ms-auto">Verify</button>
                      </div>

                      <div className="d-flex align-items-center">
                        <i className="bi bi-credit-card fs-4 me-3 text-success"></i>
                        <div>
                          <h6 className="mb-1">Payment Method Verification</h6>
                          <p className="text-muted mb-0">Your payment method has been verified</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-check form-switch mb-3">
                    <input className="form-check-input" type="checkbox" id="twoFactorAuth" />
                    <label className="form-check-label" htmlFor="twoFactorAuth">Enable Two-Factor Authentication</label>
                  </div>

                  <p className="text-muted">Two-factor authentication adds an extra layer of security to your account by requiring a verification code in addition to your password when signing in.</p>

                  <button className="btn btn-primary" onClick={handleSetup2FA}>Set Up Two-Factor Authentication</button>
                </div>

                {/* Security settings */}
                <div className={`settings-content ${activeSettingsTab === 'security' ? 'active' : ''}`}>
                  <h5 className="mb-4">Security Settings</h5>

                  <div className="mb-4">
                    <h6 className="mb-3">Login Security</h6>

                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" id="rememberDevices" defaultChecked />
                      <label className="form-check-label" htmlFor="rememberDevices">Remember my devices</label>
                    </div>

                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" id="loginAlert" />
                      <label className="form-check-label" htmlFor="loginAlert">Alert me of new login attempts</label>
                    </div>

                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" id="autoLogout" defaultChecked />
                      <label className="form-check-label" htmlFor="autoLogout">Auto logout after 30 minutes of inactivity</label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="mb-3">Session Management</h6>
                    <p>You're currently logged in on the following devices:</p>

                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">Windows PC - Chrome</h6>
                            <p className="text-muted mb-0">Current session · Lagos, Nigeria</p>
                          </div>
                          <button className="btn btn-sm btn-outline-danger">Log Out</button>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">iPhone 13 - Safari</h6>
                            <p className="text-muted mb-0">Last active: Today, 09:42 AM · Lagos, Nigeria</p>
                          </div>
                          <button className="btn btn-sm btn-outline-danger">Log Out</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-danger" onClick={handleLogoutAll}>Log Out of All Devices</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
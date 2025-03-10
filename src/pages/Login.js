import React, { useState } from 'react';
import './Login.css';

import Home from '../pages/Home';
import googleIcon from '../assets/google-icon.png';
import microsoftIcon from '../assets/microsoft-icon.png';
import appleIcon from '../assets/apple-icon.png';
import networkImage from '../assets/network-image-login.png'; // Import the network image

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 login-container">
        {/* Network Background Side */}
        <div className="col-lg-6 network-bg d-flex align-items-center justify-content-center">
          <img
            src={networkImage}
            alt="Network Visualization"
            className="network-image img-fluid"
          />
        </div>

        {/* Login Form Side */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="form-container">
            <h1 className="fw-bold mb-2">Welcome back!</h1>
            <p className="mb-4">Enter your Credentials to access your account</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="password-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#666"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" fill="#666"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="rememberMe">Remember this user</label>
              </div>

            <a href="/Home" className="btn btn-login btn-success mb-2">Login</a>


              <div className="text-center mb-3">
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <div className="divider">Or</div>

              <a href="#" className="social-login mb-1">
                <img src={googleIcon} className="social-icon" alt="Apple" />
                <span>Login using Google</span>
              </a>

              <a href="#" className="social-login mb-2">
                <img src={microsoftIcon} className="social-icon" alt="Microsoft" />
                <span>Login using Microsoft</span>
              </a>

              <a href="#" className="social-login mb-4">
                <img src={appleIcon} className="social-icon" alt="Apple" />
                <span>Login using Apple</span>
              </a>

              <div className="text-center">
                <p>Don't have an account? <a href="#" className="signup-link">Sign Up</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
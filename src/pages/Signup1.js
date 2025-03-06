import React from "react";
import "./Signup1.css";
import imageSrc from "./signup.png"; // Ensure this path is correct

const Signup = () => {
  return (
    <div className="signup-container">
      {/* Left Side - Form Section */}
      <div className="form-section">
        <h2>Hi there!</h2>
        <h4>Get Started Now</h4>

        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input type="password" id="password" placeholder="Password" required />
              <span className="toggle-password">👁</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="password-container">
              <input type="password" id="confirm-password" placeholder="Confirm Password" required />
              <span className="toggle-password">👁</span>
            </div>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">terms & policy</a>
            </label>
          </div>

          <button type="submit" className="btn-signin">Sign in</button>
        </form>

        <p className="or-text">Or</p>

        <div className="social-buttons">
          <button className="google">Sign in using Google</button>
          <button className="microsoft">Sign in using Microsoft</button>
          <button className="apple">Sign in using Apple</button>
        </div>

        <p className="login-text">
          Have an account? <a href="#">Login</a>
        </p>
      </div>

      {/* Right Side - Image Section */}
      <div className="image-section">
        <img src={imageSrc} alt="Signup Visual" />
      </div>
    </div>
  );
};

export default Signup1;

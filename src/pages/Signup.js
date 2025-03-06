import React from "react";
import "./Signup.css";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload on form submission
    console.log("Form Submitted");
  };

  return (
    <div className="signup-container">
      <div className="form-section">
        <h2>Hi there!</h2>
        <h4>Get Started Now</h4>

        <form onSubmit={handleSubmit}>
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
            <input type="password" id="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm Password" required />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">terms & policy</a>
            </label>
          </div>
          <button type="submit" className="btn-signin">
            Sign in
          </button>
        </form>

        <p className="or-text">Or</p>

        <div className="social-buttons">
          <button type="button" className="google">Sign in using Google</button>
          <button type="button" className="microsoft">Sign in using Microsoft</button>
          <button type="button" className="apple">Sign in using Apple</button>
        </div>

        <p className="login-text">
          Have an account? <a href="#">Login</a>
        </p>
      </div>

      <div className="image-section"></div>
    </div>
  );
};

export default Signup;

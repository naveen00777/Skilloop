import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      {/* Left Image Section */}
      <div className="image-section"></div>

      {/* Right Form Section */}
      <div className="form-section">
        <h2 className="text-center">Welcome back!</h2>
        <p className="text-center">Enter your Credentials to access your account</p>
        <form className="w-100">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Remember this user</label>
          </div>
          <button type="submit" className="btn btn-login w-50">Login</button>
          <p className="text-center mt-2"><a href="#">Forgot password?</a></p>
        </form>
        <hr />
        <div className="social-buttons" >
          <button className="btn btn-light w-100 mb-2">Login using Google</button>
          <button className="btn btn-light w-100 mb-2">Login using Microsoft</button>
          <button className="btn btn-light w-100">Login using Apple</button>
        </div>
        <p className="text-center mt-3">Don’t have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;

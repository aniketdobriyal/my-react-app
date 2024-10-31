import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Login.css"; // Custom CSS for styling

const Login = () => {
 
  return (
    <div className="signup-page">
      <div className="left-section">
        <h2>Discover the world's top designers & creatives.</h2>
        <img
          src="vecteezy_people-working-at-home-office-and-typing-laptop-online_13166897.png" // Replace with the actual image URL or asset
          alt="Creative Illustration"
        />
      </div>
      <div className="right-section">
       
        <h2>Sign up to Zynthara</h2>
        <form className="signup-form">
          <div className="input-row">
          
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

        

          <button
            type="submit"
            className="create-account-btn"
         
          >
            Log in
          </button>
          <p className="signin-text-top">
          Already a member?  <Link to="/signup">Sign In</Link>
        </p>
        </form>

        <p className="site-protection">
          This site is protected by reCAPTCHA and the Google <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};

export default Login;

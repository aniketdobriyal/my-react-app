import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Signup.css"; // Custom CSS for styling

const Signup = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

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
            <div className="input-group half-width">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="input-group half-width">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Username" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={handleTermsChange}
            />
            <label htmlFor="terms" className="terms-label">
              Creating an account means you are OK with our{" "}
              <a href="/terms">Terms of Service</a>, <a href="/privacy">Privacy Policy</a>, and default notification settings.
            </label>
          </div>

          <button
            type="submit"
            className="create-account-btn"
            disabled={!termsAccepted}
          >
            Create Account
          </button>
          <p className="signin-text-top">
          Already a member? <Link to="/login"> Login</Link>
        </p>
        </form>

        <p className="site-protection">
          This site is protected by reCAPTCHA and the Google <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};

export default Signup;

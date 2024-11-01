import React, { useState, useEffect } from 'react';
import './Popup.css'; 
import GoogleAuth from './GoogleAuth';
import { useUser } from './UserContext'; // Import the custom hook

const Popup = () => {
  const { user, setUser } = useUser(); // Get user and setUser from context
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  // Check if the user is logged in, and if not, set the popup to open
  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  // Trigger popup for sign in
  const triggerSignIn = () => {
    setIsOpen(true);
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    // Email validation
    if (!isValidEmail(email)) {
      setIsEmailInvalid(true);
      valid = false;
    } else {
      setIsEmailInvalid(false);
    }

    // Password validation
    if (password.length < 6) {
      setIsPasswordInvalid(true);
      valid = false;
    } else {
      setIsPasswordInvalid(false);
    }

    if (valid) {
      console.log('Email:', email);
      console.log('Password:', password);
      // Handle user login logic here (e.g., API call to authenticate)

      setIsOpen(false); // Close the popup
      setEmail(''); // Clear email input
      setPassword(''); // Clear password input
      // Simulate user login
      setUser({ name: email }); // Simulate logged in user
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleGoogleLoginSuccess = (user) => {
    setUser(user); // Set the user data in context
    setIsOpen(false); // Close the popup
  };

  // Don't render the popup if the user is logged in
  if (user) return null;

  return (
    <div>
      <div className={`modal ${isOpen ? 'show' : ''}`}>
        <div className="modal-content">
          <span className="close-btn" onClick={handleClose}>&times;</span>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={isEmailInvalid ? 'invalid' : ''}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={isPasswordInvalid ? 'invalid' : ''}
              required
            />
            <button type="submit">Sign In</button>
          </form>
          <div className="social-signin">
       {/*     <button className="social-signin-btn facebook-btn">Sign In with Facebook</button>
            <button className="social-signin-btn instagram-btn">Sign In with Instagram</button> */}
            <GoogleAuth onLoginSuccess={handleGoogleLoginSuccess} /> {/* Pass callback */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

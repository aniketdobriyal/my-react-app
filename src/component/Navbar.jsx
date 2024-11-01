import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { useUser } from './UserContext'; // Adjust the path as needed
import Signup from './Signup';

const Navbar = () => {
  const { user, setUser } = useUser(); // Get user and setUser from useUser hook

   // Handle Logout
   const handleLogout = () => {
    setUser(null); // Clear user state
    triggerSignIn(); // Trigger the sign-in popup again
  };

  // Access the triggerSignIn function from Popup component (you could pass it via props)
  const triggerSignIn = () => {
    setIsOpen(true);
  };

  return (
    <header>
      <div>
        <nav className="navbar">
          <div className="navbar-logo">
            {user ? (
              <div>
                <span><b>{user.name}</b></span>
              </div>
            ) : (
              <span><b>MyApp</b></span>
            )}
          </div>
          <ul className="navbar-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>

            {user ? (
              <li>
                <Link to="/contact">
                  <img src={user.picture} className="rounded-circle cons_posi" alt="User 1" width="50" />
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </Link>
                <ul>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                </ul>
              </li>
            ) : (
              <li>
                <Link to="/signup">
             
                  <img src="OIP (1).jpg" className="rounded-circle cons_posi" alt="User 1" width="50" />
                 <ion-icon name="chevron-down-outline"></ion-icon>
                </Link>
                <ul>
                  <li><Link to="/">Setting</Link></li>
                </ul>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

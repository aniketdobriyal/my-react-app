import React from 'react';
import './Footer.css'; // Custom CSS file for styling

const Footer = () => {
  return (
    <footer>
        <div className="footer">
      <div className="footer-content">
        <h3>Contact Me</h3>
        <p>Feel free to reach out via email or connect on social media.</p>
        <ul className="contact-info">
          <li>Email: <a href="mailto:aniketdobriyal325@gmail.com">aniketdobriyal325@gmail.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/aniketdobriyal" target="_blank" rel="noopener noreferrer">linkedin.com/in/aniketdobriyal</a></li>
          <li>Phone: <a href="tel:90588949444">90-588-94-944</a></li>
        </ul>
        <p>© 2024 All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

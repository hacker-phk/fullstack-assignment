import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-column">
          <h4>Abstract</h4>
          <p>Branches</p>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div className="footer-column">
          <h4>Community</h4>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Dribble</p>
          <p>Podcast</p>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Legal</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

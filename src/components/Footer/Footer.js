import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">
          کلیه حقوق این سایت محفوظ و متعلق به شریف پاب است &copy;
        </p>
        <div className="text-center">
          <a href="https://www.google.com/" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.google.com/" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.google.com/" className="social-icon">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
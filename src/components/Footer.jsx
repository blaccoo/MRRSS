import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="pt-5 pb-4" id="footer">
      <div className="container">
        <div className="row pb-5">
          {/* Logo and Contact Info */}
          <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12 mb-md-0 mb-4">
            <div className="mineres-footer-web-logo mb-4">
              <img
                src="assets/img/logoX.png"
                alt="Mineres Logo"
                style={{ width: '70px', height: '60px', borderRadius: '10px' }}
              />
            </div>
            <div className="mineres-footer-info">
              <h5 className="mb-2">Support & Security</h5>
              <p className="mb-1">📩 <strong>Support:</strong> <a href="mailto:support@mineres.org">support@mineres.org</a></p>
              <p className="mb-1">📨 <strong>Info:</strong> <a href="mailto:info@mineres.org">info@mineres.org</a></p>
              <p className="mb-1">🚨 <strong>Report Scam:</strong> <a href="mailto:fraud@mineres.org">fraud@mineres.org</a></p>
            </div>
          </div>

          {/* Explore Section */}
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-md-0 mb-4">
            <h3 className="mineres-footer-heading mb-4">Explore</h3>
            <div className="footer-links">
              <div className="footer-links-inner">
                <Link to="/">Home</Link>
                <Link to="/features">Features</Link>
                <Link to="/whitepaper">Whitepaper</Link>
              </div>
              <div className="footer-links-inner">
                <Link to="/ecosystems">Ecosystems</Link>
                <Link to="/community">Community</Link>
                <Link to="/about">About</Link>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 mb-md-0 mb-4">
            <h3 className="mineres-footer-heading mb-4">Community</h3>
            <nav className="mineres-footer-social-icons">
              <div className="social-icons d-flex gap-3">
                <a href="https://twitter.com/Mineres_MRS" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-x-twitter" style={{ color: '#fff' }}></i>
                </a>
                <a href="https://t.me/mineres_mrs" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram-plane" style={{ color: '#0088cc' }}></i>
                </a>
                <a href="https://youtube.com/@mineresfoundation?si=KZFBnljUS62-zmbr" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube" style={{ color: '#FF0000' }}></i>
                </a>
                <a href="https://linkedin.com/in/mineres-foundation" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in" style={{ color: '#0077b5' }}></i>
                </a>
                <a href="https://www.facebook.com/share/1CMN5WdwL4/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook" style={{ color: '#1877f2' }}></i>
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="blue-divider" />
        <div className="col-12 mt-4">
          <p className="mineres-copy-text text-center">
            © Copyright 2025, All Rights Reserved by Mineres
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

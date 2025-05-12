import TelegramIcon from '@mui/icons-material/Telegram';
import { Box } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="pt-5 pb-4" id="footer">
    <div className="container">
      <div className="row pb-5">
        <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12 mb-md-0 mb-4">
          <div className="mineres-footer-web-logo mb-4">
          <img src="assets/img/logoX.png"  style={{width:"60px", height:"50px", borderRadius:"10px"}}/>
          </div>
          <p className="mineres-footer-info">
       
          </p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-md-0 mb-4">
          <h3 className="mineres-footer-heading mb-4">Explore</h3>
          <div className="footer-links">
            <div className="footer-links-inner">
              <Link to="/">Home</Link>
              <Link to="/features">Features</Link>
              <Link to="/whitepaper">Whitepaper</Link>
            </div>
            <div className="footer-links-inner">
          

              
              <Link to="/about">About</Link>
              <Link to="/privacy">Privacy</Link>
            </div> 
          </div>
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
  )
}

export default Footer
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
              <Link to="#">Prices</Link>
            </div>
            <div className="footer-links-inner">
              <Link to="/careers">Careers</Link>
              
              <Link to="/about">About</Link>
            </div> 
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 mb-md-0 mb-4">
          <h3 className="mineres-footer-heading mb-4">community</h3>
          <nav className="mineres-footer-social-icons">
            <ul>
              <li>
                <Link to="https://twitter.com/Mineres_MRS" target="_blank">
                  <img src="assets/img/twitter.svg" />
                </Link>
              </li>
              <li>
                <Link
                  to=" https://t.me/mineres_mrs"
                  target="_blank"
               
                >
                  <Box sx={{ backgroundImage: "linear-gradient(to right,#2f82ed , #73aaf3)",borderRadius:"7px",display:"flex", flexDirection:"row", alignItems:"center", padding:"0.3rem"}}>
                  <TelegramIcon sx={{fontSize:"20px", color:'#fff'}} />
                  </Box>
                
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  target="_blank"
                >
                  <img src="assets/img/youtube.svg" />
                </Link>
              </li>
              <li>
                <Link to="https://LinkedIn.com/in/mineres-foundation" target="_blank">
                  <img src="assets/img/LinkedIn.svg" />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank">
                  <img src="assets/img/Exclude.svg" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  target="_blank"
                >
                  <img src="assets/img/discord.svg" />
                </Link>
              </li>
            </ul>
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
  )
}

export default Footer
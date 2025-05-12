import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
const [show, setshow] = useState(true)


  return (
    <header id="header" style={{borderBottom:"1px solid rgba(225,225,225,0.5)"}}>
    <div className="container"  >
          <nav className="navbar navbar-expand-lg navbar-dark d-md-flex justify-content-between">
            <Link className="navbar-brand" to="/" >
              <img src="assets/img/logoX.png"  style={{width:"70px", height:"60px", borderRadius:"10px"}}/>
              
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>

           
                <li className="nav-item">
                  <Link to="/features" className="nav-link" >
                    Features
                  </Link>
                </li>

                
                <li className="nav-item">
                  <Link to="/whitepaper" className="nav-link" >
                    Whitepaper
                  </Link>
                </li>
            
                <li className="nav-item">
                  <Link to="/community" className="nav-link" >
                  Community
                  </Link>

                </li>

                <li className="nav-item">
                  <Link to="/ecosystems" className="nav-link" >
                  Ecosystems
                  </Link>
                  
                </li>
           
                <li className="nav-item">
                  <Link to="/about" className="nav-link" >
                    About
                  </Link>
                </li>

             
              </ul>
            </div>
            <div className="d-flex">
              <div className="headerSocial">
                <a
                  className="btn btn-primary"
                  href="#"
                  target="_blank"
                >
                Pre-Market
                </a>
              </div>

   

              <button
                className="navbar-toggler border-0 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                { show && <img src="assets/img/menu-bar.svg" className="bar-icon" onClick={()=>{
                  setshow(!show)
                }}/>}  
                  {!show && <CloseIcon  sx={{color:"#fff"}}  onClick={()=>{
                    setshow(!show)
                  }} />}


                </span>





                
              </button>


            </div>

           

           {

            !show &&  <div class="navbar-collapse collapse show" id="navbarNav"  style={{marginTop:"1.5rem"}}>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="/" class="nav-link" >Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/features" class="nav-link" >Features</Link>
                </li>
                <li class="nav-item">
                    <Link to="/whitepaper" class="nav-link" >Whitepaper</Link>
                </li>
                <li className="nav-item">
                  <Link to="/community" className="nav-link" >
                  Community
                  </Link>

                </li>

                <li className="nav-item">
                  <Link to="/ecosystems" className="nav-link" >
                  Ecosystems
                  </Link>
                  
                </li>
                
                <li class="nav-item">
                    <Link to="/about" class="nav-link" >About</Link>
                </li>
                <li class="nav-item" style={{visibility:"hidden"}}>
                    <a class="nav-link active" href="about.html">Research</a>
                </li>
            </ul>
        </div>
           }
          </nav>
        </div>
      </header>
  )
}

export default Navbar
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Box, Grid, Typography } from '@mui/material'

function Community() {
 
  return (
    <div>
     <Navbar/>



     <section className="page-title about-title">
  <div className="container">
    <div className="page-title-inner">
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <h2>Mineres - MRS</h2>
      </Box>

      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <h3 style={{ lineHeight: "2.5rem", color: "#fff", fontWeight: "1000" }}>
          Mineres Community
        </h3>
      </Box>

      <p>
        With over 40 million people working in artisanal and small-scale mining (ASM),
        most still operate outside of formal markets, facing unfair pricing, limited
        transparency, and zero digital infrastructure to protect their value. Join Mineres - MRS Community
      </p>

      <div className="social-icons">
      <a href="https://twitter.com/Mineres_MRS" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x-twitter" style={{ color: "#fff" }}></i>
        </a>
        <a href="https://t.me/mineres_mrs" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram-plane" style={{ color: "#0088cc" }}></i>
        </a>
        <a href="https://youtube.com/@mineresfoundation?si=KZFBnljUS62-zmbr" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube" style={{ color: "#FF0000" }}></i>
        </a>
        <a href="https://LinkedIn.com/in/mineres-foundation" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in" style={{ color: "#0077b5" }}></i>
        </a>
        <a href="https://www.facebook.com/share/1CMN5WdwL4/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" style={{ color: "#1877f2" }}></i>
        </a>
 
 
      </div>
    </div>
  </div>
</section>



  


    <section className="imageContentSection"  style={{marginBottom:"10rem", marginTop:'10rem'}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-block d-lg-none">
              <div className="section-img h-100 mb-5">
              <Box  sx={{borderRadius:"1rem", padding:"1rem", backgroundColor:"#000" }}>
              <img
                          src="assets/img/foundation.jpg"
                          style={{ width: "100%", height: "100%", }}
                        />
              </Box>
              </div>
            </div>
            <div className="content-section">
              <h3>Mineres Foundation</h3>
           <p>
           The Mineres Foundation is our commitment to social equity and sustainability. We recognize that the communities surrounding mines are often left behind in traditional supply chains. Our foundation exists to correct that imbalance. By allocating a percentage of every transaction and a fixed portion of the MRS token supply, we fund vital infrastructure and social programs in mining regions. This includes clean drinking water projects, education for miners' children, health care support, mining safety gear, and environmental rehabilitation of depleted sites.
              </p>

              <p>
              We also collaborate with NGOs, local governments, and community leaders to ensure our efforts are truly transformative—not just transactional. Every project supported by the Foundation is designed with long-term empowerment in mind, giving these communities the tools they need to thrive well beyond their relationship with the mining sector.


              </p>

            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-lg-block d-none">
            <div className="section-img h-100" >
              <Box  sx={{borderRadius:"1rem", padding:"1rem", backgroundColor:"#000" }}>
           
             
                        <img
                          src="assets/img/foundation.jpg"
                          style={{ width: "100%", height: "100%", }}
                        />
                    
              </Box>
          
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="imageContentSection"  style={{marginBottom:"10rem", marginTop:'10rem'}}>
      <div className="container">
        <div className="row">


        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-lg-block d-none">
            <div className="section-img h-100" >
              <Box  sx={{borderRadius:"1rem", padding:"1rem", backgroundColor:"#000" }}>
              <img  src='assets/img/research.webp' style={{width:"100%", height:"100%"}} />
              </Box>
          
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-block d-lg-none">
              <div className="section-img h-100 mb-5">
              <Box  sx={{borderRadius:"1rem", padding:"1rem", backgroundColor:"#000" }}>
          <img  src='assets/img/research.webp' style={{width:"100%", height:"100%"}} />
              </Box>
              </div>
            </div>
            <div className="content-section">
              <h3>Mineres Research Project</h3>
              <p>
              The Mineres R&D division is where innovation meets sustainability. We are pioneering research into the ethical extraction, processing, and logistics of rare earth and industrial metals. Backed by our token economy, we’ve set up a decentralized research fund that supports cutting-edge projects in areas such as AI-driven supply chain monitoring, eco-friendly mining techniques, and zero-waste mineral processing.
            
            
              </p>
        <p>
        We partner with leading universities, environmental scientists, geologists, and blockchain technologists to drive this innovation. Our mission is to create solutions that reduce environmental degradation, lower energy usage, and ensure full traceability of every mineral—from mine to factory. The results of our R&D also help shape our platform’s features, making Mineres the most advanced and responsible mineral trading ecosystem in the world.


        </p>
            </div>
          </div>
        
        </div>
      </div>
    </section>

    


    <section className="imageContentSection"  style={{marginBottom:"10rem", marginTop:'10rem'}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-block d-lg-none">
              <div className="section-img h-100 mb-5">
              <Box  sx={{borderRadius:"1rem", padding:"1rem", backgroundColor:"#000" }}>
              <img
                          src="assets/img/scam.png"
                          style={{ width: "100%", height: "100%", }}
                        />
              </Box>
              </div>
            </div>
            <div className="content-section">
  <h3>Report a Scam</h3>
  <p>
    In a decentralized world, trust is everything—and we take it seriously. While Web3 opens up incredible opportunities, it also attracts bad actors. The Mineres team is committed to protecting our users and preserving the integrity of our ecosystem.
  </p>
  <p>
    If you see someone misusing the Mineres name, impersonating team members, promising unrealistic returns, or conducting suspicious activities related to our platform or token—report it immediately. We have a dedicated risk management and legal team that investigates each claim. You can submit reports anonymously, and we treat all information with confidentiality.  
  </p>
  <p>
    Help us maintain a safe and honest environment for everyone. Together, we build a community that values security, accountability, and transparency.
  </p>
  <p>
    📩 <strong>To report a scam, email us at:</strong>{' '}
    <a href="mailto:fraud@mineres.org">fraud@mineres.org</a>
  </p>
</div>

          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-lg-block d-none">
            <div className="section-img h-100" >
              <Box  sx={{borderRadius:"1rem", padding:"1rem", backgroundColor:"#000" }}>
           
             
                        <img
                          src="assets/img/scam.png"
                          style={{ width: "100%", height: "100%", }}
                        />
                    
              </Box>
          
            </div>
          </div>
        </div>
      </div>
    </section>

    






    <div className="divider mb-5" />
   <Footer/>
  </div>

  );
}

export default Community;
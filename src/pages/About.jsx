import React from 'react'
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer" 
import { Box, Grid } from '@mui/material'
import TokenMetrics from "../components/Tokenmetrics"
import Roadmap from "../components/Roadmap"
import Roadmap2 from "../components/Roadmap2"

function About() {
  return (
    <div>
         <div>
      <Navbar />
        <section className="page-title about-title">
          <div className="container">
            <div className="page-title-inner">
              <Box sx={{display:{xs:"none",sm:"block"}}}>
              <h2> Present trading method not good enough</h2>
              </Box>
             
              <Box sx={{display:{xs:"block",sm:"none"}}}>
              <h3 style={{lineHeight:"2.5rem", color:"#fff", fontWeight:"1000"}}>Present trading method not good enough</h3>
              </Box>

              <p>With over 40 million people working in artisanal and small-scale mining (ASM), most still operate outside of formal markets, facing unfair pricing, limited transparency, and zero digital infrastructure to protect their value</p>
            </div>
          </div>
        </section>
        <section className="imageContentSection mobile-imageContentSection">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style={{marginBottom:"2rem"}}>
                <div className="content-section">
                  <h3>What we stand for</h3>
                  <p>Mineres is revolutionizing the global metal trade by combining the power of blockchain, Web3 technologies, and real-world utility. In a $7 trillion industry plagued by inefficiencies, middlemen, and lack of transparency, we’re creating a decentralized ecosystem where miners, buyers, and communities can trade directly, securely, and fairly.

The global demand for critical minerals like lithium, cobalt, and rare earth metals is expected to rise over 500% by 2050, driven by innovations in electric vehicles, AI, clean energy, and space technologies. Yet, the trade systems supporting these vital resources remain outdated. Small-scale miners in emerging economies often receive a fraction of the true value for their resources due to limited market access, slow cross-border payments, and a lack of trust and verification.

Mineres changes that. We’ve built a blockchain-powered marketplace that allows miners to connect directly with global buyers. Our native utility token, MRS, facilitates fast, secure transactions, supports staking and escrow functions, and rewards ethical and environmentally friendly mining practices. Smart contracts replace paperwork and reduce the need for third-party intervention, while Miner NFTs verify identity, reputation, and origin, bringing trust and traceability to every transaction.

We believe that fair, ethical trade should be accessible to everyone especially the people who do the hardest work. With Mineres, we’re unlocking new opportunities for small-scale miners, ensuring industrial buyers get transparent, traceable supply, and helping the metal trade leap into the digital age.

Whether you're a miner, wholesaler, investor, or enterprise, Mineres is your gateway to the next generation of metal trading secure, decentralized, and built for the future.
                  </p>
               
               
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-img" style={{position:"relative"}}>
                  <img src="assets/img/welcome.gif" alt="" className="w-100" />
                 
                </div>
              </div>
            </div>
          </div>
        </section>



<div className='container'>
<div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
<div   style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
              <h3 style={{ color:"#fff"}}>MRS Tokenomics</h3>
                
            </div>
<Box  sx={{width:{xs:"90vw",sm:"60vw"},height:{xs:"60vh",sm:"80vh"}, backgroundColor:"#000", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:{xs:"2rem", sm:'2rem'}, borderRadius:"2rem"}}>

                     <TokenMetrics />
                     <p style={{fontSize:"18px", color:"#fff", marginTop:"1rem"}}>Total supply (2 Billion)</p>
              </Box>
</div>
</div>

<div style={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center",marginBlock:"5rem"}}>
<h3 style={{ color:"#fff"}}>Roadmap and future vision </h3>
<Roadmap2/>

</div>




            


        <section className="tech-open" style={{marginTop:"6rem"}}>
          <div className="container">
          <div className="section-title mb-4 center-content"> 
  <h3>The Mineres Team</h3>
  <p>
    Building a secure web3 space and machine learning decentralized app requires a multidisciplinary team that combines technical skills, domain expertise, and business acumen. Collaboration among these professionals is crucial to create a robust and successful platform that fosters an artificial intelligence economy.
  </p>

</div>

           <Grid container  spacing={2}>
<Grid item xs={12} sm={12}>
<div className="tech-box" >
                    <h2>Blockchain Developers</h2>
                    <p>  Experts in blockchain technology who can design and develop the decentralized infrastructure of the decentralized app. They are responsible for implementing smart contracts, ensuring security, and integrating the decentralized app with the blockchain network.</p>
                  </div>
</Grid>
          
                 <Grid item xs={12} sm={12}>
                 <div className="tech-box " >
                    <h2>Professional Traders</h2>
                    <p> Professionals skilled in trading algorithms and techniques. They are responsible for developing and optimizing the machine learning models and algorithms that power the decentralized app's data processing and analysis capabilities.
                    </p>
                  </div>
                  </Grid> 
              

              <Grid  item xs={12} sm={12}>
              <div className="tech-box " >
                    <h2>Full Stack Developers </h2>
                    <p>Developers proficient in both front-end and back-end technologies. They handle the development of the decentralized app's user interface, database management, server infrastructure, and integration with external systems.
                    </p>
                  </div>
              </Grid>


              
              <Grid  item xs={12} sm={12}>
              <div className="tech-box " >
                    <h2>Data Scientists </h2>
                    <p>Specialists in data analysis and modeling. They work on data preprocessing, feature engineering, and model training to ensure the accuracy and reliability of the machine learning models used in the decentralized app.
                    </p>
                  </div>
              </Grid>


              <Grid  item xs={12} sm={12}>
              <div className="tech-box " >
                    <h2>UX/UI Designers </h2>
                    <p>Designers who create intuitive and user-friendly interfaces for the decentralized app. They focus on enhancing the user experience, improving usability, and ensuring effective data visualization.
                    </p>
                  </div>
              </Grid>


              <Grid  item xs={12} sm={12}>
              <div className="tech-box " >
                    <h2>Security Experts</h2>
                    <p>Professionals with expertise in cybersecurity and data privacy. They are responsible for implementing robust security measures to protect user data, prevent unauthorized access, and address potential vulnerabilities in the decentralized app.
                    </p>
                  </div>
              </Grid>

              <Grid  item xs={12} sm={12}>
              <div className="tech-box " >
                    <h2>Business Development Managers</h2>
                    <p>Individuals who understand the market dynamics and potential use cases of the secure web3 space and machine learning decentralized app. They identify opportunities for partnerships, collaborations, and business growth, and help drive the adoption of the platform.
                    </p>
                  </div>
              </Grid>


              <Grid  item xs={12} sm={12}>
              <div className="tech-box " >
                    <h2>Legal and Compliance Specialists</h2>
                    <p>Experts in promoting the decentralized app, creating awareness, and attracting users and developers. They develop marketing strategies, manage communication channels, and engage with the community.
                    </p>
                  </div>
              </Grid>

              <Grid  item xs={12} sm={12}>
              <div className="tech-box " >
                    <h2>Marketing and Communications Specialists</h2>
                    <p>Professionals with knowledge of legal and regulatory frameworks related to data privacy, intellectual property rights, and compliance. They ensure that the decentralized app adheres to relevant regulations and industry standards.
                    </p>
                  </div>
              </Grid>
              
           </Grid>
          </div>

          <div className="section-title mb-4 center-content" style={{marginTop:"3rem"}}> 


  <div className="contact-block">
    <h4>Careers</h4>
    <p>If you're interested in joining our team, send your resume to:</p>
    <a href="mailto:careers@mineres.io">careers@mineres.io</a>
  </div>

  <div className="contact-block">
    <h4>Support</h4>
    <p>Need help or have questions? Reach out to our support team:</p>
    <a href="mailto:support@mineres.io">support@mineres.io</a>
  </div>
</div>


        </section>
    
 
 
        <div className="divider mb-5" />
  <Footer />
      </div>
    </div>
  )
}

export default About
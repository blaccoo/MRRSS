import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Box, Grid, Typography } from '@mui/material'

function Features() {
  return (
    <div>
     <Navbar/>
    <div className="inft-banner">
      <div className="container">
        <div className="inft-content-inner">
          <div className="inft-content pr-lg-5">
            <Box sx={{width:"100%",display:{xs:"none", sm:"block"}}}>
            <h3>
            Mineres - MRS
            </h3>
            </Box>

            <Box sx={{width:"100%",display:{xs:"block", sm:"none"}}}>
            <h3 style={{fontWeight:"700", fontSize:"62px",lineHeight:"4.5rem"}}>
            Mineres - MRS
            </h3>
            </Box>
{/*       
            <p  style={{marginTop:"2rem", lineHeight:"1.5rem"}}>
              Mineres  leads the charge for a easily available, cost effective, secure  infastructure for the Blockchain ecosystem through automated trading.
            </p> */}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/83i34rEEYKU?si=bne_4_MZkBgm3OBS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
        
        </div>

 
      </div>
    </div>






  

   <section id="our-vision">
          <div className="container">
            <h1 className="mineres-main-heading text-center mb-4">
            A decentralized Marketplace powered by Smart Contracts and Blockchain technology
            </h1>
          
            <div className="mineres-primary-text px-lg-5 font-20 d-block">
            

              <p className="mineres-detail-info px-lg-5" style={{textAlign:"center",}}>
              A decentralized marketplace powered by smart contracts, Mineres ensures that every transaction is secure, transparent, and automated without relying on intermediaries or centralized control. Smart contracts act as self-executing agreements that hold funds in escrow, verify delivery, and release payments only when conditions are met, unnecessary fraud and delays. This trustless system empowers miners and buyers to trade directly, confidently, and efficiently across borders, fostering a more inclusive, ethical, and transparent global metal trade.
              </p>
            </div>
            <Box sx={{display:{xs:"none", sm:"block"}}}>
            <div className="our-vision-slider slick-initialized slick-slider slick-dotted">
              <div className="slick-list draggable">
                <Box
                   sx={{display:"flex", flexDirection:"row", alignItems:"center", flexWrap:"wrap",justifyContent:"center", gap:"1rem" }}
                >
                    <div
                    className="vision-box text-center slick-slide slick-current slick-active"
                    tabIndex={0}
               
                   style={{ width: 330, marginBottom:"1rem", height:"450px" }}
                    data-slick-index={0}
                    aria-hidden="false"
                    role="tabpanel"
                    id="slick-slide20"
                    aria-describedby="slick-slide-control20"
                  >
                      <div className="vision-img-box">
                    <img src="favicon.png" className="mx-auto" style={{width:"80px", height:"80px"}}/>
                    </div>
                    <h4 className="vision-title mt-4 mb-4">    The Mineres Marketplace</h4>
                    <p className="vision-info mb-5">
                   
                    A decentralized digital platform that connects verified miners directly with industrial buyers, eliminating middlemen and ensuring transparent, fair trade. Buyers gain access to ethically sourced metals, while miners in emerging markets gain global exposure and better pricing.
                    </p>
             
                  </div>

                  <div
                    className="vision-box text-center slick-slide slick-current slick-active"
                    tabIndex={0}
               
                   style={{ width: 330, marginBottom:"1rem", height:"450px" }}
                    data-slick-index={0}
                    aria-hidden="false"
                    role="tabpanel"
                    id="slick-slide20"
                    aria-describedby="slick-slide-control20"
                  >
                      <div className="vision-img-box">
                    <img src="favicon.png" className="mx-auto" style={{width:"80px", height:"80px"}}/>
                    </div>
                    <h4 className="vision-title mt-4 mb-4">  Miner NFTs</h4>
                    <p className="vision-info mb-5">
                   
                 
                    Each miner is issued a unique non-fungible token (NFT) that acts as a digital identity. These NFTs certify the origin of mined resources, track ethical and environmental practices, and build a miner’s on-chain reputation—unlocking rewards and long-term trade benefits.
                    </p>
             
                  </div>

         
                
                  <div
                    className="vision-box text-center slick-slide slick-current slick-active"
                    tabIndex={0}
               
                   style={{ width: 330, marginBottom:"1rem" , height:"450px"}}
                    data-slick-index={0}
                    aria-hidden="false"
                    role="tabpanel"
                    id="slick-slide20"
                    aria-describedby="slick-slide-control20"
                  >
                      <div className="vision-img-box">
                    <img src="favicon.png" className="mx-auto" style={{width:"80px", height:"80px"}}/>
                    </div>
                    <h4 className="vision-title mt-4 mb-4"> The MRS Token</h4>
                    <p className="vision-info mb-5">
                   
                    MRS is the native utility token of the Mineres ecosystem. It is used for facilitating payments, locking funds in escrow via smart contracts, staking for transaction priority, building trust scores, and earning rewards for sustainable practices. It powers the entire platform.
                    </p>
             
                  </div>
                  <div
                    className="vision-box text-center slick-slide"
                    tabIndex={-1}
                    style={{ width: 330 , marginBottom:"1rem", height:"450px"}}
                    data-slick-index={1}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide21"
                    aria-describedby="slick-slide-control21"
                  >
                    <div className="vision-img-box">
                    <img src="favicon.png" className="mx-auto" style={{width:"80px", height:"80px"}}/>
                    </div>
                    <h4 className="vision-title mt-4 mb-4">Mineres Research Labs</h4>
                    <p className="vision-info mb-5">
                    
                    An initiative funded by the MRS token to drive innovation in rare earth metal extraction, sustainability, and blockchain integration. These labs collaborate with research institutions to push the boundaries of how critical minerals are sourced and used in high-tech industries.
                    </p>
           
                  </div>
                  <div
                    className="vision-box text-center slick-slide"
                    tabIndex={-1}
                    style={{ width: 330 , marginBottom:"1rem", height:"450px"}}
                    data-slick-index={2}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide22"
                    aria-describedby="slick-slide-control22"
                  >
                    <div className="vision-img-box">
                      <img src="favicon.png" className="mx-auto" style={{width:"80px", height:"80px", padding:"0px" }}/>
                    </div>
                    <h4 className="vision-title mt-4 mb-4"> The Mineres Foundation</h4>
                    <p className="vision-info mb-5">
                      {" "}
                     
                      A socially-driven entity within the ecosystem that supports mining-affected communities. It funds environmental restoration, health and safety initiatives, education, and local infrastructure—ensuring the benefits of Web3 reach beyond digital borders.
                    </p>
                 
                  </div>
                </Box>
              </div>
         
            </div>
            </Box>

            <Box sx={{display:{xs:"block", sm:"none"}}}>
            <div className="our-vision-slider slick-initialized slick-slider slick-dotted">
              <div className="slick-list draggable">
                <Box
                   sx={{display:"flex", flexDirection:"column", alignItems:"center", }}
                >
                    <div
                    className="vision-box text-center slick-slide slick-current slick-active"
                    tabIndex={0}
               
                   style={{ width: 330, marginBottom:"1rem" }}
                    data-slick-index={0}
                    aria-hidden="false"
                    role="tabpanel"
                    id="slick-slide20"
                    aria-describedby="slick-slide-control20"
                  >
                      <div className="vision-img-box">
                    <img src="favicon.png" className="mx-auto" style={{width:"80px", height:"80px"}}/>
                    </div>
                    <h4 className="vision-title mt-4 mb-4">    The Mineres Marketplace</h4>
                    <p className="vision-info mb-5">
                   
                    A decentralized digital platform that connects verified miners directly with industrial buyers, eliminating middlemen and ensuring transparent, fair trade. Buyers gain access to ethically sourced metals, while miners in emerging markets gain global exposure and better pricing.
                    </p>
             
                  </div>

                  <div
                    className="vision-box text-center slick-slide slick-current slick-active"
                    tabIndex={0}
               
                   style={{ width: 330, marginBottom:"1rem" }}
                    data-slick-index={0}
                    aria-hidden="false"
                    role="tabpanel"
                    id="slick-slide20"
                    aria-describedby="slick-slide-control20"
                  >
                      <div className="vision-img-box">
                    <img src="favicon.png" className="mx-auto" style={{width:"80px", height:"80px"}}/>
                    </div>
                    <h4 className="vision-title mt-4 mb-4">  Miner NFTs</h4>
                    <p className="vision-info mb-5">
                   
                 
                    Each miner is issued a unique non-fungible token (NFT) that acts as a digital identity. These NFTs certify the origin of mined resources, track ethical and environmental practices, and build a miner’s on-chain reputation—unlocking rewards and long-term trade benefits.
                    </p>
             
                  </div>

         
                
                  <div
                    className="vision-box text-center slick-slide slick-current slick-active"
                    tabIndex={0}
               
                   style={{ width: 330, marginBottom:"1rem", height:"550px"}}
                    data-slick-index={0}
                    aria-hidden="false"
                    role="tabpanel"
                    id="slick-slide20"
                    aria-describedby="slick-slide-control20"
                  >
                      <div className="vision-img-box">
                    <img src="favicon.png" className="mx-auto" style={{width:"80px", height:"80px"}}/>
                    </div>
                    <h4 className="vision-title mt-4 mb-4"> The MRS Token</h4>
                    <p className="vision-info mb-5">
                   
                    MRS is the native utility token of the Mineres ecosystem. It is used for facilitating payments, locking funds in escrow via smart contracts, staking for transaction priority, building trust scores, and earning rewards for sustainable practices. It powers the entire platform.
                    </p>
             
                  </div>
                  <div
                    className="vision-box text-center slick-slide"
                    tabIndex={-1}
                    style={{ width: 330 , marginBottom:"1rem"}}
                    data-slick-index={1}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide21"
                    aria-describedby="slick-slide-control21"
                  >
                    <div className="vision-img-box">
                    <img src="favicon.png" className="mx-auto" style={{width:"80px", height:"80px"}}/>
                    </div>
                    <h4 className="vision-title mt-4 mb-4">Mineres Research Labs</h4>
                    <p className="vision-info mb-5">
                    
                    An initiative funded by the MRS token to drive innovation in rare earth metal extraction, sustainability, and blockchain integration. These labs collaborate with research institutions to push the boundaries of how critical minerals are sourced and used in high-tech industries.
                    </p>
           
                  </div>
                  <div
                    className="vision-box text-center slick-slide"
                    tabIndex={-1}
                    style={{ width: 330 , marginBottom:"1rem"}}
                    data-slick-index={2}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide22"
                    aria-describedby="slick-slide-control22"
                  >
                    <div className="vision-img-box">
                      <img src="favicon.png" className="mx-auto" style={{width:"80px", height:"80px", padding:"0px" }}/>
                    </div>
                    <h4 className="vision-title mt-4 mb-4"> The Mineres Foundation</h4>
                    <p className="vision-info mb-5">
                      {" "}
                     
                      A socially-driven entity within the ecosystem that supports mining-affected communities. It funds environmental restoration, health and safety initiatives, education, and local infrastructure—ensuring the benefits of Web3 reach beyond digital borders.
                    </p>
                 
                  </div>
                </Box>
              </div>
         
            </div>
            </Box>
    
          </div>
        </section>

    <section id="feature-app">
          <div className="container">
   
   
   <Grid container
                   className="feature-content-bg"
         
            >

    <Grid item   xs={12} sm={6}  sx={{paddingRight:{sm:"2rem"}}}>
    <img
                src="assets/n2.png"
                style={{ width: "100%", height: "100%", }}
              />
    </Grid>
     
       
          
        
<Grid item xs={12} sm={6}>
<div className="flex-wrapper" style={{ textAlign: "center" }}>
                <div className="mineres-text-box">
                  <h1
                    className="mineres-main-heading mb-0"
                    style={{ alignSelf: "center" }}
                  >
               A $7 Trillion Market, Reinvented
                  </h1>
          

                  <p className="mineres-detail-info mb-4">
                  The global metal and mineral trade—valued at over $7 trillion—is one of the most vital yet outdated industries in the world. It fuels the technologies of tomorrow: electric vehicles, AI, space exploration, and renewable energy. Yet behind this massive market lies a broken system: slow cross-border transactions, hidden middlemen, limited access for small-scale miners, and zero incentives for ethical sourcing.

Mineres is changing the story. By leveraging blockchain, smart contracts, and a crypto-powered ecosystem, we're turning this legacy industry into a decentralized, transparent, and inclusive marketplace. Now, miners in emerging markets can connect directly with global buyers, receive fair payments, and build trust through verifiable digital identities.

This isn’t just innovation it’s a reinvention. One that unlocks real-world value, powers sustainable development, and puts the future of metal trade into the hands of the people who shape it.







                  </p>
                </div>
              </div>

</Grid>

            
            </Grid>
          </div>
        </section>



            <section id="feature-app"  style={{marginBottom:"10rem", marginTop:'10rem'}}>
          <div className="container">
   
   

   






          </div>
        </section>


  
    



    <div className="divider mb-5" />
   <Footer/>
  </div>
  )
}

export default Features
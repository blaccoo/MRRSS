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
              Tubocharge <br />
              Metal Trade.
            </h3>
            </Box>

            <Box sx={{width:"100%",display:{xs:"block", sm:"none"}}}>
            <h3 style={{fontWeight:"700", fontSize:"62px",lineHeight:"4.5rem"}}>
              Tubocharge<br />
             Metal Trade.
            </h3>
            </Box>
{/*       
            <p  style={{marginTop:"2rem", lineHeight:"1.5rem"}}>
              Mineres  leads the charge for a easily available, cost effective, secure  infastructure for the Blockchain ecosystem through automated trading.
            </p> */}
          </div>
          <Box sx={{display:{xs:"block", sm:"block"}}}>
          <div className="inft-banner-img"  >
            <img src="assets/n6.png" alt=""  style={{borderRadius:"1rem"}}/>
          </div>
          </Box>
        
        </div>

        <Box sx={{display:{xs:"block", sm:"none"}}}>
          <div className="inft-banner-img"  >
            <img src="assets/n6.png" alt=""  style={{borderRadius:"1rem"}}/>
          </div>
          </Box>
      </div>
    </div>





  


    <section className="imageContentSection"  style={{marginBottom:"10rem", marginTop:'10rem'}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-block d-lg-none">
              <div className="section-img h-100 mb-5">
              <Box  sx={{borderRadius:"1rem", padding:"1rem", backgroundColor:"#000" }}>
              <img
                          src="assets/n4.png"
                          style={{ width: "100%", height: "100%", }}
                        />
              </Box>
              </div>
            </div>
            <div className="content-section">
              <h3>How Mineres Fixes the Broken Metal Trade System</h3>
           <p>
           Mineres fixes the current problems in the metal trade by creating a decentralized, transparent, and incentive-driven ecosystem that empowers both miners and buyers. Instead of relying on middlemen and outdated systems, Mineres uses blockchain technology and smart contracts to allow direct, trustless transactions between verified participants. Miners, especially in underserved regions like Africa, gain direct access to global buyers through the Mineres Marketplace, receiving fair prices and faster payments. The platform’s native token, MRS, enables secure crypto payments, escrow services, and staking mechanisms that build trust and reduce fraud. Additionally, Miner NFTs are used to verify the identity and ethical practices of miners, promoting sustainability and accountability. With built-in tools for compliance, logistics, and digital wallets, Mineres transforms the metal trade into a secure, fair, and future-ready digital marketplace.
              </p>

            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-lg-block d-none">
            <div className="section-img h-100" >
              <Box  sx={{borderRadius:"1rem", padding:"1rem", backgroundColor:"#000" }}>
           
             
                        <img
                          src="assets/n4.png"
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
              <img  src='assets/n5.png' style={{width:"100%", height:"100%"}} />
              </Box>
          
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-block d-lg-none">
              <div className="section-img h-100 mb-5">
              <Box  sx={{borderRadius:"1rem", padding:"1rem", backgroundColor:"#000" }}>
          <img  src='assets/n5.png' style={{width:"100%", height:"100%"}} />
              </Box>
              </div>
            </div>
            <div className="content-section">
              <h3>Why Trust and Transparency is key to Mineres</h3>
              <p>
              Trust and transparency are at the heart of Mineres because they solve the core issues plaguing the global metal trade. In an industry where transactions often span continents and involve multiple intermediaries, lack of trust leads to delayed payments, unfair pricing, and frequent disputes. Transparency is equally critical buyers need to know where their minerals come from, how they were sourced, and whether ethical and environmental standards were followed.

Mineres builds trust through blockchain technology, which ensures that every transaction is verifiable, immutable, and open to all participants. Smart contracts eliminate the need for third-party enforcement by automatically holding and releasing funds when agreed conditions are met. Miner NFTs bring a new level of transparency by proving the origin and ethical practices of each miner. This system reduces fraud, increases confidence among buyers, and opens up fair market access for small-scale miners who have long been excluded from global trade.

In short, trust and transparency aren’t just features at Mineres they’re the foundation of a better, more equitable mineral economy.
              </p>
        
            </div>
          </div>
        
        </div>
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


      <section id="keeping-inline">
           <div className="container">
             <div className="mb-4">
               <h1 className="mineres-main-heading text-center mb-4 px-lg-4">
                 {" "}
                 Mineres, brings several distinct advantages to the Web3 space and the broader blockchain and cryptocurrency community:
               </h1>
               {/*                <h1 class="mineres-main-sub-heading">all TOLSTOY-1 generated characters are fully compatible with the iNFT Protocol.</h1>*/}
             </div>
             {/*            <p class="mineres-detail-info mb-5">Some of the benefits of tokenizing a TOLSTOY-1 generated character on the iNFT Protocol include:</p>*/}
             <div className="row justify-content-center mt-5">
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
                 <div className="nft-box text-center">
                   <div className="nft-img-box">
                     <img src="assets/img/a1.svg" />
                   </div>
                   <h4 className="nft-title mt-4 mb-3 px-lg-4">
                   Real-World Use Case
                   </h4>
                   <p className="mineres-detail-info  px-3  mb-0">
                
                 
 Mineres brings blockchain into the physical world by applying Web3 tools to the global metal trade, solving real problems in a trillion-dollar industry.
                   </p>
                 </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
                 <div className="nft-box text-center">
                   <div className="nft-img-box">
                     <img src="assets/img/a2.svg" />
                   </div>
                   <h4 className="nft-title mt-4 mb-3 px-lg-4">
                   Support for Emerging Markets
                   </h4>
                   <p className="mineres-detail-info  px-3  mb-0">
                   Support for Emerging Markets
 By connecting miners in Africa and other developing regions directly with global buyers, Mineres removes exploitative middlemen and promotes fairer, more inclusive trade.
 
 
                   </p>
                 </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
                 <div className="nft-box text-center">
                   <div className="nft-img-box">
                     <img src="assets/img/a3.svg" />
                   </div>
                   <h4 className="nft-title mt-4 mb-3 px-lg-4">
                   Incentives for Ethical Mining
                   </h4>
                   <p className="mineres-detail-info  px-3  mb-0">
                 
                   Miners who follow sustainable and ethical practices are rewarded with MRS tokens, encouraging responsible behavior while enhancing trust in the supply chain.
                   </p>
                 </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
                 <div className="nft-box text-center">
                   <div className="nft-img-box">
                     <img src="assets/img/a4.svg" />
                   </div>
                   <h4 className="nft-title mt-4 mb-3 px-lg-4">
                   Verified Miner Identity with NFTs
                   </h4>
                   <p className="mineres-detail-info  px-3  mb-0">
                  
                   
                   Each miner gets a digital identity in the form of an NFT that proves origin, builds reputation, and makes it easier for buyers to trust and choose ethical suppliers.
                   </p>
                 </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
                 <div className="nft-box text-center">
                   <div className="nft-img-box">
                     <img src="assets/img/a5.svg" />
                   </div>
                   <h4 className="nft-title mt-4 mb-3 px-lg-4">
                   All-in-One Web3 Trading Platform
                   </h4>
                   <p className="mineres-detail-info  px-3  mb-0">
                     {" "}
                  
 Mineres combines payments, wallets, staking, and logistics into one decentralized platform, creating a seamless and borderless experience for metal trading.
                   </p>
                 </div>
               </div>
 
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
                 <div className="nft-box text-center">
                   <div className="nft-img-box">
                     <img src="assets/img/a3.svg" />
                   </div>
                   <h4 className="nft-title mt-4 mb-3 px-lg-4">
                   Compliance 
                   </h4>
                   <p className="mineres-detail-info  px-3  mb-0">
                     {" "}
                     Mineres ensures compliance with evolving cryptocurrency and blockchain regulations, reducing legal risks for the projects it evaluates. This commitment to compliance adds an extra layer of security and trustworthiness.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </section>
    

    <div class="container"   style={{marginBottom:"10rem", marginTop:'10rem'}}>
                <div class="newsletter-inner"  >
                    <div class="newsletter-left-wrappr" style={{width:"100%"}}>
                        <h2>Stay Connected</h2>
                        <p>Sign up for our newsletter to stay updated about Mineres </p>
                    </div>

                    <Box sx={{display:{xs:"none", sm:"block", width:"100%"}}}>
                    <div class="newsletter-right-wrappr">
                        <div class="newsletter-email-wrapper" >
                            <form id="newsletter-form" novalidate="novalidate">
                                <input type="email" name="email" placeholder="Enter your email address" required=""/>
                                <button class="btn btn-black" type="submit" id="submit-button">Subscribe</button>

                            </form>
                        </div>
                        </div>
                    </Box>


                    <Box sx={{display:{xs:"block", sm:"none"}}}>
                    <div class="newsletter-right-wrappr">
                        <div  >
                            <form id="newsletter-form" novalidate="novalidate" >
                                <input type="email" style={{ width:"100%", height:"50px", borderRadius:"10px", marginBottom:"2rem"}} name="email" placeholder="Enter your email address" required=""/>
                                <button class="btn " style={{backgroundColor:"blue", width:"100%", color:"#fff", height:"50px", borderRadius:"10px"}} type="submit" id="submit-button">Subscribe</button>

                            </form>
                        </div>
                        </div>
                    </Box> 
                

                        
                  
                </div>
            </div>

    <div className="divider mb-5" />
   <Footer/>
  </div>
  )
}

export default Features
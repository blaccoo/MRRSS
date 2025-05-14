import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Button, Grid } from "@mui/material";
import Swiper1 from "../components/Swiper1"

function Home() {
  return (
    <>
      <div>
        <Navbar />

        <section id="ai-intro">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <h4 className="mineres-sm-heading mb-3">
                Join the Future of Mineral Trade →
                </h4>
                <h1 className="mineres-mainHeroSection-heading mb-4 f-700" style={{color:"#F4DCB9"}}>
                Mineres - MRS
                </h1>
                <p className="mineres-detail-info">
                The world runs on metals from smartphones and electric vehicles to satellites and AI infrastructure. Yet, the metal trade remains outdated, broken, opaque, and exclusionary especially for small-scale miners in emerging markets.

Mineres is transforming this industry with a decentralized, crypto-powered platform built to connect miners directly with global buyers, enable instant cross-border transactions, and reward ethical mining.


                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="mineres-video-box">
           <Box
                    className="various fancybox"
                    data-fancybox=""
                    data-type="video"
                    data-fancybox-type="iframe"
                    sx={{
                      backgroundColor: "#060610",
              
                   
                      borderRadius: {xs:"3rem", sm:"3rem"},
                      border: "1px solid rgba(255,255,255,.09)",
                      boxShadow: "0 0 5px #fff",
                    }}
                  >
                    <Box >
                    <img src="assets/n1.png" style={{width:"100%",height:"100%", borderRadius:"3rem"}}  />
                      
                    </Box>
            </Box>
                  {/*
                        <a data-fancybox data-type="video" href="assets/videos/CharacterGPT.mp4">
                            <img src="assets/img/video.svg" class="w-100" alt="">
                        </a>
  */}
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <section id="gener-age">
          <div className="container">
            <div className="content-bg content-spacer">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-12 co-sm-12 col-12">
                  <h1 className="mineres-xl-heading">Why Mineres?</h1>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                  <p className="mineres-detail-info m-0">
                  Global Trade. Local Empowerment.
                  Mineres is more than just a marketplace. it’s a mission to bridge the gap between underrepresented miners and global demand, using the power of blockchain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tolstoy">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="flex-wrapper">
                  <div className="mineres-text-box">
                    <h1 className="mineres-main-heading mb-0">
                      Mineres{" "}
                    </h1>
                    <h1 className="mineres-primary-heading mb-4">
                     and Web3 Technologies 
                    </h1>
                    <p className="mineres-detail-info mb-4">
                    Mineres harnesses the power of Web3 technologies to revolutionize the global mineral trade, particularly in emerging markets, by replacing outdated, centralized systems with decentralized, trustless solutions. Through blockchain and smart contracts, Mineres eliminates unnecessary intermediaries, offering miners, buyers, and communities direct access and control over their transactions. These smart contracts automatically enforce agreements and hold funds in escrow until confirmed delivery, ensuring secure, transparent, and fair trade without relying on third parties.
                    </p>
               
                  </div>
          
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style={{paddingInline:"3r3m"}}>

             <Swiper1 />
             
              </div>
            </div>
          </div>
        </section>


        <section id="gener-age">
          <div className="container">
            <div className="content-bg content-spacer">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-12 co-sm-12 col-12">
                  <h1 className="mineres-xl-heading">
                  Why Mineres Decentralized Marketplace?
                  </h1>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                  <p className="mineres-detail-info m-0">
                  Mineres' decentralized marketplace transforms the way metals are traded by unnecessary middlemen, reducing costs, and fostering direct connections between miners, wholesalers, and industrial buyers across the globe. By leveraging blockchain technology, it ensures transparency, trust, and efficiency in every transaction, giving control back to the participants rather than centralized authorities. This model not only accelerates cross-border trade but also empowers small-scale miners in emerging markets to access global demand, get fair pricing, and build verified reputations, all while promoting ethical and sustainable mining practices through on-chain verification and incentives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
   
   





        <section id="our-vision">
          <div className="container">
            <h1 className="mineres-main-heading text-center mb-4">
            MINERES (MRS) - THE FUTURE OF MINERAL TRADE WITH CRYPTO
            </h1>
          
            <div className="mineres-primary-text px-lg-5 font-20 d-block">
        
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
                   
                    A decentralized digital platform that connects verified miners directly with industrial buyers, eliminating unnecessary middlemen and ensuring transparent, fair trade. Buyers gain access to ethically sourced metals, while miners in emerging markets gain global exposure and better pricing.
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



   

        <section id="tolstoys-beta">
          <div className="container">
            <h1 className="mineres-main-heading text-center mb-4">
            TOKEN UTILITY - MRS
            </h1>
            <div className="mineres-primary-text px-lg-5 font-20 d-block">
              <p className="mineres-detail-info  px-lg-5 mb-0 text-center">
              The utility token of the platform serves various functions that enable participants to access platform features, and contribute to the ecosystem
              </p> 
            </div>
          <Box  sx={{ marginTop:"3rem"}}>
            <div className="beta-slider slick-initialized slick-slider slick-dotted">
              {/*
            <div class="beta-box-wrapper">
                <div class="beta-box-inner-img text-center">
                    <img src="assets/img/phased.svg">
                </div>
                <h1 class="beta-box-title text-center mt-4 mb-2">Phased Deployment</h1>
                <div class="beta-detail-box">
                    <p class="mineres-detail-info text-center">Alethea AI will release its AI Models progressively over time with taking into considerations the learnings and developments during the initial releases. These models can be used by anyone, including the AI Providers of the iNFT Protocol.</p>
                </div>
            </div>
  */}
              <div className="slick-list draggable">
                <Box
                  className="slick-track"
              sx={{display:"flex", flexDirection:{xs:"column", sm:"row"}, alignItems:"center", flexWrap:'wrap'}}
                >
                  <div
                    className="beta-box-wrapper slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width:"330px", height:"550px", marginBlockStart:"1rem"  }}
                    data-slick-index={0}
                    aria-hidden="false"
                    role="tabpanel"
                    id="slick-slide40"
                    aria-describedby="slick-slide-control40"
                  >
                    <div className="beta-box-inner-img text-center">
                      <img src="assets/img//mxl1.png"  style={{width:"100px", height:"100px", marginBlock:"1rem"}}/>
                    </div>
                    <h1 className="beta-box-title text-center mt-4 mb-2">
                      {" "}
                      Payments for Mineral Resource Transactions
                    </h1>
                    <div className="beta-detail-box">
                      <p className="mineres-detail-info  px-2 text-center">
         
                      Mineres enables fast, secure, and transparent payments using blockchain technology. Transactions for earth metals are conducted using the MRS token, allowing for low-fee, borderless payments while eliminating intermediaries that typically increase costs and delays.
                      </p>
                    </div>
                  </div>
                  <div
                    className="beta-box-wrapper slick-slide"
                    tabIndex={-1}
                    style={{ width:"330px", height:"550px", marginBlock:"1rem"   }}
                    data-slick-index={1}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide41"
                    aria-describedby="slick-slide-control41"
                  >
                    <div className="beta-box-inner-img text-center">
                      <img src="assets/img/mxl2.png" style={{width:"100px", height:"100px"}}/>
                    </div>
                    <h1 className="beta-box-title text-center mt-4 mb-2">
                    Escrow Contracts Between Sellers and Buyers
                    </h1>
                    <div className="beta-detail-box">
                      <p className="mineres-detail-info  px-2 text-center">
                    
To ensure fairness and trust, Mineres uses smart escrow contracts that automatically hold funds until both parties fulfill their obligations. This trustless mechanism protects buyers and sellers alike by enforcing transparent, tamper-proof agreements without relying on a centralized authority.


                      </p>
                    </div>
                  </div>
                  <div
                    className="beta-box-wrapper slick-slide"
                    tabIndex={-1}
                    style={{ width:"330px", height:"550px"  }}
                    data-slick-index={2}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide42"
                    aria-describedby="slick-slide-control42"
                  >
                    <div className="beta-box-inner-img text-center">
                      <img src="assets/img/mxl3.png" style={{width:"100px", height:"100px"}}/>
                    </div>
                    <h1 className="beta-box-title text-center mt-4 mb-2">
                      {" "}
                      Miner Verification and Reputation Tracking
                    </h1>
                    <div className="beta-detail-box">
                      <p className="mineres-detail-info  px-2 text-center">
                      The Mineres Foundation supports sustainable and ethical mining. It rewards operations that demonstrate environmental responsibility and reinvests in communities impacted by mining activities through development programs, education, and infrastructure projects.
                      </p>
                    </div>
                  </div>


                  <div
                    className="beta-box-wrapper slick-slide"
                    tabIndex={-1}
                    style={{ width:"330px", height:"550px"  }}
                    data-slick-index={2}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide42"
                    aria-describedby="slick-slide-control42"
                  >
                    <div className="beta-box-inner-img text-center">
                      <img src="assets/img/p3.webp" style={{width:"100px", height:"100px"}}/>
                    </div>
                    <h1 className="beta-box-title text-center mt-4 mb-2">
                      {" "}
                      The Mineres Foundation 
                    </h1>
                    <div className="beta-detail-box">
                      <p className="mineres-detail-info  px-2 text-center">
                
                      The Mineres Foundation supports sustainable and ethical mining. It rewards operations that demonstrate environmental responsibility and reinvests in communities impacted by mining activities through development programs, education, and infrastructure projects.
                      </p>
                    </div>
                  </div>

                  <div
                    className="beta-box-wrapper slick-slide"
                    tabIndex={-1}
                    style={{ width:"330px", height:"550px"  }}
                    data-slick-index={2}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide42"
                    aria-describedby="slick-slide-control42"
                  >
                    <div className="beta-box-inner-img text-center">
                      <img src="assets/img/mxl6.png" style={{width:"100px", height:"100px"}}/>
                    </div>
                    <h1 className="beta-box-title text-center mt-4 mb-2">
                      {" "}
                      B2B Discounts Through the Mineres E-commerce Platform
                    </h1>
                    <div className="beta-detail-box">
                      <p className="mineres-detail-info  px-2 text-center">
                    
                      Businesses using the Mineres marketplace gain access to exclusive discounts on B2B services. By integrating e-commerce with token-based incentives, Mineres enhances business efficiency and reduces operational costs for supply chain partners.
                      </p>
                    </div>
                  </div>


                  <div
                    className="beta-box-wrapper slick-slide"
                    tabIndex={-1}
                    style={{ width:"330px", height:"550px"  }}
                    data-slick-index={2}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide42"
                    aria-describedby="slick-slide-control42"
                  >
                    <div className="beta-box-inner-img text-center">
                      <img src="assets/img/p-d.png" style={{width:"100px", height:"100px"}}/>
                    </div>
                    <h1 className="beta-box-title text-center mt-4 mb-2">
                      {" "}
                      Token Staking for Supply Priority and Buyer Guarantees
                    </h1>
                    <div className="beta-detail-box">
                      <p className="mineres-detail-info  px-2 text-center">
               
                      Participants can stake MRS tokens to gain supply priority or assure sellers of serious buying intent. This staking model reduces uncertainty in transactions and creates an incentive structure that benefits both sides of the trade.
                      </p>
                    </div>
                  </div>

                  
                  <div
                    className="beta-box-wrapper slick-slide"
                    tabIndex={-1}
                    style={{ width:"330px", height:"550px"  }}
                    data-slick-index={2}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide42"
                    aria-describedby="slick-slide-control42"
                  >
                    <div className="beta-box-inner-img text-center">
                      <img src="assets/img/digital-company.webp" style={{width:"100px", height:"100px"}}/>
                    </div>
                    <h1 className="beta-box-title text-center mt-4 mb-2">
                      {" "}
                      Funding Research and Development
                    </h1>
                    <div className="beta-detail-box">
                      <p className="mineres-detail-info  px-2 text-center">
                     
                      A portion of the MRS token economy is allocated to research and development in rare earth metals. This includes exploring new scientific applications, discovering new elements, and fostering innovation that benefits global industries and future technologies.
                      </p>
                    </div>
                  </div>
                  
                </Box>
              </div>
         
            </div>
         
            </Box>
          
          </div>
        </section>
       

        <section id="backed-by">
          <div className="container">
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", width:"100%", color:"#fff", marginBottom:"1rem", fontWeight:"1200"}} >
              <h3 >Our Partners</h3>
            </div>
       <Box sx={{backgroundColor:"#fff", padding:"5rem 3rem", borderRadius:"1.5rem", display:"flex", flexDirection:{xs:"column", sm:"row"}, flexWrap:"wrap", columnGap:{sm:"5rem"}, rowGap:"4rem", alignItems:{xs:"center"}}}>
         


           <img src="assets/img/25.png" style={{}} className="img1" />
          
 
           <img src="assets/img/sociokit.jpeg" style={{width:"100px",height:"100px"}} className="img1" />
           <img src="assets/img/binance.png" style={{width:"100px",height:"100px"}} className="img1" />
      
          
           <img src="assets/img/43.png" style={{width:"100px",height:"100px"}} className="img1" />
         
           <img src="assets/img/26.jpeg" style={{width:"100px",height:"100px"}} className="img1" />
          
          
    
         
       </Box>
          </div>
        </section>


        <div className="divider mb-5" />

        <Footer />
      </div>
    </>
  );
}

export default Home;

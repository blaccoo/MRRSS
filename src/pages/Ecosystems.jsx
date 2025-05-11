import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Box, Grid, Typography } from '@mui/material'
import Roadmap2 from "../components/Roadmap2"
import Tokenmetrics from '../components/Tokenmetrics'

function Ecosystems() {
 
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


<div className='container'>
<div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
<div   style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
              <h3 style={{ color:"#fff"}}>MRS Tokenomics</h3>
                
            </div>
<Box  sx={{width:{xs:"90vw",sm:"60vw"},height:{xs:"60vh",sm:"80vh"}, backgroundColor:"#000", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:{xs:"2rem", sm:'2rem'}, borderRadius:"2rem"}}>

                     <Tokenmetrics/>
                     <p style={{fontSize:"18px", color:"#fff", marginTop:"1rem"}}>Total supply (2 Billion)</p>
              </Box>
</div>
</div>

<div style={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center",marginBlock:"5rem"}}>
<h3 style={{ color:"#fff"}}>Roadmap and future vision </h3>
<Roadmap2/>

</div>


    <div className="divider mb-5" />
   <Footer/>
  </div>

  );
}

export default Ecosystems;
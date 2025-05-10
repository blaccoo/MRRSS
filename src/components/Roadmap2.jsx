import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function OutlinedTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>   <div className="milestone-inner" style={{height:"400px", width:"300px"}}>
                      <div>
                        <h4>Q2 2025</h4>
                   <ul  style={{listStyleType:"circle", color:"#fff", fontSize:"12px",textAlign:"center"}}>
                    <li  style={{marginBottom:"1rem"}}>
                    Mineres kicks off its journey by finalizing and publishing the whitepaper, laying down the vision, architecture, and tokenomics that will guide the project. The MRS token—the native utility token powering the Mineres ecosystem—is officially launched on the BNB Chain, enabling staking, payments, and decentralized finance features. Simultaneously, the team initiates development of the MVP (Minimum Viable Product) version of the Mineres Marketplace: a Web3 platform designed to connect miners, buyers, and supply chain stakeholders in a transparent, trustless environment.
                    </li>
                 
                  
                   </ul>
                      </div>
                    
                    </div> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>  <div className="milestone-inner" style={{height:"400px", width:"300px"}}>
                      <div>
                        <h4>Q3 2025</h4>
                        <ul  style={{listStyleType:"circle", color:"#fff", fontSize:"12px",textAlign:"center"}}>
                    <li  style={{marginBottom:"1rem"}}>In this critical phase, Mineres enters the market with a beta launch of its decentralized e-commerce platform, enabling early users to test features, provide feedback, and initiate transactions. The onboarding of miners begins, with a focus on artisanal and small-scale miners across Africa, Latin America, and other emerging regions who have historically lacked direct access to global markets. Meanwhile, global industrial buyers are brought into the ecosystem. Strategic partnerships are formed with B2B networks and logistics providers, laying the groundwork for streamlined operations and scaling adoption.</li>
              
                  
                   </ul>
                      </div>
                   
                    </div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>  <div className="milestone-inner" style={{height:"400px", width:"300px"}}>
                      <div>
                        <h4> Q4 2025</h4>
                        <ul  style={{listStyleType:"circle", color:"#fff", fontSize:"12px", textAlign:"center", }}>
                    <li  style={{marginBottom:"1rem"}}>The platform enters its smart contract phase, launching staking and escrow mechanisms that ensure secure, trustless transactions between buyers and sellers. Funds are held in escrow and released automatically only when delivery conditions are verified—building trust without intermediaries. The Miner NFT system is also introduced, allowing miners to mint digital identities that verify not only their origin but also their commitment to ethical and sustainable mining practices. These NFTs will serve as digital passports for reputation, access, and rewards within the ecosystem.</li>
                
                   </ul>


                      </div>
                    </div></TimelineContent> 
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>  <div className="milestone-inner" style={{height:"450px", width:"300px", textAlign:"center"}}>
                      <div>
                        <h4>Q1 2026</h4>
                        <ul  style={{listStyleType:"circle", color:"#fff", fontSize:"12px",}}>
                    <li  style={{marginBottom:"1rem"}}>Mineres officially launches its full platform to the world, with end-to-end functionality including logistics, payment, and compliance tools. The platform integrates with global logistics networks and regulatory databases to provide transparent, cross-border trade at scale. The development of the DAO governance model begins, setting the stage for community-driven decision-making and protocol evolution. Recognizing the critical role of rare earth elements in future technologies, Mineres also establishes partnerships with research institutions. Initial funding is allocated to support R&D in rare earth extraction, sustainability, and recycling, and a transparent governance mechanism is developed to manage these innovation projects with community oversight.</li>
               
                  
                   </ul>
                   </div>
                    </div></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

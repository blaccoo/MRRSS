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
        <TimelineContent>   <div className="milestone-inner" style={{height:"500px", width:"300px"}}>
                      <div>
                        <h4>Jan 2023</h4>
                   <ul  style={{listStyleType:"circle", color:"#fff", fontSize:"12px",textAlign:"center"}}>
                    <li  style={{marginBottom:"1rem"}}>Define Project Goals: Clearly identify the objectives and vision of the secure web3 space platform. Determine the desired features, functionality, and target audience.</li>
                  <li style={{marginBottom:"1rem"}}>Conduct Market Research: Analyze the existing data exchange landscape, identify competitors, and assess market needs and opportunities. Understand the challenges and pain points faced by users and data providers.</li>
                  <li style={{marginBottom:"1rem"}}>Define Token Economy: Design the token model that will be used for governance and transaction fees within the platform. Determine the token distribution mechanism, utility, and incentives for participants.</li>
                  <li style={{marginBottom:"1rem"}}>Technical Feasibility Study: Assess the feasibility of implementing the desired features using ML models and Solidity smart contracts. Identify any technical limitations, potential risks, and necessary infrastructure requirements</li>
                  
                   </ul>
                      </div>
                    
                    </div> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>  <div className="milestone-inner" style={{height:"580px", width:"300px"}}>
                      <div>
                        <h4>July 2023</h4>
                        <ul  style={{listStyleType:"circle", color:"#fff", fontSize:"12px",textAlign:"center"}}>
                    <li  style={{marginBottom:"1rem"}}>Smart Contract Development: Build the Solidity smart contracts that will govern the functionalities of the secure web3 space. Include features such as data listing, access control, payment mechanisms, and governance protocols.</li>
                  <li style={{marginBottom:"1rem"}}>ML models Integration: Integrate ML models as the underlying storage and retrieval system for the data exchange platform. Implement ML models libraries and APIs to facilitate seamless uploading, downloading, and sharing of data.</li>
                  <li style={{marginBottom:"1rem"}}>User Interface Design and Development: Create an intuitive and user-friendly interface for data providers and consumers. Design a dashboard or marketplace where users can interact with the platform, list their data, and discover available datasets.</li>
                  <li style={{marginBottom:"1rem"}}>Token Implementation: Develop the ERC-20 compliant token that will be used for governance and transaction fees. Implement smart contract functions for token transfers, staking, voting, and other governance mechanisms</li>
                  
                   </ul>
                      </div>
                   
                    </div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>  <div className="milestone-inner" style={{height:"580px", width:"300px"}}>
                      <div>
                        <h4> September 2023</h4>
                        <ul  style={{listStyleType:"circle", color:"#fff", fontSize:"12px", textAlign:"center", }}>
                    <li  style={{marginBottom:"1rem"}}>Testnet Deployment: Deploy the secure web3 space platform on a testnet environment. Conduct comprehensive testing to ensure the stability, security, and functionality of the platform. Identify and fix any bugs or vulnerabilities.</li>
                  <li style={{marginBottom:"1rem"}}>Security Audits: Engage third-party security auditors to perform a thorough security audit of the smart contracts and overall platform infrastructure. Address any identified vulnerabilities and ensure the platform is robust against potential attacks.</li>
                  <li style={{marginBottom:"1rem"}}>Community Testing and Feedback: Invite a select group of users to participate in beta testing. Gather feedback, iterate on the platform's user experience, and make necessary improvements based on user input.</li>
                  <li style={{marginBottom:"1rem"}}>Mainnet Deployment: Launch the secure web3 space platform on the mainnet. Migrate the smart contracts and associated data to the live blockchain network. Communicate the platform launch to the community and encourage participation.</li>
                  
                   </ul>


                      </div>
                    </div></TimelineContent> 
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>  <div className="milestone-inner" style={{height:"620px", width:"300px", textAlign:"center"}}>
                      <div>
                        <h4>December 2023</h4>
                        <ul  style={{listStyleType:"circle", color:"#fff", fontSize:"12px",}}>
                    <li  style={{marginBottom:"1rem"}}>Community Building: Engage with the community of data providers, consumers, and token holders. Foster discussions, address concerns, and encourage active participation in platform governance. Organize events, webinars, and educational resources to promote awareness and adoption.</li>
                  <li style={{marginBottom:"1rem"}}>Partnerships and Integrations: Explore partnerships with other blockchain projects, data providers, and industry stakeholders to expand the reach and capabilities of the platform. Seek integrations with complementary technologies and platforms to enhance functionality and user experience.</li>
                  <li style={{marginBottom:"1rem"}}>Continuous Development: Maintain an agile development cycle to regularly release updates, bug fixes, and new features. Stay responsive to user feedback and market demands to ensure the platform remains competitive and innovative.</li>
                  <li style={{marginBottom:"1rem"}}>Marketing and Adoption: Develop a comprehensive marketing strategy to increase awareness and adoption of the secure web3 space platform. Showcase success stories, use cases, and the benefits of participating in the ecosystem.</li>
                  
                   </ul>
                   </div>
                    </div></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

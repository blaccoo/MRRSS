import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Alert, Box } from "@mui/material";

function Stake() {
 
  return (
    <Box >
    <Navbar/>
    <div className="SPNSTAKE2">
    <div className="SPNSTAKE-container2">
      <div className="SPNSTAKE-contain2">
        <div className="header2">
          <h1>Participate in $HKX STAKING Program-The Vault </h1>
        </div>
        <div className="duration2">
          <div className="days2">
            7 DAYS
          </div>
          <div className="days2">
            30 DAYS
          </div>
          <div className="days2">
            90 DAYS
          </div>
          <div className="days2">
            180 DAYS
          </div>
        </div>
        <div>
          <p style={{color: 'rgb(255, 255, 255, 0.5)'}}>Lock Period: 7days</p>
          <p style={{color: 'rgb(255, 255, 255, 0.5)'}}>Early unstake fee: 0%</p>
          <p style={{color: 'rgb(255, 255, 255, 0.5)'}}>Minimum Staking Amount: 0 HKX</p>
          <p style={{color: 'rgb(255, 255, 255, 0.5)'}}>Maximum Staking Amount:1,000,000,000 HKX</p>
          <p style={{color: 'rgb(255, 255, 255, 0.5)'}}>Status: Coming soon</p>
          <p style={{color: 'rgb(255, 255, 255, 0.5)'}}>Additional Reward *: NA</p>
          <p style={{fontSize: 'small', color: 'white', textAlign: 'center'}}>Balance:---HKX</p>
          <div className="transaction2">
            <div className="Input-amount2">
              <input type="text" placeholder="00:00"  style={{width:"180px"}}/>
              <button>stake</button>
              
            </div>
          </div>
        </div>
        <div>
          <p style={{color: 'aliceblue', fontSize: '0.9rem'}}>Reward:15% HKX</p>
          <button style={{marginTop: '1.2rem', width: '100%', backgroundColor: "green", padding: '10px 0px', color: 'white', border: 'none', outline: 'none'}}>CLAIM REWARD</button>
        </div>
        <div>
          <button style={{marginTop: '2rem', width: '100%', backgroundColor: 'red', padding: '10px 0px', color: 'white', border: 'none', outline: 'none'}}>UNSTAKE HKX</button>
        </div>
      </div>
      <div className="Amount2">
        <div>
          <h2>0.00 HKX</h2>
          <p>Total stake token</p>
        </div>
        <div>
          <h2>0</h2>
          <p>Number of stakes </p>
        </div>
        <div>
          <h2>0.00 HKX</h2>
          <p>Your staked token</p>
        </div>
      </div>
    </div>

  
  </div>
  <Footer/>
    </Box>

  );
}

export default Stake;
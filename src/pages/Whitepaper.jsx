import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

function Whitepaper() {
  return (
    <Box>
   
      <div style={{ textAlign: "center",}}>
  
        <iframe
          src="MINERESWHITEPAPERPROJECT2025-3.pdf"
          width="100%"
          height="800px"
          title="Whitepaper PDF"
          style={{ border: "none" }}
        />
      </div>
 
    </Box>
  );
}

export default Whitepaper;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

function Privacy() {
  return (
    <Box>
   
      <div style={{ textAlign: "center",}}>
  
        <iframe
          src="Privacy.pdf"
          width="100%"
          height="800px"
          title="Privacy PDF"
          style={{ border: "none" }}
        />
      </div>
 
    </Box>
  );
}

export default Privacy;

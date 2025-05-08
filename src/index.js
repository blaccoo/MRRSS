import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import {theme} from "./theme"
import { ThemeProvider } from '@emotion/react';
import {
  BrowserRouter,

} from "react-router-dom";


import { Web3ReactProvider } from "@web3-react/core";
import { Buffer } from 'buffer';
import { ethers } from "ethers";



 


const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

window.Buffer = window.Buffer || Buffer;






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>  
  <BrowserRouter>
 

 <Web3ReactProvider getLibrary={getLibrary}>
 <App />

 </Web3ReactProvider>


  </BrowserRouter>
</ThemeProvider>
 
);

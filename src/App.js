

import {
 
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Homes';
import Features  from './pages/Features';

import Careers from "./pages/Careers"
import About from "./pages/About"
import Stake from "./pages/Stake";
import Whitepaper from "./pages/Whitepaper";
import Community from "./pages/Community";
import Ecosystems from "./pages/Ecosystems";
import Privacy from "./pages/Privacy";







function App() {





  return (

<Routes> 
    <Route path="/" element={<Home/>} />
    <Route path="/features" element={<Features/>} />
  
    <Route path="/careers" element={<Careers/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/stake" element={<Stake/>} />
    <Route path="/community" element={<Community/>} />
    <Route path="/ecosystems" element={<Ecosystems/>} />
    <Route path="/whitepaper" element={<Whitepaper/>} />
    <Route path="/privacy" element={<Privacy/>} />
     
  </Routes>
   
    
    
  )
}

export default App


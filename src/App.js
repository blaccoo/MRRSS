

import {
 
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Homes';
import Features  from './pages/Features';

import Careers from "./pages/Careers"
import About from "./pages/About"
import Stake from "./pages/Stake";







function App() {





  return (

<Routes> 
    <Route path="/" element={<Home/>} />
    <Route path="/features" element={<Features/>} />
  
    <Route path="/careers" element={<Careers/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/stake" element={<Stake/>} />
   
     
  </Routes>
   
    
    
  )
}

export default App


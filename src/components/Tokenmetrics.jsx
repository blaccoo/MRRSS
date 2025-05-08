import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export const data = {
  labels: ["Public (staking, Trading Sale) 65%"," Mineres Foundation 10%", " Research & Development (R&D) 10%","Team & Advisors 5%", "Reserve / Treasury/ Project Development 5%","Marketing & Partnerships 5%"],
  datasets: [
    {
      label: 'MRS TOKENOMICS',
      data: [65, 10, 10,5,5,5 ],
      backgroundColor: [
        'rgba(255, 255, 255, 0.2)',
        'rgba(0, 0, 0, 0.2)',
        'rgba(238, 25, 54, 0.2)',
        'rgba(111, 233, 12, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(87, 185, 185, 0.2)',

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      
     
      
      ],


      
      borderWidth: 1,
   
    },
  ],

  
};

export const options ={
  plugins: {  // 'legend' now within object 'plugins {}'
    legend: {
      labels: {
        color: "#fff",  // not 'fontColor:' anymore
        // fontSize: 18  // not 'fontSize:' anymore
        font: {
          size: 16 // 'size' now within object 'font {}'
        }
      }
    }
  }}   
 

function Tokenmetrics() {
  return (
    <Doughnut data={data}   options=  {options}/>
  )
}

export default Tokenmetrics

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
        'rgb(255, 255, 0)',
        'rgba(255, 170, 145, 0.9)',
        'rgb(0, 0, 0)',
        'rgba(245, 240, 225, 0.9)',
        'rgba(165, 165, 165, 0.9)',
        'rgb(135, 206, 235)',

      ],
      borderColor: [
        'rgba(255, 225, 225, 1)',
        'rgba(225, 225, 225, 1)',
      
     
      
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

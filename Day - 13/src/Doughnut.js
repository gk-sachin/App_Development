import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughNut() {
    const data = {
        labels: [
          'Water',
          'Water Not Taken'
         
          
        ],
        datasets: [{
          label: 'My Water Intake Data',
          data: [3,30 ],
          backgroundColor: [
            'rgb(39,245,94)',
            'rgb(220, 30,132)'
            
            
          ],
          hoverOffset: 4
        }]
      };
    return ( 
        <div id="chart-container">

               <Doughnut data={data} />
            </div>
     );
}

export default DoughNut;
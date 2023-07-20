import React from "react";
import { Pie } from "react-chartjs-2";

function Piechart() {
    const data={labels:['Healthy Food','Junk Food','Fruits'],
    datasets:[{label:'My Nutrition',data:[300,50,100],
    backgroundColor:['rgb(255,99,132)','rgb(54,162,235)','rgb(255,205,86)'],
    hoverOffset:10}]}

    
      return (
        
            <div id="chart-container">

               <Pie data={data} />
            </div>

          
      );

    
}

export default Piechart;
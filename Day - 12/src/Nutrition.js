import React from 'react'
import PieChart from "./piechart";

const Nutrition = () => {
  return (
    <div class="nutrition" id="nutrition">
    <div class="footer">
    <div className="nut">
        <h1>Nutrition</h1>
      </div>
      <div class="desc">
        <PieChart />
      </div>
    </div>
  </div>
  )
}

export default Nutrition

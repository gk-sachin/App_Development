import React from 'react'
import BarChart from './barchart'

const Workout = () => {
  return (
    <div class="workout" id="workout">
      <div class="footer">
      <div className="nut">
          <h1>Workout</h1>
        </div>
        <div class="desc">
        <BarChart />
        </div>
      </div>
    </div>
  )
}

export default Workout

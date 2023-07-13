import React from "react";
import Hnavbar from "./hnavbar";
import { Bar } from "react-chartjs-2";
import BarChart from "./barchart";

function Homepage() {
    return ( 
        <>
    <Hnavbar/>
    
    <div class="goals" id="goals">
      <div class="footer">
        <div class="desc">
         <BarChart />
        </div>
        <div class="abc">
          
        </div>
      </div>
    </div>

    <div class="activity" id="activity">
      <div class="footer">
        <div class="desc">
          <h1>Activity</h1>
          <div class="delivery">
            <p>Click to See <a href="delivery">Full Details</a></p>
          </div>
        </div>
        <div class="abc">
            <div class="custom">
              <a href="custom">Custom Order</a>
            </div>
            <div class="inventory">
            <a href="inventory">Existing Inventory</a>
            </div>
        </div>
      </div>
    </div>

    <div class="challenges" id="challenges">
      <div class="footer">
        <div class="desc">
          <h1>Challenges</h1>
          <div class="delivery">
            <p>Click to See <a href="delivery">Full Details</a></p>
          </div>
        </div>
        
          <div class="abc">
            <div class="custom">
            <a href="custom">Custom Order</a>
            </div>
            <div class="inventory">
            <a href="inventory">Existing Inventory</a>
          </div>
        </div>
      </div>
    </div>

    <div class="workout" id="workout">
      <div class="footer">
        <div class="desc">
          <h1>Workout</h1>
          <div class="delivery">
            <p>Click to See <a href="delivery">Full Details</a></p>
          </div>
        </div>
          <div class="abc">
            <div class="custom">
            <a href="custom">Custom Order</a>
            </div>
            <div class="inventory">
            <a href="inventory">Existing Inventory</a>
            </div>
          </div>
      </div>
    </div>

    <div class="nutrition" id="nutrition">
      <div class="footer">
        <div class="desc">
          <h1>Nutrition</h1>
          <div class="delivery">
            <p>Click to See<a href="delivery">Full Details</a></p>
          </div>
        </div>
          <div class="abc">
            <div class="custom">
            <a href="custom">Custom Order</a>
            </div>
            <div class="inventory">
            <a href="inventory">Existing Inventory</a>
            </div>
          </div>
      </div>
    </div>

    <div class="socials" id="socials">
      <div class="footer">
        <div class="desc">
          <h1>Socials</h1>
          <div class="delivery">
            <p>Click to See <a href="delivery">Full Details</a></p>
          </div>
        </div>
        
          <div class="abc">
            <div class="custom">
            <a href="custom">Custom Order</a>
            </div>
            <div class="inventory">
            <a href="inventory">Existing Inventory</a>
            </div>
          </div>
        </div>
    </div>

    <div class="water" id="water">
      <div class="footer">
        <div class="desc">
          <h1>Water Intake</h1>
          <div class="delivery">
            <p>Click to See <a href="delivery">Full Details</a></p>
          </div>
        </div>
        
          <div class="abc">
            <div class="custom">
            <a href="custom">Custom Order</a>
            </div>
            <div class="inventory">
            <a href="inventory">Existing Inventory</a>
            </div>
          </div>
        </div>
    </div>
    </> 
     );
}

export default Homepage;
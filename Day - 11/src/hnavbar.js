import React from "react";
import { Link } from "react-router-dom";
import imga from "./logo.svg";
import Homepage from "./home";

function Hnavbar() {
    return ( 
        <>
        <div class="header">
        <div className="heading1">
                <img src={imga}></img>
                <Link to = "/home"><h1>Fitness<span>Tracker</span></h1></Link>
            </div>
            <div className="links">
                <div className="link2">
                <a href="#goals"><h2>Goals</h2></a>
                </div>
                <div className="link2">
                <a href="#activity"><h2>Activity</h2></a>
                </div>
                <div className="link2">
                <a href="#challenges"><h2>Challenges</h2></a>
                </div>
                <div className="link2">
                <a href="#workout"><h2>Workout</h2></a>
                </div>
                <div className="link2">
                <a href="#nutrition"><h2>Nutrition</h2></a>
                </div>  
                <div className="link2">
                <a href="#socials"><h2>Socials</h2></a>
                </div>
                <div className="link2">
                <a href = "#water" ><h2>Water</h2></a>
                </div>
            </div>        
          
                                      
            
        
        
        
      </div>
        </>
     );
}

export default Hnavbar;
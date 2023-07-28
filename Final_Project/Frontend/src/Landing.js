import React from "react";
import exgif from "./bg.gif"
import { Navigate, useNavigate } from "react-router-dom"
import Navbar from "./navbar";

function Landingpage() {
    const navigate = useNavigate();
    return ( 
        <>
        <Navbar />
        <div className="main" style={{paddingTop:"50px"}}>

        <div className="Land">
            <div className="b" id="text">
                <h1> Strength training is an important way to improve mobility and overall functioning, particularly as you get older. 
                    “As you age, you lose muscle mass, which can have a significant impact on the quality of life</h1>   

                <button className="btnn" onClick={()=> {navigate("/login")}}>Get Started</button> 
            </div> 
            
            <div className="b">
                <img src={exgif} height={500} alt="" />
            </div>
        </div>
        </div>
        </>
     );
}

export default Landingpage;
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserIcon from "./UserIcon.gif";
import imga from "./logo.svg";
function Navbar() {
    // const navigate = useNavigate();
    return ( 
        <>
        <div className="navbar">
            <div className="heading">
                <img src={imga}></img>
                <Link to = "/landing"><h1>Fitness<span>Tracker</span></h1></Link>
            </div>
                
            <div className="link">
                <div className="li">
                <Link to = "/login" ><h2>Sign In</h2></Link>
                </div>
                <div className="lii">
                <Link to = "/register"  ><button className="bt">Sign Up</button></Link>
                </div>
                                      
            </div>
            
        </div>
        </>
     );
}

export default Navbar;
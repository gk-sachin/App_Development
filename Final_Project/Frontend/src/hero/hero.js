import React, { useEffect } from "react";
import { useState } from "react";
import "./hero.css";
import "../App.css";
import hero_image from "../hero_image.png";
import hero_image_back from "../hero_image_back.png";
import Heart from "../heart.png";
import Calories from "../calories.png";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Proicon from "./Proicon.png";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const Hero = () => {
  
  const user = useSelector(selectUser);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waterintake,setWaterIntake] = useState("");
  const [details,getdetails]=useState();
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  const [popup, setPop] = useState(false);
  const [myData,setMyData] = useState([]);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
 
  useEffect(()=>{
    
    axios.get("http://localhost:8080/hw/get")
    .then((r)=>{
      getdetails(r);
      setMyData(r.data)
      
    })
    .catch((error)=>{
      console.log(error);
    })
    
  })
  const submitHandler = async (e) => {
    e.preventDefault();
    try { 
      const response = await axios.post(
        "http://localhost:8080/hw/save",
        {
          height: height,
          weight: weight,
          waterintake:waterintake,
        }
        )
        
     
      if (response.status == 200) {
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  
  };
  
  return (
    <div className="hero">
      <ToastContainer/>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Welcome To Fitness Tracker, {user.user}</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Track </span>
            <span>Your</span>
          </div>
          <div>
            <span>Body Fitness</span>
          </div>
          <div>
            <span>See Your Full Health Details</span>
          </div>
        </div>
        {myData.slice(0,2).map((post)=>
        {
          return (
            <div className="figures">
          <div>
            <span>{post.weight} Kg</span>
            <span>Weight</span>
          </div>
          <div>
            <span>{post.height} Cm</span>
            <span>Height</span>
          </div>
          <div>
            <span>2.5 L</span>
            <span>Water Intake</span>
          </div>
        </div>
          )
        })}
        

        <div className="hero-buttons">
          <a href="#programs">Get Started</a>
          <button className="hero-btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <div className="pro-ic">
          <img
            src={Proicon}
            alt="No Img"
            className="proimg"
            onClick={handleClickOpen}
          />

          <div>
            {popup ? (
              <div className="popup-main">
                <div className="popup">
                  <div className="popup-header">
                    <h1>User Details</h1>
                    <h1 className="close-btn" onClick={closePopup}>
                      X
                    </h1>
                  </div>
                  <div>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          required
                          id="outlined-required"
                          label="Weight"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                        <TextField
                          required
                          id="outlined-required"
                          label="Height"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                        <TextField
                          required
                          id="outlined-required"
                          label="Water"
                          value={waterintake}
                          onChange={(e) => setWaterIntake(e.target.value)}
                        />
                      </div>
                    </Box>
                    <button
                      className="hero-btn"
                      onClick={(e) => {
                        submitHandler(e);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <Link to="../login" className="hero-btn">
          Logout
        </Link>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>110 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        <motion.div
          initial={{ right: "58rem" }}
          whileInView={{ right: "48rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import axios from "axios";
import { useDispatch } from 'react-redux';
import {login} from './Redux/userSlice';


function Loginpage() {
  const dispatch = useDispatch();
	const navigate = useNavigate();
	const[email,setEmail]=useState('');
	const[password,setPassword]=useState('');
  

  const submitHandler=async(e)=>{
   
    e.preventDefault();
      
    try{
      axios.post('http://localhost:8181/api/v1/auth/authenticate',
      {email:email,password:password})
      .then((response)=>{
        console.log(email);
        navigate('/home');
        dispatch(
          login({
            user: email,
            }))
      });
      
      
    }
    catch(error){
      console.log("Error: ",error);
    }
    }
  
  
  return (
    <>
      <Navbar />
      <div className="outer">
        <div className="image">
          <img src="SignIn.jpg" alt="img" />
        </div>
        <div className="container">
          <h1>Login</h1>
          <form className="auth">
            <TextField
              className="input"
              id="standard-basic"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="Email"
              variant="outlined"
            />

            <TextField
              input type="password"
              className="input"
              id="standard-basic"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              variant="outlined"
            />
            
            <button
              className="btn"
             onClick={submitHandler}
              
              type="submit"
            >
              Login
            </button>
       
          </form>
          
          <button
            className="btn-1"
            onClick={() => {
              navigate("/register");
            }}
          >
            Don't have an account?Register
          </button>
        </div>
      </div>
    </>
  );
}
export default Loginpage;

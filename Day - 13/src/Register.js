import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Navbar from "./navbar";
import axios from "axios";




function Register() {
  const[Name,setName]=useState('');
	const[username,setUsername]=useState('');
	const[email,setEmail]=useState('');
	const[password,setPassword]=useState('');
	const[type,setType]=useState('');
  const navigate = useNavigate();
  

  const [error,setError]=useState("");
 

  const submitHandler=async(e)=>{
e.preventDefault();

if (username.length === 0 && email.length === 0 && password.length === 0) {
  setError("Invalid Form, All fields are required");
  return;
} else if (username.length === 0) {
  setError("Invalid Form, Username can not be empty");
  return;
} else if (email.length === 0) {
  setError("Invalid Form, Email can not be empty");
  return;
} else if (password.length === 0) {
  setError("Invalid Form, Password can not be empty");
  return;
} else if (username.length > 0 && email.length > 0 && password.length > 0) {
  setError("");
try{
  const response=await axios.post('http://localhost:8181/api/v1/auth/register',{name:Name,username:email,
  email:email,password:password,
 });
  if(response.status==200){
    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setType('');
    //    setPassword('');
    navigate('/home');
    window.alert('Registration successful!');
  }
}
catch(error){
  console.log("Error: ",error);
}
}}


  return (  
    <>
    <Navbar />
      <div className="outer1">
        <div className="image">
          <img src="SignUp.jpg" alt="img" />
        </div>
        <div className="container">
          <h1>Register</h1>
          <form className="auth">
          <TextField
              id="standard-basic"
              className="input"
              
              onChange={(e) => {
                setName(e.target.value);
              }}
              label="Name"
              variant="outlined"
            />
            <TextField
              id="standard-basic"
              className="input"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label="Username"
              variant="outlined"
            />
            <TextField
              id="standard-basic"
              className="input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="Email"
              variant="outlined"
            />
             <FormControl>
      <FormLabel className="gender">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <div className="select">
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        </div>
      </RadioGroup>
        </FormControl>

       
            
            <TextField
            input type="password"
              id="standard-basic"
              className="input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              variant="outlined"
            />
            <button className="btn" onClick={(e)=>{
              submitHandler(e);
           }}>
              Register
            </button>
            <p style={{color:"red"}}>{error}</p>
          </form>
          <button 
            className="btn-1"
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have an account?Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
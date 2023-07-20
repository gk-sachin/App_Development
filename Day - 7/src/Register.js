import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Navbar from "./navbar";



function Register() {
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    setusername("");
    setpassword("");
    setemail("");
    setdate("");
    setname("");
  };
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
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              label="Name"
              variant="outlined"
            />
            <TextField
              id="standard-basic"
              className="input"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
              label="Username"
              variant="outlined"
            />
            <TextField
              id="standard-basic"
              className="input"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
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
              id="standard-basic"
              className="input"
              value={date}
              onChange={(e) => {
                setdate(e.target.value);
              }}
              label="Date of Birth"
              variant="outlined"
            />
            
            <TextField
              id="standard-basic"
              className="input"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              label="Password"
              variant="outlined"
            />
            <button className="btn" onClick={handlesubmit}>
              Register
            </button>
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
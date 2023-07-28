import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./Login";
import Register from "./Register";
import Homepage from "./home";
import Landingpage from "./Landing";
import Activity from "./activity";
import Challenge from "./Challenge";
import Workout from "./Workout";
import Nutrition from './Nutrition';
import FeedbackForm from "./Feedback/Feedback";


function App() {
  return (
    <>
    <Router>
   
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path = "/activity" element={<Activity/>}/>
        <Route path="/challenge" element={<Challenge/>}/>
        <Route path="/workout" element={<Workout/>}/>
        <Route path="/nutrition" element={<Nutrition/>}/>
        <Route path="/feedback" element={<FeedbackForm/>}/>

      </Routes>
    </Router>
  </>
  

  );
}

export default App;
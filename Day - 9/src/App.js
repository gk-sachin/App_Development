import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./Login";
import Register from "./Register";
import Homepage from "./home";
import Landingpage from "./Landing";
import BarChart from "./barchart";
function App() {
  return (
    <>
    <Router>
   
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bargraph" element={<BarChart />} />
      </Routes>
    </Router>
  </>
  

  );
}

export default App;
import React from "react";
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Pharmacy from './components/Pharmacy';
import Beauty from './components/Beauty';
import Guidance from "./components/Guidance";
import AlphaHealth from "./components/AlphaHealth";
import PharmacistChat from "./components/PharmacistChat";

const App = () => {
    return (
          <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/pharmacy" element={ <Pharmacy/>} />
              <Route path="/beauty" element={ <Beauty/>} />
              <Route path="/pharmacistchat" element={ <PharmacistChat/>} />
              <Route path="/alphahealth" element={ <AlphaHealth/>} />
              <Route path="/guidance" element={ <Guidance/>} />
              
              {/* Add more routes as needed */}
          </Routes>
  );
};

export default App;

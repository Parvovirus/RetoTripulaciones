import './App.css';
import axios from "axios"
import React, { useState } from "react";
import Register from './pages/Register';
import Login from './pages/Login';


function App() {

  return (
    <div className="App">
      
      <Register />
      <Login />

    </div>
  );

}

export default App;

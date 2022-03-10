
import axios from "axios"
import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
 
 import Main from './components/Main';

 import './App.scss';
function App() {

  return (
    <div className="App">
<BrowserRouter>
   <Main/>
   </BrowserRouter>
    </div>
  );

}

export default App;

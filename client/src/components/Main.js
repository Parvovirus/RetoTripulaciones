import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Portal from "../pages/Portal"
import Act1 from "../pages/Activity1"
import Act2 from "../pages/Activity2"
import Act3 from "../pages/Activity3"

const Main = () => {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/portal' element={<Portal />} />

        <Route path='/act1' element={<Act1 />} />
        <Route path='/act2' element={<Act2 />} />
        <Route path='/act3' element={<Act3 />} />


      </Routes>



    </div>
  )
}

export default Main
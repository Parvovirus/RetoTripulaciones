import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Portal from "../pages/Portal"
import Activities from "../pages/Activities"

const Main = () => {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/portal' element={<Portal />} />
        <Route path='/act1/:idact' element={<Activities />} />
       


      </Routes>



    </div>
  )
}

export default Main
import React from 'react'
import UsersBanner from '../components/UsersBanner'
import { Link } from 'react-router-dom'
import Search from "../components/Search"
import "./css/Portal.scss"
const Portal = () => {
  return (
    <div className='Portal'>
        <Search/>
        <UsersBanner/>
        <p>Actividades</p>

       <Link to={"/act1"}> <div className='Activity act1'>Actividad 1</div></Link>
       <Link to={"/act2"}><div className='Activity act2'>Actividad 2</div></Link>
       <Link to={"/act3"}> <div className='Activity act3'>Actividad 3</div></Link>
   

      




    </div>
  )
}

export default Portal
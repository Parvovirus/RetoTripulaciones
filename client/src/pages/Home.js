import React from 'react'
import {Link} from'react-router-dom'
import "./css/Home.scss"
const Home = () => {
  return (
    <div className='Home'>

       <button><Link to={"/login"} > Iniciar sesión</Link></button>
      <button><Link to={"/register"} >Registrar</Link></button>

    </div>
  )
}

export default Home
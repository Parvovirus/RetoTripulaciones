import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Home.scss"
import cohouse from "../img/COHAUSE.png";

const Home = () => {
  return (
    <div className='Home'>
      <div className='Bienvenida'>
        <p className="text">Bienvenido a</p>
        <img src={cohouse}></img>

        <p className="text2">Alternativa a las nuevas vivencias de convivencia comunitaria</p>

      </div>
      <div className='buttons'>
        <button className='login'><Link to={"/login"} > Iniciar sesión</Link></button>
        <button className='register'><Link to={"/register"} >Crear una cuenta</Link></button>
      </div>

     
    </div>
  )
}

export default Home
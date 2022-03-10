import React from 'react'
import {Link} from'react-router-dom'

const Home = () => {
  return (
    <div>

      PAGINA HOME


      <button><Link to={"/login"} > Iniciar sesión</Link></button>
      <button><Link to={"/register"} >Registrar</Link></button>

    </div>
  )
}

export default Home
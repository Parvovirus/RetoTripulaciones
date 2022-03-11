import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/Navbar.scss";


const Navbar = () => {

  

    return (
        <div className="Navbar">
            <ul>
                <li><Link to={"/portal"} >Mis actividades</Link></li>
                <li>|</li>
{/* Recogere el parametro para recoger la info de ese usuario: pillar por tokens */}
                <li> <Link to={"/planes"} >Mis planes</Link></li>
                <li>|</li>
                <li><Link to={"/perfil"} >Perfil</Link></li>

            </ul>

        </div>
    );
}
export default Navbar;
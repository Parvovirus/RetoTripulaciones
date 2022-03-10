import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/Navbar.scss";

const Navbar = () => {

    return (
        <div className="Navbar">
            <ul>
                <li><Link to={"/Act"} >Mis actividades</Link></li>
                <li>|</li>
                <li> <Link to={"/misplanes"} >Mis planes</Link></li>
                <li>|</li>
                <li><Link to={"/perfil"} >Perfil</Link></li>

            </ul>

        </div>
    );
}
export default Navbar;
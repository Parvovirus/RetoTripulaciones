import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.scss";
import Home from "./icons/Home.png";
import Age from "./icons/Calandar.png";
import Mapa from "./icons/Map.png";



const Navbar = () => {



    return (
        <div className="Navbar">
            <ul>
                <li><img className="icons ihome" src={Mapa}></img><Link to={"/portal"} >Explorar</Link></li>
                <li><img className="icons iage" src={Age}></img> <Link to={"/planes"} >Reservas</Link></li>
                <li><img className="icons ihome" src={Home}></img><Link to={"/perfil"} >Mi perfil</Link></li>
            </ul>
        </div>
    );
}
export default Navbar;
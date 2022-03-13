import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/Login.scss";
import Buttonb from "../components/icons/Buttonb.png"
import useAxiosAuth from "../hooks/useAxiosAuth";
import Cookies from "universal-cookie";
import Tlf from "../components/icons/Call.png";


const cookies = new Cookies();

function Login() {
  
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const [user] = useAxiosAuth("datauser");

  useEffect(() => {
    if (user != "") {
      console.log(user.data.auth);

      if (user.data.auth) {
        navigate("/portal");
      } else {
      }
    }
  }, [user]);

  const checkLogin = () => {
    let filtro = {
      phone,
    };

    axios.post("login", filtro).then((res) => {
      const { token, message, status } = res.data;
      alert(message);

      if (status) {
        cookies.set("token", token);
      }
    });
  };

  return (
    <div>

      <Link to={"/"}> <img className="buttonBack" src={Buttonb} ></img></Link>
      <h2 className="titleCreate">Iniciar Sesión</h2>

      <div className="Login">
        <label>Número de Teléfono</label>

        <div>
          <img className="icons itlf" src={Tlf}></img>
          <input
            type="text"
            placeholder="600 000 000"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button onClick={checkLogin}>Continuar</button>
      </div>

    </div>
  );
}
export default Login;

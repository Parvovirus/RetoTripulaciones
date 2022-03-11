import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.scss";
import useAxiosAuth from "../hooks/useAxiosAuth";
import Cookies from "universal-cookie";
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

      if (status == true) {
        cookies.set("token", token);
      }
    });
  };

  return (
    <div className="Login">
      <input
        type="text"
        placeholder="Teléfono"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={checkLogin}>Iniciar Sesión</button>
    </div>
  );
}
export default Login;

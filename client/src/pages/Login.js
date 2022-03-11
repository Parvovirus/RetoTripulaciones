import axios from "axios"
import React, { useState } from "react";
import "./css/Login.scss"
function Login() {

    const [tlf, setTlf] = useState("");

    const checkLogin = () => {
        let filtro = {
            tlf,
        }

        axios.post("login", filtro).then((res) => {
            console.log(res.data);
        });
    }


    return (
        <div className="Login">

       
                <input type="text" placeholder="Teléfono" onChange={(e) => setTlf(e.target.value)} />
                <button onClick={checkLogin}>Iniciar Sesión</button>
           
        </div>
    );


}
export default Login;

import axios from "axios"
import React, { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const checkLogin = () => {
        let filtro = {
            email,
            password,

        }
        axios.post("login", filtro).then(res => console.log(res.data));

    }

    return (
        <div className="App">

            <div>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Pass" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={checkLogin}>Click</button>
            </div>
        </div>
    );

}

export default Login;

import axios from "axios"
import React, { useState } from "react";

function Register() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [cp, setCp] = useState("");
  const [population, setPopulation] = useState("");

  const [viewViewUserExist, setViewUserExist] = useState(false);
  const [ViewUserRegister, setViewUserRegister] = useState(false);


  const test = () => {

    let filtro = {
      name,
      lastName,
      email,
      dni,
      password,
      address,
      cp,
      population
    }

    axios.post("register", filtro).then((res) => {
      if (res.data == "userExist") {
        setViewUserExist(true);
        console.log(res.data);
      }
      if (res.data == "userRegister") {
        setViewUserRegister(true);
        console.log(res.data);
      }
      
    });

  }


  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)}  />
        {viewViewUserExist ? (<span>Usuario ya existe</span>) : ""}
        <input type="text" placeholder="Apellido" onChange={(e) => setLastName(e.target.value)}  />
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}  />
        <input type="text" placeholder="DNI" onChange={(e) => setDni(e.target.value)}  />
        <input type="password" placeholder="Pass" onChange={(e) => setPassword(e.target.value)}  />
        <input type="text" placeholder="Direccion" onChange={(e) => setAddress(e.target.value)}  />
        <input type="text" placeholder="CP" onChange={(e) => setCp(e.target.value)}  />
        <input type="text" placeholder="Población" onChange={(e) => setPopulation(e.target.value)}  />
        <button onClick={test}>Registrar</button>
      </div>
      {ViewUserRegister ? (<span>Usuario Creado</span>) : ""}
    </div>
  );

}

export default Register;

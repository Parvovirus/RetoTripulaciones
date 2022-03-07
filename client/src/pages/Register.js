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

    axios.post("register", filtro).then(res => console.log(res.data));

  }

  const login = () => {
    let filtro = {
      email,
      password,

    }
  }

  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Apellido" onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="DNI" onChange={(e) => setDni(e.target.value)} />
        <input type="password" placeholder="Pass" onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Direccion" onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder="CP" onChange={(e) => setCp(e.target.value)} />
        <input type="text" placeholder="Población" onChange={(e) => setPopulation(e.target.value)} />
        <button onClick={test}>Click</button>
      </div>
    </div>
  );

}

export default Register;

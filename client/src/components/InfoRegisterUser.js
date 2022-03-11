import axios from "axios";
import React, { useState } from "react";
import "./css/InfoRegisterUser.scss";
function InfoRegisterUser(props) {
  const [idCoHousing, setidCoHousing] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [tlfUser, setTlfUser] = useState("");
  const [dateUser, setDateUser] = useState("");

  // const[registerData,setRegisterData] = useState([]);

  const test = () => {
    console.log(props.hidden);
    let filtro = {
      idCoHousing,
      nameUser,
      tlfUser,
      dateUser,
    };

    if (!idCoHousing | !nameUser | !tlfUser | !dateUser) {
      alert("revisa los campos");
    } else {
      axios.post("checkdata", filtro).then((res) => {
        alert(res.data.message);
        if (res.data.dataRegisterUser) {
          props.saveDataUser(res.data.dataRegisterUser);
          props.hidden(false);
          props.show(true);
        }
      });
    }
  };

  return (
    <div className="InfoRegisterUser">
     
 
      <input
        type="number"
        placeholder="Codigo Coliving"
        className="inputs-color"
        onChange={(e) => setidCoHousing(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setNameUser(e.target.value)}
      />
      <input
        type="number"
        placeholder="Teléfono"
        onChange={(e) => setTlfUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Fecha de Nacimiento"
        onChange={(e) => setDateUser(e.target.value)}
      />
      <button onClick={test}>Siguiente</button>
     
     
    </div>
  );
}

export default InfoRegisterUser;

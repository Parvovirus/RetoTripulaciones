import axios from "axios";
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./css/InfoRegisterUser.scss";
import Buttonb from "./icons/Buttonb.png";
import Home from "./icons/Home.png";
import Name from "./icons/Profile.png";
import Tlf from "./icons/Call.png";
import Age from "./icons/Calandar.png";


function InfoRegisterUser(props) {
  const [idCoHousing, setidCoHousing] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [tlfUser, setTlfUser] = useState("");
  const [dateUser, setDateUser] = useState("");

  const [styleHouse, setStyleHouse] = useState("icons ihome")
  const [styleName, setStyleName] = useState("")
  const [styleIphone, setStyleIphone] = useState("")
  const [styleAge, setStyleAge] = useState("")

  // const[registerData,setRegisterData] = useState([]);

  const test = () => {

    let filtro = {
      idCoHousing,
      nameUser,
      tlfUser,
      dateUser,
    };

    var regExpCode = new RegExp(/\d{9}/);
    var regExpName = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u);
    var regExpTlf = new RegExp(/\d{9}/);
    // var regExpBirth = new RegExp(/^(19[123456])\d[1234567]{1}\d/);

    const idCoHousingOk = regExpCode.test(idCoHousing);
    const nameUserOk = regExpName.test(nameUser);
    const tlfUserOk = regExpTlf.test(tlfUser);
    const dateUserOk = (dateUser > 1912 && dateUser < 1967);

   {idCoHousingOk ? setStyleHouse("icons ihome"): setStyleHouse("icons ihome ihomegreen") }



    if (!idCoHousingOk | !nameUserOk | !tlfUserOk | !dateUserOk) {
      alert("revisa los campos");
    } else {


      axios.post("checkdata", filtro).then((res) => {
        alert(res.data.message);
        if (res.data.dataRegisterUser) {
          props.saveDataUser(res.data.dataRegisterUser);
          props.hidden(false);
          props.show(true);
          console.log(res.data.message)
        }
      });
    }
  };

  return (
    <div className="cnt-infregist">

      <Link to={"/"}> <img className={styleHouse} src={Buttonb} ></img></Link>
      <h2 className="titleCreate">Crear una cuenta</h2>

      <div className="InfoRegisterUser">

        <label>Código Co-Housing</label>
        <div>

          {idCoHousing ? console.log(idCoHousing) : ""}
          <img className="icons ihome" src={Home}></img>
          <input
            type="number"
            placeholder="000-000-000"
            className="inputs-color"
            onChange={(e) => setidCoHousing(e.target.value)}
          />
        </div>

        <label>Nombre y Apellido</label>
        <div>
          <img className="icons iname" src={Name}></img>
          <input
            type="text"
            placeholder="Alberto Fernández"
            onChange={(e) => setNameUser(e.target.value)}
          />
        </div>

        <label>Número de Teléfono</label>
        <div>
          <img className="icons itlf" src={Tlf}></img>
          <input
            type="number"
            placeholder="600 000 000"
            onChange={(e) => setTlfUser(e.target.value)}
          />

        </div>
        <label>Año de Nacimiento</label>
        <div>

          <img className="icons iage" src={Age}></img>
          <input
            type="text"
            placeholder="1950"
            onChange={(e) => setDateUser(e.target.value)}
          />

        </div>
        <button onClick={test}>Continuar</button>
      </div>
    </div>

  );
}

export default InfoRegisterUser;

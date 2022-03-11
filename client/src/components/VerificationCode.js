import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/VerificationCode.scss";
const VerificationCode = (props) => {
  const [msm1, setMsm1] = useState("");
  const [msm2, setMsm2] = useState("");
  const [msm3, setMsm3] = useState("");
  const [msm4, setMsm4] = useState("");
  const [secretNumber, setSecretNumber] = useState("");
  useEffect(() => {

}, []);
  const test = () => {
    props.show(true);
    props.hidden(false);
  };

  const generateRandomNumber = ()=>{

    let randomNumber = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

setSecretNumber(randomNumber)

alert("Su código de verificación es " + randomNumber)

  }






  return (
    <>
      <div className="VerificationCode">
        <input type="text" value={secretNumber[0]} onChange={(e) => setMsm1(e.target.value)} />
        <input type="text"  value={secretNumber[1]} onChange={(e) => setMsm2(e.target.value)} />
        <input type="text" value={secretNumber[2]} onChange={(e) => setMsm3(e.target.value)} />
        <input type="text" value={secretNumber[3]} onChange={(e) => setMsm4(e.target.value)} />
 
      </div>

      <div className="button-div">
 
      
        {secretNumber?  <button onClick={test}>Siguiente</button>:         <button onClick={generateRandomNumber}>Código de verificación</button>
}
      </div>
    </>
  );
};

export default VerificationCode;

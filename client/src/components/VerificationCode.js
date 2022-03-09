
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const VerificationCode = (props) => {

  const test = () => {
    props.show(true);
    props.hidden(true);
  }

  useEffect = (() => {

  }, [])

  
  const [msm1, setMsm1] = useState("");
  const [msm2, setMsm2] = useState("");
  const [msm3, setMsm3] = useState("");
  const [msm4, setMsm4] = useState("");

  return (
    <div>

      <input type="password" placeholder="-" onChange={(e) => setMsm1(e.target.value)} />
      <input type="password" placeholder="-" onChange={(e) => setMsm2(e.target.value)} />
      <input type="password" placeholder="-" onChange={(e) => setMsm3(e.target.value)} />
      <input type="password" placeholder="-" onChange={(e) => setMsm4(e.target.value)} />

      <button onClick={test}>Siguiente</button>


    </div>
  )
}

export default VerificationCode
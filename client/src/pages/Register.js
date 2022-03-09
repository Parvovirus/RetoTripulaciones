import React, { useState } from "react";
import InfoRegisterUser from "../components/InfoRegisterUser";
import FaceId from "../components/FaceId";
import VerificationCode from "../components/VerificationCode";


function Register() {

  const [viewRegister, setViewRegister] = useState(true)
  const [viewVerification, setViewVerification] = useState(false)
  const [viewFaceId, setViewFaceId] = useState(false)

 
  return (

    <div className="App">
      <div>

        {viewRegister ? (<InfoRegisterUser hidden={setViewRegister} show={setViewVerification} />) : ("")}
        {viewVerification ? (<VerificationCode hidden={setViewVerification} show={setViewFaceId}/>) : ("")}
        {viewFaceId ? (<FaceId />) : ("")}
      </div>
    </div>
  );

}

export default Register;

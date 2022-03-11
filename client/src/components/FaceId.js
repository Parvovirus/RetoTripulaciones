import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import animationFaceId from "../img/faceid.gif"
import "./css/Faceid.scss"

const FaceId = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 10000);
  }, []);

  return (
    <div className="Faceid">

<img src={animationFaceId}></img>
   

    </div>
  )
}

export default FaceId
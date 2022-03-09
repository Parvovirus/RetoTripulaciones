import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const FaceId = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 10000);
  }, []);

  return (
    <div>

      <p>SCAN FACE</p>

    </div>
  )
}

export default FaceId
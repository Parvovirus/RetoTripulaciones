import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const UseAxiosAuth = (props) => {

  const [res, setRes] = useState("");

  useEffect(() => {
    postBackend(props)

  }, []);


  const postBackend = async (props) => {

    //Recoge el token de las cookies
    let token = cookies.get("token")

    //Busca el endpoint de Routes con el props que se metio
    //
    const dataRes = await axios.get(`${props}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setRes(dataRes);
  };



  return [res];
};

export default UseAxiosAuth;

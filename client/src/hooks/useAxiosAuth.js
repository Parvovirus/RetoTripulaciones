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

     
    let token = cookies.get("token")
     const dataRes = await axios.get(`${props}`,{
      headers: { Authorization: `Bearer ${token}` },
    });
  
    setRes(dataRes); 
  };

 

  return  [res];
};

export default UseAxiosAuth;

import React, { useState, useEffect } from 'react'
import CategoryBanner from '../components/CategoryBanner'
import { Link } from 'react-router-dom'
import Search from "../components/Search"
import { useNavigate } from "react-router-dom";
import "./css/Portal.scss"
import axios from 'axios'
import Navbar from '../components/Navbar'
import Recommended from '../components/Recommended'

import useAxiosAuth from "../hooks/useAxiosAuth";

const Portal = () => {

  const navigate = useNavigate();

  // [idNameActivities] = [[id, nombre],[]]
  const [idNameActivities, setIdActivity] = useState("")

 

  const [user] = useAxiosAuth("datauser");

  useEffect(() => {
    if (user != "") {
      console.log(user.data.auth);

      if (user.data.auth) {
       
      } else {
        navigate("/");
      }
    }
  }, [user]);







  useEffect(() => {
    bannerActivities();
  }, []);

  const bannerActivities = () => {


    axios.get("getactivities").then((res) => {
      let cleanActivity = res.data;
    
      let idNameActivity = [];

      for (let i = 0; i < cleanActivity.length; i++) {
        idNameActivity.push([cleanActivity[i].idActivity , cleanActivity[i].name, cleanActivity[i].banner ]);
      }

      setIdActivity(idNameActivity);
    
    })
  }

  return (
    <div className='Portal'>
      <Search />
      <CategoryBanner />
      <Recommended />

      <p>Actividades</p>


      {idNameActivities ? idNameActivities.map((act, i) => <Link key={i} to={`/act1/${act[0]}`}> <img className='Activity act1' src={act[2]}></img></Link>) : ""}

      <Navbar/>

    </div>
  )
}

export default Portal
import React, { useState, useEffect } from 'react'
import CategoryBanner from '../components/CategoryBanner'
import { Link } from 'react-router-dom'
import Search from "../components/Search"
import "./css/Portal.scss"
import axios from 'axios'
import Navbar from '../components/Navbar'
import Recommended from '../components/Recommended'



const Portal = () => {


  // [idNameActivities] = [[id, nombre],[]]
  const [idNameActivities, setIdActivity] = useState("")

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
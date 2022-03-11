import React, { useState, useEffect } from 'react'
import CategoryBanner from '../components/CategoryBanner'
import { Link } from 'react-router-dom'
import Search from "../components/Search"
import "./css/Portal.scss"
import axios from 'axios'
import Navbar from '../components/Navbar'
import Recommended from '../components/Recommended'



const Portal = () => {

  const [allActivities, setAllActivities] = useState("")
  const [selectByCategory, setSelectByCategory] = useState(1);


  useEffect(() => {
    bannerActivities();
  }, []);

  const bannerActivities = () => {


    axios.get("getactivities").then((res) => {
      let cleanActivity = res.data;

      setAllActivities(cleanActivity);

    })
  }


  console.log(allActivities)
  return (
    <div className='Portal'>
      <Search />
      <CategoryBanner />
      <Recommended />

      <p>Actividades</p>

      {allActivities ? allActivities.map((act, i) => <Link key={i} to={`/act1/${act.idActivity}`}> <img className='Activity act1' src={act.banner}></img></Link>) : ""}

      <Navbar />

    </div>
  )
}

export default Portal
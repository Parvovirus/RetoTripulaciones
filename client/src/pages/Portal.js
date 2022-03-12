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
  const [allActivities, setAllActivities] = useState("")
  const [selectByCategory, setSelectByCategory] = useState(1);

  const [filterCategory, setFilterCategory] = useState()



  const [user] = useAxiosAuth("datauser");

  useEffect(() => {
    if (user != "") {

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
      setAllActivities(cleanActivity);
    })
  }

  return (
    <div className='Portal'>
      <div className='perfilname'>
        {user ? <img src={user.data.data[0].avatar}></img> : ""}
        {user ? <span> Hola, <span className="namebold">{user.data.data[0].name}</span></span> : ""}
      </div>
      <CategoryBanner setFilter={setFilterCategory} />
      {/* <Search /> */}
      <Recommended />

      <p>Actividades</p>

      {filterCategory | allActivities ?

        allActivities.filter((alt) => alt.id_Category == filterCategory)
          .map((act, i) =>
            <Link key={i} to={`/act1/${act.idActivity}`}> <img className='Activity act1' src={act.banner}></img></Link>
          )
        :
        allActivities.map((act, i) =>
          <Link key={i} to={`/act1/${act.idActivity}`}> <img className='Activity act1' src={act.banner}></img></Link>
        )}
   



      <Navbar />

    </div >
  )
}

export default Portal
import React, { useState, useEffect } from 'react'
import CategoryBanner from '../components/CategoryBanner'
import Search from "../components/Search"
import { useNavigate, Link } from "react-router-dom";
import "./css/Portal.scss"
import axios from 'axios'
import Navbar from '../components/Navbar'
import Recommended from '../components/Recommended'
import useAxiosAuth from "../hooks/useAxiosAuth";


const Portal = () => {


  const navigate = useNavigate();
  const [allActivities, setAllActivities] = useState("")
  const [filterCategory, setFilterCategory] = useState("")



  const [user ,auth] = useAxiosAuth("datauser");
 

  
  useEffect(() => {
    if(auth===true){

   navigate("/portal")
   } else if(auth===false){

    navigate("/")
   }

 }, [auth])
  

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
      <div className='navbar-top-fixed'>
        <div className='perfilname'>
          {user && auth ? <img src={user.data.data[0].avatar}></img> : ""}
          {user && auth  ? <span> Hola, <span className="namebold">{user.data.data[0].name}</span></span> : ""}
        </div>
        <Search />
      </div>
      <CategoryBanner setFilter={setFilterCategory} />
      <Recommended />

      {/* {filterCategory ? console.log(filterCategory) : ""} */}

      {/* Existe allActivities ? ->  */}
      <div className='cont-actividades'>
        {allActivities ?
          // Para pintar todas no tiene que haber filtro de categorías
          (!filterCategory ? allActivities.map((act, i) =>
            <Link key={i} to={`/act1/${act.idActivity}`}> <img className='Activity' src={require(`${allActivities[i].banner}`)}></img></Link>
            // Si hay giltro solo pinta las actividades filtradas
          ) : allActivities.filter((alt) => alt.id_Category === filterCategory)
            .map((act, j) =>
              <Link key={j} to={`/act1/${act.idActivity}`}> <img className='Activity' src={require(`${act.banner}`)}></img></Link>
            ))
          : ""}
      </div>


      <Navbar />

    </div >
  )
}

export default Portal;
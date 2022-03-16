import React, { useState, useEffect } from 'react'
import CategoryBanner from '../components/CategoryBanner'
import Search from "../components/Search"
import { useNavigate, Link } from "react-router-dom";
import "./css/Portal.scss"
import Buttonb from "../components/icons/Buttonb.png"
import axios from 'axios'
import Navbar from '../components/Navbar'
import useAxiosAuth from "../hooks/useAxiosAuth";
import BarraPortal from '../components/BarraPortal';



const Portal = () => {


  const navigate = useNavigate();
  const [allActivities, setAllActivities] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [viewCategories, setViewCategories] = useState(true)
  const [viewButton, setViewButton] = useState(false);



  const [user, auth] = useAxiosAuth("datauser");



  useEffect(() => {
    if (auth === true) {

      navigate("/portal")
    } else if (auth === false) {

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

      {viewButton ?
        <div className="button-position">
          <img className="buttonBack button-position" src={Buttonb} onClick={() => { setViewCategories(true); setViewButton(false) }}>
          </img>
        </div>
        : ""}

      {viewCategories ? <div className='navbar-top-fixed'>

      <div className='perfilname'>
          {user && auth ? user.data.data[0].idUser == 1 ?

            <img src={require("../img/Mari.png")}></img> : <img src={user.data.data[0].avatar}></img> : ""}
          {user && auth ?
            <span> Hola, <span className="namebold">{user.data.data[0].name}</span></span>
            : ""}
        </div>
        <Search />
        <CategoryBanner setFilter={setFilterCategory} setHidden={setViewCategories} setButton={setViewButton} />
      </div> : ""}


      {/* {filterCategory ? console.log(filterCategory) : ""} */}

      {/* Existe allActivities ? ->  */}
      <div className='cont-actividades'>
      <p className='title-recomended'>Recomendados</p>
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


      {viewCategories ? <Navbar /> : ""}
      <BarraPortal />


    </div >
  )
}

export default Portal;
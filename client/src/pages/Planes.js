import React, { useState, useEffect } from 'react'
import "./css/Planes.scss"
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import useAxiosAuth from '../hooks/useAxiosAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Planes.scss"


const Planes = () => {

    const navigate = useNavigate();
    const [dataUser, setDataUser] = useState("");
    const [allActivities, setAllActivities] = useState("");


    const [user] = useAxiosAuth("datauser");

    useEffect(() => {
        if (user != "") {
            if (user.data.auth) {
                getActivities();
            } else {
                navigate("/");
            }
        }

    }, [user]);
    useEffect(() => {

    }, [])



    const getActivities = () => {
        let filter = {
            idUser: user.data.data[0].idUser
        }

        // fetch("http://3.14.80.216/api/model/recommender/643")
        // .then((res)=>console.log(res.text))
    
        
         axios.post("/getactivitiesuser", filter).then((res) => {
            let cleanActivity = res.data;
            let datos = cleanActivity.filter((dat)=>dat.status=="process")

 
            setAllActivities(datos);

        })

    }

console.log(allActivities)

 
     return (
        <div className='Planes'>
            <h1>Mis Reservas</h1>
            {allActivities ? allActivities.map((act, i) =>{
                
                let relative = require(`${act.bannerSelec}`)
                console.log(relative)

                return(
           /*  <div key={i} className="card-container">
<div className='card-hour'> HOY 10:00 </div>
<div className='card-img ' onClick={()=>navigate(`/activityreserved/${act.idAct}/${act.session}`)} style={ {  backgroundImage:`url(${relative} )`,filter: "brightness(0.5)" , backgroundSize: 'cover' ,   }}>
  
  
 <label >{act.nameAct}</label>
</div>

             </div>)}   */

             <div key={i} className="card-container">
             <div className='card-hour'> HOY 10:00 </div>
             <div className='card-img ' onClick={()=>navigate(`/activityreserved/${act.idAct}/${act.session}`)}>
               <img src={relative} alt="" />
               
              <label >{act.nameAct}</label>
             </div>
             
                          </div>)}  
             
            ) : ""}

            <Navbar />
        </div>
    )
}

export default Planes
import React, { useState, useEffect } from "react";
import profesorAvatar from "../img/profesor.jpg";
import "./css/Activity1.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";



const Activities = () => {

  useEffect(() => {
    getBannerAct();
    getUsers();
  }, []);

  const { idact } = useParams();

  // console.log(idact);

  const [users, setUsers] = useState();
  const [allUsers, setAllUsers] = useState()
  const [session, setSession] = useState();
  const [dataActivity, setDataActivity] = useState();

  const getBannerAct = () => {

    axios.post("/getoneactivity", { idActivity: idact }).then((res) => {

      let clearActivity = res.data;
      setDataActivity(clearActivity);
    });

  }
  // console.log(session)

  //!Seleciona a los users que se han apuntado a la actividad
  const getUsers = () => {
    axios.get("/getusers").then((res) => {
      let cleanUsers = res.data;
      let idActivity = idact;
      setAllUsers(res.data)

      // [userss] -> filtrado por actividad elegida
      let userss = cleanUsers.filter((act) => {
        if (act.activities[0].idActivity == `${idActivity}`) {
          return act;
        }
      });

      setUsers(userss);
    });


  };


  //! Se pasan los filtros de los usuarios por la session que se han apuntado
  const paintUsers = () => {
    if (session == 1) {

      return users.filter((act) => { if (act.activities[0].session == session) { return act } }).map((user, i) => {
        return (<div key={i}>
       
          <img   src={user.avatar} />
        </div>)
      })


    } else if (session == 2) {
      return users.filter((act) => { if (act.activities[0].session == session) { return act } }).map((user, i) => {
        return (<div key={i}>
       
       <img   src={user.avatar} />
        </div>)
      })


    } else if (session == 3) {
      return users.filter((act) => { if (act.activities[0].session == session) { return act } }).map((user, i) => {
        return (<div key={i}>
       
       <img   src={user.avatar} />
        </div>)
      })

    }

  }

  // document.querySelector

  return (
    <div className="Activity1">

      {/* Banner de la actividad */}
      {dataActivity ? <img src={require(`${dataActivity.banner}`)} alt="" /> : ""}
      <div className="prox-sessiones">


      
        {/* Se pinta botones de las sessiones que hay */}
        <div className="sessions-container">
          {dataActivity ? dataActivity.sessions.map((act, i) => <button className="buttons-sessions" onClick={() => setSession(act.numberSession)} key={i}>Sesión {act.numberSession}</button>) : ("")}

        </div>

      </div>

      <div className="ProfessorInfo">
        <img src={profesorAvatar} alt="" />
        <p>Profesor: Manuel</p>
      </div>


      <div className="participants">
 <h2>Plazas Disponibles</h2> 
 
      {paintUsers()} 
     
      </div>
      <Navbar />
    </div>
  );
}

export default Activities;

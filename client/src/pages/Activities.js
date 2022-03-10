import React, { useState, useEffect } from "react";
import act1Banner from "../img/act1.jpg";
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
      console.log(cleanUsers)
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
    // dataActivity ? console.log(dataActivity.sessions) : ("")


    if (dataActivity) {
      let sessionLength = dataActivity.sessions.length;
      console.log(sessionLength);



    }
    if (session == 1) {


      return users.filter((act) => { if (act.activities[0].session == session) { return act } }).map((user, i) => {
        return (<div key={i}>
          <p>{user.name}</p>
          <img src={user.avatar} />
        </div>)
      })




    } else if (session == 2) {
      return users.filter((act) => { if (act.activities[0].session == 2) { return act } }).map((user, i) => {
        return (<div key={i}>
          <p>{user.name}</p>
          <img src={user.avatar} />
        </div>)
      })


    } else if (session == 3) {
      return users.filter((act) => { if (act.activities[0].session == 3) { return act } }).map((user, i) => {
        return (<div key={i}>
          <p>{user.name}</p>
          <img src={user.avatar} />
        </div>)
      })


    }


  }



  return (
    <div className="Activity1">
      {/* Banner de lactividad */}
      {dataActivity ? <img src={dataActivity.banner} alt="" /> : ""}

      {/* Se pinta botones de las sessiones que hay */}
      <div className="sessions-container">
        {dataActivity ? dataActivity.sessions.map((act, i) => <button onClick={() => setSession(act.numberSession)} key={i}>Sesión {act.numberSession}</button>) : ("")}
      </div>

      <div className="ProfessorInfo">
        <img src={profesorAvatar} alt="" />
        <p>Profesor: Manuel</p>
      </div>


      <div className="participants">

        {paintUsers()}
      </div>
      <Navbar />
    </div>
  );
}

export default Activities;

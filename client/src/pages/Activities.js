import React, { useState, useEffect } from "react";
import profesorAvatar from "../img/profesor.png";
import "./css/Activity1.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { circlesArray } from "../circles.js";
import useAxiosAuth from "../hooks/useAxiosAuth";

const Activities = () => {
  const [users, setUsers] = useState();
  const [allUsers, setAllUsers] = useState();
  const [session, setSession] = useState();
  const [dataActivity, setDataActivity] = useState();
  const [circles, setCircles] = useState("");
  const [idUser, setIdUser] = useState("");
  const [subscription, setSubscription] = useState("");

  useEffect(() => {
    getBannerAct();
    getUsers();
  }, []);

  const { idact } = useParams();

  const [datauser, auth] = useAxiosAuth("/datauser");

  //user.data.data[0].idUser

  useEffect(() => {
    if (datauser != "") {
      let demos = datauser.data.data[0].activities.filter(
        (dat) => dat.idActivity == idact
      );

      if (demos) {
        if (demos[0].status == "process") {
          setSubscription(true);
        } else if (demos[0].status !== "process") {

          console.log("nada")
        }

      } else {

        console.log("vete a freir espaarggos")
      }

      setIdUser(datauser.data.data[0].idUser);
    }
  }, [datauser]);

  const getBannerAct = () => {
    axios.post("/getoneactivity", { idActivity: idact }).then((res) => {
      let clearActivity = res.data;
      setDataActivity(clearActivity);
    });
  };
  // console.log(session)

  //!Seleciona a los users que se han apuntado a la actividad

  const getUsers = async () => {
    await axios.get("/getusers").then((res) => {
      let cleanUsers = res.data;
      let idActivity = idact;

      setAllUsers(res.data);


      console.log(idActivity)
      console.log(cleanUsers)


      // [userss] -> filtrado por actividad elegida
      /*   let userss = cleanUsers.filter((act) => {
          if (act.activities[0].idActivity == `${idActivity}`) {
            return act;
          }
        }); */


      let userss = cleanUsers.filter((act) => act.activities[0].idActivity == `${idActivity}`);

      setUsers(userss);
    });
  };

  /*   user.avatar=="../img/circle.jpg"? alert("no"): alert("si")} */

  const savePlan = () => {
    let obj = {
      session: 1,
      idActivity: idact,
      idUser: idUser,
    };

    console.log(obj);

    axios.post("/saveplan", obj);
    /*   let obj= {
  session: 1,
  idActivity: idact,
  idUser: idUser

}  

   axios.post("/saveplan",obj) */
  };

  //! Se pasan los filtros de los usuarios por la session que se han apuntado
  const paintUsers = () => {
    if (session == 1) {
      let filtrado = users.filter((act) => {
        if (act.activities[0].session == session) {
          return act;
        }
      });


      let length = 20 - filtrado.length;
      let filterLength = 10 - length;

      for (let index = filterLength; index < circlesArray.length; index++) {
        filtrado.push(circlesArray[index]);
      }

      return filtrado.map((user, i) => {
        return (
          <div key={i}>
            <img
              src={user.avatar}
              onClick={() =>
                user.avatar == "../img/circle.jpg" ? savePlan(1) : ""
              }
            />
          </div>
        );
      });
    } else if (session == 2) {
      let filtrado = users.filter((act) => {
        if (act.activities[0].session == session) {
          return act;
        }
      });


      let length = 20 - filtrado.length;
      let filterLength = 20 - length;

      for (let index = filterLength; index < circlesArray.length; index++) {
        filtrado.push(circlesArray[index]);
      }

      return filtrado.map((user, i) => {
        return (
          <div key={i}>
            <img src={user.avatar} />
          </div>
        );
      });
    } else if (session == 3) {

      let filtrado = users.filter((act) => {
        if (act.activities[0].session == session) {
          return act;
        }
      });


      let length = 20 - filtrado.length;
      let filterLength = 20 - length;

      for (let index = filterLength; index < circlesArray.length; index++) {
        filtrado.push(circlesArray[index]);
      }

      return filtrado.map((user, i) => {
        return (
          <div key={i}>
            <img src={user.avatar} />
          </div>
        );
      });
    }
  };

  // document.querySelector

  return (
    <div className="Activity1">
      {/* Banner de la actividad */}

      {dataActivity ? (
        <img src={require(`${dataActivity.bannerSelec}`)} alt="" />
      ) : (
        ""
      )}
      <div className="prox-sessiones">
        {/* Se pinta botones de las sessiones que hay */}

        {dataActivity ? <p className="titles-sesiones nameAct">{dataActivity.name} </p> : ""}
        <p className="titles-sesiones">Próximas Sesiones</p>
        <div className="sessions-container">
          {dataActivity
            ? dataActivity.sessions.map((act, i) => (act.numberSession == 1 ?
              <div>
                <button
                  className="buttons-sessions"
                  onClick={() => setSession(act.numberSession)}
                  key={i}
                >
                  <label>HOY, 10:00</label>
                </button>
              </div> : act.numberSession == 2 ?
                <div>
                  <button
                    className="buttons-sessions"
                    onClick={() => setSession(act.numberSession)}
                    key={i}
                  >
                    <label> SABADO, 10:00</label>
                  </button>
                </div> : act.numberSession == 3 ? <div><button
                  className="buttons-sessions"
                  onClick={() => setSession(act.numberSession)}
                  key={i}
                >
                  <label>  DOMINGO, 10:00</label>
                </button>
                </div> : "")

            )
            : ""}
        </div>
      </div>
      <p className="titles-sesiones">Monitor</p>
      <div className="ProfessorInfo">
        <img src={profesorAvatar} alt="" />
        <div className="entreParraf">

          <p>Pedro Álvarez</p>
          {dataActivity ? <div><p>Monitor de {dataActivity.name}</p></div> : ""}

        </div>
      </div>

      <div className="participants">
        <h2>Plazas Disponibles</h2>

        {paintUsers()}

      </div>
      {subscription == true ? (
        <button className="login">Cancelar subscripción</button>
      ) : (
        ""
      )}

      <Navbar />
    </div>
  );
};

export default Activities;

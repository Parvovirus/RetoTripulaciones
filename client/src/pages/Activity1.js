import React, { useState, useEffect } from "react";
import act1Banner from "../img/act1.jpg";
import profesorAvatar from "../img/profesor.jpg";
import "./css/Activity1.scss";
import axios from "axios";

const Activity1 = () => {
  useEffect(() => {
    getUsers();
  }, []);

  const [users, setUsers] = useState();
  const [allUsers,setAllUsers]=useState()
  const [session,setSession]=useState()

  const getUsers = () => {
    axios("getusers").then((res) => {
      let cleanUsers = res.data;
      let idActivity = 1;

      setAllUsers(res.data)

      let userss = cleanUsers.filter((act) => {
        if (act.activities[0].idActivity == `${idActivity}`) {
          return act;
        }
      });

      setUsers(userss);
    });
  };
   const paintUsers = ()=>{

if(session==1){


 return users.filter((act)=>{ if(act.activities[0].session==1){ return act }}).map((user,i)=>{
  return(<div key={i}>
    <p>{user.name}</p>
    <img src={user.avatar}  />
  </div>)
})
 
 


}else if(session ==2){
  return  users.filter((act)=>{ if(act.activities[0].session==2){ return act }}).map((user,i)=>{
    return(<div key={i}>
      <p>{user.name}</p>
      <img src={user.avatar}  />
    </div>)
  })
 

}else if(session ==3){
  return  users.filter((act)=>{ if(act.activities[0].session==3){ return act }}).map((user,i)=>{
    return(<div key={i}>
      <p>{user.name}</p>
      <img src={user.avatar}  />
    </div>)
  })
 

}else if(allUsers!=undefined){

  return allUsers.map((user,i)=>{


    return(<div key={i}>
      <p>{user.name}</p>
      <img src={user.avatar}  />
    </div>)})
  
}


  }



  return (
    <div className="Activity1">
      <img src={act1Banner} alt="" />

      <div className="sessions-container">
        <div>
          <button onClick={()=>setSession(1)}>    Sesión 1</button>
      
       
        </div>
        <div>
          
        <button onClick={()=>setSession(2)}>    Sesión 2</button>

        </div>
        <div> 

        <button onClick={()=>setSession(3)}>    Sesión 3</button>

        </div>
      </div>

      <div className="ProfessorInfo">
        <img src={profesorAvatar} alt="" />
        <p>Profesor: Manuel</p>
      </div>

      <div className="alumnos"></div>

      <div className="participants">
      
      {paintUsers()}
      </div>
    </div>
  );
};

export default Activity1;

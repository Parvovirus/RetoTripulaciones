import React, { useState, useEffect } from 'react'
import "./css/Home.scss"
import Navbar from '../components/Navbar'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import useAxiosAuth from '../hooks/useAxiosAuth';



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
        axios.post("/getactivitiesuser", filter).then((res) => {
            let cleanActivity = res.data;
            setAllActivities(cleanActivity);
        })

    }

    return (
        <div className='Planes'>
            <h1>Planes</h1>
            {allActivities ? allActivities.map((act, i) =>
                <div key={i} className="cards">
                    <p>Actividad {act.nameAct}</p>
                    <div> {act.date} </div>
                    {/* {allActivities ? allActivities.map((actn, j) => if(actn.name )<div>{actn.name}</div>  ) : ""} */}

                    <div>{act.status}</div>
                </div>
            ) : ""}

            <Navbar />
        </div>
    )
}

export default Planes
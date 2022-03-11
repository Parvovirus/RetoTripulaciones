import React, { useState, useEffect } from 'react'
import "./css/Home.scss"
import Navbar from '../components/Navbar'
import { useParams } from "react-router-dom";
import axios from 'axios';




const Planes = () => {

    const { iduser } = useParams();
    const [dataUser, setDataUser] = useState("");
    const [allActivities, setAllActivities] = useState("");


    useEffect(() => {
        getActivities();
        getUser();
    }, [])



    const getUser = () => {

        axios.post("/getoneuser", { idUser: iduser }).then((res) => {
            let dataOneUser = res.data;
            setDataUser(dataOneUser);
        });

    }

    const getActivities = () => {

        axios.get("/getactivities").then((res) => {
            let cleanActivity = res.data;
            setAllActivities(cleanActivity);
        })

    }

    console.log(allActivities);
    const show = () => {
        console.log(dataUser);
    }

    const num = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className='Planes'>
            <h1>Planes</h1>
            {dataUser ? dataUser.activities.map((act, i) =>
                <div key={i} className="cards">
                    <p>Actividad {act.idActivity}</p>
                    <div> {act.date} </div>
                    {/* {allActivities ? allActivities.map((actn, j) => if(actn.name )<div>{actn.name}</div>  ) : ""} */}

                    <div>{act.status}</div>
                </div>
            ) : ""}
            <button onClick={() => show()}>Click</button>
            <Navbar />
        </div>
    )
}

export default Planes
import React, { useState, useEffect } from 'react'
import "./css/Planes.scss"
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import useAxiosAuth from '../hooks/useAxiosAuth';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



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
        console.log(filter)
        axios.post("/getactivitiesuser", filter).then((res) => {
            let cleanActivity = res.data;

            let datos = cleanActivity.filter((dat)=>dat.status=="process")

            console.log(datos)

            setAllActivities(datos);
        })

    }



    return (
        <div className='Planes'>
            <h1>Planes</h1>
            {allActivities ? allActivities.map((act, i) =>
                <Container xm={6} key={i} className="card card-body">
                    <Row>
                        <Col>
                            <p> {act.date} </p>
                       
                        </Col>
                        <Col className="bannerAtc">
                            <img src={act.banner}></img>
                        </Col>
                    </Row>
                </Container>
            ) : ""}

            <Navbar />
        </div>
    )
}

export default Planes
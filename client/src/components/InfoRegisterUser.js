import axios from "axios"
import React, { useState } from "react";

function InfoRegisterUser(props) {

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [tlf, setTlf] = useState("");
    const [birth, setBirth] = useState("");

    // const[registerData,setRegisterData] = useState([]);


    const test = () => {
        console.log(props.hidden)
        let filtro = {
            code,
            name,
            tlf,
            birth
        }
        // props.hidden(false);


        axios.post("register", filtro).then((res) => {

            if (res.data.auth) {
                props.hidden(false);
                props.show(true);

            }else{
                alert("datos incorrectos")
            }
        });

    }


    return (
        <div className="App">
            <div>
                <div>
                    <input type="text" placeholder="Codigo Coliving" onChange={(e) => setCode(e.target.value)} />
                    <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Teléfono" onChange={(e) => setTlf(e.target.value)} />
                    <input type="text" placeholder="Fecha de Nacimiento" onChange={(e) => setBirth(e.target.value)} />
                    <button onClick={test}>Siguiente</button>
                </div>
            </div>

        </div>
    );

}

export default InfoRegisterUser;
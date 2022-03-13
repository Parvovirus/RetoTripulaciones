import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./css/Recomended.scss"
const Recommended = () => {


    const [recommended, setRecommended] = useState("")


    useEffect(() => {
        getRecommended();
    }, []);


    const getRecommended = () => {


    }


    return (
        <div>
            <p className='title-recomended'>Recomendados</p>          

            {/* {nameCategory ? nameCategory.map((cat, i) => <button key={i}>{cat}</button>) : ""} */}

        </div>
    )
}

export default Recommended;
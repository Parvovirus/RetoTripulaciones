import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Recommended = () => {


    const [recommended, setRecommended] = useState("")


    useEffect(() => {
        getRecommended();
    }, []);


    const getRecommended = () => {


        //     axios.get("getRecommended").then((res) => {
        //       let cleanCategories = res.data;


        //       let nameCategoryArray = [];

        //       for (let i = 0; i < cleanCategories.length; i++) {
        //         nameCategoryArray.push(cleanCategories[i].name)
        //       }
        //       setNameCategory(nameCategoryArray);


        //     })

    }


    return (
        <div>
            <h2>Recomendaciones</h2>
            <span>Imagen 1 recomend</span>
            <span>Imagen 2 recomend</span>
            <span>Imagen 3 recomend</span>
            

            {/* {nameCategory ? nameCategory.map((cat, i) => <button key={i}>{cat}</button>) : ""} */}

        </div>
    )
}

export default Recommended;
import axios from "axios"
import React, { useState, useEffect } from "react";


function Filter() {

    const [searchData, setSearchData] = useState("");
    const [resultsData, setResultsData] = useState("");

    useEffect(() => {
        if (searchData != "") {
            sendBackend()
        }

    }, [searchData])

    const sendBackend = async () => {
        let filter = {
            population: searchData
        }

        await axios.post("search", filter).then((res) => setResultsData(res.data))
    }
    return (
        <div className="App">
            <input onChange={(e) => setSearchData(e.target.value)} />
            
            {resultsData != "" ? resultsData.map((result) => {
                return (<div> 
                    <p>{result.name}</p>
                    <img src={result.photo}></img>
                    </div>)
            }) : ""}

        </div>
    );
}
export default Filter;

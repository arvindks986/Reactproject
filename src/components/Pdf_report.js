

import React, { useState,useEffect } from "react";
import axios from "axios";
const Pdfreport =  () => {
   
    const url = "http://localhost:8081/api/pdflist";
    const [data, setData] = useState([]);
  
    
    const fetchInfo = () => {
        return axios.get(url).then((res) =>
          //  console.log(res.data,"New Data"));
            setData(res.data));
      };
  
    useEffect(() => {
      fetchInfo();
    }, []);
  

    console.log(data);
    return (
      <div className="App">
        <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
        <center>
        
        </center>
      </div>
    );
}

export default Pdfreport;
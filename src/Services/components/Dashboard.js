

import React ,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "./useDocumentTitle";

const Dashboard=()=>{
    const [count,setCount]=useState("");
    useDocumentTitle("Dashboard");
    const navigate = useNavigate();
    //console.log("hello");
    useEffect(() => {
        
      // let userdata = JSON.parse(localStorage.getItem('user'));
       
     //  var email=JSON.stringify(userdata.email);
     //  console.log(email);
       // const id = userdata.id;
        
        //let userdata.id);
        // Laravel Port 8010
        //axios.get(`http://localhost:8010/api/getcount?id=${id}`).then(res => {

            //NodeJs Port 8081
       axios.get(`http://localhost:8081/api/`).then(res => {
                // console.log(res.data.list);
                setCount(res.data.list);
             });

            /* axios.get('http://localhost:8081/api',{
                params: {
                  uid: id,
                  }
              }) Here Pass parameter from api and get in node.js file*/ 
         
     
     }, []);
  const routeChange=()=>{

    navigate("/viewlist");
  }
   

 return (
    <section className="vh-100 bg-image">
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10 col-md-6 col-lg-5 col-xl-4">
                    <div className="card" style={{borderRadius: '15px'}}>
                  
                        <div className="card-body p-3 text-center">
                            <h4 className="text-uppercase text-center mb-5">Total Records: {count}</h4>
                            <button type="button"  onClick={routeChange} className="btn btn-info ">View Record</button>
                            </div>
    </div></div>
    </div>
</div>
</div>
</section>
 )



};
export default Dashboard;
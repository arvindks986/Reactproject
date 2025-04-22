import React, {  useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "./useDocumentTitle";
import {isTokenExpired,refreshTokenExpired} from "../Helper/helper.js";
import { toast } from 'react-toastify';
import img1 from './assets/img/01.jpg';
//import refreshTokenExpired from "../Helper/helper";
//import authservice from "../Services/Authservices";
//import FileUploaded from "./FileUploaded.js";
var FormData = require('form-data');
const EmployeeAdd = () => {
  
  const userdata = JSON.parse(localStorage.getItem('user'));
  const token=JSON.parse(localStorage.getItem('token'));
    const refreshToken=JSON.parse(localStorage.getItem('refreshToken'));
   // alert(refreshToken);
  const Navigate =useNavigate();
  useDocumentTitle("Add Employee");
    //const [errors, setErrors] = useState({});
    //const [file, setSelectedFile] = useState("");
  //  const [loadimage, setLoadimage] = useState([]);
    const [fileData, setFileData] = useState([]);
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("0");
    const [UserID, setUserID] = useState(userdata.id);
    
   
    const [errorson, setErrors] = useState([]);

    console.log(setFileData,"+++++===");

//   function handleChange(event) {
//     setFile(event.target.files[0])
//   }

//For Single File Upload
// const getFile = (e) => {
//   setFileData(e.target.files[0]);

// };
const getFile = (event) => {
  setFileData(Array.from(event.target.files));
};


  const saveForm = async(event) => {
    //alert(token);
    //alert(refreshToken);
    event.preventDefault();
   

        
    
   // event.preventDefault()
    //const url = 'http://localhost:8010/api/reactlaravelapi';
    const url = 'http://localhost:8081/api/addemployee';
    
    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("phone", phone);
   // data.append('file', fileData);
   // data.append('fileName', file.name);
    data.append('UserID', UserID);

    fileData.forEach((file) => {
      data.append('file', file);
    });

   // console.log(data,"----------File Upload ++++++");
    // const userData = {
    //   email: email,
    //   username: username,
    //   phone: phone,
    //   UserID: UserID,
    //   fileName:image.name,
    //   fileType:image.type,
    //   file:image,
      
    //};
    
    
    
    // let datas = {};
    // for(var pair of formData.entries()) {
    //     datas[pair[0]] = pair[1];
    // }
    // console.log(formData,formData.entries(),"sdsds");
    //const json = JSON.stringify(formData);
    //let formHeaders = formData.getHeaders()
    //console.log(datas.email,JSON.stringify(datas.photo));
    const config = {headers: {'authorization':token}}

    try{
        const datais =  await axios.post(url, data, config)
        const erroris=JSON.stringify(datais.data.errors);
        if(erroris){

          console.error('Error is:', erroris);
          setErrors(datais.data.errors);
          Navigate('/addemp')
      } else{
    
        const retunvalue=JSON.stringify(datais.status);
        if(retunvalue==200)
       {
        //  console.log(res);
          toast("Record Add Successfully");
         //  Navigate('/viewlist')
           setTimeout(
            function(){
              window.location.href = "/viewlist"; 
            },
        5000);
          }else{
            toast.error(retunvalue);
          }
        
        }
    }
    catch(error) {
     
  
    }
    
 

  };

  return (
<>
   


<section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                    <div className="p-5"><img src={require("./assets/img/01.jpg")} 
                    class="img-fluid rounded-circle" ></img></div> 
                      
                    </div>
                    <div className="col-lg-6">
                    <div className="card-body p-5">
                        {errorson.length > 0 && (
                <div>
                    <h6 className='text-denger'>Validation Errors:</h6>
                    <ul>
                        {errorson.map((errorson, index) => (
                            <p className='text-denger' key={index}>{errorson.msg}</p>
                        ))}
                    </ul>
                </div>
            )}
                            <h4 className="text-uppercase text-center mb-5">Add Employee</h4>
        <form encType={'multipart/form-data'} onSubmit={saveForm}>
   
        {/* <input
          type="text"
          name="name" autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
         <div className="form-group">
                <label>Name </label>
                <input type="text" id="username" name="username" autoComplete="off" className="form-control"  onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
             <br></br>
                <label >Email</label>
                <input type="text" id="email" name="email" autoComplete="off" className="form-control"  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
               <br></br>
                <label >Phone</label>
                <input type="text" id="phone"  name="phone" autoComplete="off" className="form-control"  onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone" />
             
                <input type="hidden" id="UserID"  name="UserID" value={userdata.id} autoComplete="off" className="form-control"  onChange={(e) => setUserID(e.target.value)}  />
             
               
             <br></br>
             <input type="file" name="file" onChange={getFile} required  multiple/>
          {/* <input type="file" name="photo" id="photo" accept=".png, .jpg" onChange={(e) => setSelectedFile(e.target.files[0])} />
           */}
          <img src=""></img>
        </div><br></br>

<button type="submit" className="btn btn-primary"  >Submit</button>
      </form>

    
    </div>
                    </div>
                </div>
            </div>
        </section>

        </>

  );
};
export default EmployeeAdd;
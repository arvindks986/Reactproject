
import React, { useState, useEffect , useRef, useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import {isTokenExpired,refreshTokenExpired} from "../Helper/helper.js";
import useDocumentTitle from "./useDocumentTitle";
//import refreshTokenExpired from "../Helper/helper";
function Update()   
{
    useDocumentTitle("Update Employee");
    const inputRef = useRef(null);
    const Navigate=useNavigate();
    const token=JSON.parse(localStorage.getItem('token'));
    const refreshToken=JSON.parse(localStorage.getItem('refreshToken'));
  //console.log(refreshToken,"ddd")
    if (isTokenExpired(token)) {
        
       // router.push('/login');
      } else {
        const config = {
            headers: {
              
              'authorization':refreshToken
            },
          };
         
        axios.get(`http://localhost:8081/api/refreshtoken`,config)
        .then(response => {
            const token=localStorage.setItem("token", JSON.stringify(response.data.refreshToken));
           
        })
        .catch( err => console.log(err))
      }
    

    let { id } = useParams();
  
    const [errors, setErrors] = useState({});
    const [employee, setemployee] = useState({
      id:id,
      name:'',
      email:'',
      image:'',


    });
    // const [image, setSelectedFile] = useState("");
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");

    

   
    //const path="http://localhost:8081/";
    useEffect(() => {
       //console.log(id);
       axios.get(`http://localhost:8081/api/updatelist?id=${id}`)
       .then(res => {
        
               console.log(res.data.list);
               setemployee({...employee,name:res.data.list.name,email:res.data.list.email,phone:res.data.list.phone,image:res.data.list.image});
                //setemployee(...res.data.list);
            })
        .catch( err => console.log(err))
    
    }, [id]);

    

    const saveForm = (e) =>{ 
        e.preventDefault();
     
    const data = new FormData();
    data.append("id", id);
    data.append("name", employee.name);
    data.append("email", employee.email);
    data.append("phone",employee.phone);
    data.append('file', employee.image);
    //formData.append('fileName', file.name);
    
    const config = {
        headers: {
          'content-type': 'multipart/form-data',
          'authorization':token
        },
      };
     
      //console.log(data);
    //  axios.post(`http://localhost:8010/api/updaterecord/${id}`,employee,config).then(res => {
    axios.post(`http://localhost:8081/api/updaterecord/`,data,config)
  
    .then((response) => {
        Navigate('/viewlist')
        console.log(response.status, response.data);
      });
    // console.log("result of ");
    // console.log(data);
    }
    
//console.log(setemployee);


    return (
        <section className="vh-100 bg-image">
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{borderRadius: '15px'}}>
                        <div className="card-body p-5">
                            <h4 className="text-uppercase text-center mb-5">Update Record</h4>
        <form>
            <div><h5>Update Record </h5></div>
            <div className="form-group">
                <label >Name</label>
                <input  type="text" id="name"  Value ={employee.name}    name="name" autoComplete="off"
                 className="form-control"  onChange={(e) => setemployee({...employee,name:e.target.value})} placeholder="Enter Name" />
              
                        
                <br></br> <label >Email</label>
                <input type="text" id="email"  Value ={employee.email} name="email" autoComplete="off" className="form-control"  onChange={(e) => setemployee({...employee,email:e.target.value})}  placeholder="Enter email" />
                <br></br>  <label >Phone</label>
                <input type="text" id="phone"  Value ={employee.phone } name="phone" autoComplete="off" className="form-control"  onChange={(e) => setemployee({...employee,phone:e.target.value})} placeholder="Enter Phone" />
                <br></br>
                
                <input type="file" name="image" onChange={(e) => setemployee({...employee,image:e.target.files[0]})} />
                {/* <img src= {path + employee.image} width={50} height={50} /> */}

            </div>
<br></br>

             <button type="button" className="btn btn-primary" onClick={saveForm}>Submit</button> 
        </form>
</div></div></div>
</div>
</div>
</div>
</section>

    );

}


export default Update;
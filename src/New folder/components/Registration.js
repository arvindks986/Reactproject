
import { useState } from "react";
import React from "react";
import Swal from 'sweetalert2';
import useDocumentTitle from "./useDocumentTitle";
import axios from "axios";
const Registration = () => {
    useDocumentTitle("Registration");
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [validationErrors, setValidationErrors] = useState({});
    const [authiduser, setAuthiduser] = useState({});

    const handleChange = (e) => {
        setFormData({...formdata, [e.target.name]: e.target.value })
    }
    // function validateForm() {
    //     if (setFormData.length == 0) {
    //         alert('Invalid Form, First Name can not be empty')
    //         return
    //       }
      
         
    // }
      
    const handleSubmit = async (e) => {
        e.preventDefault();
       console.log(formdata);
        const newErrors = validateForm(formdata);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');
        } else {
            // Swal.fire({
            //     icon: "error",
            //     title: "Error",
            //     text: "Check All Input Field Should not be Empty!",
            //     }).then(() => {
            //         //return false;
            //       //  window.location.href = "/reg";

            //     });
            console.log('Form submission failed due to validation errors.');
            return false;
        }
        try{
            // const response = await axios.post("http://127.0.0.1:8000/api/register", formdata);
            const response = await axios.post("http://localhost:8081/api/registration", {
        // const response = await fetch("http://localhost:8010/api/register", {
                //const response = await fetch("https://demo.eci.nic.in/rti-revamp/api/common/get-states/", {
                method: "POST",
              
                data: JSON.stringify(formdata),
            });
            
            //const responseData =JSON.stringify(response);
        //  alert(response.data.status);
             const respdata=JSON.stringify(response.data.id);
            //console.log(JSON.stringify(response.data),"Registration Console");
            if (response.data.status!=='Failed') {
                //setAuthiduser({response.data.id});
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: response.data.message,
                }).then(() => {
                    console.log(respdata,"check data success");
                   // window.location.href = "/login";
                  
                   window.location.href = "/otpverify/"+respdata;
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: response.data.message,
                    }).then(() => {
                        window.location.href = "/reg";
                    });
                //setValidationErrors(response.data.status==='Failed');
                // if (response) {
                //     setValidationErrors(response.data.status==='Failed');
                // } else {
                //     Swal.fire({
                //     icon: "error",
                //     title: "Error",
                //     text: response || "Registration failed.",
                //     });
                // }
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error,
            });
        }
    }

    const validateForm = (data) => {
        const errors = {};
console.log(data);
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        } else if (data.name.length < 4) {
            errors.name = 'Name must be at least 4 characters long';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        // if (!data.mobile) {
        //     errors.mobile = 'Mobile No is required';
        // } else if (data.mobile.length === 10) {
        //     errors.mobile ='Invalid Mobile Number';
        // }

       

        return errors;
    };
















     
    return(
        <section className="vh-100 bg-image"  >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: '15px'}}>
                                <div className="card-body p-5">
                                    <h3 className="text-uppercase text-center mb-5">Create an account</h3>
                                    <form  method="POST" onSubmit={handleSubmit} >
                                        <div className="form-outline mb-4">
                                            {/* <label htmlFor="name"  className="form-label">Name:</label> */}
                                            <input type="text" name="name" placeholder="Enter Full Name" className="form-control form-control-lg" onChange={handleChange} />
                                            {errors.name && <span className="text-danger">{errors.name}</span>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            {/* <label htmlFor="email" className="form-label">Email:</label> */}
                                            <input type="email" name="email" placeholder="Enter Email" className="form-control form-control-lg" onChange={handleChange} />
                                            {errors.email && <span className="text-danger">{errors.email}</span>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            {/* <label htmlFor="password" className="form-label">Password:</label> */}
                                            <input type="Password" name="password" placeholder="Enter Password" className="form-control form-control-lg" onChange={handleChange}/>
                                            {errors.password && <span className="text-danger">{errors.password}</span>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            {/* <label htmlFor="password" className="form-label">Password:</label> */}
                                            <input type="text" name="mobile" placeholder="Enter Mobile" className="form-control form-control-lg" onChange={handleChange}/>
                                            {errors.mobile && <span className="text-danger">{errors.mobile}</span>}
                                        </div>
                                        <div class="d-flex justify-content-center">
                                        <button type="submit"
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Register</button>
                                        </div>
                                        
                                    </form>
                                   
                                    
                                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                                        className="fw-bold text-body"><u>Login here</u></a></p>
                                </div>
                         



                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );


}

export default Registration;
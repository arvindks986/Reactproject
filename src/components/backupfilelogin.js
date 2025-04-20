import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useDocumentTitle from "./useDocumentTitle";

const Login = (props) =>{
    useDocumentTitle("Login");
    const navigate = useNavigate();
    const [ formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [validationErrors, setValidationErrors] = useState({});
    const [islogedin, setIslogedin] = useState();
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
       
        try {
           // const response = await axios.post("http://localhost:8010/api/login", formData);
            const response = await axios.post("http://localhost:8081/api/login", formData);
        console.log(response);
            const token = response.data.authorisation.token;
            const userdetail = response.data.user;
           setIslogedin()
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(userdetail));
            localStorage.setItem("token", token);
            setIslogedin(token);
           // console.log('response', userdetail);
            props.loginData(true);

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back!",
            }).then(() => {
              //  navigate("/dashboard");

                navigate("/");
            });
        } catch (error) {
            if (response) {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "Invalid email or password. Please try again.",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: response.data.message,
                });
            }
        }
    }
    //const imagePath = process.env.PUBLIC_URL + '/images/bg-image.webp';

    return(
        // <section className="vh-100 bg-image"  style={{ backgroundImage: `url('${imagePath}')` }}></section>
        <section className="vh-100 bg-image">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: '15px'}}>
                                <div className="card-body p-5">
                                    <h3 className="text-uppercase text-center mb-5">Login</h3>
                                    <form method="POST" onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4">
                                            <input type="text" name="email" autoComplete="off" placeholder="Enter Email" className="form-control" onChange={handleChange} />
                                            {validationErrors.email && <span className="text-danger">{validationErrors.email[0]}</span>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" name="password" placeholder="Enter Password" className="form-control" onChange={handleChange} />
                                            {validationErrors.password && <span className="text-danger">{validationErrors.password[0]}</span>}
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
                                    </form>
                                    
                                    <p className="text-center text-muted mt-5 mb-0">Not an account? <a href="/reg"
                                        className="fw-bold text-body"><u>Register here</u></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section> 
        
    )
}

export default Login;
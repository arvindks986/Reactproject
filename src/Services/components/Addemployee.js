
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useDocumentTitle from "./useDocumentTitle";

function Addemployee()
//function MyComponent() 


{
    useDocumentTitle("Add Employee");
    const token = JSON.parse(localStorage.getItem('token'));
    //console.log(token,"sdsdds");
    //const[userdata,setUserdata]=useState("");
    
    const Navigate =useNavigate();
   // const [file, setFile] = useState();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
       // updated_by:"",
        
      //  imagefile: "",

});
const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    }
   
    

    useEffect(() => {
        // const userdata = JSON.parse(localStorage.getItem('user'));
        // setUserdata(userdata.id)
        // setFormData(formData)

    }, [formData]);


    const saveForm = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
      
       // console.log("hello",formData);
        axios.post('http://localhost:8010/api/reactlaravelapi', formData, 
         {
            headers: {
                "Content-Type": "multipart/form-data",
                //"authorization": "multipart/form-data"
            }
        }
     )
            
       // axios.post(url, formData, config)
        .then(function (response) {
            
            Navigate('/viewlist')
                console.log("User Added Successfully");
               // console.log(response);
            })
            .catch(error => {
                //  console.log(this.formData);
                console.log("ERROR:: ", error.response);
            });

           
      


    }
    const validateForm = (data) => {
        const errors = {};
 
        if (!data.username.trim()) {
            errors.username = 'Name is required';
        }
 
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
        if (!data.phone.trim()) {
            errors.phone = 'Phone Number is required';
        }
 
        // if (!data.password) {
        //     errors.password = 'Password is required';
        // } else if (data.password.length < 8) {
        //     errors.password = `Password must be at 
        //     least 8 characters long`;
        // }
 
        // if (data.confirmPassword !== data.password) {
        //     errors.confirmPassword = 'Passwords do not match';
        // }
 
        return errors;
    };

    return (
        <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{borderRadius: '15px'}}>
                            <div className="card-body p-5">
                                <h4 className="text-uppercase text-center mb-5">Add Employee</h4>






        <form>
            <div className="form-group">
                <label >Name</label>
                <input type="text" id="username" name="username" autoComplete="off" className="form-control" value={formData.name} onChange={handleInput} placeholder="Enter Name" />
                {errors.username &&
                        <span className="error-message">
                            {errors.username}
                        </span>
                    }<br></br>
                    
                    <input type="text" name="updated_by" id="updated_by" value={formData.userdata } onChange={handleInput} />
                <label >Email</label>
                <input type="text" id="email" name="email" autoComplete="off" className="form-control" value={formData.email} onChange={handleInput} placeholder="Enter email" />
                {errors.email &&
                        <span className="error-message">
                            {errors.email}
                        </span>
                    }<br></br>
                <label >Phone</label>
                <input type="text" id="phone"  name="phone" autoComplete="off" className="form-control" value={formData.phone} onChange={handleInput} placeholder="Enter Phone" />
             
                {errors.phone &&
                        <span className="error-message">
                            {errors.phone}
                        </span>
                    }
             <br></br>
             {/* <label >Upload Image</label>
             <input type="file"  id="imagefile" onChange={handleInput} /> */}
            {/* <img src={file} /> */}
            </div><br></br>
            

            <button type="button" className="btn btn-primary" onClick={saveForm}>Submit</button>
        </form>

</div>
</div>
</div>
</div>
</div>
</div>
</section>
    );

    

}


export default Addemployee;

import axios from "axios";
import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
function  OtpVerify () {
       let { id } = useParams();
    const [formData, setFormData] = useState({otpv: "",id:id});
    
    const handleChange = (event) => {
        const value  = event.target.value;
        const key = event.target.name;
        setFormData ({ ...formData, [key]: value });
      };

  const saveForm =(e)=>{
    e.preventDefault();
    
   
   const responceotpverify=  axios.post(`http://localhost:8081/api/otpverify/`,formData)
    .then((res)=>{
        const output=JSON.stringify(res.status);
        console.log(output,"dsds");
        if(output==='200')
        {

           toast.success(JSON.stringify(res.msg));
                       setTimeout(
                           function(){
                               window.location.href = "/login"; 
                           },
                       5000);
        }else{
            console.log("dfdd_12133");
        }
    })
    .catch((error)=>{
        console.log(error);
    })
   //   console.log(responceotpverify);

    }

return(
    
    <section className="">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        <div className="card" style={{borderRadius: '15px'}}>
        <div className="card-body p-5">
        <h3 className="text-uppercase text-center mb-5">Verify OTP</h3>
        <form>
        <div className="form-outline mb-4">
        <input type="text" name="otpv" autoComplete="off"  placeholder="Enter Otp" className="form-control"
        onChange={handleChange} />
                                        
        </div>
                                   
        
        <button type="button" className="btn btn-primary" onClick={saveForm}>OTP Verify</button> 
        </form>
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section> 
    
)
}

export default OtpVerify;

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
//import axios from "axios";
import { useEffect } from "react";

const Logout = (props) => {
  console.log("dfd");
    const navigate = useNavigate();
   // let tokenvalue=localStorage.getItem('token');
   // console.log(tokenvalue);
    
    useEffect(() => {
        const tokenvalue=localStorage.getItem('user');
       
     //   const baseUrl ="http://localhost:3000/";

        //console.log(tokenvalue,"sdsdsd==============");

        if (tokenvalue) {
      
            window.localStorage.removeItem("isLogedin");
            localStorage.removeItem("user");
          //  localStorage.removeItem("user");
            localStorage.clear();
            props.loginData(false);
           // window.location.href = baseUrl +"login";
            Swal.fire({
                        icon: "success",
                        title: "Logout Successful",
                        //text: "Welcome back!",
                    }).then(() => {
                      //  navigate("/dashboard");
                        navigate("/login");
                    });
    

                  }else{

                    window.localStorage.removeItem("isLogedIn");
            localStorage.removeItem("user");
          //  localStorage.removeItem("user");
            localStorage.clear();
            props.loginData(false);
            navigate("/login");
                  };

    });
    
      
};

export default Logout;
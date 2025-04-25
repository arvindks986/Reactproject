
import React ,{ useEffect, useState} from "react";
// import './App.css';
import  './css/styles.css';
import  './assets/01.jpg';
 import Header from './Header.js';
//  import Addemployee from './Addemployee.js';
// import About from './About.js';
// import Listofemployee from './Listofemployee.js';
 import { useNavigate } from "react-router-dom";
import MyRouter from './routers/indexrouters.js';
import Error from "./Errorpage.js";
import Footer from './Footer';
import  { BioProvider,BioContext } from "./ContextApi";
import { ToastContainer } from 'react-toastify';
import {isTokenExpired,refreshTokenExpired} from "../Helper/helper.js";
import axios from "axios";
const App = () => {
  //console.log(BioProvider,"New user");
  const [tokenw, setToken] = useState(false);
 const navigate = useNavigate();
 const token=JSON.parse(localStorage.getItem('token'));
 const refreshToken=JSON.parse(localStorage.getItem('refreshToken'));
    useEffect(() => {

     if(token!==null){
      if (isTokenExpired(token)) {
             
              //   const isTokenExpiredis =refreshTokenExpired(refreshToken)
           
                   if(refreshTokenExpired(refreshToken))
                   {
                    console.log("Issue is there erere")
                      navigate('/logout')
                   }else{
       
                    const config = {
                      headers: {
                        
                        'authorization':refreshToken
                      },
                    };
                   
                  axios.get(`http://localhost:8081/api/refreshtoken`,config)
                  .then(response => {
                    ToastContainer("Refresh Token Update");
                      const token=localStorage.setItem("token", JSON.stringify(response.data.refreshToken));
                      ToastContainer(token);
                  })
                  .catch( err => console.log(err))
                  }
      
                  }

          }
          
      //   let t = localStorage.getItem('user');
      //   if(t == null) setToken(false);
      //   else setToken(t);
      // localStorage.getItem('user');
       // console.log('App.js', t, u);
      }, []);

  return (
    // <div className='bg-image' style={{backgroundImage:`url('./images/pexels-markusspiske-330771.jpg')`}}>
   <>

     <BioProvider> 
     <Header loginData={token} />  
     <ToastContainer />
     <MyRouter loginData={setToken} errorElement= {<Error/>} /> 
     <Footer />
     </BioProvider>
    </>
    // </div>
);
}




export default App;

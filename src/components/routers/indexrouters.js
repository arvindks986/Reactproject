
import { Routes,Route } from "react-router-dom";
import Addemployee from "../Addemployee.js";
//import Listofemployee from "../Listofemployee.js";
import EmployeeAdd from "../EmployeeAdd.js";
import Registration from "../Registration.js";
import Login from "../Login.js";
import Logout from "../Logout.js";
 import Pdf_report from  "../Pdf_report.js";
import Update from "../Update.js";
import OtpVerify from "../OtpVerify.js";
import React ,{ Suspense, createContext } from "react";
import Dashboard from "../Dashboard.js";
import Home from "../Home.js";
import Error from "../Errorpage.js";
import HooksFilesCheck from "../HooksFilesCheck.js"
import Listofemployee from "../Listofemployee.js"
import { UseReduce } from "../Hook/UseReduse.js";


    const datais=createContext();
function MyRouter(props){
 
     const islogin=window.localStorage.getItem('islogin');

    
    //const userdata = JSON.parse(localStorage.getItem('user'));
    //const valueuserid=userdata.id;
    return(
     
     <Routes>
      
      <Route path="*" element={<Error />} errorElement={<Error />} />
     <Route path="/pdfreport" element={<Pdf_report />} ></Route> 
     <Route path="/addemp" element={<EmployeeAdd />}></Route>
     <Route path="/dashboard" element={<Dashboard />} ></Route>
     <Route path="/" element={<Home />} ></Route>
     <Route path="/reg" element={<Registration />} ></Route>
    <Route path="/viewlist" element={<Suspense fallback={<p>This is Loading...</p>}>
   {/* // <datais.Provider value={valueuserid}> */}
    <Listofemployee />
  {/* //  </datais.Provider> */}
    </Suspense>} >
    
        </Route>
   
   
    <Route path="/checkhoo" element={<UseReduce />} >Hook</Route>
    <Route path="/update/:id" element={<Update />} ></Route>
    <Route path="/emp" element={<Addemployee />} ></Route>
    
    <Route path="/otpverify/:id" element={<OtpVerify />} ></Route>
    <Route path="/login" element={<Login loginData={props.loginData} />} ></Route>
    <Route path="/logout" element={<Logout loginData={props.loginData} />} ></Route>
   
    {!islogin && (
    <>
   
  
    </>
    )}
    

   </Routes>

   ) };
    export default MyRouter;
    export { datais };
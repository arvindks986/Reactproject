
import React ,{ useEffect, useState} from "react";
// import './App.css';
import  './css/styles.css';
import  './assets/01.jpg';
 import Header from './Header.js';
//  import Addemployee from './Addemployee.js';
// import About from './About.js';
// import Listofemployee from './Listofemployee.js';
// import { BrowserRouter as Router } from "react-router-dom";
 import MyRouter from './routers/indexrouters.js';
import Footer from './Footer.js';
//  import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
//import 'material-react-toastify/dist/ReactToastify.css';
const App = () => {
  const [token, setToken] = useState(false);
useEffect(() => {
        let t = localStorage.getItem('user');
        if(t == null) setToken(false);
        else setToken(t);
        let u = localStorage.getItem('user');
       // console.log('App.js', t, u);
      }, [token]);

  return (
    // <div className='bg-image' style={{backgroundImage:`url('./images/pexels-markusspiske-330771.jpg')`}}>
   <>
     <Header loginData={token} />   
     <ToastContainer />
    
                    
                  
                        <MyRouter loginData={setToken} /> 
                       
                  
             
    
    <Footer />
    </>
    // </div>
);
}




export default App;


import React, { useEffect, useState,useContext } from "react";

import { Link } from "react-router-dom";

import useDocumentTitle from "./useDocumentTitle";
import { BioContext } from "./ContextApi";

const Header = (props) => {
    const name = useContext(BioContext)
   
    const isLogedIn= window.localStorage.getItem('islogin')
   // console.log(isLogedIn,"sdsdsdsdsdsdsdsd----------------",props);
    const [user, setUser] = useState(false);
    useDocumentTitle("Header");

    useEffect(() => {
        //setToken(props.loginData);
        let userdata = JSON.parse(localStorage.getItem('user'));
     //   console.log(userdata);
        if(userdata == null) setUser(false);
        else setUser(userdata);
      //  console.log('HeaderProps', props);
    }, [props.loginData]);

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white',
        // position: 'relative'
    };
    // {isLogedIn && (
    //     <>
    //       <li className="nav-item"><Link to="/login" style={linkStyle}>Login two</Link></li>
    //     </>
           
    //     )}

    const LoggedIn = () => {
        return (


<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>One Page Wonder - Start Bootstrap Template</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
    
        <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
       
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
    
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#page-top">Manu {name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link to="/dashboard" style={linkStyle}>Dashboard</Link></li>
                     <li className="nav-item"><Link to="/addemp" style={linkStyle}>Add Employee</Link></li>
                    <li className="nav-item"><Link to="/viewlist" style={linkStyle}>View List</Link></li>
                    <li className="nav-item"><Link to="/emp" style={linkStyle}>EMP</Link></li>
                    <li className="nav-item"><Link to="/checkhoo" style={linkStyle}>Hook</Link></li>
                                           
                     <li className="nav-item"><Link to="/logout" style={linkStyle}>Logout </Link></li>
                        {/* <li className="nav-item"><a className="nav-link" href="#!">Sign Up</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Log In</a></li> */}
                    </ul>

                    
                </div>
            </div>
        </nav>
         
        </body>


        <header className="masthead text-center text-white">
            <div className="masthead-content">
                
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header> 
</html>
        );
    }

    const LoggedOut = () => {
        return (
            <div className="pb-5">
                

                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#page-top">Menu</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                  
                     {/* <li className="nav-item"><Link to="/addemp" style={linkStyle}>Add Employee</Link></li>
                    <li className="nav-item"><Link to="/viewlist" style={linkStyle}>View List</Link></li>
                    <li className="nav-item"><Link to="/emp" style={linkStyle}>EMP</Link></li>
                    <li className="nav-item"><Link to="/checkhoo" style={linkStyle}>Hook</Link></li>
                    <li className="nav-item"><Link to="/logout" style={linkStyle}>Logout </Link></li>
                    */}
                    <li className="nav-item"><Link to="/login" style={linkStyle}>Login</Link></li>        
                     
                        {/* <li className="nav-item"><a className="nav-link" href="#!">Sign Up</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Log In</a></li> */}
                    </ul>

                    
                </div>
            </div>
        </nav>
            </div>
        );
    }

    if (isLogedIn) {
      //  console.log("login show")
        return <LoggedIn  userdetail={user}/>
    }
    else {
       // console.log("logout show")
        return <LoggedOut />
    }
};

export default Header;
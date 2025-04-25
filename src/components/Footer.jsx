

import React, { useContext } from "react";
import {datais} from './HooksFilesCheck';
import {TestFile} from './TestFile';

const Footer = () =>{
    const nameis=useContext(datais);
    //console.log(name);
 return (
    <>
    <TestFile />
    <footer className="py-5 bg-black" style={{marginTop: '2%'}}>
    <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy;  Website 2025</p></div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="js/scripts.js"></script>
</>
 )}
 export default Footer; 
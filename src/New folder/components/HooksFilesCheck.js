import Button from 'react-bootstrap/Button';
import {React, createContext, useState} from "react";
import Footer from './Footer';

 const datais=createContext();
//function HooksFilesCheck()
const HooksFilesCheck = () =>
    {
        
       
        const [add,setAdd]=useState(0);
        const handleClick=()=>{
           
            setAdd(add + 1)
            
        };
        const name="Arvind kumar"
     return(
        <>
     <Button onClick={handleClick}>ADD</Button>
     <h1>{add}</h1>
     <datais.Provider value={name}>
        <Footer  />
     </datais.Provider>
     </>

     );



}
export { datais };
export default HooksFilesCheck;
//
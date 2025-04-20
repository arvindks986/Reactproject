
import axios from "axios";

class Authservice 
{
    constructor(){
       
       
        const axiosConfig= axios.create();
   
        axiosConfig.interceptors.response.use(
            (response) => {
                alert("dfdfd");
              // Modify the response data or handle the response
             // return response.data;
            },
            (error) => {
                alert("dfdfd");
              // Handle response errors
              //return Promise.reject(error);
            }
          );

        }

        
      
}

export default new Authservice();
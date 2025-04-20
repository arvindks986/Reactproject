import React from 'react'
import { useRouteError,useNavigate} from 'react-router-dom'
import  './css/styles.css';


const Errorpage =() => {
 const navigate=useNavigate();
    const handleaction=(event)=>{
        navigate(-1);

    }
    
return <h4>  <div class="col-lg-6 order-lg-2">
    <button style={{float:"right"}}  className="btn btn-info" onClick={(event)=>handleaction(event)}  >Back</button>
    <img src={require("./assets/img/5203299.jpg")} class="img-fluid rounded-circle" ></img>
                    </div>
</h4>


}

export default Errorpage;


import axios from "axios";
import { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
import PieChart from "../components/PieChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/Data";

 const Home = () =>{

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
            
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
     // console.log(chartData,"chart js user");
    useDocumentTitle("Home");
return (
    <>
  
<section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                    <PieChart chartData={chartData} />
                        {/* <div class="p-5">< img src={require("./assets/img/01.jpg")} class="img-fluid rounded-circle" /></div> */}
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">about ...</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <section className="vh-100 bg-image">
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                
                <div className="col-10 col-md-6 col-lg-5 col-xl-4">
                    <div className="card" style={{borderRadius: '15px'}}>
                 
                      
    </div></div>
    
    </div>
</div>
</div>
</section>
</>
)

}
export default Home;

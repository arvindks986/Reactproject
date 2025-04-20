import React, { useRef,forwardRef, useImperativeHandle } from "react";
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";
import axios from "axios";
const ApplyFilter = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    qtyIncrement: () => qtyIncrement(),
    qtyDecrement: () => qtyDecrement(),
    deleteHandler: () =>deleteHandler(),
  }));
const pdfRef=useRef();
  const qtyIncrement = async () => {
    try {
        const response = await axios.get(
          "http://localhost:8081/api/pdflist",
          {
            responseType : "arraybuffer", 
          
          headers: {
            'Content-Type':'application/json'
          }
         
    })
        .then(response => {console.log(response.list)
            //const abc={a:"1",b:"2"}

            const pdfBlob = new Blob([response.data.list], { type: "application/pdf" });

        // Create a temporary URL for the Blob
        const url = window.URL.createObjectURL(pdfBlob);

        // Create a temporary <a> element to trigger the download
        const tempLink = document.createElement("a");
        tempLink.href = url;
        tempLink.setAttribute(
          "download",
          `bill_1_2.pdf`
        ); // Set the desired filename for the downloaded file

        // Append the <a> element to the body and click it to trigger the download
        document.body.appendChild(tempLink);
        tempLink.click();

        // Clean up the temporary elements and URL
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(url);
        })
  .catch(error => {
    console.log(error)
alert(error);
  })

        // Create a Blob from the response data
       
      } catch (error) {
        console.error("Error downloading PDF:", error);
      }
}
  const qtyDecrement = () => {
    console.log("qtyDecrement");
    // ...
  };
  const deleteHandler = () => {
    console.log("deleteHandler");
    
  };
  return (
<div className="container">
    <div className="row">
    <div className="col-md-12">
     <div className="card">
     <div className="card-header">
        
       
        </div> 
    
        <div className="card-body"ref={pdfRef}>
        
            <table className="table table-striped"  >

                <thead>
                
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                      
                       
                        </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>One</td>
                        <td>Two</td>
                    </tr>
                </tbody>
            </table>
            </div>  
          

        </div>   
        </div>        
        </div>
    </div>
    )
});

//ApplyFilter.displayName = "ApplyFilter";
export default ApplyFilter;
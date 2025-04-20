
import React,{useRef,forwardRef, useImperativeHandle} from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";

const Invoice = forwardRef((props, ref) => {
    const invoiceRef = useRef();
    useImperativeHandle(ref, () => {
//const Invoice =  () => {

   const downloadPDF = () => {

        //const doc = new jsPDF()
        //autoTable(doc, { html: '#my-table' })
        const input=pdfRef.current;
        html2canvas(input).then((canvas)=>{
        const imgData=canvas.toDataURL('image/png');
        const pdf=new jsPDF('p','mm','a4',true);
        const pdfWidth=pdf.internal.pageSize.getWidth();
        const pdfHeight=pdf.internal.pageSize.getHeight();
        const imgWidth=canvas.width;
        const imgHeight=canvas.height;
        const ratio=Math.min(pdfWidth / imgWidth,pdfHeight / imgHeight);
        const imgX=(pdfWidth -imgWidth * ratio) / 2;
        const imgY=30;
        pdf.addImage(imgData,'PNG',imgX,imgY, imgWidth * ratio, imgHeight*ratio);
        pdf.save(Invoice.pdf);
    
        });
    }
      
    });

  const pdfRef=useRef();
   return (
            <div className="container">
            <div className="row">
            <div className="col-md-12">
             <div className="card">
             <div className="card-header">
                
               
                </div> 
            
                <div className="card-body"ref={pdfRef}>
                
                    <table className="table table-striped"  style={{display:'none'}} >

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

export default Invoice;
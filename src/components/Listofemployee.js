import React, { useEffect,useState,useRef} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import useDocumentTitle from "./useDocumentTitle";
import autoTable from 'jspdf-autotable';
//import { datais } from "./routers/indexrouters.js";
import Invoice from "./Invoice/Invoice";
import ApplyFilter  from "./Invoice/ApplyFilter";
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";

const Listofemployee = (page) => {

  const Navigate =useNavigate();
    useDocumentTitle("List");
  
  const pdfRef=useRef();
  const childRef = useRef();
  
  const [pdfContent, setPdfContent] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const[list,setListviewapi]=useState([]);
  //  const useridis=useContext(datais);
    //console.log(useridis);
    const user=JSON.parse(localStorage.getItem("user"));
    //console.log(user.email,"hindi");
    const fetchProducts = async (page) => {
      try {
        const response = axios.get(`http://localhost:8081/api/employeelist/?userid=${user.id}&page=${page}&pageSize=10`)
        .then(res=>{
        setListviewapi(res.data.list)
        setTotalPages(res.data.totalPages);
        });
      } catch (error) {
        console.log(error);
      }
    };
    useEffect( () => {
    
      console.log(childRef.current)

    })
    const Invoice =()=> {
    function Invoice(){
      console.log("Here is on");
    }

    }

   // console.log(list,"User list view");
    
    const downloadPDFs = async () => {

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
      //pdf.save(Invoice.pdf);

      });
    }


   

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage- 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
 // console.log(list,"assaasasasasasasas");
  
  var listdetails="";
  const path="http://localhost:8081/";
  listdetails=list.map(  (item,index)=>{
   
    return(
    
          <tr key={index} >
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            
            <td>
             <img src= {path + item.image} width={50} height={50} />  
              {/* <img src="http://localhost:8081/images/abcd.jpg"></img>  */}
            
                       
            
            </td>
            <td><Link to={`/update/${item._id}`} className="btn btn-success">Update</Link></td>
            
          </tr>

      
    )

  });
  
        return (
          
            <div className="container"style={{ marginTop: '20px' }} >
              
            <div className="row">
            <div className="col-md-12">
             <div className="card">
             <div className="card-header">
             {/* <h3><Link to="/pdflist" className="btn btn-primary float-end">PDF</Link></h3> */}
                <h3><Link to="/addemp" className="btn btn-primary float-end">ADD EMPLOYEE</Link></h3>
                </div> 
             
           
      
               
                {/* <ApplyFilter  ref={childRef} />
      <button onClick={() => {
        childRef.current.qtyIncrement()
      }}>+</button>
      <button onClick={() => {
        childRef.current.qtyDecrement()
      }}>-</button>
      <button onClick={() => {
        childRef.current.deleteHandler()
      }}>
         </button> */}
                
                <div className="card-body">
                    <table className="table table-striped" ref={pdfRef}>

                        <thead>
                        
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Image</th>
                                <th>Action</th>
                                </tr>
                        </thead>
                        <tbody >{listdetails}</tbody>
                    </table>
                    </div>  
                   
                </div>   
                </div>        
                </div>
                <button style={{ background: 'yellow',color:'black' }} onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button style={{ background: 'yellow',color:'black', float:"right" }} onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next Page
      </button>
      <br></br>
            </div>
           

        )};


        export default Listofemployee;

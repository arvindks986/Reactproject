import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useParams,useNavigate } from "react-router-dom";
//import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { toast } from 'react-toastify';
import useDocumentTitle from "./useDocumentTitle";


function Reactmodel() {
  useDocumentTitle("Forward Emp");
  let { id } = useParams();
  //console.log(id);
  const token=JSON.parse(localStorage.getItem('token'));
const Navigate=useNavigate();
const [show, setShow] = useState(true);
const [selectedValue, setSelectedValue] = useState('');
const [resultdata,setresultdata]=useState([]);
const [formData , setformData]=useState();

const handleClose = async()=>{

 Navigate('/viewlist')
}


  
  useEffect(() => {
    try{ 
      axios.post(`http://localhost:8081/api/OfficerDetails`)
      .then(res => {
          
          setresultdata(res.data.data)
      })
      
    } catch(error) {
       console.log(error.message,"dffdd");
    }
  },[]);



     const handleChange  = (e) => {
        setformData({ ...formData,[e.target.name]:e.target.value})
        //console.log(e.target.value,"Targrt Value")

     }

     const handelsubmit = async(e) =>{
        const jsstri=formData.userforwardID;
        const dept=formData.dept_name;
       const dataq= new FormData()
       dataq.append("forward",id);
       dataq.append("forward_to",jsstri)
       dataq.append("dept_to",dept)

       const config = {
        headers: {
        
          'authorization':token
        },
      };
      const data = {};

  dataq.forEach((value, key) => {
    data[key] = value;
  });
      console.log(JSON.stringify(data));
        const returnvalue=await axios.post("http://localhost:8081/api/farwardofficer",data);
        if(returnvalue.data.status===200)
        {
             toast(" Successfully");
            Navigate('/viewlist')
        }else{
            Navigate('/viewlist')
        }
        
        
     }

     const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        //onChange(value);
      };
  return (
    <>
    {/* <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button> */}
    <form>

    <Modal show={show} >
      <Modal.Header closeButton>
        <Modal.Title>Assign Department</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <select style={{height:'47px'}} onChange={handleChange} name="userforwardID" >
                <option>Please choose one option</option>
                {resultdata.map((option, index) => {
                    return (
                        <option value={option._id}>
                            {option.first_name}
                        </option>
                    );
                })}
            </select>
            <select style={{ maxWidth: '40%',marginLeft:'40px',height:'47px' }} onChange={handleChange} name="dept_name" >
                <option>Please choose Department</option>
                {resultdata.map((option, index) => {
                    return (
                        <option value={option.dept_id}>
                            {option.dept_name}
                        </option>
                    );
                })}
            </select>

            
     
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={(e)=>handelsubmit(e)} >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </form>
  </>
  );
}

export default Reactmodel;
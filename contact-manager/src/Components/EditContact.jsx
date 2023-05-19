import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../Contact.css";
import {Link} from "react-router-dom";
import {BsFillPersonFill} from "react-icons/bs";
import { BiMobileVibration } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { BiEdit  } from "react-icons/bi";


const EditContact = () => {

    const [id, setId] = useState(0)
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
   
    const navigate = useNavigate();


    useEffect(() =>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setNumber(localStorage.getItem("number"));
        setEmail(localStorage.getItem("email"));
    }, [])

    function handleUpdate(e){

        e.preventDefault();
        console.log("clicked")
        axios.put(`https://642d6aa466a20ec9ce9ce456.mockapi.io/contact-manager-crud/${id}`,
                      {
                        name : name,
                        number: number,
                        email:email,
                    
                      })
      
                    .then(()=>{
                      navigate("/addressbook");
                    })

    }





    return (
    <>
    
    <div className="main-container">
     <BiEdit className="add-icon" />
     <h1 className="create-title">
        Edit Contact
      </h1>
      
      <form className="row g-3 needs-validation" noValidate>
    <div className='field-container'>
      <div className=" col-md-8">
            <label
            // for="ConName" 
            className="field-design form-label">
               <BsFillPersonFill className="name-icon" />Name<span className="req">*</span>
            </label>
            <input 
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value) }
              className="input-design form-control"
              placeholder='please enter your name'
              required
            />          
          </div><br />

       <div className="col-md-8">
            <label 
            // for="ConNumber"
            className="field-design form-label" >
            <BiMobileVibration className="name-icon" />Mobile*
            </label>
            <input
              type="number"
              value={number}
              onChange={(e)=> setNumber(e.target.value) }
              className="input-design form-control"
              placeholder='please enter your number'
              required
            />          
          </div><br />

        <div className="col-md-8">
            <label
            // for="ConEmail"
            className="field-design form-label">
            <TfiEmail className="name-icon" />Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value) }
              className="input-design form-control"
              placeholder='please enter your email'
              required
            />          
          </div> <br />
          </div>

         
          <div className="col-12">
            <button className="btn btn-warning sb" type="submit"
            onClick={handleUpdate}>
              Updat Details
            </button>
            <Link to="/AddressBook">
                    <button className="btn btn-warning sb">Go Back</button>
            </Link>
            </div>    
      </form>
      </div>
    </>
  )
}

export default EditContact
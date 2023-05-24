import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../Contact.css";
import {Link} from "react-router-dom";
import {BsFillPersonFill} from "react-icons/bs";
import { BiMobileVibration } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { BsPersonAdd  } from "react-icons/bs";
import Navbar from './Navbar';

const NewContact = () => {

  

const [name, setName] = useState("");
const [number, setNumber] = useState("");
const [email, setEmail] = useState("");


const history = useNavigate();

const header = {"Access-Control-Allow-Origin":"*"}

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log("clicked")
  if (name === "") {
    setNameError(true);
  } else if (number === "") {
    setNumberError(true);
  } else if (email === "") {
     setEmailError(true);
  }else
  {

  
  axios.post("https://642d6aa466a20ec9ce9ce456.mockapi.io/contact-manager-crud",
                {
                  name : name,
                  number: number,
                  email:email,
                  header,
                })

              .then(()=>{
                history("/addressbook");
              });
            }
  
   };

   const [nameError, setNameError] = useState(false);
   const [numberError, setNumberError] = useState(false);
   const [emailError, setEmailError] = useState(false);

   const NameChange=(e)=>{
    let inputValue = e.target.value;
    if(name.length>=0){
      setNameError(false);
    }
    const regex = /^[a-zA-Z ]{2,30}$/;
    setName(inputValue);
    if (!regex.test(inputValue)) 
    {
      setNameError(' "Please enter a valid Book Name"');
    } else {
      setNameError("");
    }

   };

   const NumberChange=(e)=>{
    const inputNumberValue =  e.target.value;
    if(number.length>=0)
    {
      setNumberError(false);
    }
      const regex =  /^-?\d*\.?\d+$/;
      setNumber(inputNumberValue);
      if(!regex.test(inputNumberValue))
      {
        setNumberError("Please Enter valid number");
      }else{
        setNumberError("");
      }
     
    
   };

   



   const EmailChange=(e)=>{
    let inputValue = e.target.value;
    if(email.length>=0){
      setEmailError(false);
    }
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    setEmail(inputValue);
    if (!regex.test(inputValue)) 
    {
      setEmailError(' "Please enter a valid email"');
    } else {
      setEmailError("");
    }

   };

 
   

   
  return (
    <>

    <Navbar/>

     <div className="main-container">
      
     <BsPersonAdd className="add-icon" />
     <h1 className="create-title">
        Add New Contact
      </h1>
      
      <form className="row g-3 needs-validation" noValidate>
    <div className='field-container'>
      <div className=" col-md-8">
            <label
            for="name" 
            className="field-design form-label">
               <BsFillPersonFill className="name-icon" />
               Name<span className="req">*</span>
            </label>
            <input 
              type="text"
              id="name"
              value={name}
              onChange={NameChange}
              // onChange={(e)=> setName(e.target.value) }
              className="input-design form-control"
              placeholder='please enter your name'
              required
            />   
              {nameError && (
              <span className="errordesign" style={{ color: "red" }}>
                Please Enter valid Name
              </span>
            )}       
          </div><br />

       <div className="col-md-8">
            <label 
            // for="ConNumber"
            className="field-design form-label" >
            <BiMobileVibration className="name-icon" />Mobile*
            </label>
            <input
              type="number"
              id="number"
              value={number}
              onChange={NumberChange}
              // onChange={(e)=> setNumber(e.target.value) }

              className="input-design form-control"
              placeholder='please enter your number'
              required
            /> 
            {numberError && (
              <span className="errordesign" style={{ color: "red"}}>
                Please Enter valid Number
              </span>
            )}          
          </div><br />

        <div className="col-md-8">
            <label
            // for="ConEmail"
            className="field-design form-label">
            <TfiEmail className="name-icon" />Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={EmailChange}
              // onChange={(e)=> setEmail(e.target.value) }
              className="input-design form-control"
              placeholder='please enter your email'
              required
            />   
             {emailError && (
              <span className="errordesign" style={{ color: "red" }}>
                Please Enter valid email
               </span>
            )}          
          </div> <br />
          </div>

         
          <div className="col-12">
            <button className="btn btn-warning sb" type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <Link to="addressbook">
                    <button className="btn btn-warning sb">Show Data</button>
            </Link>
            </div>    
      </form>
      </div>

    </>
    )
}

export default NewContact
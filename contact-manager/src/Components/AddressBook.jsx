import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../Contact.css";
import { Link } from "react-router-dom";
import { BsPersonAdd } from "react-icons/bs";
import { BsMagic } from "react-icons/bs";
import {FaRegAddressBook} from "react-icons/fa"
import { BsFillXSquareFill } from "react-icons/bs";

const AddressBook = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://642d6aa466a20ec9ce9ce456.mockapi.io/contact-manager-crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id){
        axios.delete(`https://642d6aa466a20ec9ce9ce456.mockapi.io/contact-manager-crud/${id}`
        )
        .then((res)=>{
            getData();
        });
  }

  const setToLocalStorage= (id,name, number, email) =>{
    console.log("in edit");
    localStorage.setItem("id", id);
    localStorage.setItem("name",name);
    localStorage.setItem("number", number);
    localStorage.setItem("email", email);

  }



 





  return (
    <>
      <div className="main-container-read">
      <FaRegAddressBook className="addressbook-icon" />
        <h1 className="read-title">Address Book</h1>
        <div className="d-flex justify-content-between">
          <Link to="/">
            <button className="btn btn-warning add-btn">
              <BsPersonAdd className="add-icon-read" />
              Add New Contact
            </button>
          </Link>
        </div>

        <table className="table table">
          <thead>
            <tr className="table-head-design">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr className="table-data">
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.number}</td>
                    <td>{eachData.email}</td>
                    <td>
                      <Link to="/editcontact">
                        <button
                          className="text btn-success"
                            onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.number,
                            eachData.email
                          )
                            }
                        >
                          <h5>
                            <BsMagic className="del-btn" />
                            Edit
                          </h5>
                        </button>
                      </Link>
                    </td>

                    <td>
                      <button
                        className="text btn-danger"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete this entry?"
                          );
                          if (confirmBox === true) {
                            handleDelete(eachData.id);
                          }
                        }}
                      >
                        <h5>
                          <BsFillXSquareFill className="del-btn" />
                          Delete
                        </h5>
                      </button>
                    </td>

                    {/* <td>
                                <button className='btn-danger'
                                onClick = { () => handleDelete(eachData.id)}><h5><BsFillXSquareFill className='delbtn'/>Delete</h5></button>
                            </td> */}
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default AddressBook;

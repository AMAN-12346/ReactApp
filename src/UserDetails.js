import { Link } from "@mui/material";
import React, { useState } from "react";
import { useParams, useLocation, } from "react-router";
import axios from "axios";

// const baseURL = 'https://jsonplaceholder.typicode.com/todos/1';

function UserDetails() {
    const { type } = useParams();
    const data = useLocation();
    console.log(data.state.data)

   const[personDetails, setpersonDetails]= useState(data.state.data)
   
    return (
        <div>  
            <h1>userId: {personDetails.userId}</h1>
            <h1>Id: {personDetails.id}</h1>
            <h1>Title: {personDetails.title}</h1>
  


    {/* <p>{state.data.title}</p> */}
                 {/* <td>{props.userId}</td>
                  <td>{props.id}</td>
                  <td>{props.title}</td>
                  <td>{props.completed}</td>          */}
            </div>
          )
        }
export default UserDetails;  


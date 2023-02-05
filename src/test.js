// import './login.css';
import React, { useEffect, useState } from 'react';
import  { useNavigate } from "react-router-dom";

function Test() { 
   let navigate = useNavigate();

    const  correctUserName = "aman@gmail.com"
    const correctpassword = "aman123"
   
    const [UserName, setUserName] = useState("")
    const [password, setPassword] = useState("")
   
    function validate() {
        console.log(document.getElementById("text1").value, document.getElementById("text2").value)
        if (correctUserName ==  UserName && correctpassword == password) {
            navigate("/Dashboard");
            // location.href = ("file:///C:/Users/lenovo%20it/Desktop/demo%20project/new%20dashboard/dashboard.html")
           
        }   
        else {
            alert("validation failed");
            //   location.href = UserName
        }
    }
    return (
    
        <ul>
            <li><a href="#home">HOME</a></li>

            <li><a href="#LOGIN">LOGIN</a></li>

            <li><a href="#register">REGISTER</a></li>
            <p id="userDetail"></p>

            <div class="center box">
                <input
                    class="field"
                    type="text"
                    placeholder="UserName"
                    id='text1'
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                ></input>

            <input
                    class="field"
                    type="password"
                    placeholder="Password"
                    id='text2'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>


                <button type="submit" onClick={() => validate()}>LOGIN </button>

                {/* <button onClick={() =>{navigate("/Dashboard");}}>LOGIN  </button> */}
                {/* <div>
            <Link to="/insert/your/path/here" className="btn btn-primary">hello</Link>
         </div> */}
                <span class="register">already have an account? <a href="#">register </a></span>
            </div>
        </ul>

    )
    
    
}

export default Test;



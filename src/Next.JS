import React, { useEffect, useState } from 'react';
import './App.css';
import React from "react"
// import React, { useEffect, useState } from 'react';
import { desktop } from "react-icons/fa";
import axios from 'axios';
// const baseURL = "https://imdb-api.com/en/API/MostPopularMovies/k_260123r8";



function App() {
  const [inputList, setInputList] = useState(
    [{
     firstName: "aman",
     lastName: "singh"
     }]);
 
  function getData(e){

      console.log(e.target.value)
      // setInputList(e.target.value)
    }
    const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  
    const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index,1);
    setInputList(list);
  };
 
  
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };
 
  return (
    <div className="App">
  
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input name="firstName" placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)} />
           <input type="text" onChange={getData}/>
            <input name="lastName"placeholder="Enter Last Name"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)} />
           
                   <div className="btn-box">
                      {inputList.length !== 1 && <button className="mr10"onClick={() => handleRemoveClick(i)}>Remove</button>}
                         {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                </div>
             </div>
            );
          })}
     
    </div>
  ); 
}
 
export default App;
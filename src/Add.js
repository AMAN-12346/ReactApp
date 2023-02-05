import React, { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';

function ADD() {  
    let navigate = useNavigate();
    const inputArr = [{ type: "text", id: 1, value: "",age: "18"}];
    const [Arr, setArr] = useState(inputArr);
    const location = useLocation();
    const addInput = () => {
        setArr(preState => {
            return [
                ...preState,
                {
                    type: "",
                    id:"2",
                    value: "",
                    age: "18",
                }
            ];
        });
    };
    const removeData = (index) => {
        
        let data = JSON.parse(JSON.stringify(Arr))
        data.splice(index, 1);
        setArr(data)
    }
    function validate() {
        navigate('/Name', { state: Arr });

    }

    useEffect(() => {
        console.log(Arr)
    }, [Arr])

    const handleChange = e => {
        e.preventDefault();

        const index = e.target.id;
        setArr(s => {   
            const newArr = s.slice();
            newArr[index].value = e.target.value;

            return newArr;
        });
    };


    return (
        <div>
            <div>{location.value}</div> 
            <br></br>
            <button onClick={addInput}>ADD MORE</button>
            {Arr && Arr[0] && Arr.map((item, index) => {

                return (
                    <div>
                    <div key={index}>
                        <td>{item.value}</td>
                        <input
                            onChange={handleChange}  
                            value={item.value}
                            id={index}
                            type={item.type}
                            size="35"
                        />
                        <button onClick={() => removeData(index)}><strong>remove</strong></button>
                    </div>
                    </div>
                );
            })}
            <button type="submit" onClick={() => validate()}>Submit </button>
        </div>
    );
}
export default ADD;


import React, { useEffect, useState, } from 'react';
import { useLocation } from 'react-router-dom';


function Name(props) {
    const location = useLocation()
    const [Data, setData] = useState(location.state)
    const [print, setPrint] = useState(false)

    console.log("props >>>>>", props, location.state)

    // function getData(e) {
    //     setData(e.target.value)
    //     // console.warn(e.target.value)

    // }
    // console.log(props)

    return (
        <div className="App">
            <table>
            
        <thead>
            <tr>
            <th>id</th>
           
            <th>age</th>
            <th>NAME</th>
</tr>
</thead>

     {Data && Data [0] ?
      Data.map((item,i)=>
      <tr key={i}>
    <td>{item.id}</td>
      <td>{item.age}</td>
      <td>{item.value}</td>
        </tr>
) :""
}
        </table>
        </div>
    );

}
export default Name;
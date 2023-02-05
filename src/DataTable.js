import axios from "axios";
import React from "react";
//  import './App.css';
const baseURL = 'https://jsonplaceholder.typicode.com/todos/1'

export default function App(  ) {
  const [post, setPost] = React.useState();

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
        console.log(response);
      setPost(response.data.["0...99"]);
    });
  }, []);


  return (

    
    <div>
    <h1>user's data</h1>
   <div>
    <table>
        <thead>
            <tr>
            <th>S.NO</th>
            <th>PROFILE IMG</th>
            <th>NAME</th>
            <th>EMAIL</th>
</tr>
        </thead>
        
       
            {post && post[0] ?
                post.map((item,i)=>
                <tr key={i}>
                                  <td>{item.userId}</td>

              <td>{item.id}</td>
              
            {/* <td>  <img src={ item.image} className="https://reqres.in/img/faces/1-image.jpg" alt={item.avatar} /></td> */}
              <td>{item.tittle}</td>
              
              <td>{item.completed}</td>
              

                </tr>
                ) :""
}

        
       
    </table>
    </div>
    </div>








  );
}
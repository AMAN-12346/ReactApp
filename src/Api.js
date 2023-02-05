import userEvent from "@testing-library/user-event";
import axios from "axios";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import './App.css';
import useHistory from 'use-history';
const baseURL = 'https://jsonplaceholder.typicode.com/todos/';

export default function App(props) {
  const [post, setPost] = React.useState();
  const location = useLocation(); 

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((
      response) => {
      console.log(response);
      setPost(response.data);
    });
  }, []);

  return (
    <div>
      <h1>user's data</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>USER ID</th>
              <th>ID</th>
              <th>TITLE</th>
              <th>COMPELETED</th>
            </tr>
          </thead>

          {post && post[0] ?
            post.map((item, i) =>

              <Link to={ '/userdetails'}
                state={{ data: item }}
              >
                <tr key={i}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.completed}</td>
                </tr>
              </Link>
               

            ) : ""
          }
        </table>
      </div>
    </div>
  );
}


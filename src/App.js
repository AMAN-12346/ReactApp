import logo from './logo.svg';
import './App.css';

import React from 'react';
import Test from './test';
import Api from './Api';
import Dashboard from './dashboard';
import Movies from './movies';
// import Bakery  from './src/pages/bakery';
import Name from './Name';
// import Next from './next';
import Add from './Add';
import Loginui from './loginui';
import Navigate from './navigate';
import Card from './components/card';
import Child from './pagesContext/Child';
import Main from './pagesContext/Main';
import ThemeButton from './pagesContext/Themebutton';
import UserDetails from './UserDetails';
import Scroll from './Scroll';
// import DataTable from './datatable';
// import Context from './contextApi/context';
// import Next from './Next';
import { ColorContext } from './Context';
import ThemeContext from './context/contexts'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function Home() {
  return (
    <h2>Home Page</h2>
  )
}

function App() {

  return (
    // <ThemeContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} exact />
          <Route path="/movies" element={<Movies />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
          {/* <Route path="/next" element={<Next />} exact /> */}
          <Route path="/name" element={<Name />} exact />
          <Route path="/add" element={<Add />} exact />
          <Route path="/navigate" element={<Navigate />} exact />
          <Route path="/card" element={<Card />} exact />
          <Route path="/child" element={<Child />} exact />
          <Route path="/main" element={<Main />} exact />
          <Route path="/themebutton" element={<ThemeButton />} exact />
          <Route path="/userdetails" element={<UserDetails />} exact />
          <Route path="/loginui" element={<Loginui />} exact />
          <Route path="/scroll" element={<Scroll />} exact />

        
        </Routes>
      </BrowserRouter>
  //  </ThemeContext>

  );
}

export default App;

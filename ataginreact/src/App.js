import React from 'react';
import './App.css';

import Header from './Component/Header/header';
import Home from './Component/Home/home';
import Login from './Component/Home/login';
import Registration from './Component/Home/registration';

import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';


// function App() {
//   return (
//     <div>
//       {/* <Header /> */}
//     </div>
//   );
// }

export default ()=> {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/'  Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/registration' Component={Registration} />
      </Routes>
    </Router>

  );
};

import React from 'react';
import './App.css';

import Header from './Component/Header/header';
import Booknow from './Component/Home/booknow';
import Home from './Component/Home/home';
import Ad from './Component/Home/ad';
import Service from './Component/Home/service';
import Football from './Component/Home/football';
import Cricket from './Component/Home/cricket';
import Hockey from './Component/Home/hockey';
import Fee from './Component/Home/fee';
import Footer from './Component/Footer/footer';


import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';


export default ()=> {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/'  Component={Home} />
        <Route path='/booknow' Component={Booknow} />
        <Route path='/ad' Component={Ad} />
        <Route path='/service' Component={Service} />
        <Route path='/football' Component={Football} />
        <Route path='/cricket' Component={Cricket} />
        <Route path='/hockey' Component={Hockey} />
        <Route path='/fee' Component={Fee} />
      </Routes>
      <Footer/>
    </Router>

  );
};

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Income from './components/Income';

import './App.css';
const App = () => (
  <Router>
    <main>
      <h1>Your available balance is: <span id="expense">Rs 15000</span></h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/income" element={<Income />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;


// 
// import Expenses from './components/Expenses';

// 
// <Route path="/expenses" element={<Expenses />} />
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Income from './components/Income';
import Expenses from './components/Expenses';

import './App.css';

const App = () => {
  const [income, setIncome] = useState();

  useEffect(() => {
    const storedIncome = localStorage.getItem('income');
    if (storedIncome) {
      setIncome(Number(storedIncome));
    }
  }, []);

  const handleSetIncome = (newIncome) => {
    setIncome(newIncome);
    localStorage.setItem('income', newIncome);
  };

  return (
    <Router>
      <h1>Your available balance is: <span id="expense">Rs {income}</span></h1>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/income" element={<Income income={income} setIncome={handleSetIncome} />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

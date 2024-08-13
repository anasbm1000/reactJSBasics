import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Customizedmsg from './components/Customizedmsg';
import './App.css';

const App = () => {
  const [income, setIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  
  useEffect(() => {
    const storedIncome = localStorage.getItem('income');
    const storedExpenses = localStorage.getItem('expenses');
    if (storedIncome) {
      setIncome(Number(storedIncome));
    }
    if (storedExpenses) {
      const expenses = JSON.parse(storedExpenses);
      const newTotalExpenses = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
      setTotalExpenses(newTotalExpenses);
    }
  }, []);

  const handleSetIncome = (newIncome) => {
    setIncome(newIncome);
    localStorage.setItem('income', newIncome);
  };

  const handleUpdateTotalExpenses = (newTotalExpenses) => {
    setTotalExpenses(newTotalExpenses);
  };

  const availableBalance = income - totalExpenses;

  return (
    <Router>
      <h1>Your available balance is: <span id="expense" className="blink">Rs {availableBalance}</span></h1>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/income" element={<Income income={income} setIncome={handleSetIncome} />} />
          <Route path="/expenses" element={<Expenses income={income} updateTotalExpenses={handleUpdateTotalExpenses} />} />
          <Route path="/customizedmsg" element={<Customizedmsg />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

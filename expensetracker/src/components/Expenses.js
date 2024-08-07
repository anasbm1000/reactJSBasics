import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    const newTotal = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
    setTotalExpenses(newTotal);
  }, [expenses]);

  const handleAddExpense = (event) => {
    event.preventDefault();
    if (expenseName && expenseAmount) {
      const newExpense = { name: expenseName, amount: Number(expenseAmount) };
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      setExpenseName('');
      setExpenseAmount('');
    } else {
      alert('Please enter valid expense name and amount');
    }
  };

  const handleClearExpenses = () => {
    setExpenses([]);
    localStorage.removeItem('expenses');
  };

  return (
    <div className="profile-container">
      <div className="profile-form">
        <h2>Add Expenses</h2>
        <form onSubmit={handleAddExpense}>
          <div className="form-group">
            <label>
              Expense Name:
              <input
                type="text"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                placeholder="Enter expense name"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Expense Amount:
              <input
                type="number"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                placeholder="Enter expense amount"
              />
            </label>
          </div>
          <div className="form-buttons">
            <button type="submit">Add Expense</button>
            <button type="button" onClick={handleClearExpenses}>Clear Expenses</button>
          </div>
        </form>
      </div>
      <div className="profile">
        <div className="profile-details">
          <h2>Expenses Summary</h2>
          <div>
            <strong>Total Expenses:</strong> Rs {totalExpenses}
          </div>
          <div className="expense-list">
            {expenses.map((expense, index) => (
              <div key={index}>
                <strong>{expense.name}:</strong> Rs {expense.amount}
              </div>
            ))}
          </div>
        </div>
        <div className="profile-buttons">
          <Link to="/" className="home-button">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Expenses;

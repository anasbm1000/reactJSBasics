import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Customizedmsg from './Customizedmsg';  // Import the CustomizedMsg component

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [message, setMessage] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

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
      setMessage('Expense added successfully!');
      setTimeout(() => setMessage(''), 3000);
    } else {
      setModalMessage('Please enter valid expense name and amount');
      setShowModal(true);
    }
  };

  const handleClearExpenses = () => {
    setExpenses([]);
    localStorage.removeItem('expenses');
  };

  const handleClearForm = () => {
    setExpenseName('');
    setExpenseAmount('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="expenses-container">
      <Customizedmsg show={showModal} handleClose={handleCloseModal} message={modalMessage} />
      <div className="profile expensesummary">
        <div className="profile-details expensesummary">
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
          <button onClick={handleClearExpenses}>Clear</button>
          <Link to="/" className="home-button">Home</Link>
        </div>
      </div>
      <div className="profile-form addexpense">
        <h2>Add Expenses</h2>
        {message && <p className="success-message">{message}</p>}
        <form onSubmit={handleAddExpense}>
          <table>
            <tbody>
              <tr>
                <th>Expense Name:</th>
                <td>
                  <input
                    type="text"
                    value={expenseName}
                    onChange={(e) => setExpenseName(e.target.value)}
                    placeholder="Enter expense name"
                  />
                </td>
              </tr>
              <tr>
                <th>Expense Amount:</th>
                <td>
                  <input
                    type="number"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    placeholder="Enter expense amount"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="form-buttons">
            <button type="submit">Add Expense</button>
            <button type="button" onClick={handleClearForm}>Clear</button>
            <Link to="/" className="home-button">Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Expenses;

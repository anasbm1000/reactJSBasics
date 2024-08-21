import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Customizedmsg from './Customizedmsg';

const Expenses = ({ income, updateTotalExpenses }) => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [message, setMessage] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [googleLoaded, setGoogleLoaded] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      const expenses = JSON.parse(storedExpenses);
      setExpenses(expenses);
      const newTotal = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
      setTotalExpenses(newTotal);
      updateTotalExpenses(newTotal);
    }
  }, [updateTotalExpenses]);

  useEffect(() => {
    if (googleLoaded) {
      drawChart();
    }
    const newTotal = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
    setTotalExpenses(newTotal);
    updateTotalExpenses(newTotal);
  }, [expenses, googleLoaded]);

  const handleAddExpense = (event) => {
    event.preventDefault();
    const numericExpenseAmount = Number(expenseAmount);

    if (!expenseName || numericExpenseAmount < 0) {
      setModalMessage('Please enter a valid expense name and amount greater than or equal to zero.');
      setShowModal(true);
      return;
    }

    const newTotalExpenses = totalExpenses + numericExpenseAmount;

    if (newTotalExpenses > income) {
      setModalMessage('Total expenses exceed your income.');
      setShowModal(true);
      return;
    }

    if (editIndex !== null) {
      // Editing an existing expense
      const updatedExpenses = [...expenses];
      const oldAmount = updatedExpenses[editIndex].amount;
      updatedExpenses[editIndex] = { name: expenseName, amount: numericExpenseAmount };
      setExpenses(updatedExpenses);
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      setEditIndex(null);
      setMessage('Expense updated successfully!');
    } else {
      // Adding a new expense
      const newExpense = { name: expenseName, amount: numericExpenseAmount };
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      setMessage('Expense added successfully!');
    }

    setExpenseName('');
    setExpenseAmount('');
    setTimeout(() => setMessage(''), 3000);
    checkPercentageAlert(newTotalExpenses, 'total expenses');
  };

  const checkPercentageAlert = (value, type) => {
    const percentage = (value / income) * 100;
    if (percentage === 100) {
      setModalMessage(`You are running out of balance`);
      setShowModal(true);
    } else if (percentage >= 90) {
      setModalMessage(`${type} have reached 90% of your income.`);
      setShowModal(true);
    } else if (percentage >= 75) {
      setModalMessage(`${type} have reached 75% of your income.`);
      setShowModal(true);
    } else if (percentage >= 50) {
      setModalMessage(`${type} have reached 50% of your income.`);
      setShowModal(true);
    }
  };

  const handleRemoveExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setMessage('Expense removed successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleClearExpenses = () => {
    setExpenses([]);
    setTotalExpenses(0);
    localStorage.removeItem('expenses');
    setMessage('All expenses cleared!');
    setTimeout(() => setMessage(''), 3000);
    updateTotalExpenses(0);
  };

  const handleEditExpense = (index) => {
    const expenseToEdit = expenses[index];
    setExpenseName(expenseToEdit.name);
    setExpenseAmount(expenseToEdit.amount);
    setEditIndex(index);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const drawChart = () => {
    if (window.google && window.google.visualization) {
      const data = window.google.visualization.arrayToDataTable([
        ['Expense', 'Amount'],
        ...expenses.map(expense => [expense.name, expense.amount])
      ]);

      const options = {
        chart: {
          title: 'Expenses Breakdown',
        },
        hAxis: {
          title: 'Expense',
          minValue: 0
        },
        vAxis: {
          title: 'Amount',
          minValue: 0,
          gridlines: { count: -1 },
          ticks: Array.from({ length: Math.ceil(Math.max(...expenses.map(expense => expense.amount)) / 10000) + 1 }, (_, i) => i * 10000)
        }
      };

      const chart = new window.google.charts.Bar(document.getElementById('chart_div'));
      chart.draw(data, window.google.charts.Bar.convertOptions(options));
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/charts/loader.js';
    script.onload = () => {
      window.google.charts.load('current', { packages: ['bar'] });
      window.google.charts.setOnLoadCallback(() => {
        setGoogleLoaded(true);
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="profile-container">
      <Customizedmsg show={showModal} handleClose={handleCloseModal} message={modalMessage} />
      
      <form onSubmit={handleAddExpense} className="profile-form addincome">
        <h2>Expenses</h2>
        {message && <p className="message">{message}</p>}
        <div className="input-group">
          <input
            type="text"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            min="0"
          />
        </div>
        <div className="form-buttons">
          <button type="submit">{editIndex !== null ? 'Update Expense' : 'Add Expense'}</button>
        </div>
      </form>

      <h2>Total Expenses: {totalExpenses}</h2>

      <div className='profile-table'>
        {expenses.length > 0 ? (
          <>
            <table className="expense-table">
              <thead>
                <tr>
                  <th>Expense</th>
                  <th>Amount</th>
                  <th>Remove</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.name}</td>
                    <td>{expense.amount}</td>
                    <td><button onClick={() => handleRemoveExpense(index)}>Remove</button></td>
                    <td><button onClick={() => handleEditExpense(index)}>Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </>
        ) : (
          <p id='no-expenses'>No expenses added yet.</p>
        )}

        <div className="form-buttons expenseclear">
          <button className="clear-button" onClick={handleClearExpenses}>Clear All</button>
          <Link to="/" className="home-button">Home</Link>
        </div>
      </div>
      <div id="chart_div" style={{ width: '90%', height: '500px' }}></div>
    </div>
  );
};

export default Expenses;

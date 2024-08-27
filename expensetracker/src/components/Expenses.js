import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts'; // Import the Chart component
import '../App.css';
import Customizedmsg from './Customizedmsg';

const Expenses = ({ categories = [], income, updateTotalExpenses }) => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalCategoryExpenses, setTotalCategoryExpenses] = useState({});
  const [message, setMessage] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categoryColors, setCategoryColors] = useState({});

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setLoadingCategories(false);

      const newCategoryColors = { ...categoryColors };
      categories.forEach(category => {
        if (!newCategoryColors[category.name]) {
          // Ensure that the generated color is exactly 6 characters long
          let color;
          do {
            color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
          } while (Object.values(newCategoryColors).includes(color)); // Avoid duplicate colors

          newCategoryColors[category.name] = color;
        }
      });
      setCategoryColors(newCategoryColors);
    }
  }, [categories]);

  const checkPercentageAlert = useCallback((value, type) => {
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
  }, [income]);

  useEffect(() => {
    const newTotalExpenses = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
    setTotalExpenses(newTotalExpenses);
    updateTotalExpenses(newTotalExpenses);
  }, [expenses, updateTotalExpenses]);

  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!expenseName || !expenseAmount || !selectedCategory) {
      setModalMessage('Please fill all fields');
      setShowModal(true);
      return;
    }

    if (Number(expenseAmount) < 0) {
      setModalMessage('Amount cannot be less than zero');
      setShowModal(true);
      return;
    }

    const categoryLimit = categories.find(cat => cat.name === selectedCategory)?.limit;
    const currentCategoryExpenses = totalCategoryExpenses[selectedCategory] || 0;

    let updatedExpenses;
    let updatedCategoryExpenses;

    if (editIndex !== null) {
      const originalExpense = expenses[editIndex];
      const originalAmount = originalExpense.amount;

      const newCategoryExpenses = currentCategoryExpenses - originalAmount;

      if (newCategoryExpenses + Number(expenseAmount) > categoryLimit) {
        setModalMessage('This expense exceeds the category limit');
        setShowModal(true);
        return;
      }
      updatedExpenses = expenses.map((expense, index) =>
        index === editIndex ? { ...expense, name: expenseName, amount: Number(expenseAmount), category: selectedCategory } : expense
      );
      updatedCategoryExpenses = newCategoryExpenses + Number(expenseAmount);
      setEditIndex(null);
    } else {
      if (currentCategoryExpenses + Number(expenseAmount) > categoryLimit) {
        setModalMessage('This expense exceeds the category limit');
        setShowModal(true);
        return;
      }

      updatedExpenses = [...expenses, { name: expenseName, amount: Number(expenseAmount), category: selectedCategory }];
      updatedCategoryExpenses = currentCategoryExpenses + Number(expenseAmount);
    }

    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setMessage('Expense added successfully!');

    setTotalCategoryExpenses({
      ...totalCategoryExpenses,
      [selectedCategory]: updatedCategoryExpenses
    });

    const newTotalExpenses = updatedExpenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
    checkPercentageAlert(newTotalExpenses, 'total expenses');

    setExpenseName('');
    setExpenseAmount('');
    setSelectedCategory('');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleRemoveExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    const removedExpense = expenses[index];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setMessage('Expense removed successfully!');
    setTimeout(() => setMessage(''), 3000);

    const updatedCategoryExpenses = {
      ...totalCategoryExpenses,
      [removedExpense.category]: totalCategoryExpenses[removedExpense.category] - removedExpense.amount
    };
    setTotalCategoryExpenses(updatedCategoryExpenses);

    const newTotalExpenses = updatedExpenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
    checkPercentageAlert(newTotalExpenses, 'total expenses');
  };

  const handleClearExpenses = () => {
    setExpenses([]);
    localStorage.removeItem('expenses');
    setMessage('All expenses cleared!');
    setTimeout(() => setMessage(''), 3000);
    updateTotalExpenses(0);
  };

  const handleEditExpense = (index) => {
    const expenseToEdit = expenses[index];
    setExpenseName(expenseToEdit.name);
    setExpenseAmount(expenseToEdit.amount);
    setSelectedCategory(expenseToEdit.category);
    setEditIndex(index);
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowSummary = () => {
    setSubmitted(true);
  };

  const handleHideSummary = () => {
    setSubmitted(false);
  };

  if (loadingCategories) {
    return <p>Loading categories...</p>;
  }

  const chartData = [
    ['Expense', 'Amount', { role: 'style' }],
    ...expenses.map(expense => [expense.name, expense.amount, categoryColors[expense.category] || '#000000']),
  ];

  return (
    <div className={`profile-container ${submitted ? 'submitted' : ''}`}>
      <Customizedmsg show={showModal} handleClose={handleCloseModal} message={modalMessage} />

      {!submitted && (
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
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories && categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
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
            <button type="button" onClick={handleShowSummary}>Expense Summary</button>
            <Link to="/" className="home-button">Home</Link>
          </div>
        </form>
      )}

      {submitted && (
        <div className="profile-table">
          <h2>Total Expense : <span id="expenses" className="blink">Rs {totalExpenses}</span></h2>
          <table className="expense-table expensesummary">
            <thead>
              <tr>
                <th>Expense</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                  <td>
                    <button onClick={() => handleEditExpense(index)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleRemoveExpense(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Chart
            chartType="BarChart"
            data={chartData}
            options={{
              title: 'Expenses Summary',
              chartArea: { width: '50%' },
              hAxis: {
                title: 'Total Expenses',
                minValue: 0,
              },
              vAxis: {
                title: 'Expense',
              },
              legend: 'none',
            }}
            width="100%"
            height="400px"
          />
          <div className="form-buttons">
            <button onClick={handleClearExpenses}>Clear All</button>
            <button onClick={handleHideSummary}>Add Expenses</button>
            <Link to="/" className="home-button expenses">Home</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;

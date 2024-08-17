import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Customizedmsg from './Customizedmsg';
import '../App.css';

const Income = ({ income, setIncome }) => {
  const [categories, setCategories] = useState([
    { name: 'Household', limit: '' },
    { name: 'Special Functions', limit: '' },
    { name: 'Emergencies', limit: '' }
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [customMessage, setCustomMessage] = useState(''); 
  const [showMessage, setShowMessage] = useState(false); 

  useEffect(() => {
    const storedIncomeData = localStorage.getItem('incomeData');
    if (storedIncomeData) {
      const parsedData = JSON.parse(storedIncomeData);
      setCategories(parsedData.categories);
      setSubmitted(true);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (value < 0) {
      setCustomMessage('Values cannot be less than zero');
      setShowMessage(true);
      return;
    }
    
    if (name === 'income') {
      const newIncome = Number(value);
      const totalCategoryLimit = categories.reduce((sum, cat) => sum + Number(cat.limit), 0);
      if (newIncome < totalCategoryLimit) {
        setCustomMessage('Total category limits exceed income');
        setShowMessage(true);
        return;
      }
      setIncome(newIncome);
    } else {
      const updatedCategories = categories.map(category => (
        category.name === name ? { ...category, limit: value } : category
      ));
      const totalNewLimit = updatedCategories.reduce((sum, cat) => sum + Number(cat.limit), 0);
      if (totalNewLimit > income) {
        setCustomMessage('Total category limits exceed income');
        setShowMessage(true);
        return;
      }
      setCategories(updatedCategories);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const incomeData = { income, categories };
    localStorage.setItem('incomeData', JSON.stringify(incomeData));
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  const handleClear = () => {
    setIncome(0);
    setCategories([
      { name: 'Household', limit: '' },
      { name: 'Special Functions', limit: '' },
      { name: 'Emergencies', limit: '' }
    ]);
    localStorage.removeItem('incomeData');
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className={`profile-container ${submitted ? 'submitted' : ''}`}>
      {submitted && (
        <div className="profile incomebackground">
          <div className="profile-details incomebackground">
            <h2>Income Details</h2>
            <div><strong>Income:</strong> {income}</div>
            {categories.map((category) => (
              <div key={category.name}>
                <strong>{category.name} Limit:</strong> {category.limit}
              </div>
            ))}
          </div>
          <div className="profile-buttons">
            <button onClick={handleEdit}>Edit</button>
            <Link to="/" className="home-button">Home</Link>
          </div>
        </div>
      )}
      {!submitted && (
        <form className="profile-form addincome" onSubmit={handleSubmit}>
          <h2>Add Income</h2>
          <table>
            <tbody>
              <tr>
                <th>Income:</th>
                <td>
                  <input
                    type="number"
                    name="income"
                    value={income}
                    placeholder="Enter your income"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              {categories.map((category) => (
                <tr key={category.name}>
                  <th>{category.name} Limit:</th>
                  <td>
                    <input
                      type="number"
                      name={category.name}
                      value={category.limit}
                      placeholder={`Enter ${category.name} limit`}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="form-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={handleClear}>Clear</button>
            <Link to="/" className="home-button">Home</Link>
          </div>
        </form>
      )}
      <Customizedmsg show={showMessage} handleClose={handleCloseMessage} message={customMessage} />
    </div>
  );
};

export default Income;

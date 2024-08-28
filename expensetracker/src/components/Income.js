import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Customizedmsg from './Customizedmsg';
import '../App.css';

const Income = ({ income = 0, setIncome, categories = [] }) => {
  const [localCategories, setLocalCategories] = useState(categories.length ? categories : [
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
      setLocalCategories(parsedData.categories || localCategories);
      setIncome(parsedData.income || income);
      setSubmitted(true);
    }
  }, [setLocalCategories]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;

    if (value < 0) {
      setCustomMessage('Values cannot be less than zero');
      setShowMessage(true);
      return;
    }

    if (name === 'income') {
      const newIncome = Number(value);
      const totalCategoryLimit = localCategories.reduce((sum, cat) => sum + Number(cat.limit), 0);
      if (newIncome < totalCategoryLimit) {
        setCustomMessage('Total category limits exceed income');
        setShowMessage(true);
        return;
      }
      setIncome(newIncome);
    } else {
      const updatedCategories = [...localCategories];
      const newLimit = Number(value);

      const totalNewLimit = updatedCategories.reduce((sum, cat, i) =>
        sum + (i === index ? newLimit : Number(cat.limit)), 0);

      if (newLimit > income || totalNewLimit > income) {
        setCustomMessage('Total category limits exceed income');
        setShowMessage(true);
        return;
      }
      updatedCategories[index].limit = newLimit;
      setLocalCategories(updatedCategories);
    }
  };

  const addCategory = () => {
    if (localCategories.length < 10) {
      setLocalCategories([...localCategories, { name: 'New Category', limit: '' }]);
    } else {
      setCustomMessage('Maximum of 10 categories allowed');
      setShowMessage(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const incomeData = { income, categories : localCategories };
    localStorage.setItem('incomeData', JSON.stringify(incomeData));
    setIncome(income, localCategories);
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  const handleClear = () => {
    setIncome(0);
    setLocalCategories([
      { name: 'Household', limit: '' },
      { name: 'Special Functions', limit: '' },
      { name: 'Emergencies', limit: '' }
    ]);
    localStorage.removeItem('incomeData');
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  const handleCategoryNameChange = (index, newName) => {
    const updatedCategories = [...localCategories];
    updatedCategories[index].name = newName;
    setLocalCategories(updatedCategories);
  };

  const handleRemoveCategory = (index) => {
    const updatedCategories = localCategories.filter((_, i) => i !== index);
    setLocalCategories(updatedCategories);
  };
  
  const handleBack = () => {
    setSubmitted(true);
  };
  return (
    <div className={`profile-container ${submitted ? 'submitted' : ''}`}>
      {submitted && (
        <div className="profile-table forincome">
          <>
            <table className="expense-table forincome">
              <tbody>
                <tr>
                  <td id="tableheading"><strong>Total Income</strong></td>
                  <td id="incomevalues">Rs. {income}</td>
                </tr>
                {localCategories.map((category, index) => (
                  <tr key={index}>
                    <td><strong>{category.name} Limit</strong></td>
                    <td id="incomevalues">Rs. {category.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </>
          <div className="form-buttons expenseclear">
            <Link to="/" className="home-button">Back</Link>
            <button onClick={handleEdit} className="home-button">Edit</button>
          </div>
        </div>
      )}
      {!submitted && (
        <form className="profile-form addincome" onSubmit={handleSubmit}>
          <h2>Add Income</h2>
          <table>
            <tbody>
              <tr>
                <th><input type="text" name="income" value="Income" placeholder="Enter your income" /></th>
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
              {localCategories.map((category, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={category.name}
                        onChange={(e) => handleCategoryNameChange(index, e.target.value)}
                        placeholder="Enter category name"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name={category.name}
                        value={category.limit}
                        placeholder={`Enter ${category.name} limit`}
                        onChange={(e) => handleChange(e, index)}
                        min="0"
                      />
                    </td>
                    <td>
                      <button type="button" onClick={() => handleRemoveCategory(index)}>Remove</button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={addCategory}>Add Category</button>
          <div className="form-buttons">
            <button type="button" onClick={handleBack}>Back</button>
            <Link to="/" className="home-button">Home</Link>
            <button type="button" onClick={handleClear}>Clear All</button>
            <button type="submit">Save</button>
          </div>
        </form>
      )}
      <Customizedmsg show={showMessage} handleClose={handleCloseMessage} message={customMessage} />
    </div>
  );
};

export default Income;

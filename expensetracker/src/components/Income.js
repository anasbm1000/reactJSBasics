import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Income = () => {
  const [income, setIncome] = useState('');
  const [categories, setCategories] = useState([
    { name: 'Household', limit: '' },
    { name: 'Special Functions', limit: '' },
    { name: 'Emergencies', limit: '' }
  ]);
  const [form, setForm] = useState({
    income: '',
    categories: [
      { name: 'Household', limit: '' },
      { name: 'Special Functions', limit: '' },
      { name: 'Emergencies', limit: '' }
    ]
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedIncomeData = localStorage.getItem('incomeData');
    if (storedIncomeData) {
      const parsedData = JSON.parse(storedIncomeData);
      setIncome(parsedData.income);
      setCategories(parsedData.categories);
      setForm({ income: parsedData.income, categories: parsedData.categories });
      setSubmitted(true);
    }
    return () => {
      // Clear local storage on component unmount
      localStorage.removeItem('incomeData');
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'income') {
      setForm((prevState) => ({ ...prevState, income: value }));
    } else {
      const updatedCategories = form.categories.map((category) =>
        category.name === name ? { ...category, limit: value } : category
      );
      setForm((prevState) => ({ ...prevState, categories: updatedCategories }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const incomeData = { income: form.income, categories: form.categories };
    setIncome(form.income);
    setCategories(form.categories);
    localStorage.setItem('incomeData', JSON.stringify(incomeData));
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  const handleClear = () => {
    setForm({
      income: '',
      categories: [
        { name: 'Household', limit: '' },
        { name: 'Special Functions', limit: '' },
        { name: 'Emergencies', limit: '' }
      ]
    });
  };

  return (
    <div className={`profile-container ${submitted ? 'submitted' : ''}`}>
      {submitted && (
        <div className="profile">
          <div className="profile-details">
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
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>Add Income</h2>
        <table>
          <tbody>
            <tr>
              <th>Income:</th>
              <td>
                <input
                  type="number"
                  name="income"
                  value={form.income}
                  placeholder="Enter your income"
                  onChange={handleChange}
                />
              </td>
            </tr>
            {form.categories.map((category) => (
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
        </div>
      </form>
    </div>
  );
};

export default Income;

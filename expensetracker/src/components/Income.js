import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Income = () => {
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
      setForm({ income: parsedData.income, categories: parsedData.categories });
      setSubmitted(true);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => {
      let updatedCategories = prevForm.categories.map((category) =>
        category.name === name ? { ...category, limit: value } : category
      );
      if (name === 'income') {
        updatedCategories = prevForm.categories;
      }
      const totalCategoryLimit = updatedCategories.reduce(
        (sum, category) => sum + (parseFloat(category.limit) || 0),
        0
      );

      if (name !== 'income' && totalCategoryLimit > parseFloat(prevForm.income)) {
        window.alert('The total sum of budget categories exceeds the income.');
        return prevForm;
      }

      return {
        ...prevForm,
        income: name === 'income' ? value : prevForm.income,
        categories: updatedCategories
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('incomeData', JSON.stringify(form));
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
            <div><strong>Income:</strong> {form.income}</div>
            {form.categories.map((category) => (
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

import React, { useState } from 'react';
import '../App.css';

const Income = () => {
  const [income, setIncome] = useState('');
  const [categories, setCategories] = useState([
    { name: 'Household', limit: '' },
    { name: 'Special Functions', limit: '' },
    { name: 'Emergencies', limit: '' }
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'income') {
      setIncome(value);
    } else {
      const updatedCategories = categories.map(category => (
        category.name === name ? { ...category, limit: value } : category
      ));
      setCategories(updatedCategories);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Income:', income);
    console.log('Categories:', categories);
  };

  return (
    <div className="income">
        <h2>Add Income</h2>
        <form onSubmit={handleSubmit}>
            <table className="income-table">
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
                <tr>
                    <td colSpan="2" className="button-cell">
                    <button type="submit">Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    </div>
  );
};

export default Income;

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => (
  <div className="home">
    <h2>Welcome to Expense Tracker</h2>
    <div className="card-container">
      <div className="card">
        <Link to="/profile">Profile</Link>
      </div>
      <div className="card">
        <Link to="/income">Add Income</Link>
      </div>
      <div className="card">
        <Link to="/expenses">Calculate Expenses</Link>
      </div>
    </div>
  </div>
);

export default Home;

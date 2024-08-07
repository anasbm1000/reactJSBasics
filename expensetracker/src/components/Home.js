import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => (
  <div>
    <div>

    </div>
    <div className="home">
      <h2>Welcome to <span id="expense"> Expense </span> Tracker</h2>
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
  </div>
);

export default Home;

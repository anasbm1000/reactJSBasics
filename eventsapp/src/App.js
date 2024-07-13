import './App.css';
import React, { Component } from 'react';

import Forms from './components/forms';
import Login from './components/login';
import ComplaintsAndSolutions from './components/complaintsandsolutions';
import Feedback from './components/feedback';

class App extends React.Component {
  render() {
    return (
        <div className='App'>
          <h1>Registration</h1>
          <Forms />
          <h1>Login</h1>
          <Login />
          <h1>Complaints and Solutions</h1>
          <ComplaintsAndSolutions />
          <h1>Feedback</h1>
          <Feedback />
        </div>
    );
  }
}
export default App;


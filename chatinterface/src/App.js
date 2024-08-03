import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/home';
import Background from './Component/Home/background';

const App = () => {
  const [selectedContact, setContact] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setContact={setContact} />} />
        <Route path="/background" element={<Background contactName={selectedContact} />} />
      </Routes>
    </Router>
  );
};

export default App;

import './App.css';
import React from 'react';
import Router from 'react-router-dom'

import Wizard from './Components/Wizard/Wizard'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      main
      <Dashboard />
      <Wizard />
      <Header />
    </div>
  );
}

export default App;

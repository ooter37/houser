import './App.css';
import React from 'react';
import { HashRouter } from 'react-router-dom'

import Wizard from './Components/Wizard/Wizard'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'

function App() {
  return (
    <HashRouter>

    <div className="App">
      main
      <Dashboard />
      <Wizard />
      <Header />
    </div>
    </HashRouter>
  );
}

export default App;

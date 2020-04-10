import './App.css';
import './reset.css'
import React from 'react';
import { HashRouter } from 'react-router-dom'
import routes from './routes'

import Header from './Components/Header/Header'

function App() {
  return (
    <HashRouter>

    <div className="App">
      main
      <Header />
      {routes}

    </div>
    </HashRouter>
  );
}

export default App;

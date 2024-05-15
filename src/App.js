import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import HolbertonLogo from './holberton_logo.jpg';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={HolbertonLogo} alt="Holberton Logo" className="App-logo" />
        <h1 className="H1">School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className='form-all'>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button>OK</button>
        </div>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>Copyright {getFullYear()} - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
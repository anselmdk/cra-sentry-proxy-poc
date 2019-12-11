import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{
            width: '100px',
            height: '100px'
          }}
        />
        <button
          style={{
            fontSize: '30px'
          }}
          onClick={e => {
            throw new Error("Error triggered over proxy!")
          }}
        >
          Trigger Sentry error
        </button>
      </header>
    </div>
  );
}

export default App;

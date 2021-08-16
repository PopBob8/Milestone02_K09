import logo from './Idealife_Logo.svg';
import bar from './Bar.svg';
import React from 'react';
import './App.css';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={bar} className="App-bar" alt="bar" />
        <h1>Idealyfe</h1>
        <p>Your Perfect Solution for A Better{' '}
          <Typical
            loop={Infinity}
            wrapper='b'
            steps={[
              'Body',
              1500,
              'Health',
              1500,
              'You',
              1500,
              'Life',
              1500
            ]}
          />
        </p>
      </header>
    </div>
  );
}

export default App;

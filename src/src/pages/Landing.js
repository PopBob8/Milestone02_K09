import React from 'react';
import './Landing.css';
import Typical from 'react-typical';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="Landing">
      <Helmet>
        <style>{'body { background-color: #56CCF2; }'}</style>
      </Helmet>
      <header className="App-header">
        <img src="img/logo_landing.svg" className="App-logo" alt="logo" />
        <img src="img/bar.svg" className="App-bar" alt="bar" />
        <h1><b>Idealyfe</b></h1>
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
        
        <Link to="/home" className="landing_button" ><button><b>Get Started</b></button></Link>
      </header>
    </div>
  );
}

export default App;

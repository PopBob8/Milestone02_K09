import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Tips from './pages/Tips';
import Calculator from './pages/Calculator';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/tips" exact component={Tips} />
          <Route path="/calculator" exact component={Calculator} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

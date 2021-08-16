import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Tips from './pages/Tips';
import Calculator from './pages/Calculator';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      {/* <Navbar /> */}
        <div className="App">
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/tips" exact component={Tips} />
          <Route path="/calculator" exact component={Calculator} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

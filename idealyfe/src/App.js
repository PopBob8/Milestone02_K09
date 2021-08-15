import React from 'react';
import './App.css';
import Tips from './page/Tips';
import Default from './page/Default';
import Button from './cmp/TextButton';
import Header from './cmp/header';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";



function App() {
  return (
    <div>
      <Header />
      <Tips />
    </div>
  )
}

export default App;

import React from 'react';
import './Navbar.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Home from '../pages/Home';
import Tips from '../pages/Tips';
import Kalkulator from '../pages/Kalkulator';

const Navbar = () => {
    return (
        
        <nav className="navbar">
        <div className="navbar_container">
            <img src="../../img/idealife_logo-01.png" alt="Logo"></img>
            <ul className="navbar_menu">
                <li className="navbar_item">
                    <a href="/" className="navbar_links">Home</a>
                </li>
                <li className="navbar_item">
                    <a href="tips" className="navbar_links">Tips</a>
                </li>
                <li className="navbar_item">
                    <a href="kalkulator" className="navbar_links">Kalkulator</a>
                </li>
            </ul>

            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/tips" exact>
                        <Tips />
                    </Route>   
                    <Route path="/kalkulator" exact>
                        <Kalkulator />
                    </Route>     
                </Switch>
            </BrowserRouter>
        </div>
        </nav>
    )
}

export default Navbar;
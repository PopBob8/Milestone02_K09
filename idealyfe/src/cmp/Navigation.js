import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Tips from '../page/Tips';
import Home from '../page/Home';
import Button from './TextButton';

const Navigation = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                  <Link to="/"><Button title="Home"/></Link>
                  <Link to="/tips"><Button title="Tips"/></Link>
                </div>

                  <Switch>
                    <Route path="/" exact>
                      <Home />
                    </Route>
                    <Route path="/tips" exact>
                      <Tips />
                    </Route>
                  </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Navigation;
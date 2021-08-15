import React from 'react';

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
                      <Default />
                    </Route>

                    <Route path="/tips" exact>
                      <Tips />
                    </Route>
                  </Switch>
            </BrowserRouter>
        </div>
    )
}
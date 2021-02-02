import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './containers/home/Home';
import Details from './containers/detail/Details';
import List from './containers/list/List';


export default class App extends React.Component { 
  render() {
    return (
      <>
        <div className="main">
          <Router>
            <Switch>

              <Route
                path="/"
                exact
                // Can pass props this way
                // render={(routerProps) => <Home {...routerProps} />}
                // ------------------------------------------------------------
                // can't pass prop easier syntax 
                component = { Home }
              />

              <Route
                path="/details/:id"
                exact
                // Can pass props this way
                // render={(routerProps) => <Home {...routerProps} />}
                // ------------------------------------------------------------
                // can't pass prop easier syntax 
                component = { Details }
              />

              <Route
                path="/list"
                exact
                // Can pass props this way
                // render={(routerProps) => <Home {...routerProps} />}
                // ------------------------------------------------------------
                // can't pass prop easier syntax 
                component = { List }
              />

            </Switch>
          </Router>

        </div>
      </>
    );
  }
}

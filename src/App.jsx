import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import indexRoutes from "./imports/routes/index";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {indexRoutes.map(route => {
              return (
                <Route
                  exact
                  path={route.path}
                  key={route.name}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./main";
import About from "./about";

import Dashboard from './dashboard';


export default class Info extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

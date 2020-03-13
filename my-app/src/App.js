import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './view/signup';
import Display from './view/bong-display';
import Client from './model/client';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Signup model={Client} />
        </Route>

        <Route path="/Bong-display">
          <Display />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

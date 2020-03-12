import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './view/signup';
import Client from './model/client';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Signup model={Client} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

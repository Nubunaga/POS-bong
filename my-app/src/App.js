/**
 * Bong system front-end.
 * 
 * This class is the GSC for the application!
 * This is the one part that controlls what view will be shown with the imported 
 * router interface from <em> nmp react-router-dom </em> to be able to handle
 * a router like SPA.
 * This class show all the different views that can be shown by using the router
 * interface.
 * @author Netanel Avraham Eklind
 * @version 2020-03-13 -> Implementing the basic code and set up the SPA
 * router interface.
 * @version 2020-03-14 -> Implementing the second view of the application
 * with the   <Display model={Observer} />
 * 
 * #TODO: Countinue adding views and handle the 
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './view/signup';
import Display from './view/bong-display';
import Observer from './model/Observable'
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
          <Display model={Observer} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

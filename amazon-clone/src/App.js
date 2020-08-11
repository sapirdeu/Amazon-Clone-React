import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* localhost.com/checkout */}
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          {/* localhost.com/login */}
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* Defult route: localhost.com/ */}
          <Route path="/">
            <Header/>
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

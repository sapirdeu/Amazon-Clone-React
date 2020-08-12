import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from './Home';



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* localhost.com/checkout */}
          <Route path="/checkout">
            <Header/>
            <h1>Checkout</h1>
          </Route>
          {/* localhost.com/login */}
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* Defult route: localhost.com/ */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

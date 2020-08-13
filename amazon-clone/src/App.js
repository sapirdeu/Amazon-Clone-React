import React, {useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function App() {
  const [{user}, dispatch] = useStateValue();

  // useEffect: Run a piece of code based on a specific condotion
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // user has logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } 
      else {
        // the user has logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      // cleanup operation
      unsubscribe();
    };
  }, []);

  console.log("user is >>> ", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* localhost.com/checkout */}
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          {/* localhost.com/login */}
          <Route path="/login">
            <Login/>
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

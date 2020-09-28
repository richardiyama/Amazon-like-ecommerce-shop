import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import './App.css';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
    <Route path="/" exact>
    <Header />
    <Home />
      </Route>
    <Route path="/checkout" >
      <Header />
      <Checkout />
        </Route>
       <Route path = "/login" >
          <Login />
            </Route>
            </Switch>
      </div>
      </Router>
    
  );
}

export default App;

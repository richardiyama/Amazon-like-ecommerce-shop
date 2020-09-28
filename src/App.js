import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import './App.css';

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
          <h1>Login page </h1>
            </Route>
            </Switch>
      </div>
      </Router>
    
  );
}

export default App;

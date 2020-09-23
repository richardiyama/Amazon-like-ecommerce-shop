import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
    <Route path="/checkout" >
      <h1>Checkout page </h1>
        </Route>

        < Route path = "/login" >
          <h1>Login page </h1>
            </Route>
  {/**This is the default route */ }
  <Route path="/" >
    <Header />
    <Home />
      </Route>
      </Switch>
      </div>
      </Router>
    
  );
}

export default App;

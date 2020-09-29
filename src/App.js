import React,{useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import './App.css';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function App() {

  const[{user},dispatch] = useStateValue();

  //Code that runs based on a given condition

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        //the user is logged in
       dispatch({
         type:"SET_USER",
         user: authUser
       })
      }else{
        //the user is logged out
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
    return () => {
      //cleanup operations goes in here
      unsubscribe();
      
    }
  }, []);

  console.log("USER is >>>",user);
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

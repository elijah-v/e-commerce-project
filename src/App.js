import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{user, cart},dispatch] = useStateValue();

  useEffect(()=>{
    const unsuscribe =  auth.onAuthStateChanged(authUser=>{if(authUser){
      dispatch({
        type: 'set_user',
        user: authUser
      });
    } else {dispatch({
      type: 'set_user',
      user: null
    });}
  });
  return ()=>{
    unsuscribe();
  }
  },[]);

  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path='/sign in'>
        <h1>Sign In</h1>
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/checkout'>
        <Header />
        <Checkout />
    </Route>
<Route path='/'>  
        <Header />
        <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

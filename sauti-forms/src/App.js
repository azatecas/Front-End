import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Landing from './components/Landing';
import Home from './components/Home';
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing} />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/sign-up' component={SignUp} />
      <PrivateRoute path='/home' component={Home} />
    </div>
  );
}

export default App;

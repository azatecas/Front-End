import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Landing from './components/Landing';
import Dashboard from './components/flowComponents/Dashboard';
import Flow from './components/flowComponents/Flow';
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing} />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/sign-up' component={SignUp} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/flow/:id' component={Flow} />
    </div>
  );
}

export default App;

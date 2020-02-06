import React from 'react';
import { Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/flowComponents/Dashboard';
import Flow from './components/flowComponents/Flow';
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <div>
      <Route exact path='/' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/sign-up' component={SignUp} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/flow/:id' component={Flow} />
    </div>
  );
}

export default App;

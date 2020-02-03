import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';




function App() {
  return (
    <div className="App">
    <Route path='/sign-In'>
      <SignIn />
    </Route>

    <Route path='/sign-up'>
      <SignUp />
    </Route>
          
    </div>
  );
}

export default App;

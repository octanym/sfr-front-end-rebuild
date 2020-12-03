import React, { useState }from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/private-route';
import LogIn from './components/log-in';
import Register from './components/register';
import Dashboard from './pages/dashboard';
import CreateRecipePage from './pages/create-recipe-page';
import SingleRecipe from './pages/single-recipe';

function App() {
  return (
    <div className="App">
      {/* <CreateRecipePage /> */}
      <Switch>
        <Route exact path="/" component={LogIn} />
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/dashboard/recipes/:id" component={SingleRecipe}/>
      </Switch>
    </div>
  );
}

export default App;

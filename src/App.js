import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/private-route';
import LogIn from './components/log-in';
import Register from './components/register';
import Dashboard from './pages/dashboard';
import './temp-styles/app.css'

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LogIn} />
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
  );
}

export default App;

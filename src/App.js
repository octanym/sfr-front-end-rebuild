import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import LogIn from './components/log-in';
import Register from './components/register';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LogIn} />
        </Switch>
      </div>
  );
}

export default App;

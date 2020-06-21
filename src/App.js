import React from 'react';
import './App.css';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The app js file</h1>
        <p>there's not much going on here. Why don't you work on some components to import?</p>
        <h3>okay:</h3>
        {/* manages own state **/}
        <LoginPage />
        <h3>1 down, many more to go</h3>
        <h1>Dashboard:</h1>
          <ol>  
            {/* manages own state **/}
            <h2>add recipe</h2>
              <small>( needs form validation )</small>
              <p>enter name, ingredients, instructions</p>
            <h2>my recipes</h2>
              <ul>
                <p>all recipes view</p>
                <p>by category view ( maps over filtered collection )</p>
              </ul>
            <h2>search</h2>
              <ul>
                <p>on both allrecipes and category view</p>
              </ul>
            <h2>Friends recipes</h2>
              <p>carousel at the bottom</p>
          </ol>

      </header>
    </div>
  );
}

export default App;

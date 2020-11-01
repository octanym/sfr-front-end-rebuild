import React from 'react';
import RecipeCollection from '../components/recipes-collection';
import CreateRecipePage from './create-recipe-page';

const Dashboard  = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{'display': 'flex', 'justifyContent': 'spaceAround'}}>
        <div style={{'height': '30%', 'width': '50%'}}>
          <h3>Create Recipe:</h3>
          <CreateRecipePage />
        </div>
        <div style={{'height': '30%', 'width': '50%'}}>
          <h3>Recipe Collection:</h3>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
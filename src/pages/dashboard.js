import React from 'react';
import RecipeCollection from '../components/recipes-collection';
import CreateRecipePage from './create-recipe-page';

const Dashboard  = () => {
  return (
    <div style={{'display': 'flex', 'flexDirection': 'column', 'margin': '0 auto', 'AlignContent': 'center'}}>
      <h1>Dashboard</h1>
      <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'spaceAround'}}>
        <div style={{'height': '15rem', 'width': '50%'}}>
          <h3>Create Recipe:</h3>
          <CreateRecipePage />
        </div>
        <div style={{'height': '15rem', 'width': '50%'}}>
          <h3>Recipe Collection:</h3>
          <RecipeCollection/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
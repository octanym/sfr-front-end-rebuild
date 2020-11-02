import React from 'react';
import RecipeCollection from '../components/recipes-collection';
import CreateRecipePage from './create-recipe-page';

const Dashboard  = () => {
  return (
    <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'width': '80%', 'margin': '5% auto'}}>
      <h1>Dashboard</h1>
      <div style={{'display': 'flex',  'flexDirection': 'column', 'alignItems': 'center'}}>
        <div style={{'height': '15rem', 'width': '50%', 'margin': 'auto'}}>
            <h3 >Create Recipe:</h3>
            <CreateRecipePage />
        </div>
        <div style={{'height': '15rem', 'width': '80%'}}>
          <h3>Recipe Collection:</h3>
          <RecipeCollection/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
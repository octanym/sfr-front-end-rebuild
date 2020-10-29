import React from 'react';
import RecipeCollection from '../components/recipes-collection';
import CreateRecipePage from './create-recipe-page';

const Dashboard  = () => {
  return (
    <>
    <h1>Dashboard</h1>
      <ul>
        <li>RecipeCollection</li>
        <li>CreateRecipe</li>
      </ul>
    </>
  )
}

export default Dashboard;
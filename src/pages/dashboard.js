import React from 'react';
import RecipeCollection from '../components/recipes-collection';
import CreateRecipe from '../components/create-recipe';

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
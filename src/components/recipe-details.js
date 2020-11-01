import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/recipe-card';

const RecipeDetails = (props) => {
  return (
    <Link to="/recipes/{props.recipe.id}">
      <RecipeCard recipe={props.recipe}/>
    </Link>
  )
}

export default RecipeDetails;
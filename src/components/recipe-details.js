import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/recipe-card';

const RecipeDetails = (props) => {
  return (
    <Link to={`/recipes/${props.id}`} style={{'textDecoration': 'none'}}>
      <RecipeCard title={props.title} id={props.id}/>
    </Link>
  )
}

export default RecipeDetails;
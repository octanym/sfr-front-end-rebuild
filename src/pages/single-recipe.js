import React, { useState } from 'react';
import RecipeCard from '../components/recipe-card';
import EditRecipe from '../components/edit-recipe';
import DeleteRecipe from '../components/delete-recipe';

const id = () => {
  return JSON.parse(window.localStorage.getItem('users_id'))
}

const SingleRecipe = () => {

  //this tracks the state of the entire recipe that we are currently viewing
  // we will move this to the reducer after the component is built out
  const [initialState, setInitialState] = useState({
    title: "sounds delicious", 
    users_id: id(), 
    source: "someone",
    ingredients: [
      {ingredient: "something", quantity: "just enough"},
      {ingredient: "something", quantity: "just enough"},
      {ingredient: "something", quantity: "just enough"},
      {ingredient: "something", quantity: "just enough"},
      {ingredient: "something", quantity: "just enough"}
    ],
    instructions: [
      {step: "the first or second", time: "just in time", directions: "do this, do that"},
      {step: "the first or second", time: "just in time", directions: "do this, do that"},
      {step: "the first or second", time: "just in time", directions: "do this, do that"},
      {step: "the first or second", time: "just in time", directions: "do this, do that"},
      {step: "the first or second", time: "just in time", directions: "do this, do that"}
    ]
  })

  return (
    <>
      <RecipeCard title={initialState.title} source={initialState.source} ingredients={initialState.ingredients} instructions={initialState.instructions}/>
    </>
  )
}

export default SingleRecipe;
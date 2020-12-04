import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RecipeCard from '../components/recipe-card';
import EditRecipe from '../components/edit-recipe';
import DeleteRecipe from '../components/delete-recipe';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import { axiosWithAuth } from '../utils/axios-auth';


const users_id = () => {
  return JSON.parse(window.localStorage.getItem('users_id'))
}

const SingleRecipe = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    }
  }));

  const classes = useStyles();

  const { id } = useParams()

  //no easy way to retrieve a recipe with all ingredients, instructions and categories
  //requires to much cobbling together on the front end
  //even with redux thunk mddleware I would still be making 3 calls to server just to render the data neeed for this component
  //need to revise back-end recipe instructions, ingredients, categories endpoints into one endpoint
  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/${id}/ingredients`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    axiosWithAuth()
      .get(`/recipes/${id}/instructions`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    axiosWithAuth()
      .get(`/recipes/${id}/categories`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])
  //grrrroooossssssss

  //this tracks the state of the entire recipe that we are currently viewing
  // we will move this to the reducer after the component is built out
  const [initialState, setInitialState] = useState({
    title: "sounds delicious", 
    users_id: users_id(), 
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
    ],
    categories: [{id: 0, category_name: "nothing"}]
  })

  return (
    <div className={classes.root}>
      <RecipeCard title={initialState.title} source={initialState.source} ingredients={initialState.ingredients} instructions={initialState.instructions}/>
    </div>
  )
}

export default SingleRecipe;
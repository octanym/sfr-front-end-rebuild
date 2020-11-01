import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axios-auth';
import RecipeDetails from '../components/recipe-details'

const id = () => {
  return JSON.parse(window.localStorage.getItem('users_id'))
}

const RecipeCollection = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get(`/auth/${id()}/recipes`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      {recipes.map(recipe => (
        <RecipeDetails/>
      ))}
    </>
  )
}

export default RecipeCollection;
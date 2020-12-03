import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axios-auth';
import RecipeCollection from '../components/recipes-collection';
import CreateRecipePage from './create-recipe-page';

const id = () => {
  return JSON.parse(window.localStorage.getItem('users_id'))
}

const Dashboard  = () => {

  const [post, setPost] = useState({})

  const [recipes, setRecipes] = useState([{title: ' ', id: 1}, {title: ' ', id: 2}, {title: ' ', id: 3}, {title: ' ', id: 4}, {title: ' ', id: 5}])

  useEffect(() => {
    axiosWithAuth()
    .get(`/auth/${id()}/recipes`)
    .then(res => setRecipes(res.data))
    .catch(err => console.log(err))
  }, [post])

  return (
    <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'width': '80%', 'margin': '5% auto'}}>
      <h1>Dashboard</h1>
      <div style={{'display': 'flex',  'flexDirection': 'column', 'alignItems': 'center'}}>
        <div style={{'height': '15rem', 'width': '50%', 'margin': 'auto'}}>
            <h3 >Create Recipe:</h3>
            <CreateRecipePage post={post} setPost={setPost}/>
        </div>
        <div style={{'height': '15rem', 'width': '80%'}}>
          <h3>Recipe Collection:</h3>
          <RecipeCollection recipes={recipes} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
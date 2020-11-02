import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axios-auth';
import RecipeDetails from '../components/recipe-details'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const id = () => {
  return JSON.parse(window.localStorage.getItem('users_id'))
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

const RecipeCollection = () => {

  const classes = useStyles();

  const [recipes, setRecipes] = useState([{title: 'pizza', id: 1}, {title: 'caprese', id: 2}, {title: 'paella', id: 3}, {title: 'quiche', id: 4}, {title: 'croissant', id: 5}])

  

  // useEffect(() => {
  //   axiosWithAuth()
  //   .get(`/auth/${id()}/recipes`)
  //   .then(res => setRecipes(res.data))
  //   .catch(err => console.log(err))
  // }, [])

  console.log(recipes)
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {recipes.map((recipe, index) => (
          <RecipeDetails title={recipe.title} id={recipe.id} key={index}/>
        ))}
      </GridList>
    </div>
  )
}

export default RecipeCollection;
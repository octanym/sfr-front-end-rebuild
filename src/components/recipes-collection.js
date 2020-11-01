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

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get(`/auth/${id()}/recipes`)
    .then(res => setRecipes(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        <GridListTile>
          {recipes.map(recipe => (
            <RecipeDetails title={recipe.title} id={recipe.id}/>
          ))}
        </GridListTile>
      </GridList>
    </div>
  )
}

export default RecipeCollection;
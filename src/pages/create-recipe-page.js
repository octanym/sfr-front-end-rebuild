import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axios-auth';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import  RecipeInput from '../components/recipe-input';
import  IngredientsInput from '../components/ingredients-input';
import  InstructionsInput from '../components/instructions-input';

const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  forms: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: '5% auto',
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceAround',
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  recipe: {
    width: 300,
    height: 300,
  },
}));

export default function CreateRecipePage() {

  const classes = useStyles();

  const [checked, setChecked] = useState({recipe: true, ingredient: false, instruction: false})

  const [post, setPost] = useState({})

  const [recipeFields, setRecipeFields] = useState({
    title: "",
    source: "",
    ingredient: "",
    quantity: "",
    direction: "",
    time: "",
    step: ""
  })
  
  const handleChanges = (e) => {
    setRecipeFields({...recipeFields,
      [e.target.name]: e.target.value
    })

    setPost({...post,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submission successfully launched", post)
    // setPost({...post,
    //   [e.target.name]: ""
    // })
    const pathValue = checked.recipe ? 'recipes' : (checked.ingredient ? 'ingredients' : 'instructions')
    axiosWithAuth()
      .post(`/${pathValue}`, post)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log('res is not coming back the way we expected')
      })

    setPost({})
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Slide direction="up" in={checked.recipe} mountOnEnter unmountOnExit>
          <Paper elevation={6} className={classes.paper}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <RecipeInput className={classes.recipe} checked={checked} setChecked={setChecked} handleChanges={handleChanges} title={recipeFields.title} source={recipeFields.source}/>
              {/* Recipe does not need to have its state cleared because title and source are single values*/}
              <Button type="submit" variant="contained" color="secondary" onClick={() => setChecked({...checked, recipe: !checked.recipe, ingredient: !checked.ingredient})}>Next</Button>
            </form>
          </Paper>
        </Slide>
        <Slide direction="up" in={checked.ingredient} mountOnEnter unmountOnExit>
          <Paper elevation={6} className={classes.paper}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <IngredientsInput className={classes.recipe} checked={checked} setChecked={setChecked} handleChanges={handleChanges} ingredient={recipeFields.ingredient} quantity={recipeFields.quantity}/>
              <Button type="submit" variant="contained" color="secondary" onClick={() => setRecipeFields({...recipeFields, ingredient: " ", quantity: " "})} >Add It</Button>
              <Button variant="contained" color="secondary" onClick={() => setChecked({...checked, ingredient: !checked.ingredient, instruction: !checked.instruction})}>Next</Button>
            </form>
          </Paper>
        </Slide>
        <Slide direction="up" in={checked.instruction} mountOnEnter unmountOnExit>
          <Paper elevation={6} className={classes.paper}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <InstructionsInput className={classes.recipe} checked={checked} setChecked={setChecked} handleChanges={handleChanges} direction={recipeFields.direction} time={recipeFields.time} step={recipeFields.step}/>
              <Button type="submit" variant="contained" color="secondary" onClick={() => setRecipeFields({...recipeFields, direction: " ", time: " ", step: " "})} >Add It</Button>
              <Button type="submit" variant="contained" color="secondary" onClick={() => setChecked({...checked, instruction: !checked.instruction})}>Done</Button>
            </form>
          </Paper>
        </Slide>
      </div>
    </div>
  );
}
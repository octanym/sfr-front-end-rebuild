import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import  RecipeInput from './recipe-input';
import  IngredientsInput from './ingredients-input';
import  InstructionsInput from './instructions-input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
  form: {
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
    height: 200,
    width: 500,
    margin: theme.spacing(1),
  },
  recipe: {
    width: 300,
    height: 300,
  },
}));

const CreateRecipe = () => {

  const classes = useStyles();

  const [checked, setChecked] = useState({recipe: true, ingredient: false, instruction: false})

  const [recipeFields, setRecipeFields] = useState({
    title: "",
    source: "",
    ingredient: "",
    quantity: "",
    direction: "",
    time: "",
    step: ""
  })

  const [post, setPost] = useState({})

  const handleChanges = (e) => {
    setRecipeFields({...recipeFields,
      [e.target.name]: e.target.value
    })

    setPost({...post,
      [e.target.name] : e.target.value
    })
  }
  


  // const selectedFields = (e) => {
  //   console.log(e.target.name)
  //   setPost({...post,
  //     [e.target.name] : e.target.value
  //   })
  // }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  console.log(recipeFields)

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {/* <FormControlLabel
          control={<Switch checked={checked.recipe} onClick={() => setChecked({...checked, recipe: !checked.recipe})} />}
          label="Show"
        /> */}
        <Slide direction="up" in={checked.recipe} mountOnEnter unmountOnExit>
          <Paper elevation={6} className={classes.paper}>
            <form className={classes.form}>
              <RecipeInput className={classes.recipe} checked={checked} setChecked={setChecked} handleChanges={handleChanges} title={recipeFields.title} source={recipeFields.source}/>
            </form>
          </Paper>
        </Slide>
      </div>
    </div>
  );

  // return (
  //   <div className={classes.root}>
  //     <div onSubmit={handleSubmit} className={classes.wrapper}>
  //       <FormControlLabel
  //           control={<Switch checked={checked.recipe} onClick={() => setChecked({...checked, recipe: !checked.recipe})} />}
  //           label="Show"
  //       />
  //       <Slide direction="up" in={checked.recipe} mountOnEnter unmountOnExit>
  //         <RecipeInput checked={checked} setChecked={setChecked} setRecipeFields={handleChanges} title={recipeFields.title} source={recipeFields.source}/>
  //       </Slide>
  //     </div>
  //   </div>
  // )
}


export default CreateRecipe;
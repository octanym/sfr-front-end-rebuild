import React, { useEffect } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({

}));

const RecipeInput = (props) => {

  const classes = useStyles();

  return (
    <>
        <TextField 
          id="filled-basic"
          label="title"
          variant="filled"
          className={classes.input}
          value={props.title}
          name="title"
          onChange={props.handleChanges}
        />

        <TextField 
          id="filled-basic"
          label="source"
          variant="filled"
          className={classes.input}
          value={props.source}
          name="source"
          onChange={props.handleChanges}
        />

        {/* <FormControlLabel
          control={<Button checked={props.checked.recipe} onClick={() => props.setChecked({...props.checked, recipe: !props.checked.recipe})} />}
          label="Done"
        /> */}

        {/* when imported to creat-recipes.js */}
        {/* <button onClick={() => props.setChecked({...props.checked, recipe: !props.checked.recipe, ingredient: !props.checked.ingredient})}>Done</button> */}

        {/* when imported to creat-recipe-page.js */}
        {/* <button onClick={() => props.setInProp({...props.inProp, recipe: !props.inProp.recipe, ingredient: !props.inProp.ingredient})}>Done</button> */}
    </>
  )
}

export default RecipeInput;
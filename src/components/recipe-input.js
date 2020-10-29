import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '40%',
    height: '15%',
  }
}));

const RecipeInput = (props) => {

  const classes = useStyles();

  return (
    <>
        <input
          className={classes.input}
          value={props.title}
          type="text"
          name="title"
          placeholder="recipe title"
          onChange={props.handleChanges}
        />

        <input
          className={classes.input}
          value={props.source}
          type="text"
          name="source"
          placeholder="recipe source"
          onChange={props.handleChanges}
        />

        <FormControlLabel
          control={<Button checked={props.checked.recipe} onClick={() => props.setChecked({...props.checked, recipe: !props.checked.recipe})} />}
          label="Done"
        />

        {/* when imported to creat-recipes.js */}
        {/* <button onClick={() => props.setChecked({...props.checked, recipe: !props.checked.recipe, ingredient: !props.checked.ingredient})}>Done</button> */}

        {/* when imported to creat-recipe-page.js */}
        {/* <button onClick={() => props.setInProp({...props.inProp, recipe: !props.inProp.recipe, ingredient: !props.inProp.ingredient})}>Done</button> */}
    </>
  )
}

export default RecipeInput;
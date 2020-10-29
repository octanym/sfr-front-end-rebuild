import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '40%',
    height: '15%',
  }
}));

const IngredientsInput = (props) => {

  return (
    <>
      <TextField
        id="filled-basic"
        label="ingredient"
        variant="filled"
        value={props.ingredient}
        name="ingredient"
        onChange={props.handleChanges}
      />

      <TextField
        id="filled-basic"
        label="quantity"
        variant="filled"
        value={props.quantity}
        name="quantity"
        onChange={props.handleChanges}
      />

      {/* <FormControlLabel
        control={<Button checked={props.checked.ingredient} onClick={() => props.setChecked({...props.checked, ingredient: !props.checked.ingredient})} />}
        label="Done"
      /> */}
      {/* <button onClick={() => props.setChecked({...props.checked, ingredient: !props.checked.ingredient, instruction: !props.checked.instruction})}>Done</button> */}

      {/* <button onClick={() => props.setInProp({...props.inProp, ingredient: !props.inProp.ingredient, instruction: !props.inProp.instruction})}>Done</button> */}
    </>
  )
}

export default IngredientsInput;
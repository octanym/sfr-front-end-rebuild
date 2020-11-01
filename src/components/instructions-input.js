import React from 'react';
import TextField from '@material-ui/core/TextField';

const InstructionsInput = (props) => {
  return (
    <>

      <TextField
        id="filled-basic"
        label="step"
        variant="filled"
        value={props.step}
        name="step"
        onChange={props.handleChanges}
      />

      <TextField
        id="filled-basic"
        label="time"
        variant="filled"
        value={props.time}
        name="time"
        onChange={props.handleChanges}
      />

      <TextField
        id="filled-basic"
        label="directions"
        variant="filled"
        value={props.directions}
        name="directions"
        onChange={props.handleChanges}
      />

      {/* <button onClick={() => props.setChecked({...props.checked, instruction: !props.checked.instruction})}>Done</button> */}

      {/* <button onClick={() => props.setInProp({...props.inProp, instruction: !props.inProp.instruction})}>Done</button> */}
    </>
  )
}

export default InstructionsInput;
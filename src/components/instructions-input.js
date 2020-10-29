import React from 'react';

const InstructionsInput = (props) => {
  return (
    <>
      <input
        value={props.direction}
        type="text"
        name="direction"
        placeholder="direction"
        onChange={props.handleChanges}
      />

      <input
        value={props.time}
        type="text"
        name="time"
        placeholder="time"
        onChange={props.handleChanges}
      />

      <input
        value={props.step}
        type="text"
        name="step"
        placeholder="step"
        onChange={props.handleChanges}
      />
      {/* <button onClick={() => props.setChecked({...props.checked, instruction: !props.checked.instruction})}>Done</button> */}

      {/* <button onClick={() => props.setInProp({...props.inProp, instruction: !props.inProp.instruction})}>Done</button> */}
    </>
  )
}

export default InstructionsInput;
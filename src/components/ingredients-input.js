import React from 'react';

const IngredientsInput = (props) => {

  // const ingredientValues = {
  //   ingredient: props.ingredient,
  //   quantity: props.quantity
  // }

  return (
    <>
      <input
        value={props.ingredient}
        type="text"
        name="ingredient"
        placeholder="ingredient"
        onChange={props.handleChanges}
      />

      <input
        value={props.quantity}
        type="text"
        name="quantity"
        placeholder="quantity"
        onChange={props.handleChanges}
      />
      <button onClick={() => props.setChecked({...props.checked, ingredient: !props.checked.ingredient, instruction: !props.checked.instruction})}>Done</button>

      {/* <button onClick={() => props.setInProp({...props.inProp, ingredient: !props.inProp.ingredient, instruction: !props.inProp.instruction})}>Done</button> */}
    </>
  )
}

export default IngredientsInput;
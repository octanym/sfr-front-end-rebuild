import React, { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { axiosWithAuth } from '../utils/axios-auth';
import  RecipeInput from '../components/recipe-input';
import  IngredientsInput from '../components/ingredients-input';
import  InstructionsInput from '../components/instructions-input';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export default function CreateRecipePage() {

  const [inProp, setInProp] = useState({recipe: true, ingredient: false, instruction: false})

  const [recipeFields, setRecipeFields] = useState({
    title: "something",
    source: "",
    ingredient: "",
    quantity: "",
    direction: "",
    time: "",
    step: ""
  })

  const [selected, setSelected] = useState();

  const fields = useRef({ title: recipeFields.title, source: recipeFields.source });

  const handleChanges = (e) => {
    setRecipeFields({...recipeFields,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  console.log(inProp.recipe)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Transition in={inProp.recipe} timeout={duration} unmountOnExit>
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
            <RecipeInput inProp={inProp} setInProp={setInProp} setRecipeFields={handleChanges} title={recipeFields.title} source={recipeFields.source}/>
            </div>
          )}
        </Transition>

        <Transition in={inProp.ingredient} timeout={duration}>
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
            <IngredientsInput inProp={inProp} setInProp={setInProp} setIngredientsFields={handleChanges} ingredient={recipeFields.ingredient} quantity={recipeFields.quantity}/>
            </div>
          )}
        </Transition>

        <Transition in={inProp.instruction} timeout={duration}>
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
            <InstructionsInput inProp={inProp} setInProp={setInProp} setInstructionsFields={handleChanges} direction={recipeFields.direction} time={recipeFields.time} step={recipeFields.step}/>
            </div>
          )}
        </Transition>
      </form>
    </>
  )
}
import React, { useState } from 'react';
import { Transition } from 'react-transition-group'

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

const CreateRecipe = () => {

  const [recipe, setRecipe] = useState({title: "", source: ""})

  const [inProp, setInProp] = useState(false);

  const handleChange = (e) => {
    setRecipe({...recipe,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <Transition in={inProp} timeout={duration}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <form>
              <input
                value={recipe.title}
                type="text"
                name="title"
                placeholder="recipe title"
                OnChange={handleChange}
              />
              <input
                value={recipe.source}
                type="text"
                name="source"
                placeholder="recipe source"
                OnChange={handleChange}
              />
            </form>
          </div>
        )}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </div>
  )
}


export default CreateRecipe;
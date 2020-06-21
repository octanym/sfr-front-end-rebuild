import React, { useReducer, useState, createContext } from 'react';
import { UsersCollection } from '../components/LoginForm';
import { userInitialState, userReducer } from '../reducers/UserReducer';

export const LoginPage = () => {

  const [user, setUser] = useState({username: '', password: ''})

  const [state, dispatch] = useReducer(userReducer, userInitialState)
 
  const UseContext = createContext();

  const handleChanges = (e) => {
    setUser({ ...user,
      [e.target.name]: e.target.value
    });
  }

  const addUser = (user) => {
    const newUser = {
      username: user.username,
      password: user.password
    }
    console.log(user)
    dispatch({type: 'ADD_USER', payload: newUser})
  }

  return(
    <>
      <UseContext.Provider value={state.users}>
        <UsersCollection users={state.users} />
      </UseContext.Provider>
      
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>Login Component</h3>
          <label>username</label>
          <input
            name='username'
            type='username'
            value={user.username}
            onChange={handleChanges}
          />

          <label>password</label>
          <input
            name='password'
            type='password'
            value={user.password}
            onChange={handleChanges}
          />

          <button onClick={() => addUser(user)} type="submit" >Go</button>
          {JSON.stringify(user)}
        </form>
    </>
  )
}



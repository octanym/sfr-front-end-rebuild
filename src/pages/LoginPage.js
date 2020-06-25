import React, { useReducer, useState, createContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { UsersCollection } from '../components/UsersList';
import { userInitialState, userReducer } from '../reducers/UserReducer';

export const LoginPage = () => {

  const history = useHistory();

  const [user, setUser] = useState({username: '', password: ''})

  const [state, dispatch] = useReducer(userReducer, userInitialState)
 
  const UseContext = createContext();


  const onSubmit = () => {
    /* function makes a call and gets response data ( token )**/
    /* dispatch an action to store token payload in reducer**/
    /* pass token as props from reducer set token local storage **/
  }
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
    dispatch({type: 'ADD_USER', payload: newUser})
    setUser({username: '', password: ''})
  }

  return(
    <>      
      <form style={{"display": "flex", "flex-direction": "column", "justify-content": "space-between"}} onSubmit={(e) => e.preventDefault()}>
        <h2>Login Component</h2>
        {/* manages own state **/}
        <small>( needs form validation )</small>

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

        <p>{JSON.stringify(user)}</p>
      </form>
      {/* <UseContext.Provider value={state.users}>
      </UseContext.Provider> */}
        <UsersCollection users={state.users} />
    </>
  )
}



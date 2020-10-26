import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axios-auth';
import { useHistory } from 'react-router-dom';

const LogIn = () => {

  //an object in state equal to 'credentials' that will hold the value of the inputs in a preferable format
  const [credentials, setCredentials] = useState({user_name: "", password: ""})

  //provide access to the history prop in react-router-dom via hooks
  const history = useHistory()

  //this triggers when we click submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/auth/login', credentials)
      .then( res => {
        //set the value of the returned token to a key of 'token' in local storage
        window.localStorage.setItem('token', res.data.token)
        console.log(res.data.token)
        history.push()
      })
      .catch( err => console.log( 'there was an issue retrieving data:', err ))
  //stop default behavior that the click event triggers on the form element
  }

  //this triggers when any changes to the value of input element occurs
  const handleChanges = (e) => {
  //spreading and setting
    setCredentials({...credentials,
      //spread any occurring value changes of event targets into corresponding props in the object state
      [e.target.name]: e.target.value
    })
  }
  
  console.log(credentials)

  return (
    <>
      <h1>Log In to Secret Family Recipes</h1>
      <form onSubmit={handleSubmit} >

        <input
          value={credentials.user_name}
          type="text"
          name="user_name"
          placeholder="username"
          onChange={handleChanges}
        />

        <input
          value={credentials.password}
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChanges}
        />

        <button type="submit" >Go</button>
      </form>
    </>
  )
}

export default LogIn;
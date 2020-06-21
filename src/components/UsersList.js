import React from 'react';
// import { TextField } from '@material-ui/core';
// import { Form, Formik } from 'formik'

export const UsersCollection = ({ newUser, users, add, userInput }) => {
  
  // const {handleSubmit, register, errors} = useForm();
  return(
    <div>
      {users.map((user) => (
        <div>User: {user.username}</div>
      ))}
    </div>
  )

}




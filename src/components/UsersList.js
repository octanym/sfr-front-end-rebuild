import React from 'react';
// import { TextField } from '@material-ui/core';
// import { Form, Formik } from 'formik'

export const UsersCollection = ({ users }) => {
  return(
    <div>
      {users.map((user) => (
        <div>User: {user.username}</div>
      ))}
    </div>
  )
}




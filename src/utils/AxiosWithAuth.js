import axios from 'axios';

export const axiosWithAuth = (props) => {
  
  const token = window.localStorage.getItem('token')

  return axios.create({
    headers: {
      authorization: token
    },
    baseUrl: 'localhost:5000/api/'
  })
}
export const userInitialState = {
  users: [{
    username: 'cameron',
    password: 'Hershey09!'
  }],
}

export const userReducer = (state, action) => {
  console.log(state.users)
  switch(action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      }

      default:
        return state;
  }
}
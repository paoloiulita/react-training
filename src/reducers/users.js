const users = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_USER':
      const { user } = action;
      const i = state.findIndex(item => item.id === user.id);
      if (i === -1) {
        return [
          ...state,
          { ...action.user }
        ]
      }
      return state.slice(0, i).concat(state.slice(i + 1));
      
    default:
      return state
  }
}

export default users
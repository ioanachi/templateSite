export default function categoriesReducer(state = null, action) {
  switch (action.type) {
    case 'REGISTER_ACTION':
      return action.payload;
      break;
  }
  return state;
}

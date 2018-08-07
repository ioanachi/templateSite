const initialState = {
  changeDisplayProp: false,
};

export default function changeDisplay(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_STR_ACTION':
      return {
        ...state,
        changeDisplayProp: action.payload,
      };
    default:
      return state;
  }
}

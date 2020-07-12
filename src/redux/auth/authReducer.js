import { REGISTER_SUCCESS, REGISTER_FAIL } from './authType';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  message: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        message: action.payload,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;

import {
  REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERROR, LOGIN_SUCCESS, LOGIN_FAIL,
} from './authType';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;

import {
  REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, UPDATE_USER_FAIL, UPDATE_USER_SUCCESS,
} from './authType';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('token'),
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem('token', action.payload.token);
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
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

import {
  LOAD_USER_SUCCESS, LOAD_USER_FAIL,
  REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, UPDATE_USER_FAIL, UPDATE_USER_SUCCESS,
  SET_IS_LAODING,
} from './authType';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('token'),
  error: null,
  isLoading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LAODING:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
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
        isLoading: false,
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
        isLoading: false,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;

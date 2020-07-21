import { GET_USER, GET_USERS, ERROR, GET_FOLLOWED } from "./userType";

const initialState = {
  user: null,
  error: null,
  followedUsers:[],
  recommandedUsers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_USERS:
    return {
      ...state, 
      recommandedUsers:action.payload
    };
  case GET_FOLLOWED:
    return {
      ...state,
      followedUsers:action.payload
    };
  case GET_USER:
    return {
      ...state,
      user: action.payload,
    };
  case ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default reducer;

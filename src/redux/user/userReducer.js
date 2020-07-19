import { GET_USER, ERROR, GET_FOLLOWED } from "./userType";

const initialState = {
    user: null,
    error: null,
    followedUsers:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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

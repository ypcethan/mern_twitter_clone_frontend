import {
    GET_TWEET, CREATE_TWEET, UPDATE_TWEET, DELETE_TWEET, GET_ALL_TWEETS_FROM_USER, TWEET_ERROR,
    GET_RELEVENT_TWEETS,
} from "./tweetType";

const initialState = {
    selectedTweet: null,
    tweets: [],
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_TWEET:
        return {
            ...state,
            selectedTweet: action.payload,
        };
    case CREATE_TWEET:
        return {
            ...state,
            tweets: [action.payload, ...state.tweets],
        };
    case GET_ALL_TWEETS_FROM_USER:
    case GET_RELEVENT_TWEETS:
        return {
            ...state,
            tweets: action.payload,
        };
    case TWEET_ERROR:
        return {
            ...state,
            error: action.payload,
        };
    default:
        return state;
    }
};

export default reducer;

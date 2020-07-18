import {
    GET_TWEET, CREATE_TWEET, UPDATE_TWEET, DELETE_TWEET, GET_ALL_TWEETS_FROM_USER, TWEET_ERROR,
    GET_RELEVENT_TWEETS,
    CREATE_COMMENT,
    GET_ALL_COMMENTS,
    GET_ALL_USER_COMMENTS,
    GET_ALL_USER_LIKES,
    CREATE_LIKE,
    SET_LOADING
} from "./tweetType";

const initialState = {
    selectedTweet: null,
    tweets: [],
    comments:[],
    commentedTweets: [],
    likedTweets:[],
    loading:false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_LOADING:
        return {
            ...state,
            loading: action.payload
        };
    case GET_ALL_USER_LIKES:
        return {
            ...state, 
            loading:false,
            likedTweets: action.payload,
        }; 
    case GET_ALL_USER_COMMENTS:
        return {
            ...state, 
            loading:false,
            commentedTweets: action.payload
        }; 
    case CREATE_LIKE:
        return {
            ...state, 
        };
    case CREATE_COMMENT:
        return {
            ...state,
            comments:[action.payload.comment,...state.comments],
        };
    case GET_ALL_COMMENTS:
        return {
            ...state,
            loading:false,
            comments: action.payload
        };
    case GET_TWEET:
        return {
            ...state,
            loading:false,
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
            loading:false,
            tweets: action.payload,
        };
    case TWEET_ERROR:
        return {
            ...state,
            loading:false,
            error: action.payload,
        };
    default:
        return state;
    }
};

export default reducer;

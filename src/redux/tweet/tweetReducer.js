import {
    GET_TWEET, CREATE_TWEET, UPDATE_TWEET, DELETE_TWEET, GET_ALL_TWEETS_FROM_USER, TWEET_ERROR,
    GET_RELEVENT_TWEETS,
    CREATE_COMMENT,
    GET_ALL_COMMENTS,
    GET_ALL_USER_COMMENTS,
    GET_ALL_USER_LIKES
} from "./tweetType";

const initialState = {
    selectedTweet: null,
    tweets: [],
    comments:[],
    commentedTweets: [],
    likedTweets:[],
    newlyAddedComment:null,
    newCommentsCount:null,
    newLikesCount:null,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_ALL_USER_LIKES:
        return {
            ...state, 
            likedTweets: action.payload
        }; 
    case GET_ALL_USER_COMMENTS:
        return {
            ...state, 
            commentedTweets: action.payload
        }; 
    case CREATE_COMMENT:
        return {
            ...state,
            newlyAddedComment: action.payload.comment,
            comments:[action.payload.comment,...state.comments],
            newLikesCount:action.payload.count
        };
    case GET_ALL_COMMENTS:
        return {
            ...state,
            comments: action.payload
        };
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

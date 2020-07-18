import axios from "axios";
import {
    GET_TWEET, CREATE_TWEET, UPDATE_TWEET, DELETE_TWEET, GET_ALL_TWEETS_FROM_USER, TWEET_ERROR, GET_RELEVENT_TWEETS, CREATE_COMMENT, GET_ALL_COMMENTS, CREATE_LIKE, GET_ALL_USER_COMMENTS, GET_ALL_USER_LIKES, SET_LOADING,
} from "./tweetType";

const baseUrl = "http://localhost:5000/v1/tweets";
export const createTweet = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}`, data);
        dispatch({
            type: CREATE_TWEET,
            payload: response.data.tweet,
        });
    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.response.data.message,
        });
    }
};

export const getReleventTweet = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}`);

        dispatch({
            type: GET_RELEVENT_TWEETS,
            payload: response.data.tweets,
        });
    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.response.data.message,
        });
    }
};

export const getAllTweetsFromUser = (userId) => async (dispatch) => {
    try {
        dispatch({
            type:SET_LOADING,
            payload:true
        });
        const response = await axios.get(`${baseUrl}/${userId}/tweets`);

        dispatch({
            type: GET_RELEVENT_TWEETS,
            payload: response.data.tweets,
        });
    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.response.data.message,
        });
    }
};

export const getTweet = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        console.log(response);
        dispatch({
            type: GET_TWEET,
            payload: response.data.tweet,
        });
    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.response.data.message,
        });
    }
};


export const createComment = (tweetId,data) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/${tweetId}/comments`, data);
        dispatch({
            type: CREATE_COMMENT,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.response.data.message,
        });
    }
};


export const getComments = (tweetId) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/${tweetId}/comments` );
        dispatch({
            type: GET_ALL_COMMENTS,
            payload: response.data.comments,
        });
    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.response.data.message,
        });
    }
};

export const getAllUserComments = (userId) => async (dispatch) => {
    try {
        dispatch({
            type:SET_LOADING,
            payload:true
        });
        const response = await axios.get(`${baseUrl}/user/${userId}/comments` );
        console.log("Comments");
        console.log(response.data);
        dispatch({
            type: GET_ALL_USER_COMMENTS,
            payload: response.data.tweets,
        });
    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.response.data.message,
        });
    }
};
export const createLike = (tweetId) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/${tweetId}/likes`);
        
        dispatch({
            type: CREATE_LIKE,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.response.data.message,
        });
    }
};


export const getAllUserLikes= (userId) => async (dispatch) => {
    try {
        dispatch({
            type:SET_LOADING,
            payload:true
        });
        const response = await axios.get(`${baseUrl}/user/${userId}/likes` );
        console.log("Likes");
        console.log(response.data);
        dispatch({
            type: GET_ALL_USER_LIKES,
            payload: response.data.tweets,
        });
    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.response.data.message,
        });
    }
};
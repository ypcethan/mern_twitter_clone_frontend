import axios from 'axios';
import {
  GET_TWEET, CREATE_TWEET, UPDATE_TWEET, DELETE_TWEET, GET_ALL_TWEETS_FROM_USER, TWEET_ERROR,
} from './tweetType';

const baseUrl = 'http://localhost:5000/v1/tweets';
export const createTweet = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}`, data);
    console.log(response);
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

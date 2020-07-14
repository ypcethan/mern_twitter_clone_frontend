import axios from 'axios';
import { GET_USER, ERROR } from './userType';

const baseUrl = 'http://localhost:5000/v1/users';
export const getUser = (userName) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/${userName}`);
    const { user } = response.data;
    dispatch({
      type: GET_USER,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};

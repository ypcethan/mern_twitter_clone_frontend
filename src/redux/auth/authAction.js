import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './authType';

const baseUrl = 'http://localhost:5000/v1/users';

export const register = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, data);
    const { user } = response.data;
    dispatch({
      type: REGISTER_SUCCESS,
      payload: user,
    });
  } catch (error) {
    console.error(error.response.data);
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

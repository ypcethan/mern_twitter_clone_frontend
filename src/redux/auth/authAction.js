import axios from 'axios';
import {
  REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERROR, LOGIN_SUCCESS, LOGIN_FAIL,
} from './authType';

const baseUrl = 'http://localhost:5000/v1/users';

export const registerUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, data);
    const { user, token } = response.data;
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { user, token },
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, data);
    const { user, token } = response.data;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user, token },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => ({
  type: CLEAR_ERROR,
});

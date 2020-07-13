import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './alertType';

export const setAlert = (message, type) => async (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { message, type, id },
  });
  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, 3000);
};

import axios from "axios";
import { GET_USER, ERROR, GET_FOLLOWED } from "./userType";

const baseUrl = "http://localhost:5000/v1/users";
export const getUser = (userName) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/${userName}`);
        console.log(response.data);
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

export const getFollowed = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/followed`);
        console.log(response.data);
        const { users } = response.data;
        dispatch({
            type: GET_FOLLOWED,
            payload: users,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data.message,
        });
    }
};

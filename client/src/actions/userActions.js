import actionTypes from './actionTypes';
import API from '../utils/API.js';

export const getUserSuccess = data => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    data,
  };
};

export const getUserFailure = () => {
  return {
    type: actionTypes.GET_USER_FAILURE,
  };
};

export const retrieveUser = userId => {
  return async function(dispatch) {
    try {
      const user = await API.getUser(userId);
      console.log(user);
      dispatch(getUserSuccess(user));
    } catch(err) {
      console.log(err);
      dispatch(getUserFailure());
    }
  };
};


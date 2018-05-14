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

export const retrieveUser = fireBaseId => {
  return async function(dispatch) {
    try {
      const user = await API.signInUser(fireBaseId);
      dispatch(getUserSuccess(user.data));
    } catch(err) {
      throw err;
      dispatch(getUserFailure());
    }
  };
};

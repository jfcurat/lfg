import actionTypes from './actionTypes';
import API from '../utils/API.js';
import { firebase } from '../firebase';

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
      console.log(fireBaseId);
      const user = await API.signInUser(fireBaseId);
      console.log(user);
      dispatch(getUserSuccess(user.data));
    } catch(err) {
      console.log(err);
      dispatch(getUserFailure());
    }
  };
};

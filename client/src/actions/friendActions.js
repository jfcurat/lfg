import axios from 'axios';
import actionTypes from './actionTypes';

export const retrieveFriends = data => {
  return {
    type: actionTypes.GET_FRIENDS,
    data: data,
  };
};

export const removeFriend = data => {
  return {
    type: actionTypes.REMOVE_FRIEND,
    data: data,
  };
};

import axios from 'axios';
import actionTypes from './actionTypes';
import API from '../utils/API.js';

export const getGamesSuccess = data => {
  return {
    type: actionTypes.GET_GAMES_SUCCESS,
    data,
  };
};

export const getGamesFailure = () => {
  return {
    type: actionTypes.GET_GAMES_FAILURE,
  };
};

export const retrieveGames = () => {
  return function(dispatch) {
    API.
  };
};

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

export const setGameSuccess = data => {
  return {
    type: actionTypes.SET_GAME_SUCCESS,
    data,
  };
};

export const setGameFailure = () => {
  return {
    type: actionTypes.SET_GAME_FAILURE,
  };
};

export const retrieveGame = gameId => {
  return async function(dispatch) {
    try {
      const game = await API.searchGameById(gameId);
      dispatch(setGameSuccess(game));
    } catch(err) {
      throw err;
      dispatch(setGameFailure());
    }
  };
};

export const retrieveGames = gameName => {
  return async function(dispatch) {
    try {
      const games = await API.searchGames(gameName);
      dispatch(getGamesSuccess(games));
    } catch(err) {
      throw err;
      dispatch(getGamesFailure());
    }
  };
};

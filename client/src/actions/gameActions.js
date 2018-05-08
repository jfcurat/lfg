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
      console.log(err);
      dispatch(setGameFailure());
    }
  };
};

export const retrieveGames = gameName => {
  return async function(dispatch) {
    try {
      console.log(gameName)
      const games = await API.searchGames(gameName);
      console.log(games);
      dispatch(getGamesSuccess(games));
    } catch(err) {
      console.log(err);
      dispatch(getGamesFailure());
    }
  };
};

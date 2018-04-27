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

export const retrieveGame = gameName => {
  return async function(dispatch) {
    try {
      const game = await API.findGame(gameName);
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
      const games = await API.searchSavedGames(gameName);
      if (games.length < 1) {
        const newGames = await API.searchNewGames(gameName);
        dispatch(getGamesSuccess(newGames));
      } else {
        dispatch(getGamesSuccess(games));
      }
    } catch(err) {
      console.log(err);
      dispatch(getGamesFailure());
    }
  };
};

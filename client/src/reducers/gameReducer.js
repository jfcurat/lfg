import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function gameReducer(state = initialState.games, action) {
  switch (action.type) {
    case actionTypes.GET_GAMES_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: false,
      };
    }
    case actionTypes.GET_GAMES_FAILURE: {
      return {
        ...state,
        error: true,
      };
    }
    case actionTypes.SET_GAME_SUCCESS: {
      return {
        ...state,
        currentGame: action.data,
        error: false,
      }
    }
    case actionTypes.SET_GAME_FAILURE: {
      return {
        ...state,
        error: true,
      }
    }
    default: {
      return state;
    }
  }
};

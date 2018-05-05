import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_GAMES_SUCCESS: {
      return {
        ...state,
        games: {
          data: action.data,
          error: false,
        }
      };
    };
    case actionTypes.GET_GAMES_FAILURE: {
      return {
        ...state,
        games: {
          error: true,
        }
      };
    };
    case actionTypes.SET_GAME_SUCCESS: {
      console.log(action.data);
      return {
        ...state,
        game: action.data,
        error: false,
      }
    }
    case actionTypes.SET_GAME_FAILURE: {
      return {
        ...state,
        error: true,
      }
    };
    default: {
      return state;
    };
  };
};

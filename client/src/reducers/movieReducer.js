import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case actionTypes.GET_MOVIES_SUCCESS: {
      return action.data;
    }
    default: {
      return state;
    }
  }
}

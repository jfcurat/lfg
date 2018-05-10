import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.data,
        error: false,
      }
    }
    case actionTypes.GET_USER_FAILURE: {
      return {
        ...state,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

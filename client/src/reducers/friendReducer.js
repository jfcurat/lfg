import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function friendReducer(state = initialState.friends, action) {
  switch (action.type) {
    case actionTypes.GET_FRIENDS: {
      return action.data;
    }
    case actionTypes.REMOVE_FRIEND: {
      console.log(action.data.id);
      return state.filter(friend => friend.id !== action.data.id);
    }
    default: {
      return state;
    }
  }
}

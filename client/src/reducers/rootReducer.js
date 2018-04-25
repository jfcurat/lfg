import { combineReducers } from 'redux';
import friends from './friendReducer';
import movies from './movieReducer';

const rootReducer = combineReducers({
  friends,
  movies,
});

export default rootReducer;

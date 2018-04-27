import { combineReducers } from 'redux';
import games from './gameReducer';

const rootReducer = combineReducers({
  games,
});

export default rootReducer;

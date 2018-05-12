import { combineReducers } from "redux";
import games from "./gameReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  games,
  user
});

export default rootReducer;

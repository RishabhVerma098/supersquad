import { combineReducers } from "redux";
import characters from "./charactor_reducers";
import heros from "./heros_reducers";

const rootReducers = combineReducers({
  characters,
  heros
});

export default rootReducers;

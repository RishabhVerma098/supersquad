import charactor_json from "../data/characters";
import { ADD_CHARACTER } from "../actions";
import { combineReducers } from "redux";

const characters = (state = charactor_json, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.payload);
      return characters;
    default:
      return state;
  }
};

const heros = (state = [], action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      let hero = [...state, heros_helper(action.payload)];
      return hero;
    default:
      return state;
  }
};

const heros_helper = id => {
  let characters = charactor_json.find(c => c.id === id);
  return characters;
};

const rootReducers = combineReducers({
  characters,
  heros
});

export default rootReducers;

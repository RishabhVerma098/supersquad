import charactor_json from "../data/characters";
import { ADD_CHARACTER } from "../actions";

function characters(state = charactor_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.payload);
      return characters;
    default:
      return state;
  }
}

export default characters;

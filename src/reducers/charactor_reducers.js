import charactor_json from "../data/characters";
import { ADD_CHARACTER } from "../actions";
import { DELETE_CHARACTER } from "../actions";
const characters = (state = charactor_json, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.payload);
      return characters;
    case DELETE_CHARACTER:
      let hero = [...state, character_helper(action.payload)];
      return hero;
    default:
      return state;
  }
};

const character_helper = id => {
  let characters = charactor_json.find(c => c.id === id);
  return characters;
};

export default characters;

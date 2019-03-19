import charactor_json from "../data/characters";
import { ADD_CHARACTER } from "../actions";
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
export default heros;

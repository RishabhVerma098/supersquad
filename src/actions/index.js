export const ADD_CHARACTER = "ADD_CHARACTER";

export const addCharaterById = id => {
  const action = {
    type: ADD_CHARACTER,
    payload: id
  };
  return action;
};

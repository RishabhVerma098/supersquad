export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";

export const addCharaterById = id => {
  const action = {
    type: ADD_CHARACTER,
    payload: id
  };
  return action;
};

export const deleteCharaterById = id => {
  const action = {
    type: DELETE_CHARACTER,
    payload: id
  };
  return action;
};

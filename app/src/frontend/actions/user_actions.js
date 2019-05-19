export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

export const addUser = user => ({
  type: ADD_USER,
  user
});

export const deleteUser = user => ({
  type: DELETE_USER,
  user
});
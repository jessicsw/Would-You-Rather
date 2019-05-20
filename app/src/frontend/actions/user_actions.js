import * as GameAPI from '../../_DATA';

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const RECEIVE_AUTHED_USER = "RECEIVE_AUTHED_USER";
export const FETCH_USERS = "FETCH_USERS";

export const receiveAuthedUser = user => ({
  type: RECEIVE_AUTHED_USER,
  user
});

export const authedUser = user => dispatch => (
  GameAPI._updateAuthedUser(user).then(user => dispatch(receiveAuthedUser(user)))
);

export const addUser = user => ({
  type: ADD_USER,
  user
});

export const deleteUser = user => ({
  type: DELETE_USER,
  user
});

export const fetchUsers = users => ({
  type: FETCH_USERS,
  users
})
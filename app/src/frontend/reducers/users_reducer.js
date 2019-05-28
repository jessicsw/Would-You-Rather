import {
  ADD_USER,
  DELETE_USER,
  FETCH_USERS
} from '../actions/user_actions';
import merge from 'lodash/merge';

let _defaultState = {};

const usersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case ADD_USER:
      let newUser = { [action.user.id]: action.user }
      return merge({}, state, newUser);
    case DELETE_USER:
      nextState = merge({}, state);
      delete nextState[action.user.id];

      return nextState;
    case FETCH_USERS:
      Object.keys(action.users).forEach(id => {
        nextState[id] = action.users[id]
      });
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;